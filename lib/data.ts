import { awsProjects, terraformPractice } from "./aws-data";

export const profile = {
  name: "Ventrapragada Venkata Subbarao",
  shortName: "Venkata Subbarao",
  firstName: "Venkata Subbarao",
  location: "Vijayawada, Andhra Pradesh, India",
  roles: [
    "AWS Cloud Engineer",
    "Terraform & AWS Infrastructure",
    "Infrastructure as Code (IaC) Practitioner",
    "Cloud Infrastructure Builder",
  ],
  email: "venkatasubbarao1305@gmail.com",
  github: "https://github.com/VENKATASUBBARAO13",
  linkedin: "https://www.linkedin.com/in/ventrapragada-venkata-subbarao",
  linkedinPostsUrl: "https://www.linkedin.com/in/ventrapragada-venkata-subbarao/recent-activity/all/",
  portfolioUrl: "https://venkata-subbarao-portfolio.vercel.app",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Resume_Subbarao_AWS_.pdf",
  heroEyebrow: "2026 CSE Graduate • Open to Opportunities",
  heroDescription:
    "I'm a 2026 Computer Science Engineering graduate with hands-on AWS cloud project experience and completed Terraform learning. I build cloud infrastructure, deploy applications, configure networking and security, monitor resources, and use Infrastructure as Code to organize reusable AWS infrastructure.",
  summary:
    "Computer Science Engineering graduate with hands-on AWS cloud project experience covering application deployment, cloud networking, monitoring, security, automation, and serverless workflows, plus completed Terraform learning. My featured projects include a modular three-tier Terraform infrastructure, a Flask and RDS e-commerce app behind HTTPS, a Prometheus and Grafana monitoring stack on EC2, automated log archival with CloudWatch, Lambda, EventBridge and S3, and a three-tier web application on load-balanced EC2 tiers. Along the way I practice Linux administration and troubleshooting.",
  objective:
    "Python, Flask, Django, MySQL, REST APIs and AI/ML are my software development foundation — they help me understand the applications I deploy. I'm targeting AWS Cloud Engineer, Cloud Support Engineer, and Junior DevOps roles, and I learn by building, troubleshooting, and documenting.",
  footerQuote: "Always learning. Always building. Always improving.",
  footerTagline: "AWS Cloud Engineer | Cloud Infrastructure | Networking & Security",
  finalCtaHeading: "Let's build something in the cloud.",
  finalCtaText:
    "I'm actively learning AWS and looking for opportunities where I can apply my software development foundation while growing as a cloud engineer.",
};

