import ch1 from "@/assets/mahabharata/ch1.png.asset.json";
import ch2 from "@/assets/mahabharata/ch2.png.asset.json";
import ch3 from "@/assets/mahabharata/ch3.png.asset.json";
import ch4 from "@/assets/mahabharata/ch4.png.asset.json";
import ch5 from "@/assets/mahabharata/ch5.png.asset.json";
import ch6 from "@/assets/mahabharata/ch6.png.asset.json";
import ch7 from "@/assets/mahabharata/ch7.png.asset.json";
import ch8 from "@/assets/mahabharata/ch8.png.asset.json";

export type EffectKind =
  | "petals-pollen"
  | "dice"
  | "divine-fabric"
  | "leaves"
  | "sun-rays"
  | "galaxy"
  | "arrows"
  | "confetti";

export type ChapterData = {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  image: string;
  effect: EffectKind;
  mood: string[];
  questions: { q: string; options: string[]; answer: number }[];
};

export const CHAPTERS_DATA: ChapterData[] = [
  {
    id: "ch1",
    num: "I",
    title: "Mahabharata",
    subtitle: "The greatest story ever told.",
    image: ch1.url,
    effect: "petals-pollen",
    mood: ["Royal", "Grand", "Majestic"],
    questions: [
      { q: "Who is traditionally credited as the author of the Mahabharata?", options: ["Valmiki", "Vyasa", "Tulsidas", "Kalidasa"], answer: 1 },
      { q: "How many parvas (books) make up the Mahabharata?", options: ["12", "16", "18", "24"], answer: 2 },
      { q: "Who was the common ancestor of the Kauravas and Pandavas?", options: ["Bharata", "Shantanu", "Bhishma", "Kuru"], answer: 1 },
      { q: "Who took the terrible vow of lifelong celibacy?", options: ["Drona", "Bhishma", "Vidura", "Karna"], answer: 1 },
      { q: "Which river gave birth to Bhishma?", options: ["Yamuna", "Saraswati", "Ganga", "Sindhu"], answer: 2 },
      { q: "Who is the wise half-brother that often counsels the Kuru court?", options: ["Vidura", "Sanjaya", "Kripa", "Shakuni"], answer: 0 },
      { q: "The Mahabharata is sometimes called the fifth what?", options: ["Purana", "Veda", "Upanishad", "Sutra"], answer: 1 },
    ],
  },
  {
    id: "ch2",
    num: "II",
    title: "The Dice Game",
    subtitle: "One throw. A dynasty wagered.",
    image: ch2.url,
    effect: "dice",
    mood: ["Tension", "Destiny", "Suspense"],
    questions: [
      { q: "Who rolled the loaded dice on behalf of Duryodhana?", options: ["Karna", "Dushasana", "Shakuni", "Drona"], answer: 2 },
      { q: "What did Yudhishthira finally stake and lose last?", options: ["His kingdom", "His brothers and Draupadi", "His weapons", "His chariot"], answer: 1 },
      { q: "Who dragged Draupadi into the court by her hair?", options: ["Duryodhana", "Karna", "Dushasana", "Shakuni"], answer: 2 },
      { q: "Who miraculously protected Draupadi's honor in the court?", options: ["Bhishma", "Krishna", "Vidura", "Drona"], answer: 1 },
      { q: "How many years of exile were imposed after the second dice game?", options: ["10", "12", "13", "14"], answer: 1 },
      { q: "How many years of incognito living followed the forest exile?", options: ["1", "2", "3", "5"], answer: 0 },
      { q: "Who openly condemned the dice game in the assembly?", options: ["Vidura", "Karna", "Duryodhana", "Ashwatthama"], answer: 0 },
    ],
  },
  {
    id: "ch3",
    num: "III",
    title: "Krishna's Vow",
    subtitle: "When faith is tested, the divine answers.",
    image: ch3.url,
    effect: "divine-fabric",
    mood: ["Faith", "Hope", "Protection"],
    questions: [
      { q: "Whose endless saree saved Draupadi in the court?", options: ["Shiva's", "Krishna's", "Indra's", "Vishnu's"], answer: 1 },
      { q: "What did Draupadi call out when she had no other help?", options: ["Govinda", "Shiva", "Rama", "Bhima"], answer: 0 },
      { q: "Krishna is an avatar of which deity?", options: ["Brahma", "Shiva", "Vishnu", "Indra"], answer: 2 },
      { q: "Krishna belonged to which clan?", options: ["Yadava", "Kuru", "Panchala", "Magadha"], answer: 0 },
      { q: "Which city did Krishna rule as king?", options: ["Mathura", "Dwarka", "Hastinapura", "Indraprastha"], answer: 1 },
      { q: "What vow did Bhima take regarding Dushasana?", options: ["To exile him", "To drink his blood", "To forgive him", "To enslave him"], answer: 1 },
      { q: "Krishna's promise of protection is a central theme of which idea?", options: ["Karma", "Sharanagati (surrender)", "Moksha", "Yajna"], answer: 1 },
    ],
  },
  {
    id: "ch4",
    num: "IV",
    title: "The Exile",
    subtitle: "Thirteen years in the forest.",
    image: ch4.url,
    effect: "leaves",
    mood: ["Journey", "Sacrifice", "Perseverance"],
    questions: [
      { q: "What magical vessel did Surya give Yudhishthira during exile?", options: ["Akshaya Patra", "Kamandalu", "Sudarshana", "Pashupata"], answer: 0 },
      { q: "Which weapon did Arjuna obtain from Shiva after a duel?", options: ["Brahmastra", "Pashupatastra", "Narayanastra", "Vajra"], answer: 1 },
      { q: "In which kingdom did the Pandavas spend their year of disguise?", options: ["Panchala", "Magadha", "Matsya", "Kashi"], answer: 2 },
      { q: "What name did Arjuna take in disguise?", options: ["Kanka", "Vallabha", "Brihannala", "Granthika"], answer: 2 },
      { q: "Who tried to abduct Draupadi in the forest and was punished?", options: ["Jayadratha", "Jarasandha", "Kichaka", "Shishupala"], answer: 0 },
      { q: "Which Yaksha questioned Yudhishthira at the lake?", options: ["Yama in disguise", "Indra in disguise", "Varuna in disguise", "Agni in disguise"], answer: 0 },
      { q: "Who killed Kichaka during the incognito year?", options: ["Arjuna", "Bhima", "Nakula", "Sahadeva"], answer: 1 },
    ],
  },
  {
    id: "ch5",
    num: "V",
    title: "The Counsel",
    subtitle: "When the divine takes the reins.",
    image: ch5.url,
    effect: "sun-rays",
    mood: ["Wisdom", "Guidance", "Revelation"],
    questions: [
      { q: "What role did Krishna take in Arjuna's chariot?", options: ["Archer", "Charioteer", "Commander", "Messenger"], answer: 1 },
      { q: "The Bhagavad Gita is a dialogue between Arjuna and whom?", options: ["Vyasa", "Krishna", "Bhishma", "Yudhishthira"], answer: 1 },
      { q: "How many chapters does the Bhagavad Gita contain?", options: ["12", "15", "18", "21"], answer: 2 },
      { q: "Arjuna's despondency is overcome by which central teaching?", options: ["Bhakti only", "Karma yoga (action without attachment)", "Renunciation of all duty", "Tantra"], answer: 1 },
      { q: "Whose army did Krishna refuse to fight with, choosing instead to advise?", options: ["Pandavas", "Kauravas", "Both equally", "Neither"], answer: 1 },
      { q: "Who chose Krishna's army over Krishna himself?", options: ["Arjuna", "Yudhishthira", "Duryodhana", "Karna"], answer: 2 },
      { q: "What form did Krishna reveal to Arjuna in the Gita?", options: ["Vamana", "Vishwarupa", "Narasimha", "Matsya"], answer: 1 },
    ],
  },
  {
    id: "ch6",
    num: "VI",
    title: "Vishwarupa",
    subtitle: "The universe revealed in one form.",
    image: ch6.url,
    effect: "galaxy",
    mood: ["Infinity", "Wonder", "Divinity"],
    questions: [
      { q: "Vishwarupa means what?", options: ["Divine weapon", "Universal form", "Celestial city", "Cosmic dance"], answer: 1 },
      { q: "Who granted Arjuna divine sight to behold the form?", options: ["Vyasa", "Krishna", "Indra", "Brahma"], answer: 1 },
      { q: "Who else famously received divine sight to narrate the war?", options: ["Vidura", "Sanjaya", "Sanjaya's son", "Drona"], answer: 1 },
      { q: "In which chapter of the Gita is Vishwarupa revealed?", options: ["9", "10", "11", "12"], answer: 2 },
      { q: "What did Krishna declare himself to be in that form?", options: ["Time, destroyer of worlds", "Wind, mover of all", "Fire, eater of offerings", "Sky, holder of all"], answer: 0 },
      { q: "How did Arjuna respond to the cosmic vision?", options: ["With laughter", "With awe and fear", "With anger", "With indifference"], answer: 1 },
      { q: "Vishwarupa is also revealed in which other epic moment to Yashoda?", options: ["When stealing butter", "When opening his mouth", "When dancing on Kaliya", "When lifting Govardhan"], answer: 1 },
    ],
  },
  {
    id: "ch7",
    num: "VII",
    title: "Kurukshetra",
    subtitle: "The battle that changed an age.",
    image: ch7.url,
    effect: "arrows",
    mood: ["War", "Destiny", "Courage"],
    questions: [
      { q: "How many days did the Kurukshetra war last?", options: ["10", "14", "18", "21"], answer: 2 },
      { q: "Who commanded the Kaurava army first?", options: ["Drona", "Karna", "Bhishma", "Shalya"], answer: 2 },
      { q: "Who killed Bhishma on the battlefield?", options: ["Arjuna using Shikhandi as a shield", "Bhima alone", "Drupada", "Dhrishtadyumna"], answer: 0 },
      { q: "Who killed Dronacharya?", options: ["Arjuna", "Dhrishtadyumna", "Bhima", "Satyaki"], answer: 1 },
      { q: "How did Karna die?", options: ["Bhima's mace", "Arjuna's arrow while his chariot was stuck", "Drowning", "Snake bite"], answer: 1 },
      { q: "Who killed Duryodhana in single combat?", options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"], answer: 2 },
      { q: "Which warrior survived by hiding in a lake at the war's end?", options: ["Ashwatthama", "Kripa", "Duryodhana", "Shakuni"], answer: 2 },
    ],
  },
  {
    id: "ch8",
    num: "VIII",
    title: "The Coronation",
    subtitle: "Dharma restored. Peace returns.",
    image: ch8.url,
    effect: "confetti",
    mood: ["Victory", "Peace", "Restoration"],
    questions: [
      { q: "Who was crowned king of Hastinapura after the war?", options: ["Arjuna", "Yudhishthira", "Bhima", "Parikshit"], answer: 1 },
      { q: "Who instructed Yudhishthira on dharma from his bed of arrows?", options: ["Drona", "Bhishma", "Vidura", "Krishna"], answer: 1 },
      { q: "Who became the heir of the Pandava line?", options: ["Abhimanyu", "Parikshit", "Babruvahana", "Ghatotkacha"], answer: 1 },
      { q: "Whose unborn child did Krishna save from Ashwatthama's weapon?", options: ["Subhadra's", "Uttara's", "Draupadi's", "Kunti's"], answer: 1 },
      { q: "What great sacrifice did Yudhishthira perform after coronation?", options: ["Rajasuya", "Ashvamedha", "Vajapeya", "Putrakameshti"], answer: 1 },
      { q: "Where did the Pandavas finally journey in their last days?", options: ["Dwarka", "The Himalayas", "Kashi", "Mathura"], answer: 1 },
      { q: "Which Pandava reached heaven in his mortal body?", options: ["Arjuna", "Bhima", "Yudhishthira", "Nakula"], answer: 2 },
    ],
  },
];

export const TITLES_BY_SCORE = [
  "Lost in the Forest",
  "Village Story Listener",
  "Young Disciple",
  "Student of Hastinapura",
  "Court Observer",
  "Keeper of Dharma",
  "Scholar of Hastinapura",
  "Mahabharata Master",
];

export function getChapter(id: string) {
  return CHAPTERS_DATA.find((c) => c.id === id);
}
