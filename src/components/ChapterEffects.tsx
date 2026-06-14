import type { EffectKind } from "@/lib/mahabharata-data";

export function ChapterEffects({ kind }: { kind: EffectKind }) {
  switch (kind) {
    case "petals-pollen":
      return <PetalsPollen />;
    case "dice":
      return <Dice />;
    case "divine-fabric":
      return <DivineFabric />;
    case "leaves":
      return <Leaves />;
    case "sun-rays":
      return <SunRays />;
    case "galaxy":
      return <Galaxy />;
    case "arrows":
      return <Arrows />;
    case "confetti":
      return <CelebrationConfetti />;
    default:
      return null;
  }
}

const seedArr = (n: number) =>
  Array.from({ length: n }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 53) % 100,
    delay: (i % 10) * 0.5,
    duration: 8 + (i % 6) * 2,
    size: 1 + (i % 4),
    rot: (i * 47) % 360,
  }));

function PetalsPollen() {
  const petals = seedArr(18);
  const pollen = seedArr(40);
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(255,220,160,0.18),transparent_60%)]" />
      {petals.map((p, i) => (
        <span key={`pe-${i}`} className="absolute animate-petal-fall" style={{ left: `${p.left}%`, top: `-10%`, animationDelay: `${p.delay}s`, animationDuration: `${p.duration + 6}s` }}>
          <span className="block rounded-full" style={{ width: 10, height: 6, background: "linear-gradient(45deg,#ffd4dc,#f4b59a)", filter: "blur(.3px)", opacity: .85, transform: `rotate(${p.rot}deg)` }} />
        </span>
      ))}
      {pollen.map((p, i) => (
        <span key={`po-${i}`} className="absolute rounded-full animate-pollen" style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, background: "rgba(255,220,140,.85)", filter: "blur(.5px)", animationDelay: `${p.delay}s`, animationDuration: `${p.duration + 4}s` }} />
      ))}
      <Styles />
    </>
  );
}

function Dice() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(180,40,40,0.15),transparent_60%)]" />
      {seedArr(30).map((p, i) => (
        <span key={i} className="absolute rounded-full animate-pollen" style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, background: "rgba(255,210,140,.7)", animationDelay: `${p.delay}s`, animationDuration: `${p.duration + 6}s` }} />
      ))}
      <span className="absolute animate-dice-roll" style={{ top: "20%" }}>
        <DieSvg />
      </span>
      <span className="absolute animate-dice-roll-2" style={{ top: "70%" }}>
        <DieSvg />
      </span>
      <Styles />
    </>
  );
}

function DieSvg() {
  return (
    <svg width="56" height="56" viewBox="0 0 64 64" className="drop-shadow-[0_0_12px_rgba(233,181,88,.6)]">
      <rect x="6" y="6" width="52" height="52" rx="10" fill="#f4e4c1" stroke="#a06a1f" strokeWidth="2" />
      <circle cx="20" cy="20" r="4" fill="#3a2412" />
      <circle cx="44" cy="20" r="4" fill="#3a2412" />
      <circle cx="32" cy="32" r="4" fill="#3a2412" />
      <circle cx="20" cy="44" r="4" fill="#3a2412" />
      <circle cx="44" cy="44" r="4" fill="#3a2412" />
    </svg>
  );
}

function DivineFabric() {
  return (
    <>
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_60%_40%,transparent,rgba(255,220,140,0.18),transparent_60%,rgba(255,220,140,0.12),transparent)] animate-slow-spin" />
      <div className="absolute -inset-20 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,200,120,0.2),transparent_60%)] animate-drift" />
      {seedArr(40).map((p, i) => (
        <span key={i} className="absolute rounded-full animate-pollen" style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size + 1, height: p.size + 1, background: "rgba(255,235,180,.9)", boxShadow: "0 0 8px rgba(255,220,140,.7)", animationDelay: `${p.delay}s`, animationDuration: `${p.duration + 6}s` }} />
      ))}
      <Styles />
    </>
  );
}

function Leaves() {
  const leaves = seedArr(20);
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(60,90,50,0.25),transparent_60%)]" />
      {leaves.map((p, i) => (
        <span key={i} className="absolute animate-petal-fall" style={{ left: `${p.left}%`, top: "-8%", animationDelay: `${p.delay}s`, animationDuration: `${p.duration + 8}s` }}>
          <svg width="14" height="14" viewBox="0 0 24 24" style={{ transform: `rotate(${p.rot}deg)`, opacity: .85 }}>
            <path d="M12 2 C 4 8, 4 16, 12 22 C 20 16, 20 8, 12 2 Z" fill="#7ea36a" stroke="#3e5a32" strokeWidth="1" />
          </svg>
        </span>
      ))}
      {seedArr(30).map((p, i) => (
        <span key={`d-${i}`} className="absolute rounded-full animate-pollen" style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, background: "rgba(220,240,200,.7)", animationDelay: `${p.delay}s`, animationDuration: `${p.duration + 4}s` }} />
      ))}
      <Styles />
    </>
  );
}

