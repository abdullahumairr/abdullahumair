"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/lib/lang-context";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ExperienceTimeline() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const entries = [
    {
      title: t.exp1Title,
      subtitle: t.exp1Subtitle,
      body: t.exp1Body,
      tags: ["Full-Stack Developer"],
    },
    {
      title: t.exp2Title,
      subtitle: t.exp2Subtitle,
      body: t.exp2Body,
      tags: ["React.js", "Next.js", "Tailwind CSS", "PostgreSQL"],
    },
    {
      title: t.exp3Title,
      subtitle: t.exp3Subtitle,
      body: t.exp3Body,
      tags: ["Full-Stack Developer", "Data Analyst"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
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
          {t.expEyebrow}
        </motion.p>
        <motion.h2
          variants={item}
          className="mt-2 font-heading text-4xl font-bold tracking-tight text-ink-light dark:text-ink-dark"
        >
          {t.expHeading}
        </motion.h2>
        <motion.p
          variants={item}
          className="mt-3 max-w-xl text-base text-muted-light dark:text-muted-dark"
        >
          {t.expIntro}
        </motion.p>
      </motion.div>

      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-2 top-2 h-full w-px bg-border-light dark:bg-border-dark sm:left-3" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-2 top-2 w-px bg-ink-light dark:bg-ink-dark sm:left-3"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-8"
        >
          {entries.map((entry, i) => (
            <motion.div key={i} variants={item} className="group relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center sm:-left-10"
              >
                <span className="h-3 w-3 rounded-full border-2 border-ink-light bg-ink-light transition-colors dark:border-ink-dark dark:bg-ink-dark" />
              </motion.div>

              <div className="rounded-2xl border border-border-light bg-card-light p-5 transition-all hover:shadow-md dark:border-border-dark dark:bg-card-dark">
                <h3 className="font-heading text-xl font-bold text-ink-light dark:text-ink-dark">
                  {entry.title}
                </h3>
                <p className="mt-1 text-base font-medium text-muted-light dark:text-muted-dark">
                  {entry.subtitle}
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-light dark:text-muted-dark">
                  {entry.body}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border-light px-3 py-1.5 font-heading text-sm font-medium text-ink-light dark:border-border-dark dark:text-ink-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
