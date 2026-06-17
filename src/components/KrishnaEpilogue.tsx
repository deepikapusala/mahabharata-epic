import { useEffect, useRef, useState } from "react";
import puppeteer from "@/assets/krishna/KrishnaThePuppeteer.png.asset.json";
import birth from "@/assets/krishna/KrishnaBirth.jpg.asset.json";
import lilEyes from "@/assets/krishna/Krishna_s_eyes.mp4.asset.json";
import kali from "@/assets/krishna/kalimardana.png.asset.json";
import love from "@/assets/krishna/KrishnaLove.jpg.asset.json";
import dwaraka from "@/assets/krishna/krishnaleavingmathuratodwaraka.png.asset.json";
import draupadi from "@/assets/krishna/draupadivastra.png.asset.json";
import trueForm from "@/assets/krishna/KrishnaTrueForm.mp4.asset.json";
import vishnu from "@/assets/krishna/LordVishnu.jpg.asset.json";
import endDwaraka from "@/assets/krishna/EndofDwaraka.mp4.asset.json";

type Slide = {
  type: "image" | "video" | "final";
  src?: string;
  title: string;
  subtitle: string;
};

const SLIDES: Slide[] = [
  {
    type: "image", src: birth.url,
    title: "The Night Destiny Arrived",
    subtitle: "In the prison of Mathura, beneath storm-filled skies, Devaki gave birth to a child unlike any other.\nChains broke. Doors opened. Guards fell asleep. The Yamuna parted.\nDestiny had arrived. Krishna was born.",
  },
  {
    type: "video", src: lilEyes.url,
    title: "The Child of Gokul",
    subtitle: "To the world, he was God. To Yashoda, he was simply her son.\nHe stole butter. Played pranks. Filled every home with laughter.\nYet hidden behind those innocent eyes was the Supreme Being Himself.",
  },
  {
    type: "image", src: kali.url,
    title: "The Conqueror of Fear",
    subtitle: "The poisonous serpent Kaliya ruled the waters with terror. Villagers feared even approaching the river.\nBut Krishna entered without hesitation. Upon the serpent's hood, he danced.\nNot to destroy. But to restore harmony.",
  },
  {
    type: "image", src: love.url,
    title: "Love Beyond Time",
    subtitle: "Some relationships are written in history. Others are written in eternity.\nRadha and Krishna were never bound by worldly definitions.\nTheir bond became the symbol of devotion itself. A love beyond possession. A love beyond time.",
  },
  {
    type: "image", src: dwaraka.url,
    title: "The King Who Walked Away",
    subtitle: "True strength is not holding power. It is knowing when to leave it.\nKrishna left Mathura to protect his people.\nHe built Dwarka — a city of prosperity, wisdom, and peace.",
  },
  {
    type: "image", src: draupadi.url,
    title: "Protector of Dharma",
    subtitle: "In the darkest moment of her life, Draupadi stood alone before an entire court.\nKings watched. Warriors remained silent. But Krishna did not.\nWhere faith remained, Krishna appeared. Protecting dignity. Protecting Dharma.",
  },
  {
    type: "video", src: trueForm.url,
    title: "Vishwarupa",
    subtitle: "Arjuna asked. Krishna answered. The universe unfolded.\nCountless forms. Countless worlds. Countless destinies.\nFor a brief moment, Arjuna saw reality itself. This was the Vishwarupa — the true form of the Divine.",
  },
  {
    type: "image", src: vishnu.url,
    title: "Before Krishna",
    subtitle: "When Dharma declines and darkness rises, the universe seeks balance.\nAcross the ages, one force returns again and again to protect righteousness.\nThat force is Narayana — the preserver of creation, the eternal Lord Vishnu.\nIn Dwapara Yuga, he descended once more. This time… as Krishna.",
  },
  {
    type: "video", src: endDwaraka.url,
    title: "The Departure",
    subtitle: "Every avatar has a purpose. Every purpose has an end.\nWhen Krishna's work was complete, he prepared to leave the mortal world.\nThe age had changed. But his teachings remained.\nHis body departed. His presence never did.",
  },
  {
    type: "image", src: undefined,
    title: "He Never Left",
    subtitle: "Krishna never truly left.\nAcross centuries, across generations, devotion continued.\nIn temples. In songs. In stories. In hearts.\nToday, millions worship him as Jagannath — The Lord of the Universe.",
  },
  {
    type: "final",
    title: "",
    subtitle: "The Mahabharata may end.\nBut Krishna never does.\nHe lives wherever Dharma is protected.\nWherever kindness is chosen.\nWherever courage defeats fear.\nWherever love triumphs over ego.\nAnd perhaps… somewhere within you.",
  },
];

