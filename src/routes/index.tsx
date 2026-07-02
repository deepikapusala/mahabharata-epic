import { createFileRoute, Link } from "@tanstack/react-router";
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
import KrishnaEpilogue from "@/components/KrishnaEpilogue";
import WisdomTech from "@/components/WisdomTech";
import ThankYou from "@/components/ThankYou";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahabharata — The Greatest Story Ever Told" },
      { name: "description", content: "An immersive cinematic journey through the eight chapters of the Mahabharata." },
      { property: "og:title", content: "Mahabharata — The Greatest Story Ever Told" },
      { property: "og:description", content: "An immersive cinematic journey through the eight chapters of the Mahabharata." },
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

type Chapter = {
  num: string;
  title: string;
  subtitle: string;
  image: string;
  effect: "fabric" | "dust" | "divine" | "forest" | "rays" | "cosmos" | "war" | "petals";
  align?: "left" | "right" | "center";
  tone?: string;
};

const CHAPTERS: Chapter[] = [
  { num: "I", title: "Mahabharata", subtitle: "The greatest story ever told.", image: ch1.url, effect: "fabric", align: "center", tone: "from-amber-900/30" },
  { num: "II", title: "The Dice Game", subtitle: "One throw. A dynasty wagered.", image: ch2.url, effect: "dust", align: "left", tone: "from-red-950/50" },
  { num: "III", title: "Krishna's Vow", subtitle: "When faith is tested, the divine answers.", image: ch3.url, effect: "divine", align: "right", tone: "from-amber-800/40" },
  { num: "IV", title: "The Exile", subtitle: "Thirteen years in the forest.", image: ch4.url, effect: "forest", align: "left", tone: "from-emerald-950/40" },
  { num: "V", title: "The Counsel", subtitle: "When the divine takes the reins.", image: ch5.url, effect: "rays", align: "left", tone: "from-amber-900/40" },
  { num: "VI", title: "Vishwarupa", subtitle: "The universe revealed in one form.", image: ch6.url, effect: "cosmos", align: "center", tone: "from-indigo-950/50" },
  { num: "VII", title: "THE WAR", subtitle: "Kurukshetra: The battle that changed an age.", image: ch7.url, effect: "war", align: "right", tone: "from-slate-950/60" },
  { num: "VIII", title: "The CROWNING", subtitle: "Dharma restored. Peace returns.", image: ch8.url, effect: "petals", align: "center", tone: "from-amber-800/30" },
];

function MahabharataPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".chapter");
      sections.forEach((sec) => {
        const bg = sec.querySelector<HTMLElement>(".ch-bg");
        const mid = sec.querySelector<HTMLElement>(".ch-mid");
        const fg = sec.querySelectorAll<HTMLElement>(".ch-fg");

        if (bg) {
          gsap.fromTo(
            bg,
            { yPercent: -8, scale: 1.15 },
            {
              yPercent: 8,
              scale: 1.05,
              ease: "none",
              scrollTrigger: { trigger: sec, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        }
        if (mid) {
          gsap.fromTo(
            mid,
            { yPercent: 30, opacity: 0 },
            {
              yPercent: -10,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: { trigger: sec, start: "top 80%", end: "center center", scrub: 1 },
            }
          );
        }
        fg.forEach((el, i) => {
          gsap.fromTo(
            el,
            { yPercent: 40 + i * 10 },
            {
              yPercent: -40 - i * 10,
              ease: "none",
              scrollTrigger: { trigger: sec, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        });
      });

      // Progress bar
      gsap.to(".progress-bar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom bottom", scrub: true },
      });

      // Ending fade
      gsap.fromTo(
        ".ending-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: ".ending", start: "top 70%" },
        }
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
        <div className="font-display text-[10px] tracking-[0.5em] text-amber-200/70 uppercase">
          Mahābhārata · An Epic in Eight Chapters
        </div>
      </div>

      <main className="snap-y snap-mandatory">
        {CHAPTERS.map((c, i) => (
          <ChapterSection key={i} chapter={c} index={i} />
        ))}
        <Ending />
        <KrishnaEpilogue />
        <WisdomTech />
        <ThankYou />
      </main>
    </div>
  );
}

function ChapterSection({ chapter, index }: { chapter: Chapter; index: number }) {
  const align = chapter.align ?? "center";
  const alignCls =
    align === "left" ? "items-start text-left" : align === "right" ? "items-end text-right" : "items-center text-center";
  const padCls = align === "left" ? "pl-6 md:pl-20" : align === "right" ? "pr-6 md:pr-20" : "px-6";

  return (
    <section
      className="chapter relative h-screen w-screen snap-start overflow-hidden"
      aria-label={`Chapter ${index + 1}: ${chapter.title}`}
    >
      {/* Background image */}
      <div className="absolute inset-0 ch-bg will-change-transform">
        <img
          src={chapter.image}
          alt={chapter.title}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Tone overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${chapter.tone ?? ""} via-transparent to-black/70`} />
      <div className="absolute inset-0 chapter-vignette" />

      {/* Effect layer */}
      <EffectLayer kind={chapter.effect} />

      {/* Mid: text */}
      <div className={`relative z-20 flex h-full w-full flex-col justify-end pb-20 md:pb-28 ${alignCls} ${padCls}`}>
        <div className="ch-mid max-w-3xl">
          <div className="font-display text-[11px] md:text-xs tracking-[0.6em] text-amber-200/80 uppercase mb-4 md:mb-6">
            Chapter {chapter.num}
          </div>
          <h2 className={`font-display ${index === 0 ? "text-white-cinematic" : index === 4 ? "text-divine-indigo-gradient" : index === 5 ? "text-black-cinematic" : "text-gold-gradient"} text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] uppercase`}>
            {chapter.title}
          </h2>
          <div className={`mt-6 md:mt-8 flex ${align === "right" ? "justify-end" : align === "center" ? "justify-center" : "justify-start"}`}>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
          </div>
          <p className="mt-5 md:mt-6 font-display italic text-lg md:text-2xl text-amber-50/90 max-w-xl">
            {chapter.subtitle}
          </p>
          <div className={`mt-8 md:mt-10 flex ${align === "right" ? "justify-end" : align === "center" ? "justify-center" : "justify-start"}`}>
            <Link
              to="/explore/$chapterId"
              params={{ chapterId: `ch${index + 1}` }}
              className="group relative inline-flex items-center gap-3 px-8 py-3 md:px-10 md:py-4 border border-amber-300/60 bg-amber-200/5 backdrop-blur-md font-display tracking-[0.4em] text-xs md:text-sm uppercase text-amber-100 hover:bg-amber-200/15 hover:border-amber-200 transition-all duration-500 overflow-hidden"
              aria-label={`Explore ${chapter.title}`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative">Explore</span>
              <span className="relative text-amber-300">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Chapter number marker */}
      <div className="absolute top-8 right-8 md:top-12 md:right-12 z-30 font-display text-amber-200/40 text-sm tracking-[0.4em]">
        {String(index + 1).padStart(2, "0")} / 08
      </div>
    </section>
  );
}

function EffectLayer({ kind }: { kind: Chapter["effect"] }) {
  // Pre-generated deterministic particle positions
  const particles = Array.from({ length: 40 }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 53) % 100,
    delay: (i % 10) * 0.4,
    duration: 8 + (i % 6) * 2,
    size: 1 + (i % 4),
  }));

  if (kind === "cosmos") {
    return (
      <>
        <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.25),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.2),transparent_50%)]" />
        </div>
        <div className="ch-fg absolute inset-0 z-10 pointer-events-none">
          {particles.map((p, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                boxShadow: "0 0 6px rgba(200,180,255,0.9)",
              }}
            />
          ))}
        </div>
        <CosmosStyle />
      </>
    );
  }

  if (kind === "war") {
    return (
      <>
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,240,200,0.15),transparent_60%)] animate-lightning" />
        </div>
        <div className="ch-fg absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-amber-200/80 to-transparent animate-arrow"
              style={{
                width: `${20 + (i * 11) % 40}%`,
                top: `${(i * 17) % 90}%`,
                left: `-30%`,
                animationDelay: `${(i % 7) * 0.6}s`,
                animationDuration: `${3 + (i % 4)}s`,
              }}
            />
          ))}
        </div>
        <WarStyle />
      </>
    );
  }

  // Generic particle effect tuned by kind
  const colorMap: Record<string, string> = {
    fabric: "rgba(255,210,140,0.9)",
    dust: "rgba(255,200,150,0.7)",
    divine: "rgba(255,235,180,1)",
    forest: "rgba(220,240,200,0.7)",
    rays: "rgba(255,225,160,0.9)",
    petals: "rgba(255,180,200,0.9)",
  };
  const color = colorMap[kind] ?? "rgba(255,220,160,0.8)";

  return (
    <>
      {(kind === "divine" || kind === "rays") && (
        <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen">
          <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_70%_40%,transparent_0deg,rgba(255,220,140,0.18)_30deg,transparent_60deg,rgba(255,220,140,0.15)_90deg,transparent_120deg)] animate-slow-spin" />
        </div>
      )}
      {kind === "fabric" && (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="absolute -inset-20 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,200,120,0.18),transparent_60%)] animate-drift" />
        </div>
      )}
      <div className="ch-fg absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size + 1,
              height: p.size + 1,
              background: color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration + 4}s`,
              filter: "blur(0.5px)",
              opacity: 0.7,
            }}
          />
        ))}
      </div>
      <GenericStyle />
    </>
  );
}

