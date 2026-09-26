"use client";

import { motion } from "framer-motion";
import {
  Github,
  Mail,
  MessageCircle,
  Linkedin,
  Instagram,
  Music2,
  ChevronRight,
  Clock,
} from "lucide-react";
import { useLang } from "@/lib/lang-context";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Contact() {
  const { t } = useLang();

  const contacts = [
    {
      label: t.contactGithub,
      value: t.contactGithubVal,
      icon: Github,
      href: "https://github.com/abdulumair",
    },
    {
      label: t.contactEmail,
      value: t.contactEmailVal,
      icon: Mail,
      href: "mailto:abdulumairr@gmail.com",
    },
    {
      label: t.contactWhatsapp,
      value: t.contactWhatsappVal,
      icon: MessageCircle,
      href: "https://wa.me/6281390400237",
    },
    {
      label: t.contactLinkedin,
      value: t.contactLinkedinVal,
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abdullah-umair-a60b753b1/",
    },
    {
      label: t.contactInstagram,
      value: t.contactInstagramVal,
      icon: Instagram,
      href: "https://instagram.com/abdlumrr",
    },
    {
      label: t.contactTiktok,
      value: t.contactTiktokVal,
      icon: Music2,
      href: "https://www.tiktok.com/@dakadusmekarng",
    },
  ];

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10"
      >
        <motion.p variants={item} className="eyebrow">
          {t.contactEyebrow}
        </motion.p>
        <motion.h2
          variants={item}
          className="mt-2 font-heading text-4xl font-bold tracking-tight text-ink-light dark:text-ink-dark"
        >
          {t.contactHeading}
        </motion.h2>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="rounded-xl border border-border-light bg-card-light p-4 dark:border-border-dark dark:bg-card-dark"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="eyebrow">{t.contactBaseLabel}</p>
                <p className="mt-1 font-heading text-lg font-bold text-ink-light dark:text-ink-dark">
                  {t.contactBaseVal}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border-light px-3 py-1 font-heading text-sm font-medium text-ink-light dark:border-border-dark dark:text-ink-dark">
                <Clock size={12} />
                {t.contactBaseTag}
              </span>
            </div>

            <div className="overflow-hidden rounded-lg border border-border-light dark:border-border-dark">
              <iframe
                src="https://maps.google.com/maps?q=Universitas+Negeri+Semarang&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-[240px] w-full grayscale-[0.25] sm:h-[260px]"
                loading="lazy"
                title="Map — Universitas Negeri Semarang"
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border border-border-light bg-bg-light px-4 py-3 dark:border-border-dark dark:bg-bg-dark">
              <p className="text-sm text-muted-light dark:text-muted-dark">
                {t.contactResponse}
              </p>
              <span className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-ink-light dark:text-ink-dark">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                {t.contactAvailable}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
        >
          {contacts.map(({ label, value, icon: Icon, href }, i) => (
            <motion.a
              key={i}
              variants={item}
              whileHover={{ y: -3 }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border-light bg-card-light p-3 dark:border-border-dark dark:bg-card-dark"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-light text-ink-light transition-colors group-hover:bg-ink-light group-hover:text-bg-light dark:border-border-dark dark:text-ink-dark dark:group-hover:bg-ink-dark dark:group-hover:text-bg-dark">
                <Icon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-heading text-xs font-semibold uppercase tracking-widest text-muted-light dark:text-muted-dark">
                  {label}
                </p>
                <p className="truncate font-heading text-base font-bold text-ink-light dark:text-ink-dark">
                  {value}
                </p>
              </div>
              <ChevronRight
                size={16}
                className="shrink-0 text-muted-light transition-transform group-hover:translate-x-1 dark:text-muted-dark"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
