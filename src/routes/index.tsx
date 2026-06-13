import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ch1 from "@/assets/mahabharata/ch1.png.asset.json";
import ch2 from "@/assets/mahabharata/ch2.png.asset.json";
import ch3 from "@/assets/mahabharata/ch3.png.asset.json";
import ch4 from "@/assets/mahabharata/ch4.png.asset.json";
import ch5 from "@/assets/mahabharata/ch5.png.asset.json";
import ch6 from "@/assets/mahabharata/ch6.png.asset.json";
import ch7 from "@/assets/mahabharata/ch7.png.asset.json";
import ch8 from "@/assets/mahabharata/ch8.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahabharata — The Greatest Story Ever Told" },
      { name: "description", content: "An immersive cinematic parallax journey through the eight chapters of the Mahabharata." },
      { property: "og:title", content: "Mahabharata — The Greatest Story Ever Told" },
      { property: "og:description", content: "An immersive cinematic parallax journey through the eight chapters of the Mahabharata." },
      { property: "og:image", content: ch1.url },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: MahabharataPage,
});

type EffectKind = "fabric" | "dust" | "divine" | "forest" | "rays" | "cosmos" | "war" | "petals";

type Chapter = {
  num: string;
  title: string;
  subtitle: string;
  image: string;
  effect: EffectKind;
  align?: "left" | "right" | "center";
  /** Crop window for the midground (the "subject" of the scene) */
  midFocus?: { x: string; y: string }; // background-position
};

const CHAPTERS: Chapter[] = [
  { num: "I",    title: "Mahabharata",    subtitle: "The greatest story ever told.",          image: ch1.url, effect: "fabric", align: "center", midFocus: { x: "50%", y: "45%" } },
  { num: "II",   title: "The Dice Game",  subtitle: "One throw. A dynasty wagered.",          image: ch2.url, effect: "dust",   align: "left",   midFocus: { x: "55%", y: "55%" } },
  { num: "III",  title: "Krishna's Vow",  subtitle: "When faith is tested, the divine answers.", image: ch3.url, effect: "divine", align: "right",  midFocus: { x: "50%", y: "50%" } },
  { num: "IV",   title: "The Exile",      subtitle: "Thirteen years in the forest.",          image: ch4.url, effect: "forest", align: "left",   midFocus: { x: "45%", y: "55%" } },
  { num: "V",    title: "The Counsel",    subtitle: "When the divine takes the reins.",       image: ch5.url, effect: "rays",   align: "left",   midFocus: { x: "50%", y: "50%" } },
  { num: "VI",   title: "Vishwarupa",     subtitle: "The universe revealed in one form.",     image: ch6.url, effect: "cosmos", align: "center", midFocus: { x: "50%", y: "45%" } },
  { num: "VII",  title: "Kurukshetra",    subtitle: "The battle that changed an age.",        image: ch7.url, effect: "war",    align: "right",  midFocus: { x: "50%", y: "55%" } },
  { num: "VIII", title: "The Coronation", subtitle: "Dharma restored. Peace returns.",        image: ch8.url, effect: "petals", align: "center", midFocus: { x: "50%", y: "45%" } },
];

function MahabharataPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".chapter");

      sections.forEach((sec) => {
        const bg = sec.querySelector<HTMLElement>(".layer-bg");
        const mid = sec.querySelector<HTMLElement>(".layer-mid");
        const fg = sec.querySelector<HTMLElement>(".layer-fg");
        const fx = sec.querySelector<HTMLElement>(".layer-fx");
        const text = sec.querySelector<HTMLElement>(".layer-text");
        const pin = sec.querySelector<HTMLElement>(".pin-wrap");

        // Pin the section while the user scrolls through it
        ScrollTrigger.create({
          trigger: sec,
          start: "top top",
          end: "+=120%",
          pin: pin,
          pinSpacing: true,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            start: "top top",
            end: "+=120%",
            scrub: 1,
          },
        });

        // Multi-speed parallax — each layer moves further than the last,
        // simulating dolly-in camera movement through a true depth stack.
        if (bg)   tl.fromTo(bg,   { yPercent: -6, scale: 1.12 }, { yPercent: 6,  scale: 1.18, ease: "none" }, 0);
        if (mid)  tl.fromTo(mid,  { yPercent: -14, scale: 1.05 }, { yPercent: 22, scale: 1.12, ease: "none" }, 0);
        if (fg)   tl.fromTo(fg,   { yPercent: -28 }, { yPercent: 55, ease: "none" }, 0);
        if (fx)   tl.fromTo(fx,   { yPercent: -45 }, { yPercent: 100, ease: "none" }, 0);

        // Text rides on its own timeline — appears, holds, then drifts up
        if (text) {
          gsap.fromTo(text,
            { y: 80, opacity: 0 },
            {
              y: -40, opacity: 1, ease: "none",
              scrollTrigger: { trigger: sec, start: "top top", end: "+=80%", scrub: 1 },
            }
          );
        }
      });

      // Progress bar
      gsap.to(".progress-bar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom bottom", scrub: true },
      });

      // Ending fade
      gsap.fromTo(".ending-content",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.6, ease: "power2.out",
          scrollTrigger: { trigger: ".ending", start: "top 70%" } }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative bg-[#0a0705]">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-amber-100/5">
        <div className="progress-bar h-full origin-left scale-x-0 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500" />
      </div>

      {/* Top brand */}
      <div className="fixed top-6 left-1/2 z-40 -translate-x-1/2 text-center pointer-events-none">
        <div className="font-display text-[10px] tracking-[0.5em] text-amber-200/80 uppercase">
          Mahābhārata · An Epic in Eight Chapters
        </div>
      </div>

      <main>
        {CHAPTERS.map((c, i) => (
          <ChapterSection key={i} chapter={c} index={i} />
        ))}
        <Ending />
      </main>

      <SharedStyles />
    </div>
  );
}

