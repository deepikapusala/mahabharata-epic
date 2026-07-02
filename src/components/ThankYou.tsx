import { useState } from "react";

const WHATSAPP_NUMBER = ""; // e.g. "919999999999" — provided later
const EMAIL_URL = "#";
const LINKEDIN_URL = "#";
const GITHUB_URL = "#";

export default function ThankYou() {
  const [msg, setMsg] = useState("");

  function sendFeedback() {
    const body = `Hi Deepika,\n\nI just experienced your Mahabharata website.\n\nMy feedback is:\n${msg.trim() || "[User's message]"}\n\nThank you for creating this experience.`;
    const url = WHATSAPP_NUMBER
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`
      : `https://wa.me/?text=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative min-h-screen w-full snap-start overflow-hidden bg-[#02060f] flex flex-col items-center justify-center px-5 py-20 md:py-24">
      <ThankStyle />
      {/* liquid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 15%, rgba(14,116,144,0.45), transparent 55%), radial-gradient(ellipse at 80% 85%, rgba(59,7,100,0.5), transparent 60%), linear-gradient(180deg, #02060f 0%, #06122e 55%, #02060f 100%)",
        }}
      />
      {/* soft particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 36 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cyan-200/60"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              filter: "blur(0.5px)",
              boxShadow: "0 0 10px rgba(125,211,252,0.7)",
              animation: `ty-float ${10 + (i % 7)}s ease-in-out ${(i % 9) * 0.4}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center text-center gap-10 md:gap-14">
        {/* Title */}
        <div>
          <div className="font-display text-[10px] md:text-xs tracking-[0.6em] text-cyan-100/70 uppercase mb-5">
            ॥ Dhanyavaad ॥
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] uppercase tracking-wide bg-gradient-to-br from-amber-100 via-cyan-100 to-violet-200 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(125,211,252,0.25)]">
            Thank You for Experiencing<br />the Mahabharata
          </h2>
          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
          <p className="mt-6 font-display italic text-base md:text-xl text-cyan-50/85 leading-relaxed">
            Every chapter tells a story.<br />
            Every story leaves a question.<br />
            Thank you for taking this journey.
          </p>
        </div>

        {/* Developer card */}
        <div className="ty-card w-full max-w-xl px-7 py-8 md:px-10 md:py-10 rounded-3xl text-center">
          <div className="font-display text-[10px] md:text-xs tracking-[0.55em] text-cyan-100/70 uppercase mb-3">
            The Storyteller
          </div>
          <h3 className="font-display text-3xl md:text-4xl bg-gradient-to-br from-amber-200 via-amber-100 to-cyan-100 bg-clip-text text-transparent">
            Deepika P
          </h3>
          <div className="mt-4 space-y-1 text-cyan-50/85 text-sm md:text-base font-light">
            <div>Information Science Engineering Student</div>
            <div className="text-amber-100/90">IEEE ITS Chair</div>
            <div className="tracking-[0.25em] text-xs md:text-sm text-cyan-100/70 uppercase mt-2">
              AI · IoT · Web Development
            </div>
          </div>
          <div className="mt-7 flex items-center justify-center gap-4">
            <IconLink href={EMAIL_URL} label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            </IconLink>
            <IconLink href={LINKEDIN_URL} label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.75V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.2 1.45-2.2 2.97V21h-4z"/></svg>
            </IconLink>
            <IconLink href={GITHUB_URL} label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.27 5.67.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>
            </IconLink>
          </div>
        </div>

        {/* Feedback */}
        <div className="ty-card w-full max-w-xl px-6 py-7 md:px-8 md:py-8 rounded-3xl text-left">
          <label htmlFor="ty-feedback" className="block font-display text-[10px] md:text-xs tracking-[0.55em] text-cyan-100/70 uppercase mb-3 text-center">
            Share a Reflection
          </label>
          <textarea
            id="ty-feedback"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="How did this experience make you feel?"
            rows={4}
            className="w-full resize-none bg-black/25 border border-cyan-200/25 rounded-2xl px-4 py-3 text-cyan-50 placeholder-cyan-100/40 text-sm md:text-base leading-relaxed focus:outline-none focus:border-cyan-200/60 focus:shadow-[0_0_30px_rgba(125,211,252,0.25)] transition"
          />
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={sendFeedback}
              className="ty-glow-btn relative px-8 py-3.5 rounded-full font-display tracking-[0.32em] uppercase text-cyan-50 text-xs md:text-sm"
            >
              Send Feedback <span className="ml-1">→</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-6 pb-2 text-center">
          <p className="font-display italic text-sm md:text-base text-cyan-50/70 leading-relaxed">
            Built with devotion,<br />
            designed with curiosity,<br />
            and inspired by the timeless wisdom of the Mahabharata.
          </p>
          <div className="mt-5 text-[10px] md:text-xs tracking-[0.4em] text-cyan-100/50 uppercase">
            © 2026 Deepika P
          </div>
        </footer>
      </div>
    </section>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="ty-icon-btn h-11 w-11 md:h-12 md:w-12 rounded-full flex items-center justify-center text-cyan-50 transition"
    >
      {children}
    </a>
  );
}

function ThankStyle() {
  return (
    <style>{`
      @keyframes ty-float {
        0%, 100% { transform: translate3d(0,0,0); opacity: 0.4; }
        50% { transform: translate3d(20px,-40px,0); opacity: 0.9; }
      }
      .ty-card {
        background: linear-gradient(135deg, rgba(125,211,252,0.10), rgba(8,47,73,0.35));
        border: 1px solid rgba(186,230,253,0.28);
        backdrop-filter: blur(20px) saturate(160%);
        box-shadow: 0 0 60px rgba(56,189,248,0.18), inset 0 0 40px rgba(125,211,252,0.08);
      }
      .ty-icon-btn {
        background: rgba(8,47,73,0.55);
        border: 1px solid rgba(186,230,253,0.35);
        backdrop-filter: blur(12px);
      }
      .ty-icon-btn:hover {
        background: rgba(14,116,144,0.65);
        box-shadow: 0 0 24px rgba(125,211,252,0.5);
        transform: translateY(-2px);
      }
      @keyframes ty-breathe {
        0%,100% { box-shadow: 0 0 28px rgba(34,211,238,0.4), inset 0 0 20px rgba(125,211,252,0.2); }
        50% { box-shadow: 0 0 60px rgba(34,211,238,0.7), inset 0 0 30px rgba(125,211,252,0.35); }
      }
      .ty-glow-btn {
        background: radial-gradient(ellipse at 30% 20%, rgba(125,211,252,0.55), rgba(14,116,144,0.35) 45%, rgba(8,47,73,0.55) 100%);
        border: 1px solid rgba(186,230,253,0.55);
        backdrop-filter: blur(14px) saturate(160%);
        animation: ty-breathe 4s ease-in-out infinite;
        transition: filter .25s ease;
      }
      .ty-glow-btn:hover { filter: brightness(1.15); }
    `}</style>
  );
}
