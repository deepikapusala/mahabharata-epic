import { useEffect, useRef, useState } from "react";

import chap1 from "@/assets/narration/chap1.mp3.asset.json";
import chap2 from "@/assets/narration/chap2.mp3.asset.json";
import chap3 from "@/assets/narration/chap3.mp3.asset.json";
import chap4 from "@/assets/narration/chap4.mp3.asset.json";
import chap5 from "@/assets/narration/chap5.mp3.asset.json";
import chap6 from "@/assets/narration/chap6.mp3.asset.json";
import chap7 from "@/assets/narration/chap7.mp3.asset.json";
import chap8 from "@/assets/narration/chap8.mp3.asset.json";

const NARRATION_URLS: Record<string, string> = {
  ch1: chap1.url,
  ch2: chap2.url,
  ch3: chap3.url,
  ch4: chap4.url,
  ch5: chap5.url,
  ch6: chap6.url,
  ch7: chap7.url,
  ch8: chap8.url,
};

// Global registry so only one narration plays at a time across the app
type NarrationGlobal = {
  __narrationAudio?: HTMLAudioElement | null;
};
const g = (typeof window !== "undefined" ? (window as unknown as NarrationGlobal) : ({} as NarrationGlobal));

type Props = { chapterId: string };

export function ListenButton({ chapterId }: Props) {
  const [state, setState] = useState<"idle" | "playing" | "paused">("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const duckedRef = useRef(false);

  function duck() {
    if (duckedRef.current) return;
    duckedRef.current = true;
    const a = typeof window !== "undefined" ? window.__bgMusic : undefined;
    if (a) {
      const start = a.volume;
      const target = 0.12;
      const steps = 12;
      let i = 0;
      const id = setInterval(() => {
        i++;
        a.volume = Math.max(target, start + (target - start) * (i / steps));
        if (i >= steps) clearInterval(id);
      }, 30);
    }
  }
  function unduck() {
    if (!duckedRef.current) return;
    duckedRef.current = false;
    const a = typeof window !== "undefined" ? window.__bgMusic : undefined;
    const target = window.__bgMusicTargetVolume ?? 0.7;
    if (a) {
      const start = a.volume;
      const steps = 14;
      let i = 0;
      const id = setInterval(() => {
        i++;
        a.volume = Math.min(target, start + (target - start) * (i / steps));
        if (i >= steps) clearInterval(id);
      }, 40);
    }
  }

  function ensureAudio() {
    const url = NARRATION_URLS[chapterId];
    if (!url) return null;
    // Stop any other narration on the page
    if (g.__narrationAudio && g.__narrationAudio !== audioRef.current) {
      try { g.__narrationAudio.pause(); } catch { /* noop */ }
    }
    if (!audioRef.current) {
      const a = new Audio();
      a.preload = "none";
      a.src = url;
      a.onplay = () => { duck(); setState("playing"); };
      a.onpause = () => {
        if (a.ended) return;
        setState((s) => (s === "playing" ? "paused" : s));
      };
      a.onended = () => { unduck(); setState("idle"); };
      a.onerror = () => { unduck(); setState("idle"); };
      audioRef.current = a;
    }
    g.__narrationAudio = audioRef.current;
    return audioRef.current;
  }

  function play() {
    const a = ensureAudio();
    if (!a) return;
    a.currentTime = 0;
    void a.play();
  }
  function pause() {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    setState("paused");
  }
  function resume() {
    const a = audioRef.current;
    if (!a) return;
    void a.play();
  }
  function stop() {
    const a = audioRef.current;
    if (a) {
      a.pause();
      a.currentTime = 0;
    }
    unduck();
    setState("idle");
  }

  useEffect(() => {
    return () => {
      const a = audioRef.current;
      if (a) {
        a.pause();
        a.src = "";
      }
      if (g.__narrationAudio === audioRef.current) g.__narrationAudio = null;
      unduck();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If chapterId changes, reset
  useEffect(() => {
    const a = audioRef.current;
    if (a) {
      a.pause();
      a.src = NARRATION_URLS[chapterId] ?? "";
      a.currentTime = 0;
    }
    setState("idle");
    unduck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterId]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {state === "idle" && (
        <button
          type="button"
          onClick={play}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-amber-300/60 bg-amber-200/10 backdrop-blur-md font-display tracking-[0.35em] text-xs uppercase text-amber-100 hover:bg-amber-200/20 transition shadow-[0_0_30px_rgba(233,181,88,0.2)]"
        >
          <span>🎙</span>
          <span>Listen</span>
        </button>
      )}
      {state === "playing" && (
        <>
          <button
            type="button"
            onClick={pause}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-300/60 bg-amber-200/10 text-amber-100 hover:bg-amber-200/20 transition text-sm font-display tracking-[0.3em] uppercase"
          >
            ❚❚ Pause
          </button>
          <button
            type="button"
            onClick={play}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-200/30 bg-white/5 text-amber-100/90 hover:bg-white/10 transition text-sm font-display tracking-[0.3em] uppercase"
          >
            ↻ Replay
          </button>
          <button
            type="button"
            onClick={stop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-200/30 bg-white/5 text-amber-100/90 hover:bg-white/10 transition text-sm font-display tracking-[0.3em] uppercase"
          >
            ■ Stop
          </button>
        </>
      )}
      {state === "paused" && (
        <>
          <button
            type="button"
            onClick={resume}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-300/60 bg-amber-200/10 text-amber-100 hover:bg-amber-200/20 transition text-sm font-display tracking-[0.3em] uppercase"
          >
            ▶ Resume
          </button>
          <button
            type="button"
            onClick={play}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-200/30 bg-white/5 text-amber-100/90 hover:bg-white/10 transition text-sm font-display tracking-[0.3em] uppercase"
          >
            ↻ Replay
          </button>
          <button
            type="button"
            onClick={stop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-200/30 bg-white/5 text-amber-100/90 hover:bg-white/10 transition text-sm font-display tracking-[0.3em] uppercase"
          >
            ■ Stop
          </button>
        </>
      )}
    </div>
  );
}
