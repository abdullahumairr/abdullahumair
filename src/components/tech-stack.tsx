"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang-context";

type Tech = { name: string; color: string; logo: string };

type CategoryKey = "frontend" | "backend" | "db" | "devops";

const simpleIcon = (name: string, color: string) =>
  `https://cdn.simpleicons.org/${name}/${color.replace("#", "")}`;

const techData: { categoryKey: CategoryKey; items: Tech[] }[] = [
  {
    categoryKey: "frontend",
    items: [
      { name: "React", color: "#61DAFB", logo: simpleIcon("react", "61DAFB") },
      {
        name: "Tailwind CSS",
        color: "#06B6D4",
        logo: simpleIcon("tailwindcss", "06B6D4"),
      },
      {
        name: "Bootstrap",
        color: "#06B6D4",
        logo: simpleIcon("bootstrap", "#7952B3"),
      },
      {
        name: "Next.js",
        color: "#000000",
        logo: simpleIcon("nextdotjs", "000000"),
      },
      {
        name: "TypeScript",
        color: "#3178C6",
        logo: simpleIcon("typescript", "3178C6"),
      },
      {
        name: "javascript",
        color: "#3178C6",
        logo: simpleIcon("javascript", "F7DF1E"),
      },
      {
        name: "Framer Motion",
        color: "#0055FF",
        logo: simpleIcon("framer", "0055FF"),
      },
    ],
  },
  {
    categoryKey: "backend",
    items: [
      {
        name: "Node.js",
        color: "#339933",
        logo: simpleIcon("nodedotjs", "339933"),
      },
      {
        name: "Express.js",
        color: "#000000",
        logo: simpleIcon("express", "000000"),
      },
    ],
  },
  {
    categoryKey: "db",
    items: [
      {
        name: "PostgreSQL",
        color: "#4169E1",
        logo: simpleIcon("postgresql", "4169E1"),
      },
      { name: "MySQL", color: "#4479A1", logo: simpleIcon("mysql", "4479A1") },
      {
        name: "MongoDB",
        color: "#47A248",
        logo: simpleIcon("mongodb", "47A248"),
      },
      {
        name: "Supabase",
        color: "#3ECF8E",
        logo: simpleIcon("supabase", "3ECF8E"),
      },
    ],
  },
  {
    categoryKey: "devops",
    items: [
      { name: "Git", color: "#F05032", logo: simpleIcon("git", "F05032") },
      {
        name: "GitHub",
        color: "#000000",
        logo: simpleIcon("github", "000000"),
      },
      {
        name: "Postman API",
        color: "#FF6C37",
        logo: simpleIcon("postman", "FF6C37"),
      },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function TechStack() {
  const { t } = useLang();

  const categoryMeta: Record<CategoryKey, { name: string; desc: string }> = {
    frontend: { name: t.techFrontend, desc: t.techFrontendDesc },
    backend: { name: t.techBackend, desc: t.techBackendDesc },
    db: { name: t.techDb, desc: t.techDbDesc },
    devops: { name: t.techDevops, desc: t.techDevopsDesc },
  };

  return (
    <section
      id="tech"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-12"
      >
        <motion.p variants={item} className="eyebrow">
          {t.techEyebrow}
        </motion.p>
        <motion.h2
          variants={item}
          className="mt-2 font-heading text-4xl font-bold tracking-tight text-ink-light dark:text-ink-dark"
        >
          {t.techHeading}
        </motion.h2>
      </motion.div>

      <div className="space-y-10">
        {techData.map((cat) => (
          <motion.div
            key={cat.categoryKey}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-4 lg:grid-cols-3 lg:gap-8"
          >
            <motion.div variants={item} className="lg:col-span-1">
              <h3 className="font-heading text-xl font-bold text-ink-light dark:text-ink-dark">
                {categoryMeta[cat.categoryKey].name}
              </h3>
              <p className="mt-2 text-base text-muted-light dark:text-muted-dark">
                {categoryMeta[cat.categoryKey].desc}
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-5">
              {cat.items.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={item}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-border-light bg-card-light p-4 dark:border-border-dark dark:bg-card-dark"
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="flex h-10 w-10 items-center justify-center transition-transform"
                  >
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="h-8 w-8 object-contain"
                    />
                  </motion.div>
                  <span className="text-center font-heading text-sm font-medium text-ink-light dark:text-ink-dark">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
