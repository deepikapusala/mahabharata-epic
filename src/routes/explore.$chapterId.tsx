import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { CHAPTERS_DATA, TITLES_BY_SCORE, getChapter } from "@/lib/mahabharata-data";
import { CHAPTER_NARRATIONS } from "@/lib/mahabharata-narrations";
import { ChapterEffects } from "@/components/ChapterEffects";
import { ListenButton } from "@/components/ListenButton";
import { getQuestionsForAttempt, getSetLabel } from "@/lib/mahabharata-questions";

export const Route = createFileRoute("/explore/$chapterId")({
  head: ({ params }) => {
    const ch = getChapter(params.chapterId);
    const title = ch ? `Explore ${ch.title} — Mahabharata` : "Explore — Mahabharata";
    return {
      meta: [
        { title },
        { name: "description", content: "Test your knowledge of the Mahabharata, chapter by chapter." },
      ],
    };
  },
  loader: ({ params }) => {
    const ch = getChapter(params.chapterId);
    if (!ch) throw notFound();
    return { chapter: ch };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0705] text-amber-100">
      <div className="text-center">
        <h1 className="font-display text-4xl mb-4">Chapter not found</h1>
        <Link to="/" className="underline text-amber-300">Return to the epic</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0705] text-amber-100 p-6 text-center">
      <div>
        <h1 className="font-display text-3xl mb-3">Something went wrong</h1>
        <p className="text-amber-200/70 mb-4">{error.message}</p>
        <Link to="/" className="underline text-amber-300">Return home</Link>
      </div>
    </div>
  ),
  component: ExplorePage,
});