function ChapterSection({ chapter, index }: { chapter: Chapter; index: number }) {
  const align = chapter.align ?? "center";
  const alignCls =
    align === "left" ? "items-start text-left" : align === "right" ? "items-end text-right" : "items-center text-center";
  const padCls = align === "left" ? "pl-6 md:pl-24" : align === "right" ? "pr-6 md:pr-24" : "px-6";
  const focus = chapter.midFocus ?? { x: "50%", y: "50%" };

  return (
    <section
      className="chapter relative h-screen w-screen overflow-hidden"
      aria-label={`Chapter ${index + 1}: ${chapter.title}`}
    >
      <div className="pin-wrap relative h-screen w-screen overflow-hidden">
        {/* ───────── LAYER 1: BACKGROUND (slowest, most zoomed, slight desaturate for depth haze) ───────── */}
        <div className="layer-bg absolute -inset-[8%] will-change-transform">
          <img
            src={chapter.image}
            alt=""
            aria-hidden
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover"
            style={{
              filter: "saturate(1.15) contrast(1.05) brightness(0.85)",
              transform: "scale(1.25)",
            }}
          />
        </div>

        {/* ───────── LAYER 2: MIDGROUND (focused crop of subject — moves medium speed) ───────── */}
        <div className="layer-mid absolute -inset-[4%] will-change-transform">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${chapter.image})`,
              backgroundSize: "140%",
              backgroundPosition: `${focus.x} ${focus.y}`,
              backgroundRepeat: "no-repeat",
              filter: "saturate(1.35) contrast(1.12)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at center, #000 35%, rgba(0,0,0,0.85) 55%, transparent 85%)",
              maskImage:
                "radial-gradient(ellipse 70% 60% at center, #000 35%, rgba(0,0,0,0.85) 55%, transparent 85%)",
            }}
          />
        </div>

        {/* ───────── LAYER 3: FOREGROUND (silhouette frame — fastest image layer) ───────── */}
        <div className="layer-fg absolute -inset-[6%] will-change-transform pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${chapter.image})`,
              backgroundSize: "180%",
              backgroundPosition: `${focus.x} 90%`,
              backgroundRepeat: "no-repeat",
              filter: "saturate(1.4) contrast(1.25) brightness(0.55)",
              WebkitMaskImage:
                "linear-gradient(to top, #000 0%, #000 18%, rgba(0,0,0,0.6) 28%, transparent 45%)",
              maskImage:
                "linear-gradient(to top, #000 0%, #000 18%, rgba(0,0,0,0.6) 28%, transparent 45%)",
            }}
          />
          {/* Edge frame to deepen foreground silhouette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 120% 80% at 50% 110%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 35%, transparent 60%)",
            }}
          />
        </div>

        {/* ───────── LAYER 4: EFFECTS (atmosphere — fastest, no image) ───────── */}
        <div className="layer-fx absolute inset-0 will-change-transform pointer-events-none">
          <EffectLayer kind={chapter.effect} />
        </div>

        {/* Subtle directional light to deepen scene (NOT a wash) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, transparent 55%, rgba(0,0,0,0.55) 100%)",
            mixBlendMode: "multiply",
          }}
        />

        {/* ───────── TEXT (its own depth plane) ───────── */}
        <div className={`layer-text relative z-30 flex h-full w-full flex-col justify-end pb-24 md:pb-32 ${alignCls} ${padCls}`}>
          <div className="max-w-3xl">
            <div className="font-display text-[11px] md:text-xs tracking-[0.6em] text-amber-200/90 uppercase mb-4 md:mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Chapter {chapter.num}
            </div>
            <h2
              className="font-display text-gold-gradient text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] uppercase"
              style={{ filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.85))" }}
            >
              {chapter.title}
            </h2>
            <div className={`mt-6 md:mt-8 flex ${align === "right" ? "justify-end" : align === "center" ? "justify-center" : "justify-start"}`}>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-300/90 to-transparent" />
            </div>
            <p className="mt-5 md:mt-6 font-display italic text-lg md:text-2xl text-amber-50 max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {chapter.subtitle}
            </p>
          </div>
        </div>

        {/* Chapter index */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12 z-40 font-display text-amber-200/70 text-sm tracking-[0.4em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {String(index + 1).padStart(2, "0")} / 08
        </div>
      </div>
    </section>
  );
}

