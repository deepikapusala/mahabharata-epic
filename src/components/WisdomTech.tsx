import { useEffect, useState } from "react";
import bg from "@/assets/WisdomTechBg.png.asset.json";

type Card = {
  heading: string;
  icon: string;
  parallels: string[];
  explanation: string;
  think: string;
};

const CARDS: Card[] = [
  {
    heading: "Gandhari's Hundred Sons",
    icon: "👶",
    parallels: ["Embryo Division", "Artificial Incubation", "Stem Cell Biology"],
    explanation:
    "Instead of a normal pregnancy, a single embryo was split into 100 parts. These parts were kept inside 100 separate jars with special nutrients until they grew into 100 healthy babies.",
    think: "Could ancient storytelling have imagined ideas that resemble modern reproductive science?",
  },
  {
    heading: "Kunti's Divine Births",
    icon: "🧬",
    parallels: ["Assisted Reproduction", "Genetic Inheritance", "Donor Conception"],
    explanation:
      "Kunti invoked different deities and each child inherited unique qualities. Today, modern science studies genetics, inheritance and assisted reproductive technologies through entirely different scientific methods.",
    think: "How did an ancient story map out using an outside donor centuries before fertility clinics existed?",
  },
  {
    heading: "Sanjaya's Divine Vision",
    icon: "📡",
    parallels: ["Live Broadcasting", "Satellite Communication", "Remote Observation"],
    explanation:
      "Sanjaya described the Kurukshetra war in real time while remaining far from the battlefield. Modern technology now enables real-time observation using satellites, drones and live broadcasting.",
    think: "Could this legendary narration inspire comparisons with today's communication technologies?",
  },
  {
    heading: "Sudarshana Chakra",
    icon: "⚙️",
    parallels: ["Precision Guidance", "Gyroscopic Stability", "Autonomous Targeting"],
    explanation:
      "Once a target is locked, this celestial disc tracks them across any distance, slicing clean through the target before effortlessly reversing its path to return safely to its sender.",
    think: "It revolves at a staggering, hyper-sonic RPM. If touching a simple household ceiling fan splits a human finger open instantly, how did Krishna physically summon, wield, and catch a blazing weapon of supreme kinetic energy without tearing his hands to pieces?",
  },
  {
    heading: "Brahmastra",
    icon: "☢️",
    parallels: ["Strategic Weapons", "High-Energy Systems", "Extreme Destructive Power"],
    explanation:
      "The Brahmastra is portrayed as an immensely powerful divine weapon whose use demanded responsibility and restraint. Modern readers sometimes compare this idea with advanced weapons because of its scale and consequences.",
    think: "Does true strength lie in possessing power—or in choosing not to use it?",
  },
  {
    heading: "Vimana",
    icon: "✈️",
    parallels: ["Aircraft", "Autonomous Flight", "Aerial Transportation"],
    explanation:
      "The Pushpaka Vimana is described as a flying vehicle capable of transporting passengers. Its depiction naturally invites comparisons with modern aviation and autonomous flight concepts.",
    think: "How did they build a ship that changes its physical size on the inside?",
  },
  {
    heading: "Maya Sabha",
    icon: "🪞",
    parallels: ["Optical Illusions", "Immersive Architecture", "Augmented Reality (AR)","Virtual Reality (VR)"],
    explanation:
      "The Maya Sabha confused visitors with astonishing visual effects and deceptive architecture. Modern technology similarly creates immersive experiences using projection, smart surfaces and augmented reality.",
    think: "Can architecture itself become an illusion?",
  },
  {
    heading: "Krishna's Strategy",
    icon: "♟️",
    parallels: ["Game Theory", "Decision Science", "Strategic Intelligence"],
    explanation:
      "Throughout the Mahabharata, Krishna solved impossible situations through wisdom rather than force. Modern strategy, artificial intelligence and decision science similarly analyze countless possibilities before choosing the best outcome.",
    think: "Is intelligence the greatest weapon of all?",
  },
  {
    heading: "Narayana Astra",
    icon: "🛡️",
    parallels: ["Autonomous Defense Systems", "Target Recognition", "Smart Weapons"],
    explanation:
    "When unleashed, it fires a relentless, escalating barrage of missiles that intensifies the more an army tries to resist or fight back. It only de-escalates and shuts down completely when the targets totally surrender and lay down their arms.",
    think: "How did ancient technology calculate real-time human psychological surrender to automatically trigger a firing override?",
  },
];

function SmokeLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[inherit]">
      <div className="wt-smoke wt-smoke-a" />
      <div className="wt-smoke wt-smoke-b" />
      <div className="wt-smoke wt-smoke-c" />
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-red-400/70"
          style={{
            left: `${(i * 29) % 100}%`,
            bottom: `-${10 + (i % 5) * 4}px`,
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            filter: "blur(1px)",
            boxShadow: "0 0 8px rgba(239,68,68,0.8)",
            animation: `wt-ember ${6 + (i % 5)}s linear ${(i % 7) * 0.5}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function CardTile({ card, onClick }: { card: Card; onClick: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`wt-card group relative shrink-0 w-[260px] md:w-[300px] h-[190px] md:h-[210px] mx-4 md:mx-5 rounded-3xl overflow-hidden text-left transition-transform duration-500 ${hover ? "scale-[1.06]" : ""}`}
      style={{ animationPlayState: hover ? "paused" : "running" }}
    >
      <SmokeLayer />
      <div className="relative z-10 h-full w-full flex flex-col justify-between p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-white text-lg md:text-xl leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            {card.heading}
          </h3>
          <span className="text-2xl md:text-3xl leading-none" aria-hidden="true">
            {card.icon}
          </span>
        </div>
        <div className="text-cyan-100/90 text-[11px] tracking-[0.4em] uppercase self-end">
          Click Me →
        </div>
      </div>
    </button>
  );
}

export default function WisdomTech() {
  const [active, setActive] = useState<Card | null>(null);
  const lane = [...CARDS, ...CARDS]; // duplicate for seamless loop

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="relative h-screen w-full overflow-hidden snap-start bg-[#02060f]">
      <WisdomTechStyle />
      <img src={bg.url} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 15%, rgba(14,116,144,0.55), transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(30,64,175,0.6), transparent 60%), linear-gradient(180deg, rgba(2,6,15,0.75), rgba(5,20,52,0.75) 50%, rgba(2,6,15,0.85))",
          backdropFilter: "blur(6px) saturate(140%)",
        }}
      />

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4 md:px-8">
        <div className="text-center max-w-4xl mb-8 md:mb-10">
          <h2 className="font-display text-white text-3xl md:text-5xl lg:text-6xl leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
            History or Tomorrow??
          </h2>
          <p className="mt-4 text-cyan-100/85 text-sm md:text-base leading-relaxed">
            Mythological wonders, or forgotten physics?? Look closer.....You aren't just reading history; you’re witnessing a preview of our own technological horizon. <br />
            <span className="text-cyan-200/70 italic"></span>
          </p>
        </div>

        <div className="wt-lane relative w-full overflow-hidden py-4">
          <div className="wt-track flex">
            {lane.map((c, i) => (
              <CardTile key={i} card={c} onClick={() => setActive(c)} />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#02060f] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#02060f] to-transparent" />
        </div>

        <p className="wt-fade-in mt-10 md:mt-12 max-w-3xl text-center text-cyan-50/90 text-sm md:text-lg leading-relaxed italic px-4">
          "Perhaps the greatest technology described in the Mahabharata was never the weapons...
          <br />
          It was the wisdom to know when not to use them."
        </p>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 wt-backdrop"
          onClick={() => setActive(null)}
        >
          <div
            className="wt-popup relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-cyan-100 text-2xl liquid-chip-wt"
              aria-label="Close"
            >
              ×
            </button>
            <div className="text-4xl mb-3">{active.icon}</div>
            <h3 className="font-display text-white text-3xl md:text-4xl leading-tight mb-6 pr-10">
              {active.heading}
            </h3>

            <div className="mb-6">
              <div className="text-cyan-200/70 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3">
                Modern Scientific Parallel
              </div>
              <div className="flex flex-wrap gap-2">
                {active.parallels.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 rounded-full text-xs md:text-sm text-cyan-50 border border-cyan-200/30 bg-cyan-500/10 backdrop-blur-md"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="text-cyan-200/70 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-2">
                Explanation
              </div>
              <p className="text-cyan-50/90 text-sm md:text-base leading-relaxed">
                {active.explanation}
              </p>
            </div>

            <div className="border-t border-cyan-200/20 pt-5">
              <div className="text-red-300/80 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-2">
                Think About It
              </div>
              <p className="text-cyan-50 text-sm md:text-lg italic leading-relaxed">
                {active.think}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function WisdomTechStyle() {
  return (
    <style>{`
      @keyframes wt-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .wt-track {
        width: max-content;
        animation: wt-scroll 90s linear infinite;
      }
      .wt-lane:hover .wt-track { /* keep global lane moving */ }
      .wt-card {
        background: linear-gradient(135deg, rgba(125,211,252,0.18), rgba(8,47,73,0.45));
        border: 1px solid rgba(186,230,253,0.35);
        box-shadow: 0 8px 40px rgba(56,189,248,0.2), inset 0 0 40px rgba(125,211,252,0.12);
        backdrop-filter: blur(16px) saturate(160%);
      }
      .wt-card:hover {
        background: linear-gradient(135deg, rgba(125,211,252,0.32), rgba(14,116,144,0.55));
        border-color: rgba(186,230,253,0.7);
        box-shadow: 0 12px 60px rgba(56,189,248,0.45), inset 0 0 60px rgba(125,211,252,0.22);
      }
      @keyframes wt-smoke-drift {
        0% { transform: translate3d(-15%, 10%, 0) scale(1); opacity: 0.35; }
        50% { transform: translate3d(10%, -10%, 0) scale(1.2); opacity: 0.55; }
        100% { transform: translate3d(-15%, 10%, 0) scale(1); opacity: 0.35; }
      }
      .wt-smoke {
        position: absolute; inset: -20%;
        border-radius: 9999px;
        filter: blur(28px);
        mix-blend-mode: screen;
        pointer-events: none;
      }
      .wt-smoke-a {
        background: radial-gradient(ellipse at 30% 40%, rgba(220,38,38,0.55), transparent 60%);
        animation: wt-smoke-drift 9s ease-in-out infinite;
      }
      .wt-smoke-b {
        background: radial-gradient(ellipse at 70% 60%, rgba(185,28,28,0.5), transparent 65%);
        animation: wt-smoke-drift 13s ease-in-out infinite reverse;
      }
      .wt-smoke-c {
        background: radial-gradient(ellipse at 50% 80%, rgba(239,68,68,0.4), transparent 70%);
        animation: wt-smoke-drift 17s ease-in-out infinite;
      }
      @keyframes wt-ember {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        20% { opacity: 1; }
        100% { transform: translateY(-220px) translateX(20px); opacity: 0; }
      }
      @keyframes wt-fade-in {
        from { opacity: 0; transform: translateY(14px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .wt-fade-in { animation: wt-fade-in 2.2s ease-out 0.4s both; }
      .wt-backdrop {
        background: rgba(2,6,15,0.72);
        backdrop-filter: blur(10px);
        animation: wt-fade-in 0.35s ease-out both;
      }
      .wt-popup {
        background: linear-gradient(135deg, rgba(14,116,144,0.55), rgba(8,47,73,0.75));
        border: 1px solid rgba(186,230,253,0.4);
        box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 0 80px rgba(56,189,248,0.35), inset 0 0 60px rgba(125,211,252,0.15);
        backdrop-filter: blur(24px) saturate(160%);
      }
      .liquid-chip-wt {
        background: rgba(8,47,73,0.6);
        border: 1px solid rgba(186,230,253,0.4);
        backdrop-filter: blur(10px);
        transition: background .25s ease;
      }
      .liquid-chip-wt:hover { background: rgba(14,116,144,0.75); }
    `}</style>
  );
}
