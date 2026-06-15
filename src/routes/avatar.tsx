import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { AVATARS, AVATAR_QUESTIONS, type AvatarKey } from "@/lib/avatar-data";

export const Route = createFileRoute("/avatar")({
  head: () => ({
    meta: [
      { title: "Discover Your Mahabharata Avatar" },
      {
        name: "description",
        content:
          "Every hero carries a unique strength. Discover which legendary Mahabharata character reflects your personality.",
      },
      { property: "og:title", content: "Discover Your Mahabharata Avatar" },
      {
        property: "og:description",
        content: "A cinematic personality journey through the heroes of the Mahabharata.",
      },
    ],
  }),
  component: AvatarPage,
});

function AvatarPage() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<AvatarKey, number>>(() => ({
    krishna: 0, arjuna: 0, draupadi: 0, yudhishthira: 0,
    bhishma: 0, karna: 0, abhimanyu: 0, kunti: 0,
  }));
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const total = AVATAR_QUESTIONS.length;

  function choose(i: number) {
    if (selected !== null) return;
    setSelected(i);
    const weights = AVATAR_QUESTIONS[step].options[i].weights;
    const next = { ...scores };
    for (const [k, v] of Object.entries(weights)) {
      next[k as AvatarKey] += v ?? 0;
    }
    setScores(next);
    setTimeout(() => {
      if (step + 1 >= total) setFinished(true);
      else {
        setStep(step + 1);
        setSelected(null);
      }
    }, 450);
  }

  function restart() {
    setStep(0);
    setSelected(null);
    setFinished(false);
    setScores({
      krishna: 0, arjuna: 0, draupadi: 0, yudhishthira: 0,
      bhishma: 0, karna: 0, abhimanyu: 0, kunti: 0,
    });
    setStarted(true);
  }

  const winnerKey = useMemo<AvatarKey>(() => {
    let best: AvatarKey = "arjuna";
    let bestVal = -1;
    (Object.keys(scores) as AvatarKey[]).forEach((k) => {
      if (scores[k] > bestVal) {
        bestVal = scores[k];
        best = k;
      }
    });
    return best;
  }, [scores]);

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-amber-50">
      <MysticalBackground />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-5 py-20 md:py-24">
        {!started && !finished && <Intro onStart={() => setStarted(true)} />}

        {started && !finished && (
          <Quiz
            step={step}
            total={total}
            selected={selected}
            onChoose={choose}
          />
        )}

        {finished && <ResultCard character={AVATARS[winnerKey]} onRestart={restart} />}
      </div>

      <AvatarStyles />
    </main>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center animate-avatar-fade">
      <div className="font-display tracking-[0.55em] text-[10px] md:text-xs uppercase text-amber-200/80 mb-6">
        The Grand Finale
      </div>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight">
        <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
          Discover Your Mahabharata Avatar
        </span>
      </h1>
      <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
      <p className="mt-8 font-display italic text-lg md:text-2xl text-amber-50/85 max-w-xl mx-auto">
        Every hero carries a unique strength.
        <br />
        Discover which legendary Mahabharata character reflects your personality.
      </p>
      <button
        type="button"
        onClick={onStart}
        className="mt-12 inline-flex items-center gap-3 px-8 py-4 rounded-full border border-amber-300/60 bg-amber-200/10 backdrop-blur-md font-display tracking-[0.4em] text-xs uppercase text-amber-100 hover:bg-amber-200/20 transition shadow-[0_0_40px_rgba(233,181,88,0.3)]"
      >
        ✦ Begin the Journey
      </button>
      <div className="mt-10">
        <Link to="/" className="text-amber-200/70 hover:text-amber-200 underline-offset-4 hover:underline text-xs tracking-[0.3em] uppercase font-display">
          Return to the Epic
        </Link>
      </div>
    </div>
  );
}

