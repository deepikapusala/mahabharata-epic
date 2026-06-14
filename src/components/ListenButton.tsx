import { useEffect, useRef, useState } from "react";

type Props = { text: string };

export function ListenButton({ text }: Props) {
  const [state, setState] = useState<"idle" | "playing" | "paused">("idle");
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);
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

  function pickVoice() {
    const voices = window.speechSynthesis.getVoices();
    const prefer = [
      "Google UK English Male",
      "Microsoft Guy Online (Natural)",
      "Microsoft Ryan Online (Natural)",
      "Daniel",
      "Google UK English Female",
      "Samantha",
    ];
    for (const name of prefer) {
      const v = voices.find((v) => v.name === name);
      if (v) return v;
    }
    return voices.find((v) => v.lang?.startsWith("en")) || voices[0];
  }

  function play() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.88;
    u.pitch = 0.95;
    u.volume = 1;
    const v = pickVoice();
    if (v) u.voice = v;
    u.onstart = () => { duck(); setState("playing"); };
    u.onend = () => { unduck(); setState("idle"); };
    u.onerror = () => { unduck(); setState("idle"); };
    utterRef.current = u;
    window.speechSynthesis.speak(u);
  }

  function pause() {
    window.speechSynthesis.pause();
    setState("paused");
  }
  function resume() {
    window.speechSynthesis.resume();
    setState("playing");
  }
  function stop() {
    window.speechSynthesis.cancel();
    unduck();
    setState("idle");
  }

  useEffect(() => {
    // preload voices
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
      const onVoices = () => window.speechSynthesis.getVoices();
      window.speechSynthesis.addEventListener?.("voiceschanged", onVoices);
      return () => {
        window.speechSynthesis.removeEventListener?.("voiceschanged", onVoices);
        window.speechSynthesis.cancel();
        unduck();
      };
    }
  }, []);

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