function EffectLayer({ kind }: { kind: EffectKind }) {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 53) % 100,
    delay: (i % 10) * 0.4,
    duration: 8 + (i % 6) * 2,
    size: 1 + (i % 4),
  }));

  if (kind === "cosmos") {
    return (
      <>
        <div className="absolute inset-0 mix-blend-screen">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.28),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.22),transparent_55%)]" />
        </div>
        <div className="absolute inset-0">
          {particles.map((p, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                left: `${p.left}%`, top: `${p.top}%`,
                width: p.size, height: p.size,
                animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s`,
                boxShadow: "0 0 6px rgba(220,200,255,0.95)",
              }}
            />
          ))}
        </div>
      </>
    );
  }

  if (kind === "war") {
    return (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,240,200,0.18),transparent_60%)] animate-lightning" />
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-amber-100 to-transparent animate-arrow"
              style={{
                width: `${20 + (i * 11) % 40}%`,
                top: `${(i * 17) % 90}%`,
                left: `-30%`,
                animationDelay: `${(i % 7) * 0.5}s`,
                animationDuration: `${2.5 + (i % 4)}s`,
                boxShadow: "0 0 8px rgba(255,220,150,0.9)",
              }}
            />
          ))}
        </div>
      </>
    );
  }

  const colorMap: Record<EffectKind, string> = {
    fabric: "rgba(255,210,140,0.95)",
    dust: "rgba(255,200,150,0.85)",
    divine: "rgba(255,235,180,1)",
    forest: "rgba(220,240,200,0.85)",
    rays: "rgba(255,225,160,0.95)",
    petals: "rgba(255,180,200,0.95)",
    cosmos: "white",
    war: "rgba(255,220,160,0.9)",
  };
  const color = colorMap[kind];

  return (
    <>
      {(kind === "divine" || kind === "rays") && (
        <div className="absolute inset-0 mix-blend-screen">
          <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_70%_40%,transparent_0deg,rgba(255,220,140,0.22)_30deg,transparent_60deg,rgba(255,220,140,0.18)_90deg,transparent_120deg)] animate-slow-spin" />
        </div>
      )}
      {kind === "fabric" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-20 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,200,120,0.22),transparent_60%)] animate-drift" />
        </div>
      )}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${p.left}%`, top: `${p.top}%`,
              width: p.size + 1, height: p.size + 1,
              background: color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration + 4}s`,
              filter: "blur(0.5px)",
              opacity: 0.85,
              boxShadow: `0 0 6px ${color}`,
            }}
          />
        ))}
      </div>
    </>
  );
}

function Ending() {
  return (
    <section className="ending relative h-screen w-screen overflow-hidden bg-[#0a0705]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,181,88,0.22),transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 36 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-amber-200/70 animate-float"
            style={{
              left: `${(i * 41) % 100}%`,
              top: `${(i * 29) % 100}%`,
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              animationDelay: `${(i % 8) * 0.5}s`,
              animationDuration: `${10 + (i % 6)}s`,
              filter: "blur(0.5px)",
              boxShadow: "0 0 6px rgba(255,210,140,0.8)",
            }}
          />
        ))}
      </div>
      <div className="ending-content relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <div className="font-display text-[10px] md:text-xs tracking-[0.6em] text-amber-200/80 uppercase mb-8">
          ॥ Iti ॥
        </div>
        <h2 className="font-display text-gold-gradient text-5xl md:text-7xl lg:text-8xl leading-tight">
          Yato Dharma<br />Tato Jaya
        </h2>
        <div className="mt-10 h-px w-32 bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
        <p className="mt-8 font-display italic text-lg md:text-2xl text-amber-50/90 max-w-xl">
          Where there is Dharma, there is Victory.
        </p>
      </div>
    </section>
  );
}

function SharedStyles() {
  return (
    <style>{`
      @keyframes float {
        0%, 100% { transform: translate3d(0,0,0); opacity: 0.5; }
        50% { transform: translate3d(20px,-40px,0); opacity: 1; }
      }
      .animate-float { animation: float linear infinite; }
      @keyframes slow-spin { to { transform: rotate(360deg); } }
      .animate-slow-spin { animation: slow-spin 60s linear infinite; }
      @keyframes drift { 0%,100% { transform: translateX(0); } 50% { transform: translateX(60px); } }
      .animate-drift { animation: drift 18s ease-in-out infinite; }
      @keyframes twinkle { 0%,100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 1; transform: scale(1.7); } }
      .animate-twinkle { animation: twinkle ease-in-out infinite; }
      @keyframes arrow {
        0% { transform: translateX(0) rotate(-3deg); opacity: 0; }
        15% { opacity: 1; }
        100% { transform: translateX(180vw) rotate(-3deg); opacity: 0; }
      }
      .animate-arrow { animation: arrow linear infinite; }
      @keyframes lightning {
        0%, 92%, 100% { opacity: 0.25; }
        93%, 95% { opacity: 1; }
        94% { opacity: 0.35; }
      }
      .animate-lightning { animation: lightning 7s infinite; }
    `}</style>
  );
}