function TypingText({ text, className }: { text: string; className?: string }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    setShown("");
    let i = 0;
    const id = window.setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, 24);
    return () => window.clearInterval(id);
  }, [text]);
  return (
    <p className={className} style={{ whiteSpace: "pre-line" }}>
      {shown}
      <span className="inline-block w-[2px] h-[1em] align-[-0.15em] ml-1 bg-cyan-200/80 animate-pulse" />
    </p>
  );
}

function Particles({ count = 40 }: { count?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cyan-200/70"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            width: 2 + (i % 4),
            height: 2 + (i % 4),
            filter: "blur(0.6px)",
            boxShadow: "0 0 12px rgba(125,211,252,0.7)",
            animation: `kfloat ${10 + (i % 7)}s ease-in-out ${(i % 9) * 0.4}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function KrishnaEpilogue() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const touchStart = useRef<number | null>(null);

  const slide = SLIDES[idx];
  const last = SLIDES.length - 1;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIdx((i) => Math.min(last, i + 1));
      if (e.key === "ArrowLeft") setIdx((i) => Math.max(0, i - 1));
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, last]);

  const triggerRipple = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((r) => r.filter((x) => x.id !== id)), 1600);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden snap-start bg-[#02060f]">
      <EpilogueStyle />
      <img
        src={puppeteer.url}
        alt="Krishna — The Divine Puppeteer"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      {/* very subtle deep-blue vignette only at edges, image stays sharp */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(2,10,30,0.55) 100%)" }}
      />
      <div className="relative z-10 flex h-full w-full items-end md:items-center justify-center pb-16 md:pb-0">
        <button
          onClick={() => { setIdx(0); setOpen(true); }}
          className="liquid-btn group relative px-8 py-5 md:px-12 md:py-6 rounded-full font-display tracking-[0.35em] uppercase text-cyan-50 text-sm md:text-base"
        >
          <span className="relative z-10">The One Behind Everything</span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[100] liquid-modal flex flex-col">
          <Particles count={50} />
          {/* Header */}
          <div className="relative z-20 flex items-center justify-between px-5 md:px-10 py-5">
            <div className="font-display tracking-[0.4em] text-[10px] md:text-xs text-cyan-100/70 uppercase">
              {String(idx + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-cyan-100/80 hover:text-white text-2xl leading-none w-10 h-10 rounded-full liquid-chip"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          {/* Media + caption */}
          <div
            className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-10 pb-6 gap-6 overflow-hidden"
            onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStart.current == null) return;
              const dx = e.changedTouches[0].clientX - touchStart.current;
              if (dx < -40) setIdx((i) => Math.min(last, i + 1));
              if (dx > 40) setIdx((i) => Math.max(0, i - 1));
              touchStart.current = null;
            }}
          >
            <div key={idx} className="slide-fade w-full max-w-5xl flex flex-col items-center gap-5">
              {slide.type === "final" ? (
                <div className="relative w-full aspect-video max-h-[55vh] rounded-3xl liquid-panel flex items-center justify-center overflow-hidden">
                  <Particles count={30} />
                  <div className="font-display text-cyan-100/90 text-3xl md:text-5xl tracking-[0.3em] relative z-10">
                    ॥ कृष्ण ॥
                  </div>
                </div>
              ) : slide.type === "video" ? (
                <video
                  key={slide.src}
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full max-h-[55vh] rounded-3xl object-contain bg-black/30 liquid-frame"
                />
              ) : slide.src ? (
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full max-h-[55vh] rounded-3xl object-contain bg-black/30 liquid-frame"
                />
              ) : (
                <div className="w-full aspect-video max-h-[55vh] rounded-3xl liquid-panel flex items-center justify-center text-cyan-100/60 font-display tracking-[0.4em] text-xs uppercase">
                  Jagannath · Image coming soon
                </div>
              )}

              {slide.title && (
                <h3 className="font-display text-2xl md:text-4xl text-cyan-50 tracking-wide text-center drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">
                  {slide.title}
                </h3>
              )}

              <div className="liquid-caption w-full max-w-3xl px-5 md:px-8 py-4 md:py-5 rounded-2xl">
                <TypingText
                  text={slide.subtitle}
                  className="text-cyan-50/90 text-sm md:text-base leading-relaxed text-center font-light"
                />
              </div>

              {idx === last && (
                <button
                  onClick={triggerRipple}
                  className="liquid-btn relative mt-2 px-8 py-4 rounded-full font-display tracking-[0.3em] text-cyan-50 text-sm md:text-base overflow-hidden"
                >
                  <span className="relative z-10">🦚 RadhaKrishna 🦚</span>
                  {ripples.map((r) => (
                    <span
                      key={r.id}
                      className="ripple"
                      style={{ left: r.x, top: r.y }}
                    />
                  ))}
                </button>
              )}
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
            disabled={idx === 0}
            className="liquid-chip absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full text-cyan-50 text-2xl disabled:opacity-30"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => setIdx((i) => Math.min(last, i + 1))}
            disabled={idx === last}
            className="liquid-chip absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full text-cyan-50 text-2xl disabled:opacity-30"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

function EpilogueStyle() {
  return (
    <style>{`
      @keyframes kfloat {
        0%, 100% { transform: translate3d(0,0,0); opacity: 0.4; }
        50% { transform: translate3d(20px,-50px,0); opacity: 1; }
      }
      @keyframes kbreathe {
        0%, 100% { transform: scale(1); box-shadow: 0 0 60px rgba(34,211,238,0.45), inset 0 0 40px rgba(125,211,252,0.25); }
        50% { transform: scale(1.04); box-shadow: 0 0 100px rgba(34,211,238,0.75), inset 0 0 60px rgba(125,211,252,0.4); }
      }
      .liquid-btn {
        background: radial-gradient(ellipse at 30% 20%, rgba(125,211,252,0.55), rgba(14,116,144,0.35) 45%, rgba(8,47,73,0.55) 100%);
        border: 1px solid rgba(186,230,253,0.55);
        backdrop-filter: blur(18px) saturate(160%);
        animation: kbreathe 4.5s ease-in-out infinite;
      }
      .liquid-btn:hover { filter: brightness(1.15); }
      .liquid-modal {
        background:
          radial-gradient(ellipse at 20% 10%, rgba(14,116,144,0.55), transparent 55%),
          radial-gradient(ellipse at 80% 90%, rgba(30,64,175,0.55), transparent 60%),
          linear-gradient(180deg, #02060f 0%, #051434 50%, #02060f 100%);
        backdrop-filter: blur(28px) saturate(160%);
      }
      .liquid-panel {
        background: linear-gradient(135deg, rgba(125,211,252,0.18), rgba(8,47,73,0.4));
        border: 1px solid rgba(186,230,253,0.35);
        box-shadow: 0 0 80px rgba(56,189,248,0.25), inset 0 0 60px rgba(125,211,252,0.15);
        backdrop-filter: blur(18px);
      }
      .liquid-frame {
        border: 1px solid rgba(186,230,253,0.35);
        box-shadow: 0 0 60px rgba(56,189,248,0.3);
      }
      .liquid-caption {
        background: linear-gradient(135deg, rgba(8,47,73,0.55), rgba(14,116,144,0.25));
        border: 1px solid rgba(186,230,253,0.3);
        box-shadow: inset 0 0 40px rgba(125,211,252,0.1);
        backdrop-filter: blur(14px) saturate(150%);
      }
      .liquid-chip {
        background: rgba(8,47,73,0.5);
        border: 1px solid rgba(186,230,253,0.35);
        backdrop-filter: blur(12px);
        display: inline-flex; align-items: center; justify-content: center;
        transition: background .25s ease;
      }
      .liquid-chip:hover:not(:disabled) { background: rgba(14,116,144,0.6); }
      @keyframes slide-fade {
        from { opacity: 0; transform: translateY(14px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .slide-fade { animation: slide-fade .7s ease-out both; }
      @keyframes ripple-out {
        from { width: 0; height: 0; opacity: 0.7; }
        to { width: 700px; height: 700px; opacity: 0; }
      }
      .ripple {
        position: absolute;
        border-radius: 9999px;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(186,230,253,0.7), rgba(56,189,248,0.2) 60%, transparent 70%);
        animation: ripple-out 1.6s ease-out forwards;
        pointer-events: none;
      }
    `}</style>
  );
}