function ExplorePage() {
  const { chapter } = Route.useLoaderData();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const total = chapter.questions.length;
  const q = chapter.questions[current];

  const titleEarned = useMemo(() => TITLES_BY_SCORE[score] ?? TITLES_BY_SCORE[0], [score]);

  function choose(i: number) {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === q.answer) setScore((s) => s + 1);
  }

  function next() {
    if (current + 1 >= total) {
      setFinished(true);
      return;
    }
    setCurrent((c) => c + 1);
    setAnswered(false);
    setSelected(null);
  }

  function restart() {
    setCurrent(0);
    setScore(0);
    setAnswered(false);
    setSelected(null);
    setFinished(false);
  }

  const progressPct = ((current + (answered ? 1 : 0)) / total) * 100;
  const isHighScore = score >= 5;

  const shareText = `I scored ${score}/${total} and earned the title "${titleEarned}" on the Mahabharata Interactive Journey — Chapter ${chapter.num}: ${chapter.title}. Try it yourself.`;
  const shareUrl = typeof window !== "undefined" ? window.location.origin : "";
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&summary=${encodeURIComponent(shareText)}`;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0705] text-amber-50 font-sans">
      {/* Background image — same chapter image */}
      <div className="fixed inset-0 -z-10">
        <img src={chapter.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" />
        <div className="absolute inset-0 chapter-vignette" />
      </div>

      {/* Chapter-specific effects layer (behind card) */}
      <div className="fixed inset-0 -z-[5] pointer-events-none">
        <ChapterEffects kind={chapter.effect} />
      </div>

      {/* Top bar */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <Link
          to="/"
          className="font-display tracking-[0.4em] text-xs uppercase text-amber-200/80 hover:text-amber-100"
        >
          ← Back to Epic
        </Link>
        <div className="font-display tracking-[0.5em] text-[10px] md:text-xs text-amber-200/70 uppercase">
          Chapter {chapter.num} · {chapter.title}
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center px-4 md:px-6 pb-16 pt-4 md:pt-8 min-h-[calc(100vh-100px)]">
        {!finished ? (
          <div className="w-full max-w-2xl">
            {/* Glass card */}
            <div className="relative rounded-2xl border border-amber-300/40 bg-black/35 backdrop-blur-xl shadow-[0_0_60px_rgba(233,181,88,0.15)] overflow-hidden">
              {/* Gold gradient border accent */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-amber-200/10" />
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-amber-200/20 via-transparent to-amber-500/10 opacity-60" style={{ mask: "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)", WebkitMask: "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)" }} />

              <div className="relative p-6 md:p-10">
                {/* Progress */}
                <div className="flex items-center justify-between text-[11px] md:text-xs font-display tracking-[0.4em] uppercase text-amber-200/80 mb-3">
                  <span>Question {current + 1} of {total}</span>
                  <span className="text-amber-100">Score {score} / {answered ? current + 1 : current}</span>
                </div>
                <div className="h-[3px] w-full bg-amber-100/10 rounded-full overflow-hidden mb-8">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 transition-all duration-500"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>

                <h2 className="font-display text-2xl md:text-3xl leading-snug text-amber-50 mb-7">
                  {q.q}
                </h2>

                <ul className="space-y-3">
                  {q.options.map((opt: string, i: number) => {
                    const isCorrect = i === q.answer;
                    const isSelected = selected === i;
                    let cls = "border-amber-200/20 bg-white/5 hover:bg-amber-200/10 hover:border-amber-200/60";
                    if (answered) {
                      if (isCorrect) cls = "border-emerald-300/70 bg-emerald-400/15";
                      else if (isSelected) cls = "border-red-300/70 bg-red-400/15";
                      else cls = "border-amber-200/10 bg-white/5 opacity-60";
                    }
                    return (
                      <li key={i}>
                        <button
                          type="button"
                          onClick={() => choose(i)}
                          disabled={answered}
                          className={`w-full text-left px-5 py-4 rounded-xl border backdrop-blur-md transition-all duration-300 font-display text-base md:text-lg flex items-center gap-4 ${cls} ${answered ? "cursor-default" : "cursor-pointer"}`}
                        >
                          <span className="inline-flex items-center justify-center h-7 w-7 rounded-full border border-amber-200/40 text-xs text-amber-200">
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span className="flex-1 text-amber-50/95">{opt}</span>
                          {answered && isCorrect && <span className="text-emerald-300">✓</span>}
                          {answered && isSelected && !isCorrect && <span className="text-red-300">✕</span>}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={next}
                    disabled={!answered}
                    className="group relative inline-flex items-center gap-3 px-8 py-3 border border-amber-300/60 bg-amber-200/10 backdrop-blur-md font-display tracking-[0.4em] text-xs uppercase text-amber-100 hover:bg-amber-200/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {current + 1 === total ? "See Result" : "Next"}
                    <span className="text-amber-300">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Result
            score={score}
            total={total}
            title={titleEarned}
            chapter={chapter}
            isHighScore={isHighScore}
            whatsappHref={whatsappHref}
            linkedinHref={linkedinHref}
            shareText={`${shareText} ${shareUrl}`}
            narration={CHAPTER_NARRATIONS[chapter.id] ?? ""}
            onRestart={restart}
          />
        )}
      </main>

      {/* Other chapters quick nav */}
      <nav className="relative z-10 pb-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="font-display tracking-[0.4em] text-[10px] uppercase text-amber-200/60 text-center mb-3">Other Chapters</div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CHAPTERS_DATA.map((c) => (
              <Link
                key={c.id}
                to="/explore/$chapterId"
                params={{ chapterId: c.id }}
                className={`px-3 py-2 text-[10px] md:text-xs font-display tracking-[0.3em] uppercase border rounded-md transition-colors ${
                  c.id === chapter.id
                    ? "border-amber-300 text-amber-100 bg-amber-200/10"
                    : "border-amber-200/20 text-amber-200/70 hover:border-amber-200/60 hover:text-amber-100"
                }`}
              >
                {c.num} · {c.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

function Result({
  score,
  total,
  title,
  chapter,
  isHighScore,
  whatsappHref,
  linkedinHref,
  shareText,
  narration,
  onRestart,
}: {
  score: number;
  total: number;
  title: string;
  chapter: { id: string; num: string; title: string };
  isHighScore: boolean;
  whatsappHref: string;
  linkedinHref: string;
  shareText: string;
  narration: string;
  onRestart: () => void;
}) {
  const [copied, setCopied] = useState(false);
  function copyShare() {
    navigator.clipboard?.writeText(shareText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="w-full max-w-2xl animate-result-in">
      {isHighScore && <ConfettiBurst />}
      <div className={`relative rounded-2xl border bg-black/40 backdrop-blur-xl overflow-hidden ${isHighScore ? "border-amber-300/80 shadow-[0_0_120px_rgba(233,181,88,0.4)]" : "border-amber-300/40 shadow-[0_0_60px_rgba(233,181,88,0.15)]"}`}>
        {isHighScore && (
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,181,88,0.25),transparent_70%)] animate-pulse" />
        )}
        <div className="relative p-8 md:p-12 text-center">
          <div className="font-display tracking-[0.5em] text-[10px] md:text-xs uppercase text-amber-200/80 mb-4">
            Chapter {chapter.num} · Result
          </div>
          <div className="font-display text-gold-gradient text-7xl md:text-8xl leading-none mb-3 animate-score-pop">
            {score} <span className="text-amber-200/60">/</span> {total}
          </div>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-amber-300/70 to-transparent my-6" />
          <div className="font-display italic text-2xl md:text-4xl text-amber-50">
            {title}
          </div>
          <p className="mt-5 text-amber-100/70 max-w-md mx-auto">
            {isHighScore
              ? "A keeper of the epic. The story lives in your memory."
              : "Every reading reveals more. Walk the path again."}
          </p>

          {narration && (
            <div className="mt-9">
              <div className="font-display tracking-[0.4em] text-[10px] uppercase text-amber-200/70 mb-3">Hear the Story</div>
              <ListenButton chapterId={chapter.id} />
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onRestart}
              className="px-6 py-3 border border-amber-300/60 bg-amber-200/10 font-display tracking-[0.4em] text-xs uppercase text-amber-100 hover:bg-amber-200/20 transition"
            >
              Try Again
            </button>
            <Link
              to="/"
              className="px-6 py-3 border border-amber-200/30 bg-white/5 font-display tracking-[0.4em] text-xs uppercase text-amber-100/90 hover:bg-white/10 transition"
            >
              Continue Journey
            </Link>
          </div>

          <div className="mt-10">
            <div className="font-display tracking-[0.4em] text-[10px] uppercase text-amber-200/70 mb-3">Share</div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-emerald-300/40 bg-emerald-400/10 text-emerald-100 hover:bg-emerald-400/20 transition text-sm"
              >
                <span>WhatsApp</span>
              </a>
              <a
                href={linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-300/40 bg-sky-400/10 text-sky-100 hover:bg-sky-400/20 transition text-sm"
              >
                <span>LinkedIn</span>
              </a>
              <button
                type="button"
                onClick={copyShare}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-200/40 bg-amber-200/10 text-amber-100 hover:bg-amber-200/20 transition text-sm"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes result-in { 0% { opacity: 0; transform: translateY(24px) scale(.97); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
        .animate-result-in { animation: result-in .8s cubic-bezier(.2,.7,.2,1) both; }
        @keyframes score-pop { 0% { opacity: 0; transform: scale(.6); } 60% { transform: scale(1.1); } 100% { opacity: 1; transform: scale(1); } }
        .animate-score-pop { animation: score-pop 1s cubic-bezier(.2,.7,.2,1) both; }
      `}</style>
    </div>
  );
}

function ConfettiBurst() {
  const pieces = Array.from({ length: 60 }, (_, i) => ({
    left: (i * 17) % 100,
    delay: (i % 12) * 0.15,
    duration: 3 + (i % 5),
    hue: i % 3 === 0 ? "#e9b558" : i % 3 === 1 ? "#fde9a6" : "#f4c97a",
    size: 5 + (i % 4),
    rot: (i * 47) % 360,
  }));
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="absolute top-[-10%] animate-confetti"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.6,
            background: p.hue,
            transform: `rotate(${p.rot}deg)`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: `0 0 8px ${p.hue}80`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti { animation: confetti-fall linear forwards; }
      `}</style>
    </div>
  );
}
