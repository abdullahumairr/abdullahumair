"use client";

import MusicPlayer, { type Track } from "./music-player";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  Download,
  Sparkles,
  Code2,
  Server,
} from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { useTypewriter } from "@/lib/use-typewriter";

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

const tracks: Track[] = [
  {
    title: "Luther",
    artist: "Kendrick Lamar ft. SZA",
    audioSrc: "/audio/luther.mp3",
    lrcSrc: "/audio/luther.lrc",
  },
  {
    title: "I'd Rather Pretend",
    artist: "Bryant Barnes ft. David",
    audioSrc: "/audio/id-rather-pretend.mp3",
    lrcSrc: "/audio/id-rather-pretend.lrc",
  },
  {
    title: "Twenties",
    artist: "Giveon",
    audioSrc: "/audio/twenties.mp3",
    lrcSrc: "/audio/twenties.lrc",
  },
];

export default function Hero() {
  const { t } = useLang();
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const typed = useTypewriter(roles);
  const heroH1Words = t.heroH1.split(" ");
  const heroName = heroH1Words.pop();
  const heroPrefix = heroH1Words.join(" ");

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 lg:order-1"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border-light bg-card-light px-3 py-1.5 font-heading text-sm font-medium text-muted-light dark:border-border-dark dark:bg-card-dark dark:text-muted-dark"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {t.availableBadge}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 max-w-xl font-heading text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[3.45rem]"
          >
            <span className="text-ink-light dark:text-ink-dark">
              {heroPrefix}{" "}
            </span>
            <span className="text-ink-light/50 dark:text-ink-dark/50">
              {heroName}
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-3 flex min-h-10 items-center font-heading text-2xl font-semibold tracking-tight text-ink-light dark:text-ink-dark sm:text-3xl lg:text-[2rem]"
          >
            <span>{typed}</span>
            <span className="ml-1 animate-blink font-light text-ink-light dark:text-ink-dark">
              |
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 max-w-lg text-base leading-8 text-muted-light dark:text-muted-dark"
          >
            {t.bio}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-2"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 rounded-lg bg-ink-light px-5 py-3 font-heading text-sm font-semibold text-bg-light transition-shadow duration-300 hover:shadow-md dark:bg-ink-dark dark:text-bg-dark"
            >
              {t.ctaExplore}
              <ArrowRight size={16} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/images/hero/CV_abdullahumair.jpg"
              download="Abdullah_Umair_CV.jpg"
              className="inline-flex items-center gap-2 rounded-lg border border-border-light px-5 py-3 font-heading text-sm font-semibold text-ink-light transition-colors duration-300 hover:bg-ink-light/5 dark:border-border-dark dark:text-ink-dark dark:hover:bg-ink-dark/5"
            >
              {t.ctaDownload}
              <Download size={16} />
            </motion.a>
          </motion.div>

          <motion.hr
            variants={item}
            className="mt-7 border-t border-border-light dark:border-border-dark"
          />

          <motion.div variants={item} className="mt-5">
            <p className="eyebrow mb-3">{t.connect}</p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/abdlumrr" },
                { icon: Github, href: "https://github.com/abdullahumairr" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/abdullah-umair-a60b753b1/",
                },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-light text-ink-light transition-colors hover:bg-ink-light hover:text-bg-light dark:border-border-dark dark:text-ink-dark dark:hover:bg-ink-dark dark:hover:text-bg-dark"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end lg:pr-6"
        >
          <div className="relative h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]">
            <div className="absolute -inset-6 rounded-full bg-ink-light/5 blur-3xl dark:bg-ink-dark/10" />

            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-ink-light/10 to-transparent dark:from-ink-dark/10" />
            <div className="absolute inset-0 rounded-full border-2 border-border-light dark:border-border-dark" />

            <div className="absolute inset-[6px] overflow-hidden rounded-full border-4 border-bg-light shadow-xl dark:border-bg-dark">
              <Image
                src="/images/hero/hero.jpeg"
                alt="Abdullah Umair"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                className="object-cover"
              />
              <MusicPlayer tracks={tracks} />
            </div>

            <div className="absolute left-0 top-1/2 hidden w-max -translate-x-[38%] -translate-y-1/2 flex-col gap-3 lg:flex">
              {[
                { icon: Code2, label: t.badge1 },
                { icon: Server, label: t.badge2 },
                { icon: Sparkles, label: t.badge3 },
              ].map(({ icon: Icon, label }, i) => {
                const [title, subtitle] = label.split("—").map((s) => s.trim());
                return (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-border-light/70 bg-card-light/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md dark:border-border-dark/70 dark:bg-card-dark/95"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink-light text-bg-light dark:bg-ink-dark dark:text-bg-dark">
                      <Icon size={15} />
                    </span>
                    <span className="whitespace-nowrap font-heading text-xs font-medium leading-tight text-ink-light dark:text-ink-dark">
                      {title}
                      {subtitle && (
                        <span className="block text-[11px] font-normal text-muted-light dark:text-muted-dark">
                          {subtitle}
                        </span>
                      )}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="no-scrollbar mt-8 flex gap-3 overflow-x-auto lg:hidden">
        {[
          { icon: Code2, label: t.badge1 },
          { icon: Server, label: t.badge2 },
          { icon: Sparkles, label: t.badge3 },
        ].map(({ icon: Icon, label }, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2 rounded-2xl border border-border-light/60 bg-card-light/80 px-3 py-2 shadow-sm backdrop-blur-md dark:border-border-dark/60 dark:bg-card-dark/80"
          >
            <Icon size={16} className="text-ink-light dark:text-ink-dark" />
            <span className="font-heading text-xs font-medium text-ink-light dark:text-ink-dark">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
