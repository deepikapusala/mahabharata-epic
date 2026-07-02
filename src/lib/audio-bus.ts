import krishnaAsset from "@/assets/Krishna.m4a.asset.json";

declare global {
  interface Window {
    __bgMusic?: HTMLAudioElement;
    __bgMusicTargetVolume?: number;
    __krishnaAudio?: HTMLAudioElement;
    __activeAudio?: HTMLAudioElement | null;
    __audioMuted?: boolean;
    __syncMute?: (muted: boolean) => void;
  }
}

let krishnaAudio: HTMLAudioElement | null = null;
let inEpilogue = false;
let mainPrevVolume = 0.7;
let currentTween: number | null = null;

function getKrishna(): HTMLAudioElement {
  if (!krishnaAudio) {
    krishnaAudio = new Audio(krishnaAsset.url);
    krishnaAudio.loop = true;
    krishnaAudio.volume = 0;
    krishnaAudio.preload = "auto";
    if (typeof window !== "undefined") {
      window.__krishnaAudio = krishnaAudio;
      krishnaAudio.muted = window.__audioMuted ?? false;
    }
  }
  return krishnaAudio;
}

function fade(audio: HTMLAudioElement, to: number, ms: number): Promise<void> {
  return new Promise((resolve) => {
    const from = audio.volume;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / ms);
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      try {
        audio.volume = Math.max(0, Math.min(1, from + (to - from) * eased));
      } catch {}
      if (p < 1) currentTween = requestAnimationFrame(tick);
      else resolve();
    };
    currentTween = requestAnimationFrame(tick);
  });
}

export async function enterEpilogue() {
  if (typeof window === "undefined" || inEpilogue) return;
  inEpilogue = true;
  const bg = window.__bgMusic;
  const target = window.__bgMusicTargetVolume ?? 0.7;
  mainPrevVolume = bg?.volume ?? target;

  const k = getKrishna();
  k.muted = window.__audioMuted ?? bg?.muted ?? false;
  window.__activeAudio = k;

  if (bg && !bg.paused) {
    await fade(bg, 0, 1600);
    bg.pause();
  }
  try {
    k.currentTime = k.currentTime || 0;
    await k.play();
  } catch {}
  await fade(k, mainPrevVolume, 1200);
}

export async function exitEpilogue() {
  if (typeof window === "undefined" || !inEpilogue) return;
  inEpilogue = false;
  const bg = window.__bgMusic;
  const k = window.__krishnaAudio;

  if (k) {
    await fade(k, 0, 1600);
    k.pause();
  }
  window.__activeAudio = bg ?? null;

  if (bg) {
    bg.muted = window.__audioMuted ?? bg.muted;
    bg.volume = 0;
    try {
      await bg.play();
    } catch {}
    await fade(bg, mainPrevVolume, 1200);
  }
}