function Quiz({
  step, total, selected, onChoose,
}: {
  step: number;
  total: number;
  selected: number | null;
  onChoose: (i: number) => void;
}) {
  const q = AVATAR_QUESTIONS[step];
  const progress = ((step + 1) / total) * 100;

  return (
    <div key={step} className="w-full animate-avatar-fade">
      <div className="mb-5 flex items-center justify-between text-[10px] md:text-xs font-display tracking-[0.4em] uppercase text-amber-200/80">
        <span>Question {step + 1} / {total}</span>
        <span>Avatar Within</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-amber-200/10 mb-8">
        <div
          className="h-full bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="relative rounded-2xl border border-amber-300/40 bg-black/35 backdrop-blur-xl p-7 md:p-10 shadow-[0_0_60px_rgba(233,181,88,0.18)]">
        <h2 className="font-display text-2xl md:text-3xl text-amber-50 leading-snug">
          {q.q}
        </h2>
        <div className="mt-7 grid gap-3">
          {q.options.map((o, i) => {
            const isSel = selected === i;
            return (
              <button
                key={i}
                type="button"
                disabled={selected !== null}
                onClick={() => onChoose(i)}
                className={`text-left w-full px-5 py-4 rounded-xl border transition backdrop-blur-md font-display text-base md:text-lg ${
                  isSel
                    ? "border-amber-300 bg-amber-200/20 text-amber-50 shadow-[0_0_30px_rgba(233,181,88,0.35)]"
                    : "border-amber-200/30 bg-white/5 hover:bg-amber-200/10 hover:border-amber-300/60 text-amber-100/95"
                } disabled:opacity-70`}
              >
                <span className="mr-3 text-amber-300/80">✦</span>
                {o.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ResultCard({
  character,
  onRestart,
}: {
  character: ReturnType<typeof getAvatar>;
  onRestart: () => void;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const shareText = `I discovered my Mahabharata Avatar.\n\nI am ${capitalize(character.name)} – ${character.title}.\n\nDiscover yours in the Mahabharata Interactive Journey.`;
  const url = typeof window !== "undefined" ? window.location.origin + "/avatar" : "";

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(shareText + "\n" + url)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  function downloadCard() {
    // Render an SVG-based character card to PNG via canvas
    const W = 1080, H = 1350;
    const canvas = document.createElement("canvas");
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background gradient
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, "#0b0a1f");
    g.addColorStop(0.5, "#1a0f3a");
    g.addColorStop(1, "#0a0705");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // Golden glow
    const radial = ctx.createRadialGradient(W / 2, H / 2 - 100, 60, W / 2, H / 2 - 100, 700);
    radial.addColorStop(0, "rgba(233,181,88,0.35)");
    radial.addColorStop(1, "rgba(233,181,88,0)");
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, W, H);

    // Particles
    ctx.fillStyle = "rgba(255, 224, 160, 0.85)";
    for (let i = 0; i < 90; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const r = Math.random() * 2.4 + 0.4;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Border
    ctx.strokeStyle = "rgba(233,181,88,0.55)";
    ctx.lineWidth = 4;
    ctx.strokeRect(40, 40, W - 80, H - 80);
    ctx.strokeStyle = "rgba(233,181,88,0.2)";
    ctx.lineWidth = 1;
    ctx.strokeRect(60, 60, W - 120, H - 120);

    // Top label
    ctx.fillStyle = "rgba(255, 224, 160, 0.85)";
    ctx.font = "600 22px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("◆  M A H A B H A R A T A   A V A T A R  ◆", W / 2, 160);

    // Character name
    const grad = ctx.createLinearGradient(0, 280, W, 280);
    grad.addColorStop(0, "#fde68a");
    grad.addColorStop(0.5, "#facc15");
    grad.addColorStop(1, "#f59e0b");
    ctx.fillStyle = grad;
    ctx.font = "700 110px 'Cormorant Garamond', serif";
    ctx.fillText(character.name, W / 2, 360);

    // Title
    ctx.fillStyle = "#fef3c7";
    ctx.font = "italic 44px 'Cormorant Garamond', serif";
    ctx.fillText(character.title, W / 2, 430);

    // Divider
    ctx.strokeStyle = "rgba(233,181,88,0.7)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 80, 480);
    ctx.lineTo(W / 2 + 80, 480);
    ctx.stroke();

    // Traits
    ctx.fillStyle = "#fde68a";
    ctx.font = "600 32px 'Cormorant Garamond', serif";
    ctx.fillText(character.traits.join("  ·  "), W / 2, 560);

    // Description (wrapped)
    ctx.fillStyle = "rgba(254, 243, 199, 0.92)";
    ctx.font = "400 30px 'Cormorant Garamond', serif";
    wrapText(ctx, character.description, W / 2, 660, W - 200, 44);

    // Motto
    ctx.fillStyle = "#fcd34d";
    ctx.font = "italic 600 36px 'Cormorant Garamond', serif";
    wrapText(ctx, `“${character.motto}”`, W / 2, H - 280, W - 240, 50);

    // Footer
    ctx.fillStyle = "rgba(255, 224, 160, 0.7)";
    ctx.font = "600 20px 'Inter', sans-serif";
    ctx.fillText("◆  D I S C O V E R   Y O U R S  ◆", W / 2, H - 130);
    ctx.fillStyle = "rgba(233,181,88,0.95)";
    ctx.font = "600 22px 'Inter', sans-serif";
    ctx.fillText("Pusala Deepika", W / 2, H - 90);

    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `mahabharata-avatar-${character.name.toLowerCase()}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    }, "image/png");
  }

  return (
    <div className="w-full animate-avatar-reveal">
      <GoldenBurst />
      <div
        ref={cardRef}
        className="relative rounded-2xl border border-amber-300/70 bg-black/45 backdrop-blur-xl overflow-hidden shadow-[0_0_120px_rgba(233,181,88,0.4)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,181,88,0.28),transparent_70%)] animate-pulse-soft" />
        <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${character.accent} opacity-[0.12] blur-2xl`} />

        <div className="relative p-8 md:p-12 text-center">
          <div className="font-display tracking-[0.55em] text-[10px] md:text-xs uppercase text-amber-200/85 mb-6">
            ◆ Your Avatar ◆
          </div>
          <h2 className={`font-display text-5xl md:text-7xl lg:text-8xl leading-none bg-gradient-to-r ${character.accent} bg-clip-text text-transparent animate-name-rise`}>
            {character.name}
          </h2>
          <div className="font-display italic text-2xl md:text-3xl text-amber-50 mt-3">
            {character.title}
          </div>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap font-display text-amber-200 text-lg md:text-xl">
            {character.traits.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full border border-amber-300/40 bg-amber-200/10">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-7 text-amber-100/90 max-w-xl mx-auto font-display text-lg md:text-xl leading-relaxed">
            {character.description}
          </p>
          <div className="mt-8 font-display italic text-amber-200 text-xl md:text-2xl">
            “{character.motto}”
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-full border border-emerald-300/50 bg-emerald-300/10 text-emerald-100 hover:bg-emerald-300/20 transition text-sm font-display tracking-[0.3em] uppercase"
        >
          Share · WhatsApp
        </a>
        <a
          href={linkedinHref}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-full border border-sky-300/50 bg-sky-300/10 text-sky-100 hover:bg-sky-300/20 transition text-sm font-display tracking-[0.3em] uppercase"
        >
          Share · LinkedIn
        </a>
        <button
          type="button"
          onClick={downloadCard}
          className="px-5 py-2.5 rounded-full border border-amber-300/70 bg-amber-200/15 text-amber-100 hover:bg-amber-200/25 transition text-sm font-display tracking-[0.3em] uppercase shadow-[0_0_30px_rgba(233,181,88,0.25)]"
        >
          ⬇ Download Card
        </button>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={onRestart}
          className="px-5 py-2.5 rounded-full border border-amber-200/30 bg-white/5 text-amber-100/90 hover:bg-white/10 transition text-sm font-display tracking-[0.3em] uppercase"
        >
          ↻ Discover Again
        </button>
        <Link
          to="/"
          className="px-5 py-2.5 rounded-full border border-amber-200/30 bg-white/5 text-amber-100/90 hover:bg-white/10 transition text-sm font-display tracking-[0.3em] uppercase"
        >
          Return to the Epic
        </Link>
      </div>
    </div>
  );
}

function getAvatar(key: AvatarKey) {
  return AVATARS[key];
}

function capitalize(s: string) {
  return s.charAt(0) + s.slice(1).toLowerCase();
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
) {
  const words = text.split(" ");
  let line = "";
  let yy = y;
  for (let n = 0; n < words.length; n++) {
    const test = line + words[n] + " ";
    if (ctx.measureText(test).width > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, yy);
      line = words[n] + " ";
      yy += lineHeight;
    } else {
      line = test;
    }
  }
  ctx.fillText(line.trim(), x, yy);
}

function GoldenBurst() {
  return (
    <div className="pointer-events-none absolute inset-x-0 -top-10 z-[1] h-0">
      <div className="relative mx-auto h-0 w-full max-w-3xl">
        {Array.from({ length: 36 }).map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-0 block h-2 w-2 rounded-full bg-amber-200 animate-burst"
            style={{
              ["--angle" as string]: `${(i * 10)}deg`,
              ["--dist" as string]: `${180 + (i % 5) * 30}px`,
              animationDelay: `${(i % 9) * 0.05}s`,
              boxShadow: "0 0 12px rgba(255,224,160,0.9)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function MysticalBackground() {
  return (
    <div className="absolute inset-0 -z-0 overflow-hidden">
      {/* Royal blue → deep purple base */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#070a22_0%,#0e0a34_35%,#1a0a3a_60%,#080417_100%)]" />
      {/* Gold central glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(233,181,88,0.22),transparent_60%)]" />
      {/* Side purple glow */}
      <div className="absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-indigo-700/30 blur-[120px]" />
      <div className="absolute -right-40 bottom-1/4 h-[600px] w-[600px] rounded-full bg-fuchsia-700/20 blur-[140px]" />
      {/* Light rays */}
      <div className="absolute inset-0 opacity-[0.18] mix-blend-screen bg-[conic-gradient(from_210deg_at_50%_40%,transparent_0deg,rgba(255,224,160,0.35)_30deg,transparent_60deg,rgba(255,224,160,0.25)_120deg,transparent_160deg,rgba(255,224,160,0.3)_240deg,transparent_280deg)] animate-rays" />
      {/* Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-amber-100/70 animate-float-dust"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              width: 1 + (i % 3),
              height: 1 + (i % 3),
              animationDelay: `${(i % 10) * 0.6}s`,
              animationDuration: `${12 + (i % 9)}s`,
              filter: "blur(0.4px)",
            }}
          />
        ))}
      </div>
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}

function AvatarStyles() {
  return (
    <style>{`
      @keyframes float-dust {
        0%, 100% { transform: translate3d(0,0,0); opacity: 0.35; }
        50% { transform: translate3d(20px,-30px,0); opacity: 0.95; }
      }
      .animate-float-dust { animation: float-dust linear infinite; }
      @keyframes rays-spin { to { transform: rotate(360deg); } }
      .animate-rays { animation: rays-spin 80s linear infinite; }
      @keyframes avatar-fade {
        from { opacity: 0; transform: translateY(14px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-avatar-fade { animation: avatar-fade 0.6s ease-out both; }
      @keyframes avatar-reveal {
        0% { opacity: 0; transform: scale(0.94); filter: blur(8px); }
        60% { opacity: 1; filter: blur(0); }
        100% { opacity: 1; transform: scale(1); filter: blur(0); }
      }
      .animate-avatar-reveal { animation: avatar-reveal 1.1s cubic-bezier(.2,.7,.2,1) both; }
      @keyframes name-rise {
        from { opacity: 0; transform: translateY(20px) scale(0.96); letter-spacing: 0.05em; }
        to { opacity: 1; transform: translateY(0) scale(1); letter-spacing: 0; }
      }
      .animate-name-rise { animation: name-rise 1s ease-out both; animation-delay: 0.25s; }
      @keyframes pulse-soft {
        0%, 100% { opacity: 0.65; }
        50% { opacity: 1; }
      }
      .animate-pulse-soft { animation: pulse-soft 3.5s ease-in-out infinite; }
      @keyframes burst {
        0% { transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--dist)) scale(0.4); opacity: 0; }
      }
      .animate-burst { animation: burst 1.6s ease-out forwards; }
    `}</style>
  );
}
