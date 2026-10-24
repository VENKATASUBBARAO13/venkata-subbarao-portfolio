// All AWS / Cloud Engineering content lives here, separate from the general
// portfolio data in lib/data.ts.
//
// STATUS CONVENTION used throughout this file:
//   "practiced" = a hands-on exercise or lab.
//   "completed" = a finished learning topic, module or project.
// There is deliberately no "learning" / "in progress" state: every skill and
// lab listed on the site has been completed.
//
// EVIDENCE RULE for project descriptions: project cards only describe what the
// featured GitHub README documents. Infrastructure that is defined in
// Terraform code is described as such, not as "deployed", unless the README
// shows it deployed.

export type SkillStatus = "practiced" | "completed";

export const statusLabel: Record<SkillStatus, string> = {
  practiced: "Practiced",
  completed: "Completed",
};

export const repoUrls = {
  terraformThreeTier:
    "https://github.com/VENKATASUBBARAO13/Module-Three-Tier-Terraform-Project",
  terraformPractice: "https://github.com/VENKATASUBBARAO13/Terraform-practice",
  ecommerce:
    "https://github.com/VENKATASUBBARAO13/AWS_PROJECT_FLIPKART_APPLICATION_WITH_RDS",
  monitoring:
    "https://github.com/VENKATASUBBARAO13/AWS-EC2-Monitoring-and-Alerting-Project",
  logAutomation:
    "https://github.com/VENKATASUBBARAO13/AWS-EC2-Log-Automation-and-S3-Archival-Project",
  fullStack:
    "https://github.com/VENKATASUBBARAO13/AWS-Full-Stack-Web-Application-Project",
} as const;

/* -------------------------------------------------------------------------- */
/* AWS & Cloud Skills                                                         */
/* -------------------------------------------------------------------------- */

export type SkillItem = { name: string; status: SkillStatus };

export type AwsSkillCategory = {
  id: string;
  emoji: string;
  title: string;
  items: SkillItem[];
  /** Render as a full-width card (used for the longer Infrastructure as Code list). */
  wide?: boolean;
};

const P = (name: string): SkillItem => ({ name, status: "practiced" });

