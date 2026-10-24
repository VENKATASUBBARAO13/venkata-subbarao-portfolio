"use client";

import { motion } from "framer-motion";
import { Cloud, ShieldCheck, Layers, Activity, Zap, Terminal } from "lucide-react";
import { profile } from "@/lib/data";
import { awsProjects } from "@/lib/aws-data";
import AnimatedCounter from "./AnimatedCounter";

const pillars = [
  { icon: Cloud, label: "Infrastructure & Deployment", detail: "EC2, RDS, ALB, Terraform" },
  { icon: ShieldCheck, label: "Networking & Security", detail: "VPC, Security Groups, IAM, ACM" },
  { icon: Layers, label: "High Availability", detail: "ALB, Target Groups, health checks" },
  { icon: Activity, label: "Monitoring & Logging", detail: "CloudWatch, Prometheus, Grafana" },
  { icon: Zap, label: "Serverless Automation", detail: "Lambda, EventBridge, S3, Boto3" },
  { icon: Terminal, label: "Linux & Troubleshooting", detail: "Amazon Linux, Nginx, systemd" },
];

// Computed from the real project data in lib/aws-data.ts, so these numbers
// can never drift away from what the featured repositories actually show.
const awsServicesAcrossProjects = new Set(awsProjects.flatMap((p) => p.awsServices)).size;

const stats = [
  { value: awsProjects.length, decimals: 0, label: "AWS Projects on GitHub" },
  { value: awsServicesAcrossProjects, decimals: 0, label: "AWS Services Used Across Projects" },
  { value: 8.18, decimals: 2, label: "CGPA" },
  { value: 2026, decimals: 0, label: "Graduation Year" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-px">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              About
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-secondary dark:text-white sm:text-4xl">
              AWS Cloud Engineer in Progress.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft dark:text-slate-400">
              {profile.summary}
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft dark:text-slate-400">
              {profile.objective}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-semibold text-secondary dark:text-white">
                    <AnimatedCounter value={s.value} decimals={s.decimals} />
                  </div>
                  <p className="mt-1 text-xs text-ink-faint">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.label}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-shadow hover:shadow-cardHover dark:border-slate-700 dark:bg-surface-cardDark"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-secondary dark:text-white">
                  {p.label}
                </h3>
                <p className="mt-1.5 text-sm text-ink-soft dark:text-slate-400">
                  {p.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
