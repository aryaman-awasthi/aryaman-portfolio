export const profile = {
  name: "Aryaman Awasthi",
  role: "Full-Stack Developer",
  location: "Mumbai, India",
  email: "aryaman.awasthi79@gmail.com",
  phone: "+91 70073 34949",
  github: "https://github.com/aryaman-awasthi",
  slm: "https://colab.research.google.com/drive/1sUyYVg7MyLk0XTD9hcT0JnzzrwKwK-sK?usp=sharing",
  sql_inspector: "https://github.com/aryaman-awasthi/SQLInspector",
  study_buddy_app: "https://github.com/aryaman-awasthi/Study-Buddy-app",
  sf: "https://github.com/aryaman-awasthi/sciber-fiesta",
  linkedin: "https://www.linkedin.com/in/aryaman-awasthi/",
  resume: "/Aryaman_Awasthi_Resume.pdf",
  githubHandle: "github.com/aryaman-awasthi",
};

export const facts = [
  { label: "Education", value: "B.Tech, EEE - VIT Vellore" },
  { label: "Years", value: "2021 – 2025" },
  { label: "Now", value: "Full-Stack Developer @ TCS" },
  { label: "Focus", value: "Full-stack + applied AI" },
];

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Java", "TypeScript", "JavaScript", "Python"] },
  {
    label: "Frameworks",
    items: ["Spring Boot", "Angular", "React", "Django", "LangChain", "LangGraph", "PyTorch"],
  },
  {
    label: "AI / ML",
    items: ["RAG", "Vector Embeddings", "Semantic Search", "Transformers", "NLP"],
  },
  { label: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"] },
  { label: "Tools & DevOps", items: ["Git", "GitHub", "Docker"] },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Tata Consultancy Services",
    role: "Full-Stack Developer",
    period: "Jan 2026 - Present",
    location: "Mumbai, India",
    points: [
      "Building an AI-powered enterprise assistant for territory-level analytics and executive insight generation, contributing across the full stack.",
      "Engineering Retrieval-Augmented Generation (RAG), semantic search, and vector-embedding pipelines, plus multi-agent workflows with LangChain and LangGraph.",
      "Designing features including sentiment analysis, territory heatmaps, executive summaries, and natural-language Q&A.",
    ],
  },
];

export type Project = {
  name: string;
  type: string;
  description: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    name: "Small Language Model",
    type: "Machine Learning",
    description:
      "A GPT-style language model built from scratch in PyTorch - transformer blocks, causal self-attention, and custom token embeddings - with an end-to-end pipeline covering tokenization, memory-mapped batching, mixed-precision training, and cosine LR scheduling. Trained and evaluated on TinyStories.",
    tags: ["PyTorch", "Transformers", "NLP"],
    link: profile.slm,
  },
  {
    name: "SQLInspector",
    type: "Django Middleware",
    description:
      "Django middleware that captures and analyzes SQL queries in real time, surfacing the efficiency of database operations and exposing exactly how the ORM talks to the database.",
    tags: ["Python", "Django", "SQL"],
    link: profile.sql_inspector,
  },
  {
    name: "StudyBuddy",
    type: "Android App",
    description:
      "A collaborative group-study and resource-sharing app: REST integration via Retrofit, dynamic lists with RecyclerView, and QR-based session and group management using ZXing.",
    tags: ["Android", "Retrofit", "ZXing"],
    link: profile.study_buddy_app,
  },
  {
    name: "Sciber Fiesta 2019",
    type: "Android · Play Store",
    description:
      "An event-management app for an inter-school fest - team creation and event flow handled end to end, independently developed and published on the Google Play Store.",
    tags: ["Android", "Play Store"],
    link: profile.sf,
  },
];

export type Involvement = {
  org: string;
  role: string;
  period: string;
  detail: string;
};

export const involvement: Involvement[] = [
  {
    org: "CodeChef - VIT",
    role: "Senior Core Member",
    period: "Mar 2022 - Jan 2024",
    detail:
      "Led technical training on Git/GitHub and Flutter, reaching 150+ live participants and 900+ recorded viewers.",
  },
  {
    org: "Sciber Fiesta 2019",
    role: "Head of Technical Team",
    period: "Jan 2019 - Aug 2019",
    detail:
      "Led a 40-member team to run 10 technical events, including 7 new initiatives, alongside a Play Store app.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