function Ending() {
  return (
    <section className="ending relative h-screen w-screen snap-start overflow-hidden bg-[#0a0705]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,181,88,0.18),transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-amber-200/60 animate-float"
            style={{
              left: `${(i * 41) % 100}%`,
              top: `${(i * 29) % 100}%`,
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              animationDelay: `${(i % 8) * 0.5}s`,
              animationDuration: `${10 + (i % 6)}s`,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>
      <div className="ending-content relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        
        <h2 className="font-display text-gold-gradient text-5xl md:text-7xl lg:text-8xl leading-tight">
          Yato Dharma<br />Tato Jaya
        </h2>
        <div className="mt-10 h-px w-32 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
        <p className="mt-8 font-display italic text-lg md:text-2xl text-amber-50/80 max-w-xl">
          Where there is Dharma, there is Victory.
        </p>
        <Link
          to="/avatar"
          className="mt-10 inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-amber-300/70 bg-amber-200/10 backdrop-blur-md font-display tracking-[0.4em] text-[11px] uppercase text-amber-100 hover:bg-amber-200/20 transition shadow-[0_0_40px_rgba(233,181,88,0.3)]"
        >
          ✦ Discover Your Avatar
        </Link>
      </div>
    </section>
  );
}

function GenericStyle() {
  return (
    <style>{`
      @keyframes float {
        0%, 100% { transform: translate3d(0,0,0); opacity: 0.4; }
        50% { transform: translate3d(20px,-40px,0); opacity: 0.9; }
      }
      .animate-float { animation: float linear infinite; }
      @keyframes slow-spin { to { transform: rotate(360deg); } }
      .animate-slow-spin { animation: slow-spin 60s linear infinite; }
      @keyframes drift { 0%,100% { transform: translateX(0); } 50% { transform: translateX(60px); } }
      .animate-drift { animation: drift 18s ease-in-out infinite; }
    `}</style>
  );
}
function CosmosStyle() {
  return (
    <style>{`
      @keyframes twinkle { 0%,100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 1; transform: scale(1.6); } }
      .animate-twinkle { animation: twinkle ease-in-out infinite; }
    `}</style>
  );
}
function WarStyle() {
  return (
    <style>{`
      @keyframes arrow {
        0% { transform: translateX(0) rotate(-3deg); opacity: 0; }
        20% { opacity: 1; }
        100% { transform: translateX(180vw) rotate(-3deg); opacity: 0; }
      }
      .animate-arrow { animation: arrow linear infinite; }
      @keyframes lightning {
        0%, 92%, 100% { opacity: 0.2; }
        93%, 95% { opacity: 1; }
        94% { opacity: 0.3; }
      }
      .animate-lightning { animation: lightning 7s infinite; }
    `}</style>
  );
}