function SunRays() {
  return (
    <>
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_70%_30%,transparent_0deg,rgba(255,230,160,0.22)_30deg,transparent_60deg,rgba(255,220,140,0.18)_90deg,transparent_120deg)] animate-slow-spin" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,230,160,0.25),transparent_55%)]" />
      {seedArr(30).map((p, i) => (
        <span key={i} className="absolute rounded-full animate-pollen" style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, background: "rgba(255,225,160,.8)", animationDelay: `${p.delay}s`, animationDuration: `${p.duration + 4}s` }} />
      ))}
      <Styles />
    </>
  );
}

function Galaxy() {
  return (
    <>
      <div className="absolute inset-0 mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.28),transparent_55%)]" />
      </div>
      {seedArr(60).map((p, i) => (
        <span key={i} className="absolute rounded-full bg-white animate-twinkle-e" style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, boxShadow: "0 0 6px rgba(200,180,255,0.9)", animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s` }} />
      ))}
      <Styles />
    </>
  );
}

function Arrows() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,240,200,0.12),transparent_60%)] animate-lightning-e" />
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-amber-200/80 to-transparent animate-arrow-e"
            style={{
              width: `${20 + (i * 11) % 40}%`,
              top: `${(i * 13) % 90}%`,
              left: "-30%",
              animationDelay: `${(i % 7) * 0.5}s`,
              animationDuration: `${3 + (i % 4)}s`,
            }}
          />
        ))}
      </div>
      {seedArr(20).map((p, i) => (
        <span key={`d-${i}`} className="absolute rounded-full animate-pollen" style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size, background: "rgba(200,180,150,.5)", animationDelay: `${p.delay}s`, animationDuration: `${p.duration + 4}s` }} />
      ))}
      <Styles />
    </>
  );
}

function CelebrationConfetti() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,220,140,0.22),transparent_60%)]" />
      {seedArr(22).map((p, i) => (
        <span key={`pe-${i}`} className="absolute animate-petal-fall" style={{ left: `${p.left}%`, top: "-10%", animationDelay: `${p.delay}s`, animationDuration: `${p.duration + 6}s` }}>
          <span className="block rounded-full" style={{ width: 10, height: 6, background: "linear-gradient(45deg,#ffd4dc,#f4b59a)", transform: `rotate(${p.rot}deg)`, opacity: .9 }} />
        </span>
      ))}
      {seedArr(28).map((p, i) => (
        <span key={`g-${i}`} className="absolute animate-petal-fall" style={{ left: `${(p.left + 10) % 100}%`, top: "-10%", animationDelay: `${p.delay + 0.4}s`, animationDuration: `${p.duration + 5}s` }}>
          <span className="block" style={{ width: 6, height: 12, background: "#e9b558", transform: `rotate(${p.rot}deg)`, boxShadow: "0 0 8px rgba(233,181,88,.6)" }} />
        </span>
      ))}
      <Styles />
    </>
  );
}

function Styles() {
  return (
    <style>{`
      @keyframes pollen-e { 0%,100% { transform: translate3d(0,0,0); opacity:.4; } 50% { transform: translate3d(20px,-40px,0); opacity:.9; } }
      .animate-pollen { animation: pollen-e linear infinite; }
      @keyframes petal-fall-e { 0% { transform: translate3d(0,0,0) rotate(0); opacity: 0; } 10% { opacity: .9; } 100% { transform: translate3d(60px,110vh,0) rotate(540deg); opacity: 0; } }
      .animate-petal-fall { animation: petal-fall-e linear infinite; }
      @keyframes slow-spin-e { to { transform: rotate(360deg); } }
      .animate-slow-spin { animation: slow-spin-e 60s linear infinite; }
      @keyframes drift-e { 0%,100% { transform: translateX(0); } 50% { transform: translateX(60px); } }
      .animate-drift { animation: drift-e 18s ease-in-out infinite; }
      @keyframes twinkle-e { 0%,100% { opacity:.2; transform: scale(1); } 50% { opacity:1; transform: scale(1.6); } }
      .animate-twinkle-e { animation: twinkle-e ease-in-out infinite; }
      @keyframes arrow-e { 0% { transform: translateX(0) rotate(-3deg); opacity: 0; } 20% { opacity:1; } 100% { transform: translateX(180vw) rotate(-3deg); opacity: 0; } }
      .animate-arrow-e { animation: arrow-e linear infinite; }
      @keyframes lightning-e { 0%,92%,100% { opacity:.2; } 93%,95% { opacity:1; } 94% { opacity:.3; } }
      .animate-lightning-e { animation: lightning-e 7s infinite; }
      @keyframes dice-roll-e { 0% { left: -10%; transform: rotate(0); } 100% { left: 110%; transform: rotate(720deg); } }
      .animate-dice-roll { animation: dice-roll-e 14s linear infinite; }
      .animate-dice-roll-2 { animation: dice-roll-e 18s linear infinite; animation-delay: -6s; }
    `}</style>
  );
}
