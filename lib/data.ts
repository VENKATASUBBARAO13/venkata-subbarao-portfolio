export const profile = {
  name: "Ventrapragada Venkata Subbarao",
  shortName: "Venkata Subbarao",
  firstName: "Venkata Subbarao",
  location: "Vijayawada, Andhra Pradesh, India",
  roles: ["Python Developer", "Full Stack Developer", "AI & Cloud Computing Enthusiast"],
  email: "venkatasubbarao.dev@gmail.com",
  github: "https://github.com/VENKATASUBBARAO13",
  linkedin: "https://www.linkedin.com/in/ventrapragada-venkata-subbarao",
  resumeUrl: "/resume.pdf",
  heroDescription:
    "I build scalable full-stack web applications, AI-powered solutions, and modern web applications using Python, Django, and MySQL. Passionate about solving real-world problems through software while continuously learning Cloud Computing and Artificial Intelligence.",
  summary:
    "I'm a Computer Science graduate who enjoys building complete web applications—from responsive user interfaces to scalable backend systems and production-ready deployments. My projects combine Python, Django, MySQL, REST APIs, and AI technologies to solve practical problems. Most recently, I built a DeepFake Detection System using PyTorch, OpenCV, and ResNet18 within a full-stack Django application.",
  objective:
    "Seeking a full-time Software Engineer role — Backend, Full Stack, or Applied AI — where I can build production systems and keep learning cloud-native practices on the job.",
  footerQuote: "Always learning. Always building. Always improving.",
};

export const heroTechBadges = [
  "Python",
  "Django",
  "MySQL",
  "REST APIs",
  "AI/ML",
  "Cloud Computing",
];

export type EducationItem = {
  year: string;
  title: string;
  institute: string;
  place: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    year: "2022 — 2026",
    title: "B.Tech, Computer Science & Engineering",
    institute: "Amrita Sai Institute of Science and Technology",
    place: "Andhra Pradesh",
    detail: "CGPA 8.18 / 10",
  },
  {
    year: "2020 — 2022",
    title: "Completed Intermediate (MPC)",
    institute: "Narayana Junior College",
    place: "Vijayawada",
  },
  {
    year: "2019 — 2020",
    title: "Completed SSC",
    institute: "S.K.Z.P High School",
    place: "Srikakulam, Krishna District",
  },
];

export type Project = {
  id: string;
  name: string;
  period: string;
  stack: string[];
  summary: string;
  bullets: string[];
  github: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "deepfake",
    name: "DeepFake Detection System",
    period: "Dec 2025 — Apr 2026",
    stack: ["Python", "Django", "PyTorch", "OpenCV", "ResNet18", "MySQL", "Bootstrap"],
    summary:
      "An AI-powered detection system that classifies uploaded facial images as real or manipulated, with a full prediction history and admin dashboard behind it.",
    bullets: [
      "Trained a ResNet18 classifier on 1,100+ facial images for real vs. manipulated detection",
      "OpenCV face detection feeding cropped frames into the PyTorch inference pipeline",
      "MySQL-backed prediction history for every submission",
      "Drag-and-drop upload flow with confidence score visualization",
      "Admin dashboard for reviewing detection history",
    ],
    github: "https://github.com/VENKATASUBBARAO13/DeepFake-Detection-System",
    featured: true,
  },
  {
    id: "sims",
    name: "Student Information Management System",
    period: "Jun 2025 — Sep 2025",
    stack: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    summary:
      "A full-stack academic records system covering the day-to-day paperwork of a college department — records, attendance, marks, and certificates.",
    bullets: [
      "Student Records, Attendance, Marks, and Certificate Management modules",
      "Full CRUD operations across every module",
      "Secure database integration with Flask and MySQL",
      "Responsive UI usable from a lab desktop or a phone",
    ],
    github: "https://github.com/VENKATASUBBARAO13/Student-Information-Management-System",
  },
  {
    id: "currency",
    name: "Currency Converter Web Application",
    period: "Mar 2025 — May 2025",
    stack: ["Python", "Django", "HTML", "CSS", "REST API", "Render"],
    summary:
      "A Django-backed converter that pulls live exchange rates from an external REST API and returns a converted value instantly.",
    bullets: [
      "Django backend accepting user input and returning real-time converted values",
      "Integrated an external currency exchange REST API",
      "Dynamic JSON parsing to keep rates current on every request",
      "Responsive interface deployed on Render Cloud Platform",
    ],
    github: "https://github.com/VENKATASUBBARAO13/django-currency-converter",
    demo: "https://currency-converter-swy9.onrender.com",
  },
];

