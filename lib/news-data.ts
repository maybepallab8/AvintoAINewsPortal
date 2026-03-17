export type Category = "AI" | "Sports" | "World"
export type ArticleSize = "featured" | "standard" | "compact"

export interface Article {
  id: string
  headline: string
  summary: string
  source: string
  time: string
  category: Category
  size: ArticleSize
  imageGradient: string
}

export const articles: Article[] = [
  // ── AI ───────────────────────────────────────────────────────────────────
  {
    id: "a1",
    headline: "OpenAI Unveils GPT-5 With a Breakthrough Reasoning Engine",
    summary:
      "The new flagship model demonstrates near-human performance across scientific problem-solving, nuanced creative writing, and complex multi-step mathematics — a decisive leap beyond its predecessors and every existing benchmark.",
    source: "The Verge",
    time: "1h ago",
    category: "AI",
    size: "featured",
    imageGradient: "from-violet-500 via-purple-600 to-indigo-700",
  },
  {
    id: "a2",
    headline: "DeepMind AlphaFold 3 Accelerates Two Cancer Drug Trials",
    summary:
      "Researchers say the updated model helped surface viable compounds in a fraction of the usual time.",
    source: "Nature",
    time: "3h ago",
    category: "AI",
    size: "standard",
    imageGradient: "from-blue-400 via-cyan-500 to-teal-600",
  },
  {
    id: "a3",
    headline: "EU AI Act Enforcement Begins — What It Means for Tech Giants",
    summary:
      "Brussels has started formal checks on model makers.",
    source: "Reuters",
    time: "5h ago",
    category: "AI",
    size: "compact",
    imageGradient: "from-fuchsia-400 via-purple-500 to-indigo-600",
  },
  {
    id: "a4",
    headline: "Mistral Releases Open-Weight Model Rivalling GPT-4o on Benchmarks",
    summary:
      "The French startup's new open-weight release outperforms several closed-source models on coding and reasoning tasks, reigniting the open vs. closed AI debate.",
    source: "Wired",
    time: "6h ago",
    category: "AI",
    size: "standard",
    imageGradient: "from-orange-400 via-pink-500 to-rose-600",
  },
  {
    id: "a5",
    headline: "Meta Rolls Out AI-Powered News Summariser to 3 Billion Users",
    summary:
      "The feature condenses long-form stories into bullet points and audio snippets, aiming to keep users informed without leaving the social apps.",
    source: "BBC Tech",
    time: "8h ago",
    category: "AI",
    size: "compact",
    imageGradient: "from-cyan-400 via-sky-500 to-blue-600",
  },
  {
    id: "a6",
    headline: "Anthropic's Constitutional AI Framework Adopted by Three Governments",
    summary:
      "Public-sector pilot programs will use the framework to audit chatbot behavior for bias, safety, and policy alignment before wider deployment.",
    source: "Financial Times",
    time: "10h ago",
    category: "AI",
    size: "compact",
    imageGradient: "from-stone-400 via-neutral-500 to-zinc-700",
  },
  {
    id: "a7",
    headline: "Stanford HAI Report: AI Productivity Gains Now Measurable Across Industries",
    summary:
      "The annual study found that legal, retail, and software teams all posted double-digit efficiency gains after structured AI adoption.",
    source: "Stanford HAI",
    time: "12h ago",
    category: "AI",
    size: "compact",
    imageGradient: "from-indigo-400 via-violet-500 to-purple-600",
  },

  // ── Sports ────────────────────────────────────────────────────────────────
  {
    id: "s1",
    headline: "Champions League Final: Real Madrid Edge PSG in Extra-Time Thriller",
    summary:
      "A dramatic 90th-minute equaliser and two extra-time goals delivered another iconic European night at the Bernabéu, sending 80,000 fans into delirium and handing Madrid their record-extending 16th European crown.",
    source: "ESPN",
    time: "2h ago",
    category: "Sports",
    size: "featured",
    imageGradient: "from-emerald-400 via-green-500 to-teal-700",
  },
  {
    id: "s2",
    headline: "Djokovic Claims Record 25th Grand Slam at Roland Garros",
    summary:
      "The Serbian legend outlasted Carlos Alcaraz in a bruising five-set final that swung repeatedly on serve, momentum, and endurance. By the end, Djokovic had not only lifted an unprecedented 25th major trophy but also delivered another emphatic argument in the sport's never-ending greatest-of-all-time debate.",
    source: "Sky Sports",
    time: "4h ago",
    category: "Sports",
    size: "standard",
    imageGradient: "from-yellow-400 via-amber-500 to-orange-600",
  },
  {
    id: "s3",
    headline: "NBA: Warriors Sign Surprise Free Agent Ahead of Playoffs",
    summary:
      "Golden State moved quickly after two injuries, prioritizing playoff experience over upside.",
    source: "Bleacher Report",
    time: "5h ago",
    category: "Sports",
    size: "compact",
    imageGradient: "from-blue-500 via-indigo-500 to-violet-600",
  },
  {
    id: "s4",
    headline: "Verstappen Extends Championship Lead After Dominant Monaco Win",
    summary:
      "The Dutch driver converted pole to victory as rivals collided at Sainte-Dévote, extending his lead to 47 points with nine rounds remaining.",
    source: "Autosport",
    time: "7h ago",
    category: "Sports",
    size: "standard",
    imageGradient: "from-red-500 via-orange-500 to-yellow-500",
  },
  {
    id: "s5",
    headline: "IOC Confirms Brisbane 2032 Olympic Venues Remain on Schedule",
    summary:
      "Officials say stadium upgrades, athlete housing, and transit links remain on track despite rising material costs across Queensland.",
    source: "AP",
    time: "9h ago",
    category: "Sports",
    size: "compact",
    imageGradient: "from-lime-400 via-green-500 to-emerald-600",
  },
  {
    id: "s6",
    headline: "England Retain the Ashes After Dramatic Final-Day Collapse",
    summary:
      "Australia lost six wickets before lunch on a seaming surface, handing England a series-clinching win in extraordinary fashion.",
    source: "The Guardian",
    time: "11h ago",
    category: "Sports",
    size: "compact",
    imageGradient: "from-slate-500 via-stone-500 to-amber-600",
  },
  {
    id: "s7",
    headline: "Tour de France: Vingegaard Takes Yellow Jersey on Stage 12",
    summary:
      "A decisive mountain attack split the contenders and handed the defending champion a narrow but symbolic lead in the general classification.",
    source: "Cycling Weekly",
    time: "13h ago",
    category: "Sports",
    size: "compact",
    imageGradient: "from-yellow-300 via-lime-400 to-emerald-500",
  },

  // ── World ─────────────────────────────────────────────────────────────────
  {
    id: "w1",
    headline: "G20 Reaches Landmark $500bn Climate Finance Agreement",
    summary:
      "World leaders committed half a trillion dollars toward clean-energy transition in developing nations, calling it the most ambitious climate deal since the Paris Accord and pledging binding annual reviews.",
    source: "Reuters",
    time: "1h ago",
    category: "World",
    size: "featured",
    imageGradient: "from-sky-400 via-blue-500 to-indigo-600",
  },
  {
    id: "w2",
    headline: "Ceasefire Holds as UN Envoys Begin Negotiations in Geneva",
    summary:
      "A fragile 72-hour ceasefire held into its second day as diplomats opened emergency talks in Geneva. Mediators are now pushing for humanitarian corridors, prisoner exchanges, and a longer framework that could survive beyond the initial pause in fighting.",
    source: "BBC World",
    time: "3h ago",
    category: "World",
    size: "standard",
    imageGradient: "from-slate-400 via-gray-500 to-zinc-600",
  },
  {
    id: "w3",
    headline: "Japan Records Strongest Earthquake in Two Decades — No Tsunami Warning Issued",
    summary:
      "Rail lines paused and inspections began across multiple prefectures.",
    source: "NHK",
    time: "4h ago",
    category: "World",
    size: "compact",
    imageGradient: "from-zinc-400 via-slate-500 to-gray-700",
  },
  {
    id: "w4",
    headline: "Fed Holds Rates as Inflation Falls to Three-Year Low",
    summary:
      "The Federal Reserve signalled it may begin cutting rates in the third quarter after core inflation fell to 2.1%, below its 2% target for the first time since 2021.",
    source: "Financial Times",
    time: "6h ago",
    category: "World",
    size: "standard",
    imageGradient: "from-green-400 via-emerald-500 to-teal-600",
  },
  {
    id: "w5",
    headline: "South Korea Elects New President in Record 83% Voter Turnout",
    summary:
      "Analysts say the unusually high participation rate reflected voter concern over housing, exports, and regional security tensions.",
    source: "Al Jazeera",
    time: "8h ago",
    category: "World",
    size: "compact",
    imageGradient: "from-rose-400 via-pink-500 to-red-600",
  },
  {
    id: "w6",
    headline: "Amazon Deforestation Reaches 10-Year Low, Brazil Reports",
    summary:
      "Satellite data shows illegal clearing fell sharply after expanded enforcement, indigenous protections, and new land-use monitoring rules.",
    source: "The Guardian",
    time: "10h ago",
    category: "World",
    size: "compact",
    imageGradient: "from-green-500 via-emerald-600 to-teal-700",
  },
  {
    id: "w7",
    headline: "WHO Declares End to Mpox Public Health Emergency",
    summary:
      "Health officials said case counts have declined steadily worldwide, though surveillance and vaccination campaigns will continue.",
    source: "AP",
    time: "12h ago",
    category: "World",
    size: "compact",
    imageGradient: "from-cyan-300 via-blue-400 to-indigo-500",
  },
]

export const columnConfig: {
  key: Category
  label: string
  accent: string
  border: string
  badge: string
}[] = [
  {
    key: "AI",
    label: "Artificial Intelligence",
    accent: "text-violet-600 dark:text-violet-400",
    border: "border-violet-200 dark:border-violet-800",
    badge:
      "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  },
  {
    key: "Sports",
    label: "Sports",
    accent: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-800",
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  {
    key: "World",
    label: "World News",
    accent: "text-sky-600 dark:text-sky-400",
    border: "border-sky-200 dark:border-sky-800",
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  },
]