// AWS services shown as animated badges in the hero. Keep this list honest —
// only services you've actually explored or are actively practicing.
export const heroTechBadges = [
  "AWS",
  "Terraform",
  "EC2",
  "S3",
  "VPC",
  "IAM",
  "RDS",
  "CloudWatch",
  "Lambda",
  "Linux",
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
  category: "aws" | "software";
  period?: string;
  status?: string;
  stack: string[];
  summary: string;
  bullets: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

// The four AWS projects come straight from lib/aws-data.ts so there is one
// source of truth (README-verified) for both the AWS Cloud Projects overview
// and this Selected Projects timeline. Their order is the order shown.
const awsProjectCards: Project[] = awsProjects.map((p) => ({
  id: p.id,
  name: p.name,
  category: "aws",
  status: p.status,
  stack: [...(p.iac ?? []), ...p.awsServices, ...p.tools],
  summary: p.summary,
  bullets: [`Architecture: ${p.architecture}`, ...p.highlights],
  github: p.github,
}));

// Earlier software projects — kept as "Other Projects" beneath the AWS work.
const softwareProjectCards: Project[] = [
  {
    id: "deepfake",
    name: "DeepFake Detection System",
    category: "software",
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
  },
  {
    id: "sims",
    name: "Student Information Management System",
    category: "software",
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
    category: "software",
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

export const projects: Project[] = [...awsProjectCards, ...softwareProjectCards];

export type SkillGroup = {
  label: string;
  emoji: string;
  items: string[];
  featured?: boolean;
  /** Smaller, secondary styling for the supporting development groups. */
  compact?: boolean;
};

// The general "Toolkit" section (distinct from the dedicated AWS & Cloud
// Skills section). AWS & Cloud leads and is visually emphasized. Every skill
// listed here is completed and uses the same tag style.
export const skills: SkillGroup[] = [
  {
    label: "AWS & Cloud",
    emoji: "☁️",
    items: [
      "EC2",
      "S3",
      "VPC",
      "IAM",
      "RDS",
      "Route 53",
      "CloudWatch",
      "CloudFront",
      "CloudTrail",
      "Lambda",
      "DynamoDB",
      "API Gateway",
      "EventBridge",
      "AWS Config",
      "AWS WAF",
      "ACM",
    ],
    featured: true,
  },
  {
    label: "Networking & Infrastructure",
    emoji: "🌐",
    items: [
      "CIDR",
      "Public/Private Subnets",
      "Route Tables",
      "Internet Gateway",
      "NAT Gateway",
      "Security Groups",
      "VPC Endpoints",
      "VPC Peering",
      "ALB",
      "Target Groups",
      "Auto Scaling",
    ],
  },
  {
    label: "Infrastructure as Code",
    emoji: "🧱",
    items: [
      "Terraform",
      "Terraform Modules",
      "Variables and Outputs",
      "Environment-specific Configurations",
      "Infrastructure Planning and Validation",
    ],
  },
  {
    label: "Monitoring & Observability",
    emoji: "📈",
    items: [
      "CloudWatch",
      "CloudWatch Logs",
      "CloudWatch Agent",
      "Prometheus",
      "Grafana",
      "Node Exporter",
      "Alertmanager",
      "PagerDuty",
    ],
  },
  {
    label: "Linux & Tools",
    emoji: "🛠️",
    items: ["Linux", "Amazon Linux", "Nginx", "AWS CLI", "Git", "GitHub", "VS Code"],
  },
  {
    label: "Programming & Databases",
    emoji: "💻",
    items: ["Python", "SQL", "MySQL", "Boto3", "Flask", "Django", "REST APIs"],
    compact: true,
  },
  {
    label: "Web Development",
    emoji: "🧩",
    items: ["HTML", "CSS", "JavaScript"],
    compact: true,
  },
  {
    label: "AI / ML",
    emoji: "🤖",
    items: ["PyTorch", "OpenCV", "ResNet18"],
    compact: true,
  },
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
// These are real completed certifications — kept separate from the AWS learning
// content elsewhere on the site, which is practice, not a certification.
export const achievements = [
  {
    title: "Microsoft Azure Fundamentals",
    org: "Microsoft",
  },
  {
    title: "Google Cloud AI",
    org: "Google Cloud",
  },
  {
    title: "TCS iON Career Edge — Young Professional",
    org: "Tata Consultancy Services",
  },
  {
    title: "GeeksforGeeks — Python Programming",
    org: "GeeksforGeeks",
  },
];

export const cloudLearningNote =
  "AWS is currently hands-on learning and practice, not yet a certification. Progress is documented in the AWS Learning Journey and Learning in Public sections below — an AWS certification badge will appear here the moment one is earned.";

export type FeaturedRepo = {
  name: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
};

// The four AWS repositories, in display order. Descriptions are written from
// each repository's README (not the GitHub "About" tagline, which for the
// full-stack repo lists services its README does not document).
const featuredRepoDescriptions: Record<string, string> = {
  "terraform-three-tier":
    "Modular Terraform infrastructure for a three-tier AWS application: networking, bastion, frontend and backend launch templates, Auto Scaling Groups, separate ALBs and a private RDS MySQL database, with dev, test and prod entry points. Includes a screenshot gallery.",
  "aws-ecommerce":
    "Flipkart-style e-commerce app on EC2 with an RDS MySQL backend, ALB + ACM HTTPS, a Route 53 custom domain and an Nginx reverse proxy. Includes step-by-step deployment docs and screenshots.",
  "aws-monitoring":
    "Prometheus, Grafana and Node Exporter on EC2 with a CloudWatch data source, plus Alertmanager → PagerDuty alerting with alert and recovery testing.",
  "aws-log-automation":
    "CloudWatch Agent log collection from EC2 into CloudWatch Logs, with Lambda (Python/Boto3), EventBridge and S3 for automated log archival.",
  "aws-full-stack":
    "UserFlow CRUD app on a three-tier AWS architecture: frontend and Flask backend on EC2 behind ALBs, an RDS MySQL data tier, and a custom domain via Route 53.",
};

// Display order: the five AWS projects (Terraform first), then the Terraform
// practice repository last.
export const featuredRepos: FeaturedRepo[] = [
  ...awsProjects.map((p) => ({
    name: p.github.split("/").pop() ?? p.name,
    title: p.name,
    description: featuredRepoDescriptions[p.id] ?? p.summary,
    tags: [...(p.iac ?? []), ...p.awsServices],
    url: p.github,
  })),
  {
    name: terraformPractice.github.split("/").pop() ?? terraformPractice.name,
    title: terraformPractice.name,
    description: terraformPractice.summary,
    tags: terraformPractice.tags,
    url: terraformPractice.github,
  },
];

// Repos already shown elsewhere on the page; excluded from the live
// "Learning Journey" practice-repository list so it stays about practice repos.
export const practiceExcludedRepoNames = [
  ...featuredRepos.map((r) => r.name),
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
