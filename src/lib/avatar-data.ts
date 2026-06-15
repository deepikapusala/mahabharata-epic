export type AvatarKey =
  | "krishna"
  | "arjuna"
  | "draupadi"
  | "yudhishthira"
  | "bhishma"
  | "karna"
  | "abhimanyu"
  | "kunti";

export type AvatarCharacter = {
  key: AvatarKey;
  name: string;
  title: string;
  traits: string[];
  description: string;
  motto: string;
  accent: string; // tailwind gradient classes
};

export const AVATARS: Record<AvatarKey, AvatarCharacter> = {
  krishna: {
    key: "krishna",
    name: "KRISHNA",
    title: "The Divine Strategist",
    traits: ["Wise", "Calm", "Visionary"],
    description:
      "You see possibilities where others see obstacles. You guide with insight, lead with patience, and turn impossible moments into turning points.",
    motto: "When wisdom leads, victory follows.",
    accent: "from-sky-300 via-indigo-300 to-amber-300",
  },
  arjuna: {
    key: "arjuna",
    name: "ARJUNA",
    title: "The Fierce Warrior",
    traits: ["Focused", "Determined", "Fearless"],
    description:
      "You never step away from a challenge. You believe in action and discipline, and your aim is sharpened by purpose.",
    motto: "Skill shines brightest when guided by purpose.",
    accent: "from-amber-200 via-amber-300 to-orange-400",
  },
  draupadi: {
    key: "draupadi",
    name: "DRAUPADI",
    title: "The Unbroken Flame",
    traits: ["Bold", "Resilient", "Just"],
    description:
      "You stand tall when the world demands silence. Your voice carries dharma, and your fire refuses to be dimmed.",
    motto: "Truth spoken once outlives a thousand silences.",
    accent: "from-rose-300 via-amber-300 to-red-400",
  },
  yudhishthira: {
    key: "yudhishthira",
    name: "YUDHISHTHIRA",
    title: "The Keeper of Dharma",
    traits: ["Honest", "Patient", "Principled"],
    description:
      "You walk the harder path because it is the right one. Your steadiness becomes the compass others trust.",
    motto: "Righteousness is the only crown that never falls.",
    accent: "from-amber-200 via-yellow-200 to-amber-400",
  },
  bhishma: {
    key: "bhishma",
    name: "BHISHMA",
    title: "The Vow-Bound Guardian",
    traits: ["Loyal", "Steadfast", "Noble"],
    description:
      "Your word is your sword. You give your strength to those you protect, holding promises long after others forget them.",
    motto: "A vow kept is a kingdom defended.",
    accent: "from-slate-200 via-amber-200 to-amber-400",
  },
  karna: {
    key: "karna",
    name: "KARNA",
    title: "The Generous Heart",
    traits: ["Brave", "Generous", "Loyal"],
    description:
      "You give without measure and stand by friends through every storm. The world may judge you, yet your honor remains your own.",
    motto: "Greatness is measured by what you give, not what you keep.",
    accent: "from-orange-300 via-amber-300 to-rose-400",
  },
  abhimanyu: {
    key: "abhimanyu",
    name: "ABHIMANYU",
    title: "The Fearless Spark",
    traits: ["Daring", "Youthful", "Unflinching"],
    description:
      "You charge ahead where others hesitate. Your courage is contagious, and your spirit refuses to be outmatched.",
    motto: "A fearless heart writes its own legend.",
    accent: "from-amber-300 via-yellow-300 to-emerald-300",
  },
  kunti: {
    key: "kunti",
    name: "KUNTI",
    title: "The Quiet Strength",
    traits: ["Caring", "Wise", "Enduring"],
    description:
      "You carry others through their storms while standing firm in your own. Your love is silent, but it shapes destinies.",
    motto: "Strength is gentlest where love runs deepest.",
    accent: "from-amber-200 via-rose-200 to-amber-400",
  },
};

