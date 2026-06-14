import { useEffect, useRef, useState } from "react";
import songAsset from "@/assets/song.mp3.asset.json";

// Global ref so narration code can duck this audio
declare global {
  interface Window {
    __bgMusic?: HTMLAudioElement;
    __bgMusicTargetVolume?: number;
  }
}

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const a = new Audio(songAsset.url);
    a.loop = true;
    a.volume = 0.7;
    a.preload = "auto";
    audioRef.current = a;
    if (typeof window !== "undefined") {
      window.__bgMusic = a;
      window.__bgMusicTargetVolume = 0.7;
    }
    const tryPlay = () => {
      a.play().then(() => setReady(true)).catch(() => {
        // autoplay blocked — wait for first user gesture
        const unlock = () => {
          a.play().then(() => setReady(true)).catch(() => {});
          window.removeEventListener("pointerdown", unlock);
          window.removeEventListener("keydown", unlock);
        };
        window.addEventListener("pointerdown", unlock, { once: true });
        window.addEventListener("keydown", unlock, { once: true });
      });
    };
    tryPlay();
    return () => {
      a.pause();
      if (typeof window !== "undefined" && window.__bgMusic === a) {
        window.__bgMusic = undefined;
      }
    };
  }, []);

  function toggle() {
    const a = audioRef.current;
    if (!a) return;
    if (muted) {
      a.muted = false;
      a.play().catch(() => {});
      setMuted(false);
    } else {
      a.muted = true;
      setMuted(true);
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={muted ? "Unmute music" : "Mute music"}
      title={muted ? "Unmute" : "Mute"}
      className="fixed top-4 right-4 z-[100] h-11 w-11 md:h-12 md:w-12 rounded-full flex items-center justify-center border border-amber-200/40 bg-black/40 backdrop-blur-xl text-amber-100 shadow-[0_0_24px_rgba(233,181,88,0.25)] hover:bg-amber-200/15 hover:border-amber-200/70 transition-all"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {muted ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
      )}
      {ready && !muted && (
        <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-amber-300 shadow-[0_0_8px_#e9b558] animate-pulse" />
      )}
    </button>
  );
}