export type SkillGroup = {
  label: string;
  level: number;
  items: string[];
};

export const skills: SkillGroup[] = [
  { label: "Programming", level: 88, items: ["Python", "JavaScript", "HTML", "CSS"] },
  { label: "Backend", level: 85, items: ["Django", "Flask", "REST APIs"] },
  { label: "Frontend", level: 75, items: ["HTML", "CSS", "Tailwind", "Bootstrap"] },
  { label: "Database", level: 80, items: ["MySQL"] },
  { label: "AI / ML", level: 72, items: ["PyTorch", "OpenCV", "ResNet18"] },
  { label: "Cloud & Tools", level: 78, items: ["Render", "Git", "GitHub"] },
];

export type Certification = {
  id: string;
  title: string;
  platform: string;
  completedOn: string;
  skills: string[];
  image?: string;
  credentialUrl?: string;
  linkedinUrl?: string;
};

export const certifications: Certification[] = [
  {
    id: "tata-dataviz",
    title: "TATA Data Visualisation: Empowering Business with Effective Insights",
    platform: "Forage",
    completedOn: "17 June 2026",
    skills: [
      "Business Scenario Analysis",
      "Choosing the Right Visuals",
      "Data Visualization",
      "Data Storytelling",
      "Business Insights",
    ],
    image: "/certificates/tata-data-visualisation.jpg",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7472902374764965888/",
  },
  {
    id: "tata-genai",
    title: "TATA GenAI Powered Data Analytics Job Simulation",
    platform: "Forage",
    completedOn: "14 June 2026",
    skills: [
      "Exploratory Data Analysis",
      "Risk Profiling",
      "AI-powered Analytics",
      "Business Reporting",
      "Collections Strategy",
      "Data Storytelling",
    ],
    image: "/certificates/tata-genai-analytics.jpg",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7471880633498136578/",
  },
];

// Legacy short-form credentials, still shown alongside the certification cards above.
export const achievements = [
  {
    title: "GeeksforGeeks — Python Programming",
    org: "GeeksforGeeks",
  },
  {
    title: "TCS iON Career Edge — Young Professional",
    org: "Tata Consultancy Services",
  },
  {
    title: "SQL (Structured Query Language)",
    org: "Simplilearn",
  },
];

// Repos to always feature first on the GitHub section, in this order, regardless
// of what the GitHub API returns. Everything else the API returns (excluding forks
// and these three) is bucketed into the "Learning Journey" list below.
export const featuredRepoNames = [
  "DeepFake-Detection-System",
  "Student-Information-Management-System",
  "django-currency-converter",
];

// Fallback list shown if the live GitHub API call fails or is rate-limited.
export const learningRepoFallback = [
  {
    name: "HTML-CSS-Fundamentals",
    description: "Practice repository covering core HTML & CSS concepts.",
    url: "https://github.com/VENKATASUBBARAO13/HTML-CSS-Fundamentals",
  },
  {
    name: "python-fundamentals-programs",
    description: "Small Python programs written while learning core language concepts.",
    url: "https://github.com/VENKATASUBBARAO13/python-fundamentals-programs",
  },
  {
    name: "MySQL-30-Days-Student-Management-System",
    description: "A 30-day MySQL practice build of a student management schema.",
    url: "https://github.com/VENKATASUBBARAO13/MySQL-30-Days-Student-Management-System",
  },
];