export type AvatarOption = {
  label: string;
  weights: Partial<Record<AvatarKey, number>>;
};

export type AvatarQuestion = {
  q: string;
  options: AvatarOption[];
};

export const AVATAR_QUESTIONS: AvatarQuestion[] = [
  {
    q: "When a crisis strikes around you, your first instinct is to…",
    options: [
      { label: "Plan three moves ahead and guide everyone calmly.", weights: { krishna: 2, yudhishthira: 1 } },
      { label: "Step forward and confront it head-on.", weights: { arjuna: 2, abhimanyu: 1 } },
      { label: "Protect the people you love before anything else.", weights: { kunti: 2, bhishma: 1 } },
      { label: "Speak the truth, even if it costs you.", weights: { draupadi: 2, karna: 1 } },
    ],
  },
  {
    q: "Your closest friends would describe you as…",
    options: [
      { label: "The wise one — quietly seeing what others miss.", weights: { krishna: 2, kunti: 1 } },
      { label: "The brave one — first to act, last to back down.", weights: { arjuna: 1, abhimanyu: 2 } },
      { label: "The fair one — always weighing right and wrong.", weights: { yudhishthira: 2, bhishma: 1 } },
      { label: "The fierce one — fire that won't be silenced.", weights: { draupadi: 2, karna: 1 } },
    ],
  },
  {
    q: "What matters most to you in life?",
    options: [
      { label: "Dharma — doing what is truly right.", weights: { yudhishthira: 2, bhishma: 1 } },
      { label: "Loyalty — standing by your people, always.", weights: { karna: 2, bhishma: 1 } },
      { label: "Mastery — sharpening your craft every day.", weights: { arjuna: 2, abhimanyu: 1 } },
      { label: "Wisdom — understanding the deeper pattern.", weights: { krishna: 2, kunti: 1 } },
    ],
  },
  {
    q: "When someone wrongs you, you…",
    options: [
      { label: "Forgive, but never forget the lesson.", weights: { kunti: 2, yudhishthira: 1 } },
      { label: "Speak up boldly and demand justice.", weights: { draupadi: 2, arjuna: 1 } },
      { label: "Quietly outwit them with strategy.", weights: { krishna: 2 } },
      { label: "Repay them only with generosity and dignity.", weights: { karna: 2, bhishma: 1 } },
    ],
  },
  {
    q: "Your greatest strength is…",
    options: [
      { label: "Vision — seeing what others cannot yet see.", weights: { krishna: 2 } },
      { label: "Discipline — turning practice into power.", weights: { arjuna: 2, abhimanyu: 1 } },
      { label: "Courage — refusing to be broken.", weights: { draupadi: 2, abhimanyu: 1 } },
      { label: "Devotion — loving and protecting fiercely.", weights: { kunti: 2, bhishma: 1, karna: 1 } },
    ],
  },
  {
    q: "Faced with an impossible choice, you…",
    options: [
      { label: "Choose the path of truth, whatever it costs.", weights: { yudhishthira: 2, draupadi: 1 } },
      { label: "Choose loyalty — you stand with your own.", weights: { karna: 2, bhishma: 1 } },
      { label: "Choose action — hesitation loses wars.", weights: { abhimanyu: 2, arjuna: 1 } },
      { label: "Choose the wiser long view, not the easy now.", weights: { krishna: 2, kunti: 1 } },
    ],
  },
  {
    q: "What would your final words to the world be?",
    options: [
      { label: "Walk in dharma. The rest will follow.", weights: { yudhishthira: 2, bhishma: 1 } },
      { label: "Be brave. Fear is the only true enemy.", weights: { abhimanyu: 2, arjuna: 1 } },
      { label: "Give more than you take. Always.", weights: { karna: 2, kunti: 1 } },
      { label: "See clearly. Then act without doubt.", weights: { krishna: 2, draupadi: 1 } },
    ],
  },
];