export const awsSkillCategories: AwsSkillCategory[] = [
  {
    id: "fundamentals",
    emoji: "☁️",
    title: "AWS Fundamentals",
    items: [
      P("AWS Global Infrastructure"),
      P("Regions and Availability Zones"),
      P("Shared Responsibility Model"),
      P("AWS Management Console"),
    ],
  },
  {
    id: "compute-storage",
    emoji: "🖥️",
    title: "Compute and Storage",
    items: [
      P("Amazon EC2"),
      P("AMIs"),
      P("EBS"),
      P("Amazon S3"),
      P("Bucket Policies"),
      P("Storage Classes"),
    ],
  },
  {
    id: "networking",
    emoji: "🌐",
    title: "Networking",
    items: [
      P("Amazon VPC"),
      P("CIDR"),
      P("Public and Private Subnets"),
      P("Route Tables"),
      P("Internet Gateway"),
      P("NAT Gateway"),
      P("Security Groups"),
      P("VPC Endpoints"),
      P("VPC Peering"),
      P("Amazon Route 53"),
    ],
  },
  {
    id: "security",
    emoji: "🔐",
    title: "Identity and Security",
    items: [
      P("AWS IAM"),
      P("IAM Roles and Policies"),
      P("IAM Users and Groups"),
      P("Least Privilege"),
      P("AWS WAF"),
      P("AWS Certificate Manager (ACM)"),
    ],
  },
  {
    id: "databases",
    emoji: "🗄️",
    title: "Databases",
    items: [
      P("Amazon RDS"),
      P("MySQL"),
      P("Database Connectivity"),
      P("Backups"),
      P("Amazon DynamoDB"),
    ],
  },
  {
    id: "high-availability",
    emoji: "⚖️",
    title: "Load Balancing and High Availability",
    items: [
      P("Application Load Balancer (ALB)"),
      P("Target Groups"),
      P("Health Checks"),
      P("Auto Scaling Groups"),
      P("Launch Templates"),
      P("Multi-AZ concepts"),
    ],
  },
  {
    id: "monitoring",
    emoji: "📊",
    title: "Monitoring and Auditing",
    items: [
      P("Amazon CloudWatch"),
      P("CloudWatch Logs"),
      P("CloudWatch Agent"),
      P("AWS CloudTrail"),
      P("AWS Config"),
      P("Prometheus"),
      P("Grafana"),
      P("Node Exporter"),
      P("Alertmanager"),
      P("PagerDuty"),
    ],
  },
  {
    id: "serverless",
    emoji: "⚡",
    title: "Serverless and Integration",
    items: [
      P("AWS Lambda"),
      P("Amazon EventBridge"),
      P("Amazon API Gateway"),
      P("Boto3"),
      P("S3 log archival workflow"),
    ],
  },
  {
    id: "content-delivery",
    emoji: "🚚",
    title: "Content Delivery",
    items: [P("Amazon CloudFront")],
  },
  {
    // The command items below match the workflow documented in the
    // Module-Three-Tier-Terraform-Project README (init, fmt, validate, plan,
    // and a staged apply).
    id: "infrastructure-as-code",
    emoji: "🧱",
    title: "Infrastructure as Code",
    wide: true,
    items: [
      P("Terraform"),
      P("Terraform Modules"),
      P("Input Variables and Outputs"),
      P("Reusable infrastructure components"),
      P("Environment-specific configurations"),
      P("terraform init"),
      P("terraform fmt"),
      P("terraform validate"),
      P("terraform plan"),
      P("terraform apply"),
      P("AWS infrastructure provisioning"),
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* AWS Cloud Projects                                                         */
/* -------------------------------------------------------------------------- */

export type AwsProject = {
  id: string;
  name: string;
  summary: string;
  /** One-line request/data flow, taken from the repository's architecture. */
  architecture: string;
  highlights: string[];
  /** Infrastructure-as-Code tools confirmed by the README (shown first). */
  iac?: string[];
  /** AWS services confirmed by the repository README. */
  awsServices: string[];
  /** Other technologies / features confirmed by the README. */
  tools: string[];
  status?: "Completed" | "In Progress";
  github: string;
};

// Order matters: this is the order shown on the site.
export const awsProjects: AwsProject[] = [
  {
    id: "terraform-three-tier",
    name: "Modular Three-Tier AWS Infrastructure with Terraform",
    summary:
      "Built a modular Terraform infrastructure project for a three-tier AWS application. Organized networking, frontend and backend compute, load balancing, Auto Scaling, and a private RDS MySQL database into reusable modules, with separate environment configurations for dev, test, and prod.",
    architecture:
      "Internet → Frontend ALB → Frontend ASG → Backend ALB → Backend ASG → RDS MySQL (private subnets)",
    highlights: [
      "Reusable Terraform modules separate networking, bastion, frontend, backend, load balancing, Auto Scaling and database components",
      "VPC networking with public and private subnets across two Availability Zones, route tables, an Internet Gateway and a NAT Gateway",
      "Frontend and backend EC2 launch templates and Auto Scaling Groups behind separate frontend and backend Application Load Balancers",
      "A private RDS MySQL database with a DB subnet group, plus a bastion host for controlled administrative access",
      "Separate dev, test and prod entry points; documented workflow of init, fmt, validate and plan, with a staged targeted apply",
      "README screenshots show Terraform plan and apply output, the Auto Scaling Groups and ALBs, and the application reached through the frontend ALB and a custom domain",
    ],
    iac: ["Terraform"],
    awsServices: ["VPC", "EC2", "ALB", "Auto Scaling", "RDS"],
    tools: ["Security Groups", "Bastion Host"],
    status: "Completed",
    github: repoUrls.terraformThreeTier,
  },
  {
    id: "aws-ecommerce",
    name: "AWS E-Commerce Application Deployment",
    summary:
      "A Flipkart-style e-commerce application deployed on AWS with separate frontend and backend EC2 servers, a managed RDS MySQL database, and an HTTPS Application Load Balancer behind a Route 53 custom domain.",
    architecture:
      "Route 53 → HTTPS ALB (ACM) → Frontend EC2 / Nginx → Backend EC2 / Flask → RDS MySQL",
    highlights: [
      "ALB terminates HTTPS with an ACM certificate and forwards to a target group holding the frontend EC2",
      "Nginx serves the frontend and reverse-proxies /api to the Flask backend on port 5000",
      "RDS MySQL placed through a DB subnet group and opened on port 3306 only to the backend security group",
      "Tested end to end: registration, email OTP, cart, order, database update and order-confirmation email",
    ],
    awsServices: ["EC2", "RDS", "VPC", "ALB", "ACM", "Route 53"],
    tools: ["Nginx", "Flask", "MySQL", "SMTP email OTP"],
    status: "Completed",
    github: repoUrls.ecommerce,
  },
  {
    id: "aws-monitoring",
    name: "AWS EC2 Monitoring & Alerting Project",
    summary:
      "A two-instance EC2 monitoring stack: a monitored Linux host exposing metrics through Node Exporter, and a monitoring host running Prometheus, Alertmanager and Grafana, with alerts routed to PagerDuty.",
    architecture:
      "Node Exporter (monitored EC2) → Prometheus → Alertmanager → PagerDuty; Prometheus + CloudWatch → Grafana",
    highlights: [
      "Node Exporter metrics scraped by Prometheus; dashboards cover CPU, memory, filesystem, network and uptime",
      "Grafana uses both Prometheus and CloudWatch data sources, with IAM-based CloudWatch read access",
      "Prometheus alert rules (including InstanceDown) delivered through Alertmanager to PagerDuty",
      "Validated by stopping Node Exporter, confirming the target went DOWN and the incident fired, then restoring it and verifying recovery",
    ],
    awsServices: ["EC2", "CloudWatch", "IAM"],
    tools: ["Prometheus", "Grafana", "Node Exporter", "Alertmanager", "PagerDuty"],
    status: "Completed",
    github: repoUrls.monitoring,
  },
  {
    id: "aws-log-automation",
    name: "AWS EC2 Log Automation & S3 Archival Project",
    summary:
      "Collects EC2 logs with the CloudWatch Agent into CloudWatch Logs and archives them to a private S3 bucket, using a Python/Boto3 Lambda function on an EventBridge schedule alongside CloudWatch Logs export.",
    architecture:
      "EC2 → CloudWatch Agent → CloudWatch Logs → Lambda (EventBridge schedule) → Amazon S3",
    highlights: [
      "IAM role with the CloudWatchAgentServerPolicy lets the Agent ship /var/log/* from Amazon Linux to a log group",
      "Private S3 bucket with Block Public Access and a bucket policy that allows CloudWatch Logs export",
      "Lambda function (lambda/log_automation.py) triggered by an EventBridge scheduled rule automates log processing and archival",
      "Verified through CloudWatch log groups and streams, Lambda test runs, and archived log files in S3",
    ],
    awsServices: ["EC2", "CloudWatch", "Lambda", "S3", "EventBridge", "IAM"],
    tools: ["Python", "Boto3", "Amazon Linux"],
    status: "Completed",
    github: repoUrls.logAutomation,
  },
  {
    id: "aws-full-stack",
    name: "AWS Full-Stack Web Application Deployment",
    summary:
      "UserFlow, a user-management CRUD application deployed as a three-tier architecture: frontend and Flask backend on separate EC2 instances behind Application Load Balancers, with Amazon RDS MySQL as the data tier.",
    architecture:
      "Route 53 → Frontend ALB → Frontend EC2 / Nginx → Backend ALB → Backend EC2 / Flask → RDS MySQL",
    highlights: [
      "Presentation, application and data tiers separated across frontend EC2, backend EC2 and RDS MySQL inside a VPC",
      "Nginx serves the frontend and reverse-proxies /users API calls to the backend",
      "Flask REST API for listing, adding, updating and deleting users, backed by RDS MySQL",
      "Security groups and IAM control access; add, update and delete flows verified through the ALB and the custom domain",
    ],
    awsServices: ["VPC", "EC2", "ALB", "RDS", "Route 53", "IAM"],
    tools: ["Nginx", "Flask", "MySQL", "JavaScript"],
    status: "Completed",
    github: repoUrls.fullStack,
  },
];

// Secondary resource — deliberately NOT part of `awsProjects`. The repository
// has no README or description; it contains seven day-by-day practice folders
// (Day-1-practicing … Day-7-practicing), so the summary says only that.
export const terraformPractice = {
  name: "Terraform Practice & Infrastructure as Code",
  summary:
    "A day-by-day Terraform practice repository: seven folders (Day 1 to Day 7) of hands-on Infrastructure as Code exercises.",
  tags: ["Terraform", "Infrastructure as Code"],
  github: repoUrls.terraformPractice,
};

/* -------------------------------------------------------------------------- */
/* AWS Learning Journey                                                       */
/* -------------------------------------------------------------------------- */

export type JourneyLink = { label: string; url: string };

export type JourneyStep = {
  title: string;
  /** Technologies shown in the featured repositories. */
  demonstrated: string[];
  /** Other topics completed as part of this milestone. */
  completed: string[];
  links?: JourneyLink[];
};

// Step numbers are generated from the array order, so inserting a milestone
// never needs manual renumbering.
export const awsJourney: JourneyStep[] = [
  {
    title: "Cloud Fundamentals",
    demonstrated: ["AWS Management Console", "Regions & Availability Zones"],
    completed: ["Cloud computing concepts", "AWS Global Infrastructure", "Shared Responsibility Model"],
  },
  {
    title: "IAM & Security",
    demonstrated: ["IAM roles & policies", "Security Groups", "Secrets kept out of Git"],
    completed: ["IAM users & groups", "Least privilege"],
  },
  {
    title: "EC2 & Compute",
    demonstrated: [
      "Amazon Linux EC2 instances",
      "Nginx",
      "systemd services",
      "SSH & Linux troubleshooting",
    ],
    completed: ["AMIs", "EBS", "Key pairs"],
  },
  {
    title: "S3 & Storage",
    demonstrated: [
      "Private S3 buckets",
      "Block Public Access",
      "Bucket policies",
      "Log archival to S3",
    ],
    completed: ["Storage classes"],
  },
  {
    title: "VPC & Networking",
    demonstrated: [
      "VPC",
      "Public & private subnets",
      "Route tables",
      "Internet Gateway",
      "NAT Gateway",
      "RDS DB subnet groups",
      "Security group chaining",
    ],
    completed: ["CIDR planning", "VPC Endpoints", "VPC Peering"],
  },
  {
    title: "DNS, HTTPS & Load Balancing",
    demonstrated: [
      "Route 53 alias records",
      "ACM certificates",
      "HTTPS listener on an ALB",
      "Application Load Balancer",
      "Target Groups & health checks",
    ],
    completed: ["Path-based routing", "Host-based routing", "Sticky sessions"],
  },
  {
    title: "High Availability & Auto Scaling",
    demonstrated: [
      "Separate load-balanced frontend and backend tiers",
      "Auto Scaling Groups",
      "Launch templates",
      "Subnets across two Availability Zones",
    ],
    completed: ["Multi-AZ architecture", "Cross-AZ load balancing"],
  },
  {
    title: "RDS & Databases",
    demonstrated: [
      "Amazon RDS MySQL",
      "EC2-to-RDS connectivity",
      "Schema import",
      "CRUD against RDS",
    ],
    completed: ["RDS backups", "Multi-AZ concepts", "DynamoDB"],
  },
  {
    title: "Infrastructure as Code with Terraform",
    demonstrated: [
      "Module-based infrastructure",
      "Networking (VPC) module",
      "Frontend & backend modules",
      "Database module",
      "Load balancing & Auto Scaling modules",
      "dev, test & prod entry points",
      "init, fmt, validate & plan workflow",
      "Staged targeted apply",
    ],
    completed: [
      "Terraform fundamentals",
      "Configuration files",
      "Providers & resources",
      "Input variables & outputs",
    ],
    links: [
      { label: "Modular Three-Tier Terraform Project", url: repoUrls.terraformThreeTier },
      { label: "Terraform Practice (Day 1–7)", url: repoUrls.terraformPractice },
    ],
  },
  {
    title: "Monitoring & Logging",
    demonstrated: [
      "CloudWatch Agent & Logs",
      "Prometheus",
      "Node Exporter",
      "Grafana + CloudWatch data source",
      "Alertmanager & PagerDuty",
      "Alert & recovery testing",
    ],
    completed: ["CloudWatch alarms"],
  },
  {
    title: "Serverless Automation",
    demonstrated: [
      "AWS Lambda (Python/Boto3)",
      "EventBridge scheduled rule",
      "S3 log archival",
    ],
    completed: ["API Gateway", "S3 event notifications"],
  },
  {
    title: "Cloud Delivery & Auditing",
    demonstrated: [],
    completed: ["CloudFront", "CloudTrail", "AWS WAF", "AWS Config"],
  },
  {
    title: "AWS Project Implementations",
    demonstrated: [],
    completed: [],
    links: awsProjects.map((p) => ({ label: p.name, url: p.github })),
  },
];

/* -------------------------------------------------------------------------- */
/* AWS Hands-On Practice (labs)                                               */
/* -------------------------------------------------------------------------- */

export type AwsLab = {
  service: string;
  description: string;
  tags: string[];
  status: SkillStatus;
  /** Link to the README that documents this practice, where one exists. */
  repoUrl?: string;
};

export const awsLabs: AwsLab[] = [
  {
    service: "Modular Three-Tier AWS Infrastructure with Terraform",
    description:
      "Built a modular Terraform project to organize AWS infrastructure for a three-tier application, including VPC networking, public and private subnets, load balancers, EC2 launch templates, Auto Scaling Groups, a private RDS MySQL database, and separate dev, test, and prod environment configurations.",
    tags: [
      "Terraform",
      "Infrastructure as Code",
      "AWS",
      "VPC",
      "EC2",
      "ALB",
      "Auto Scaling",
      "RDS MySQL",
    ],
    status: "completed",
    repoUrl: repoUrls.terraformThreeTier,
  },
  {
    service: "EC2 launch & security groups",
    description:
      "Launched and configured Amazon Linux EC2 instances as frontend, backend, monitoring and log-source servers, controlling access with security groups. Also practiced AMIs and EBS as part of EC2 fundamentals.",
    tags: ["EC2", "Amazon Linux", "Security Groups"],
    status: "practiced",
    repoUrl: repoUrls.ecommerce,
  },
  {
    service: "S3 buckets, policies & access",
    description:
      "Created a private S3 bucket with Block Public Access enabled, wrote a bucket policy allowing CloudWatch Logs to export into it, and verified the archived log files. Also practiced S3 storage classes.",
    tags: ["S3", "Bucket Policy", "Block Public Access"],
    status: "practiced",
    repoUrl: repoUrls.logAutomation,
  },
  {
    service: "VPC & network layout",
    description:
      "Placed the internet-facing ALB in public subnets and RDS in a DB subnet group (private subnets where possible), scoping security groups per tier: ALB → frontend → backend → RDS. Also practiced CIDR planning, route tables, Internet and NAT Gateways, VPC Endpoints and VPC Peering.",
    tags: ["VPC", "Subnets", "Security Groups"],
    status: "practiced",
    repoUrl: repoUrls.ecommerce,
  },
  {
    service: "IAM roles & policies",
    description:
      "Attached the CloudWatchAgentServerPolicy to an EC2 role so the CloudWatch Agent can ship logs, and used IAM permissions for Grafana's CloudWatch read access. Also practiced IAM users, groups and least-privilege policy design.",
    tags: ["IAM Roles", "Policies", "Least Privilege"],
    status: "practiced",
    repoUrl: repoUrls.logAutomation,
  },
  {
    service: "ALB, Target Groups & health checks",
    description:
      "Put frontend and backend tiers behind Application Load Balancers with target groups and health checks, and tested the app through the ALB DNS name. Auto Scaling Groups and launch templates are covered in the Terraform three-tier project.",
    tags: ["ALB", "Target Groups", "Health Checks"],
    status: "practiced",
    repoUrl: repoUrls.fullStack,
  },
  {
    service: "Route 53 DNS & HTTPS with ACM",
    description:
      "Requested an ACM certificate, added an HTTPS (443) listener to the ALB, and pointed a custom domain at it with a Route 53 alias record.",
    tags: ["Route 53", "ACM", "HTTPS"],
    status: "practiced",
    repoUrl: repoUrls.ecommerce,
  },
  {
    service: "RDS MySQL connectivity",
    description:
      "Launched an RDS MySQL instance in a DB subnet group, tested connectivity from EC2 with the MySQL client, imported the schema, and ran a Flask CRUD API against it. Also practiced RDS backups.",
    tags: ["RDS", "MySQL", "Flask"],
    status: "practiced",
    repoUrl: repoUrls.fullStack,
  },
  {
    service: "CloudWatch Agent, Logs & metrics",
    description:
      "Installed and configured the CloudWatch Agent on Amazon Linux, verified log groups and streams, and viewed EC2 CPU metrics through Grafana's CloudWatch data source. Also practiced CloudWatch alarms.",
    tags: ["CloudWatch Agent", "Logs", "Metrics", "Alarms"],
    status: "practiced",
    repoUrl: repoUrls.logAutomation,
  },
  {
    service: "Prometheus, Grafana & Node Exporter",
    description:
      "Built a two-instance monitoring stack, wrote Prometheus alert rules, routed alerts through Alertmanager to PagerDuty, and tested the InstanceDown alert and recovery by stopping and restarting Node Exporter.",
    tags: ["Prometheus", "Grafana", "PagerDuty"],
    status: "practiced",
    repoUrl: repoUrls.monitoring,
  },
  {
    service: "Lambda, Boto3, EventBridge & S3 archival",
    description:
      "Wired an EventBridge schedule to a Python/Boto3 Lambda function that automates log archival to S3, alongside the manual CloudWatch Logs export path.",
    tags: ["Lambda", "Boto3", "EventBridge", "S3"],
    status: "practiced",
    repoUrl: repoUrls.logAutomation,
  },
  {
    service: "CloudTrail auditing",
    description:
      "Practiced reviewing AWS CloudTrail event history to understand recorded API activity and how audit events support security investigations and troubleshooting.",
    tags: ["CloudTrail", "Auditing", "Event History"],
    status: "practiced",
  },
  {
    service: "CloudFront distributions",
    description:
      "Completed hands-on learning and practice covering CloudFront distributions, origins, and HTTPS content delivery.",
    tags: ["CloudFront", "CDN", "HTTPS"],
    status: "completed",
  },
  {
    service: "DynamoDB & API Gateway",
    description:
      "Completed learning and practice covering DynamoDB NoSQL fundamentals and API Gateway integration patterns for serverless applications.",
    tags: ["DynamoDB", "API Gateway", "Serverless"],
    status: "completed",
  },
  {
    service: "AWS WAF & web security",
    description:
      "Practiced AWS web security concepts, including WAF protection, HTTPS with ACM, private RDS connectivity, and security-group rules scoped by application tier.",
    tags: ["AWS WAF", "ACM", "Web Security"],
    status: "practiced",
  },
];

/* -------------------------------------------------------------------------- */
/* Learning in Public                                                         */
/* -------------------------------------------------------------------------- */

export type LearningPost = {
  day: string;
  topic: string;
  linkedinUrl?: string;
};

// Real AWS learning posts — add the linkedinUrl once each post is live.
// Do not add day numbers or topics that haven't actually been posted yet.
export const learningInPublic: LearningPost[] = [
  { day: "AWS Day 01", topic: "Cloud Computing Fundamentals" },
  { day: "AWS Day 02", topic: "IAM" },
  { day: "AWS Day 03", topic: "EC2" },
  { day: "AWS Day 04", topic: "S3" },
  { day: "AWS Day 05", topic: "VPC" },
  { day: "AWS Day 06", topic: "RDS" },
];
