// Chapter quiz question banks — Easy / Medium / Hard sets of 7 each.
// Rotation: First attempt = Easy, each "Try Again" cycles Easy → Medium → Hard → Easy...

export type QBQuestion = { q: string; options: string[]; answer: number };

type Bank = { easy: QBQuestion[]; medium: QBQuestion[]; hard: QBQuestion[] };

export const QUESTION_BANK: Record<string, Bank> = {
  ch1: {
    easy: [
      { q: "Who is considered the patriarch whose descendants became the Kauravas and Pandavas?", options: ["Bharata", "Kuru", "Shantanu", "Janamejaya"], answer: 1 },
      { q: "Who was the father of Bhishma?", options: ["Pandu", "Dhritarashtra", "Shantanu", "Vichitravirya"], answer: 2 },
      { q: "Why was Bhishma called \"Bhishma\"?", options: ["He defeated a demon", "He wrote the Vedas", "He took a terrible vow", "He won a great war"], answer: 2 },
      { q: "Who was born blind?", options: ["Pandu", "Vidura", "Bhishma", "Dhritarashtra"], answer: 3 },
      { q: "Which sage fathered Dhritarashtra, Pandu, and Vidura through Niyoga?", options: ["Vashistha", "Vyasa", "Narada", "Parashurama"], answer: 1 },
      { q: "Which Pandava was the eldest?", options: ["Arjuna", "Bhima", "Yudhishthira", "Nakula"], answer: 2 },
      { q: "Draupadi emerged from a:", options: ["Lotus flower", "River", "Sacred Fire", "Mountain cave"], answer: 2 },
    ],
    medium: [
      { q: "Vidura is often regarded as the wisest advisor in the Mahabharata. Why was he denied the throne?", options: ["He was too young", "He chose a spiritual life", "He was born to a maidservant", "He refused kingship"], answer: 2 },
      { q: "What was the main reason Pandu could not have children naturally?", options: ["He was exiled", "A sage cursed him", "He became blind", "He renounced the throne"], answer: 1 },
      { q: "Which divine quality is most associated with Yudhishthira because of his celestial father?", options: ["Strength", "Wisdom and Justice", "Beauty", "Speed"], answer: 1 },
      { q: "Which Pandava brothers shared the same divine father, the Ashwini Kumaras?", options: ["Yudhishthira and Bhima", "Bhima and Arjuna", "Nakula and Sahadeva", "Arjuna and Nakula"], answer: 2 },
      { q: "Duryodhana's jealousy began largely because:", options: ["Bhima insulted him", "The Pandavas were more popular and capable", "Krishna favored Arjuna", "Bhishma chose Yudhishthira as king immediately"], answer: 1 },
      { q: "At Draupadi's swayamvara, contestants had to:", options: ["Lift a mountain", "Defeat five warriors", "Hit a rotating target by looking at its reflection", "Solve a riddle"], answer: 2 },
      { q: "Why did Draupadi eventually marry all five Pandavas?", options: ["Krishna ordered it", "Bhishma commanded it", "Kunti unknowingly instructed her sons to share what they had brought home", "Draupadi requested it"], answer: 2 },
    ],
    hard: [
      { q: "Which leadership lesson can be drawn from Bhishma's vow?", options: ["Every promise should be kept regardless of consequences", "Personal sacrifice always guarantees success", "Even noble decisions can create long-term unintended consequences", "Family loyalty solves every conflict"], answer: 2 },
      { q: "Why was Yudhishthira considered the strongest candidate for future kingship despite not being the eldest son of Dhritarashtra?", options: ["He had the largest army", "He was Krishna's cousin", "He combined legitimacy, virtue, and public trust", "He was the best archer"], answer: 2 },
      { q: "What political weakness existed in the Kuru dynasty before the main conflict began?", options: ["Lack of wealth", "External invasions", "Unclear succession and competing claims to the throne", "Religious disputes"], answer: 2 },
      { q: "Which of the following best explains why the birth stories of the Pandavas are significant?", options: ["They are purely symbolic myths with no purpose", "They connect each Pandava to a distinct virtue or capability represented by a deity", "They explain military tactics", "They prove the gods ruled Hastinapura directly"], answer: 1 },
      { q: "Imagine Vidura had become king. Which quality would likely have most benefited the kingdom?", options: ["Physical strength", "Strategic deception", "Ethical governance and wise counsel", "Military conquest"], answer: 2 },
      { q: "Who indirectly influenced the future war the most through a decision that seemed noble at the time?", options: ["Bhima", "Bhishma", "Nakula", "Drona"], answer: 1 },
      { q: "Which statement best captures the deeper theme of the Mahabharata's introduction?", options: ["Power belongs to the strongest warrior", "Fate alone determines outcomes", "Personal choices, vows, ambitions, and duties interact to shape history", "Royal birth guarantees success"], answer: 2 },
    ],
  },
  ch2: {
    easy: [
      { q: "What was the name of the magnificent capital city built by the Pandavas?", options: ["Hastinapura", "Mathura", "Indraprastha", "Dwaraka"], answer: 2 },
      { q: "Who designed the grand illusion-filled palace of the Pandavas?", options: ["Vishwakarma", "Maya Danava", "Narada", "Drona"], answer: 1 },
      { q: "During his visit to the palace, what mistake embarrassed Duryodhana?", options: ["He sat on the king's throne", "He mistook water for a floor and fell in", "He lost a duel", "He forgot royal protocol"], answer: 1 },
      { q: "What was the purpose of Yudhishthira's Rajasuya sacrifice?", options: ["To choose a bride", "To gain divine weapons", "To establish imperial sovereignty", "To end a drought"], answer: 2 },
      { q: "Who convinced Duryodhana that the Pandavas must be defeated through a dice game?", options: ["Karna", "Bhishma", "Shakuni", "Drona"], answer: 2 },
      { q: "Before the dice game, Shakuni's earlier plan to eliminate the Pandavas involved:", options: ["Poisoning a river", "A fire trap in a lacquer house", "Poisoning food", "Starting a war"], answer: 1 },
      { q: "Where did Krishna spend much of his childhood?", options: ["Hastinapura", "Dwaraka", "Gokula and Vrindavan", "Indraprastha"], answer: 2 },
    ],
    medium: [
      { q: "Why did Duryodhana become deeply jealous after visiting Indraprastha?", options: ["Arjuna defeated him", "He lost a gambling match", "The Pandavas' success and prosperity overshadowed him", "Krishna insulted him"], answer: 2 },
      { q: "What made Shakuni especially dangerous during the dice game?", options: ["Physical strength", "Control over a large army", "Mastery of manipulation and loaded dice", "Magical powers"], answer: 2 },
      { q: "The House of Lac (Lakshagriha) was mainly constructed from:", options: ["Stone", "Gold", "Lacquer and flammable materials", "Iron"], answer: 2 },
      { q: "What leadership quality did Yudhishthira fail to exercise during the dice game?", options: ["Courage", "Compassion", "Self-control and risk assessment", "Loyalty"], answer: 2 },
      { q: "Which relationship is most associated with Krishna's youthful life in Vrindavan?", options: ["Draupadi", "Rukmini", "Radha", "Subhadra"], answer: 2 },
      { q: "Why did the Pandavas survive the House of Lac conspiracy?", options: ["Krishna warned them", "Vidura secretly alerted them and they escaped through a tunnel", "Bhima extinguished the fire", "Shakuni changed his mind"], answer: 1 },
      { q: "What was Shakuni's primary goal in proposing the dice game?", options: ["To entertain the royal family", "To test Yudhishthira's wisdom", "To strip the Pandavas of power without open warfare", "To make peace between cousins"], answer: 2 },
    ],
    hard: [
      { q: "Which modern leadership lesson best emerges from the House of Lac incident?", options: ["Trust everyone equally", "Ignore warnings from advisors", "Strategic awareness can prevent disaster", "Strength is the only protection"], answer: 2 },
      { q: "Why is the dice game often viewed as more than a simple gambling match?", options: ["It was legally required", "It exposed weaknesses in judgment, ethics, and governance", "It settled all succession disputes", "It determined military rankings"], answer: 1 },
      { q: "Which psychological tactic did Shakuni use most effectively?", options: ["Fear of punishment", "Flattery and emotional manipulation of Duryodhana's jealousy", "Military threats", "Religious pressure"], answer: 1 },
      { q: "Suppose Yudhishthira had refused to play despite social pressure. Which leadership principle would he have demonstrated?", options: ["Defiance of all traditions", "Recklessness", "The ability to reject harmful expectations", "Weakness"], answer: 2 },
      { q: "What deeper theme connects the House of Lac and the dice game?", options: ["Nature versus technology", "Hidden threats disguised as opportunities", "Wealth versus poverty", "Religion versus politics"], answer: 1 },
      { q: "Krishna's youthful stories in Vrindavan are often interpreted as teaching:", options: ["Only military strategy", "Love, devotion, joy, and divine connection", "Royal administration", "Economic policy"], answer: 1 },
      { q: "Which statement best summarizes the events leading up to Draupadi's humiliation in the royal court?", options: ["Military defeat weakened the Pandavas", "A series of poor decisions, unchecked jealousy, and manipulation created a moral crisis", "Foreign invaders caused unrest", "Natural disasters destabilized the kingdom"], answer: 1 },
    ],
  },
  ch3: {
    easy: [
      { q: "When Draupadi was dragged into the royal assembly, what question did she repeatedly ask?", options: ["\"Who will rule Hastinapura?\"", "\"Did Yudhishthira lose himself before or after staking me?\"", "\"Where is Krishna?\"", "\"Who invited Shakuni?\""], answer: 1 },
      { q: "Who physically attempted to pull Draupadi into the assembly?", options: ["Karna", "Duryodhana", "Dushasana", "Shakuni"], answer: 2 },
      { q: "Which Kaurava openly objected to the treatment of Draupadi?", options: ["Duryodhana", "Vikarna", "Dushasana", "Ashwatthama"], answer: 1 },
      { q: "Who made a terrible vow to punish Dushasana for his actions against Draupadi?", options: ["Arjuna", "Nakula", "Bhima", "Sahadeva"], answer: 2 },
      { q: "Which Pandava was known for controlling his emotions during the crisis?", options: ["Bhima", "Arjuna", "Yudhishthira", "Nakula"], answer: 2 },
      { q: "Before becoming deeply involved in the Mahabharata conflict, Krishna was primarily known as:", options: ["A king and strategist of Dwaraka", "A forest sage", "A commander of Hastinapura", "A minister of Magadha"], answer: 0 },
      { q: "What punishment did the Pandavas ultimately receive after losing the final dice game?", options: ["Imprisonment", "Exile and incognito living", "Loss of citizenship", "Military service"], answer: 1 },
    ],
    medium: [
      { q: "Which elder strongly criticized the events in the assembly but lacked the authority to stop them completely?", options: ["Vidura", "Drona", "Karna", "Kripa"], answer: 0 },
      { q: "Why is Vikarna's role in the dice hall significant?", options: ["He defeated Bhima", "He challenged the injustice despite being a Kaurava", "He supported Duryodhana's actions", "He exposed Shakuni's dice"], answer: 1 },
      { q: "According to many traditions, why did Krishna later take Draupadi's suffering so seriously?", options: ["Because he wanted the throne", "Because he viewed the humiliation as a violation of dharma and promised justice", "Because Bhishma ordered him to act", "Because he feared Duryodhana"], answer: 1 },
      { q: "What personal weakness of Yudhishthira did Shakuni exploit most effectively?", options: ["Pride", "Anger", "Commitment to honor invitations and gambling customs", "Fear of battle"], answer: 2 },
      { q: "What is one commonly cited reason for Shakuni's hatred toward the Kuru dynasty?", options: ["He lost a kingdom in battle", "He believed his family had been mistreated by the Kurus", "He wanted Krishna's kingdom", "He envied Bhishma's power"], answer: 1 },
      { q: "During the planning of the Agnyatavas (incognito year), what was the Pandavas' greatest concern?", options: ["Finding treasure", "Avoiding recognition for an entire year", "Building an army", "Capturing Hastinapura"], answer: 1 },
      { q: "Why was Krishna's arrival into the main Mahabharata storyline important?", options: ["He brought a larger army", "He connected personal devotion with political and moral guidance", "He replaced Bhishma as leader", "He became king of Hastinapura"], answer: 1 },
    ],
    hard: [
      { q: "Which leadership lesson emerges from Vidura's actions in the dice hall?", options: ["Loyalty should always come before ethics", "Speaking the truth may not always change events, but it preserves integrity", "Silence is the safest option", "Wisdom guarantees success"], answer: 1 },
      { q: "Why is Draupadi's question about whether Yudhishthira had the right to stake her considered legally sophisticated?", options: ["It focused on military law", "It challenged the very validity of the wager itself", "It questioned royal taxes", "It disputed inheritance rules"], answer: 1 },
      { q: "Which psychological mistake contributed most to the disaster of the dice game?", options: ["Lack of intelligence", "Overconfidence that rules alone would ensure fairness", "Lack of wealth", "Fear of criticism"], answer: 1 },
      { q: "Bhima's vows after Draupadi's humiliation demonstrate which aspect of human behavior?", options: ["Strategic diplomacy", "The transformation of anger into long-term commitment", "Political neutrality", "Economic planning"], answer: 1 },
      { q: "Why is Shakuni often viewed as one of the most dangerous characters in the Mahabharata?", options: ["He was the strongest warrior", "He won every battle himself", "He weaponized intelligence, resentment, and manipulation", "He possessed divine weapons"], answer: 2 },
      { q: "If you analyze the dice hall incident as a governance failure, what was the biggest problem?", options: ["Lack of military power", "Too many advisors", "Good people failed to effectively stop wrongdoing in time", "Poor economic policy"], answer: 2 },
      { q: "Which statement best captures the significance of the decision to enter Agnyatavas?", options: ["It was simply a punishment", "It was a strategic pause that required patience, discipline, and adaptability", "It was a military campaign", "It ended the conflict permanently"], answer: 1 },
    ],
  },
  ch4: {
    easy: [
      { q: "For how many years were the Pandavas required to live in exile after losing the dice game?", options: ["10 years (+1 year Incognito mode)", "12 years (+1 year Incognito mode)", "14 years (+1 year Incognito mode)", "15 years (+1 year Incognito mode)"], answer: 1 },
      { q: "During the Agnyatavas, under what name did Yudhishthira serve in King Virata's court?", options: ["Vallabha", "Brihannala", "Kanka", "Granthika"], answer: 2 },
      { q: "Which Pandava disguised himself as a dance and music teacher?", options: ["Bhima", "Arjuna", "Nakula", "Sahadeva"], answer: 1 },
      { q: "Who was Kichaka?", options: ["A minister of Hastinapura", "Commander of King Virata's army", "A friend of Krishna", "A Gandharva king"], answer: 1 },
      { q: "Why did Kichaka become a major threat during the Agnyatavas?", options: ["He discovered the Pandavas' identities", "He wanted Virata's throne", "He lusted after Draupadi and harassed her", "He challenged Arjuna to a duel"], answer: 2 },
      { q: "Who secretly killed Kichaka?", options: ["Arjuna", "Yudhishthira", "Bhima", "Krishna"], answer: 2 },
      { q: "Who was Karna's biological mother?", options: ["Gandhari", "Kunti", "Draupadi", "Radha"], answer: 1 },
    ],
    medium: [
      { q: "During Agnyatavas, Draupadi served Queen Sudeshna under what name?", options: ["Sairandhri", "Malini", "Rohini", "Charumati"], answer: 0 },
      { q: "Why was Arjuna able to live as Brihannala?", options: ["He lost a wager", "He was under a curse that could be used beneficially during exile", "Krishna instructed him to do so", "He wished to avoid warfare"], answer: 1 },
      { q: "What leadership lesson can be learned from the Pandavas' disguises?", options: ["Great leaders must always display power openly", "Adaptability can be as important as strength", "Secrecy is always superior to honesty", "Leaders should avoid difficult situations"], answer: 1 },
      { q: "What was Kichaka's fatal mistake?", options: ["Underestimating Bhima's loyalty to Draupadi", "Challenging Arjuna", "Insulting Krishna", "Betraying Duryodhana"], answer: 0 },
      { q: "Who raised Karna after he was found in a basket?", options: ["Bhishma and Ganga", "Adhiratha and Radha", "Drona and Kripi", "Dhritarashtra and Gandhari"], answer: 1 },
      { q: "What divine protection did Karna receive at birth from Surya?", options: ["A celestial bow", "An immortal sword", "Natural armor and earrings (Kavacha-Kundala)", "A magical chariot"], answer: 2 },
      { q: "Which woman is most commonly recognized as Karna's wife in later traditions?", options: ["Bhanumati", "Vrushali", "Subhadra", "Ulupi"], answer: 1 },
    ],
    hard: [
      { q: "Why was the Agnyatavas arguably more difficult than the forest exile?", options: ["The Pandavas lacked food", "They had to hide their identities while living among people who knew them", "They had no weapons", "They were separated from one another"], answer: 1 },
      { q: "What broader theme does the Kichaka episode highlight?", options: ["The dangers of unchecked power and abuse of authority", "The importance of wealth", "The value of military expansion", "The superiority of kings over generals"], answer: 0 },
      { q: "If Kichaka had exposed the Pandavas before the Agnyatavas ended, what would have happened?", options: ["The exile would immediately end", "The Pandavas would gain a kingdom", "They would have to repeat the exile period according to the agreement", "Krishna would become king"], answer: 2 },
      { q: "Why is Karna's life often considered tragic?", options: ["He lacked talent", "He never fought in battle", "He possessed greatness but was denied recognition of his true birth and faced difficult loyalties", "He refused all opportunities for success"], answer: 2 },
      { q: "What strategic quality did the Pandavas demonstrate throughout Agnyatavas?", options: ["Impulsiveness", "Patience and discipline", "Ruthlessness", "Isolation"], answer: 1 },
      { q: "Which event officially marked the successful completion of the Agnyatavas?", options: ["Krishna's arrival in Virata", "Bhima defeating Kichaka", "The Pandavas revealed themselves after remaining undiscovered for the required period", "Karna learning the truth about his birth"], answer: 2 },
      { q: "Karna's natural armor (Kavacha) and earrings (Kundala) symbolize which leadership principle?", options: ["Talent alone guarantees success", "Everyone begins life with different advantages, but character determines how those advantages are used", "Wealth is the key to power", "Destiny cannot be changed"], answer: 1 },
    ],
  },
  ch5: {
    easy: [
      { q: "After the Pandavas completed their exile, what was their initial demand?", options: ["The entire kingdom immediately", "A duel with Duryodhana", "The return of their rightful share of the kingdom", "Control of Dwaraka"], answer: 2 },
      { q: "When both Arjuna and Duryodhana approached Krishna before the war, what choice did Krishna offer?", options: ["Gold or weapons", "His army or himself (unarmed)", "Dwaraka or Mathura", "Peace or war"], answer: 1 },
      { q: "Whom did Duryodhana choose for the Kurukshetra: The Great War?", options: ["Krishna as his charioteer", "Krishna's wisdom", "Krishna's Narayani Sena (army)", "Neutrality"], answer: 2 },
      { q: "Whom did Arjuna choose for the Kurukshetra: The Great War?", options: ["Krishna as his charioteer", "Krishna's wisdom", "Krishna's Narayani Sena (army)", "Neutrality"], answer: 0 },
      { q: "What was the name of Krishna's conch?", options: ["Devadatta", "Paundra", "Anantavijaya", "Panchajanya"], answer: 3 },
      { q: "What was the name of Arjuna's famous bow?", options: ["Vijaya", "Gandiva", "Sharanga", "Kodanda"], answer: 1 },
      { q: "Who was Abhimanyu?", options: ["Bhima's son", "Arjuna's son", "Nakula's son", "Duryodhana's son"], answer: 1 },
    ],
    medium: [
      { q: "Who went as a peace messenger to the Kaurava court before the war?", options: ["Bhishma", "Vidura", "Krishna", "Arjuna"], answer: 2 },
      { q: "What was Krishna's final compromise proposal to avoid war?", options: ["Half the kingdom", "One city", "Five villages for the Pandavas", "A temporary truce"], answer: 2 },
      { q: "Why did Krishna's peace mission fail?", options: ["The Pandavas rejected peace", "Bhishma opposed it", "Duryodhana refused to give even a small amount of land", "Arjuna demanded war"], answer: 2 },
      { q: "What was the name of Arjuna and Krishna's chariot?", options: ["Pushpaka", "Nandighosha", "Suparna", "Garudadhvaja"], answer: 1 },
      { q: "What symbol flew on Arjuna's chariot flag?", options: ["Garuda", "Lion", "Hanuman", "Eagle"], answer: 2 },
      { q: "Why is Abhimanyu often admired even before his famous battlefield exploits?", options: ["He became king at a young age", "He was known for courage, discipline, and mastery of warfare from youth", "He defeated Bhishma", "He led Krishna's army"], answer: 1 },
      { q: "Which quality did Krishna demonstrate by repeatedly attempting peace before war?", options: ["Fear", "Weakness", "Diplomacy and responsibility", "Indecision"], answer: 2 },
    ],
    hard: [
      { q: "What strategic mistake did Duryodhana make when choosing Krishna's army over Krishna himself?", options: ["He underestimated the value of wisdom and leadership", "He chose too few soldiers", "He trusted Bhishma", "He ignored Karna"], answer: 0 },
      { q: "Why is Krishna's peace mission considered a significant leadership lesson?", options: ["Success is guaranteed through negotiation", "Leaders should exhaust peaceful options before conflict", "Wars should always be avoided regardless of justice", "Diplomacy is more important than principles"], answer: 1 },
      { q: "On the battlefield, what caused Arjuna's emotional crisis?", options: ["Fear of defeat", "Lack of weapons", "Seeing relatives, teachers, and friends on both sides of the war", "A disagreement with Krishna"], answer: 2 },
      { q: "Which question best captures Arjuna's dilemma before the Bhagavad Gita begins?", options: ["\"How can I win?\"", "\"How can I gain more power?\"", "\"Is it right to fight those whom I love and respect?\"", "\"Who will become king?\""], answer: 2 },
      { q: "What deeper lesson can be learned from Arjuna choosing Krishna instead of the larger army?", options: ["Numbers always determine success", "Character and guidance can outweigh material advantages", "Luck decides everything", "Power is more important than wisdom"], answer: 1 },
      { q: "Which of the following best explains why the Bhagavad Gita begins on a battlefield?", options: ["Krishna wanted to delay the war", "Important moral decisions often arise during life's greatest conflicts", "Arjuna forgot military tactics", "The armies were not prepared"], answer: 1 },
      { q: "Which statement best summarizes the period from the end of exile to Arjuna's doubts on the battlefield?", options: ["A story of military preparations only", "A journey from diplomacy to moral conflict, where every peaceful solution was attempted before war became unavoidable", "A competition for wealth", "A struggle between different kingdoms with no ethical questions involved"], answer: 1 },
    ],
  },
  ch6: {
    easy: [
      { q: "Why did Krishna reveal his divine nature to Arjuna?", options: ["To impress the armies", "To remove Arjuna's doubt and help him understand the truth", "To frighten Duryodhana", "To stop the war immediately"], answer: 1 },
      { q: "According to Krishna's teachings, what is the true nature of the soul (Atman)?", options: ["It is born and dies with the body", "It changes every day", "It is eternal and cannot be destroyed", "It belongs only to kings"], answer: 2 },
      { q: "Krishna teaches that a person should focus on:", options: ["Fame and recognition", "Wealth above all else", "Performing their duty sincerely", "Defeating others"], answer: 2 },
      { q: "Which quality does Krishna repeatedly praise?", options: ["Arrogance", "Humility", "Revenge", "Jealousy"], answer: 1 },
      { q: "According to the Gita, who is closest to God?", options: ["The richest person", "The strongest warrior", "One who is devoted, sincere, and pure-hearted", "The most famous person"], answer: 2 },
      { q: "Krishna teaches that all living beings are:", options: ["Competitors", "Separate and unrelated", "Part of the same divine reality", "Controlled by luck alone"], answer: 2 },
      { q: "What is one of the biggest obstacles to wisdom according to Krishna?", options: ["Curiosity", "Selfless service", "Ego and pride", "Hard work"], answer: 2 },
    ],
    medium: [
      { q: "What does Krishna mean when he says he is present in all beings?", options: ["Everyone has the same personality", "The divine exists within all life forms", "Everyone becomes a god", "Nobody is unique"], answer: 1 },
      { q: "Which action best reflects Krishna's teaching of Karma Yoga?", options: ["Helping others without expecting rewards", "Working only when praised", "Avoiding responsibility", "Seeking personal glory"], answer: 0 },
      { q: "According to Krishna, what happens when desire becomes uncontrolled?", options: ["It leads to peace", "It improves wisdom", "It can lead to anger, confusion, and poor decisions", "It guarantees success"], answer: 2 },
      { q: "Which of the following best represents devotion (Bhakti)?", options: ["Blind belief without understanding", "Loving remembrance and sincere surrender to the Divine", "Fear of punishment", "Avoiding society"], answer: 1 },
      { q: "Krishna teaches that a wise person remains:", options: ["Calm in success and failure", "Excited only during victory", "Angry when criticized", "Dependent on praise"], answer: 0 },
      { q: "What is the deeper meaning of seeing Krishna in everyone?", options: ["Treat every person with dignity and respect", "Trust everyone blindly", "Avoid all competition", "Ignore wrongdoing"], answer: 0 },
      { q: "Which modern habit best matches Krishna's teachings?", options: ["Constant comparison with others", "Seeking validation on social media", "Self-improvement while serving others", "Blaming others for failures"], answer: 2 },
    ],
    hard: [
      { q: "Krishna teaches that true strength comes from:", options: ["Physical power alone", "Wealth and influence", "Mastery over one's own mind and senses", "Political authority"], answer: 2 },
      { q: "If all beings contain the divine spark, what ethical lesson follows?", options: ["Only family deserves kindness", "Compassion should extend to all beings", "Power determines morality", "Success is more important than character"], answer: 1 },
      { q: "What is the difference between confidence and ego according to the spirit of the Gita?", options: ["There is no difference", "Confidence trusts God and effort; ego worships itself", "Ego is always useful", "Confidence requires arrogance"], answer: 1 },
      { q: "Krishna's teachings suggest that the purpose of knowledge is:", options: ["To win arguments", "To gain superiority over others", "To transform one's character and actions", "To impress society"], answer: 2 },
      { q: "Which statement best captures Krishna's view of success?", options: ["Success means defeating opponents", "Success means becoming famous", "Success is acting rightly regardless of the outcome", "Success is accumulating wealth"], answer: 2 },
      { q: "Why does Krishna encourage Arjuna to rise above fear?", options: ["Fear is always irrational", "Fear disappears automatically", "Fear often comes from forgetting one's higher purpose and true nature", "Warriors should never feel emotions"], answer: 2 },
      { q: "Which statement best summarizes the spiritual message Krishna gives to Arjuna?", options: ["Win at any cost", "Follow your duty, control your mind, act selflessly, and remember the Divine in all things", "Avoid all responsibilities", "Seek power over others"], answer: 1 },
    ],
  },
  ch7: {
    easy: [
      { q: "Who narrated the events of the Kurukshetra War to the blind king Dhritarashtra?", options: ["Vidura", "Krishna", "Sanjaya", "Bhishma"], answer: 2 },
      { q: "Which young warrior entered the Chakravyuha formation knowing only how to enter, not exit?", options: ["Ghatotkacha", "Iravan", "Abhimanyu", "Satyaki"], answer: 2 },
      { q: "Abhimanyu was the son of:", options: ["Bhima and Hidimba", "Arjuna and Subhadra", "Yudhishthira and Draupadi", "Nakula and Karenumati"], answer: 1 },
      { q: "Who was carrying Abhimanyu's child when he was killed in the war?", options: ["Draupadi", "Uttara", "Subhadra", "Gandhari"], answer: 1 },
      { q: "Who was the first commander of the Kaurava army?", options: ["Drona", "Karna", "Bhishma", "Ashwatthama"], answer: 2 },
      { q: "Who was Bhima's mighty Rakshasa son?", options: ["Barbarika", "Ghatotkacha", "Ekalavya", "Shalya"], answer: 1 },
      { q: "Where did Duryodhana hide after most of the Kaurava army was destroyed?", options: ["A cave", "A forest", "A lake", "A temple"], answer: 2 },
    ],
    medium: [
      { q: "How was Shikandi able to participate in the war despite being born female?", options: ["Krishna gave magical powers", "Disguised and lived as a male warrior", "Bhishma allowed it specially", "Drona trained only women"], answer: 1 },
      { q: "Why did Bhishma refuse to fight Shikandi with full force?", options: ["Shikandi was too powerful", "Bhishma recognized Shikandi's previous identity and would not attack them", "Krishna ordered him not to", "Shikandi was his student"], answer: 1 },
      { q: "What strategy was used to bring down Dronacharya?", options: ["A direct duel with Arjuna", "Telling him that \"Ashwatthama is dead,\" causing him to lose the will to fight", "A secret weapon", "Bhima defeated him in mace combat"], answer: 1 },
      { q: "Which character best represents the idea that one person's sacrifice can shape the future of an entire civilization?", options: ["Shakuni", "Duryodhana", "Uttara", "Dushasana"], answer: 2 },
      { q: "What was Bhishma's final wish after falling on the bed of arrows?", options: ["To return to Hastinapura", "To choose the time of his death and wait for an auspicious moment", "To become king", "To fight one last battle"], answer: 1 },
      { q: "Why was Ghatotkacha especially valuable during the night battles?", options: ["He had the largest army", "His magical powers created confusion and devastation among the Kauravas", "He commanded elephants", "He possessed Krishna's weapons"], answer: 1 },
      { q: "What leadership lesson can be learned from Sanjaya's role?", options: ["Information and truth are powerful responsibilities", "Strength matters more than knowledge", "Kings should never seek advice", "Messages should be hidden from leaders"], answer: 0 },
    ],
    hard: [
      { q: "Why is Abhimanyu's story often studied beyond the battlefield?", options: ["It teaches blind obedience", "It demonstrates courage, preparation, and sacrifice in the face of overwhelming odds", "It proves youth cannot lead", "It focuses only on warfare"], answer: 1 },
      { q: "Which ethical dilemma is highlighted by Dronacharya's death?", options: ["Whether truth should ever be strategically manipulated during war", "Whether kingdoms need armies", "Whether teachers should retire", "Whether kings should fight personally"], answer: 0 },
      { q: "Why did Krishna consider Ashwatthama's attack on the unborn child a grave crime?", options: ["It violated battlefield rules and targeted innocent life", "It was aimed at Krishna", "It destroyed a kingdom immediately", "It broke a peace treaty"], answer: 0 },
      { q: "According to tradition, what curse did Krishna give Ashwatthama?", options: ["To lose all memories", "To wander the earth for ages, bearing the consequences of his actions", "To become a king", "To live underwater"], answer: 1 },
      { q: "What deeper lesson comes from Duryodhana hiding after the war was nearly lost?", options: ["Power can disappear when leaders refuse accountability", "Wealth guarantees survival", "Warriors should avoid battles", "Luck determines leadership"], answer: 0 },
      { q: "Why was Ghatotkacha's death strategically important for the Pandavas?", options: ["It distracted Bhishma", "It forced Karna to use his most powerful divine weapon before facing Arjuna", "It ended the war immediately", "It weakened Krishna"], answer: 1 },
      { q: "Which statement best summarizes the end of the Kurukshetra War?", options: ["The strongest army won easily", "The war revealed the enormous cost of greed, pride, revenge, and broken relationships", "It solved every problem permanently", "Only military skill mattered"], answer: 1 },
    ],
  },
  ch8: {
    easy: [
      { q: "Who became king of Hastinapura after the Kurukshetra War?", options: ["Arjuna", "Bhima", "Yudhishthira", "Nakula"], answer: 2 },
      { q: "Who cursed Krishna after witnessing the destruction of her sons?", options: ["Kunti", "Draupadi", "Gandhari", "Subhadra"], answer: 2 },
      { q: "According to the Mahabharata, after how many years did Gandhari's curse begin to affect the Yadava dynasty?", options: ["12 years", "18 years", "36 years", "50 years"], answer: 2 },
      { q: "Who was Samba?", options: ["Krishna's brother", "Krishna's son with Jambavati", "Arjuna's son", "Balarama's son"], answer: 1 },
      { q: "Why were the sages angry with Samba and his friends?", options: ["They stole royal treasure", "They mocked the sages with a fake pregnancy prank", "They insulted Krishna", "They challenged the sages to battle"], answer: 1 },
      { q: "According to the curse, what did Samba miraculously give birth to?", options: ["A golden crown", "A divine bow", "An iron rod (pestle)", "A magical jewel"], answer: 2 },
      { q: "What did the Yadavas do with the iron rod?", options: ["Worshipped it", "Hid it underground", "Ground it into powder and threw it into the sea", "Gave it to Krishna"], answer: 2 },
    ],
    medium: [
      { q: "What eventually grew from the iron powder thrown into the sea?", options: ["Poisonous trees", "Razor-sharp reeds that contributed to the Yadavas' destruction", "Iron mountains", "Sacred flowers"], answer: 1 },
      { q: "Which quality caused the downfall of many Yadava princes?", options: ["Poverty", "Lack of education", "Arrogance and disrespect", "Fear of war"], answer: 2 },
      { q: "Who accidentally shot Krishna in the foot/leg with an arrow?", options: ["Ekalavya", "Jara the hunter", "Ashwatthama", "Kritavarma"], answer: 1 },
      { q: "Why did Jara mistake Krishna for a deer?", options: ["Krishna was hunting", "Krishna was disguised", "Krishna's foot resembled a deer's ear from a distance", "It was night-time"], answer: 2 },
      { q: "Who became king after Yudhishthira renounced the throne and began the final journey?", options: ["Vajra", "Janamejaya", "Parikshit", "Abhimanyu"], answer: 2 },
      { q: "Parikshit was the son of:", options: ["Arjuna and Subhadra", "Abhimanyu and Uttara", "Bhima and Hidimba", "Nakula and Karenumati"], answer: 1 },
      { q: "According to later traditions connected with Jagannath Puri, what sacred relic is associated with Krishna?", options: ["His bow", "His crown", "His divine heart/spiritual essence", "His conch"], answer: 2 },
    ],
    hard: [
      { q: "What leadership lesson can be learned from the Samba incident?", options: ["Power removes consequences", "Humor is always harmless", "Disrespect toward wisdom and elders can have serious consequences", "Curses are more important than actions"], answer: 2 },
      { q: "Why is the destruction of the Yadava dynasty considered tragic?", options: ["They were defeated by a foreign kingdom", "Their downfall came largely from internal arrogance and conflict rather than external enemies", "They lacked military power", "They abandoned Krishna"], answer: 1 },
      { q: "During the Pandavas' final journey toward heaven, who was the only Pandava to reach the heavenly gates in his mortal body?", options: ["Arjuna", "Bhima", "Nakula", "Yudhishthira"], answer: 3 },
      { q: "Why is Yudhishthira's final journey considered a test of character?", options: ["He had to win another war", "He was tested on loyalty, truthfulness, compassion, and righteousness until the very end", "He searched for hidden treasure", "He had to defeat celestial warriors"], answer: 1 },
      { q: "Which companion remained with Yudhishthira until the end of his journey?", options: ["A horse", "A sage", "A dog", "A soldier"], answer: 2 },
      { q: "What is the deeper message behind Krishna's departure from the world?", options: ["Even divine incarnations complete their earthly mission and move on", "Power lasts forever", "Kingdoms never decline", "Destiny can always be avoided"], answer: 0 },
      { q: "Which statement best summarizes the ending of the Mahabharata?", options: ["The strongest warriors achieved permanent happiness", "Wealth and power solved every problem", "Dharma ultimately triumphs, but actions have consequences for everyone—including kings, heroes, and dynasties", "Military victory is life's highest goal"], answer: 2 },
    ],
  },
};

const SETS: Array<keyof Bank> = ["easy", "medium", "hard"];

export function getQuestionsForAttempt(chapterId: string, attempt: number): QBQuestion[] {
  const bank = QUESTION_BANK[chapterId];
  if (!bank) return [];
  const setKey = SETS[((attempt % 3) + 3) % 3];
  return bank[setKey];
}

export function getSetLabel(attempt: number): "Easy" | "Medium" | "Hard" {
  const setKey = SETS[((attempt % 3) + 3) % 3];
  return (setKey.charAt(0).toUpperCase() + setKey.slice(1)) as "Easy" | "Medium" | "Hard";
}
