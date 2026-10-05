"use client";

import MusicPlayer, { type Track } from "./music-player";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  User,
  MapPin,
  GraduationCap,
  Briefcase,
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
  {
    title: "MIstletoe",
    artist: "Justin Bieber",
    audioSrc: "/audio/mistletoe.mp3",
    lrcSrc: "/audio/mistletoe.lrc",
  },
];

export default function AboutMe() {
  const { t } = useLang();

  const infoRows = [
    { label: t.infoFullName, value: t.infoFullNameVal, icon: User },
    { label: t.infoHometown, value: t.infoHometownVal, icon: MapPin },
    { label: t.infoCurrent, value: t.infoCurrentVal, icon: MapPin },
    {
      label: t.infoAvailability,
      value: t.infoAvailabilityVal,
      icon: Briefcase,
    },
    { label: t.infoAcademic, value: t.infoAcademicVal, icon: GraduationCap },
    { label: t.infoGpa, value: t.infoGpaVal, icon: GraduationCap },
  ];

  return (
    <section
      id="about"
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
          {t.aboutEyebrow}
        </motion.p>
        <motion.h2
          variants={item}
          className="mt-2 font-heading text-4xl font-bold tracking-tight text-ink-light dark:text-ink-dark"
        >
          {t.aboutHeading}
        </motion.h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid items-stretch gap-4 lg:grid-cols-[1fr_0.9fr_1fr]"
      >
        {/* Column 1 — photo card */}
        <motion.div
          variants={item}
          className="flex h-full flex-col overflow-hidden rounded-xl border border-border-light bg-card-light dark:border-border-dark dark:bg-card-dark"
        >
          <div className="relative  aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/images/about/Background.png"
              alt="Abdullah Umair"
              fill
              className="object-cover grayscale-[0.08] transition-transform duration-700 hover:scale-105"
            />
            <MusicPlayer tracks={tracks} />
          </div>
          <div className="p-4">
            <p className="eyebrow">{t.aboutProfileLabel}</p>
            <p className="mt-2 font-heading text-lg font-bold text-ink-light dark:text-ink-dark">
              {t.aboutName}
            </p>
            <p className="text-base text-muted-light dark:text-muted-dark">
              {t.aboutKnownAs}
            </p>
            <div className="mt-5 flex items-center justify-between gap-3 border-t border-border-light pt-3 dark:border-border-dark">
              <span className="font-heading text-[0.7rem] uppercase tracking-widest text-muted-light dark:text-muted-dark">
                Fokus Inti
              </span>
              <span className="text-right text-base font-medium text-ink-light dark:text-ink-dark">
                {t.aboutFocus
                  .replace("Fokus Inti: ", "")
                  .replace("Core Focus: ", "")}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="flex h-full flex-col gap-4">
          <motion.div
            variants={item}
            whileHover={{ y: -4 }}
            className="flex flex-1 flex-col rounded-xl border border-border-light bg-card-light p-5 dark:border-border-dark dark:bg-card-dark"
          >
            <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-ink-light dark:text-ink-dark">
              <User size={16} />
              {t.aboutWhoTitle}
            </h3>
            <p className="mt-3 text-base leading-7 text-muted-light dark:text-muted-dark">
              {t.aboutWhoBody}
            </p>
          </motion.div>
          <motion.div
            variants={item}
            whileHover={{ y: -4 }}
            className="flex flex-1 flex-col rounded-xl border border-border-light bg-card-light p-5 dark:border-border-dark dark:bg-card-dark"
          >
            <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-ink-light dark:text-ink-dark">
              <Briefcase size={16} />
              {t.aboutApproachTitle}
            </h3>
            <p className="mt-3 text-base leading-7 text-muted-light dark:text-muted-dark">
              {t.aboutApproachBody}
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="flex h-full flex-col rounded-xl border border-border-light bg-card-light p-5 dark:border-border-dark dark:bg-card-dark"
        >
          <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-ink-light dark:text-ink-dark">
            <Briefcase size={16} />
            {t.aboutInfoTitle}
          </h3>
          <dl className="flex-1 space-y-3">
            {infoRows.map(({ label, value, icon: Icon }, index) => (
              <div
                key={index}
                className="border-b border-border-light/70 pb-3 last:border-0 last:pb-0 dark:border-border-dark/70"
              >
                <div className="flex items-center gap-2">
                  <Icon
                    size={12}
                    className="shrink-0 text-muted-light dark:text-muted-dark"
                  />
                  <dt className="font-heading text-xs font-semibold uppercase tracking-widest text-muted-light dark:text-muted-dark">
                    {label}
                  </dt>
                </div>
                <dd className="mt-1 pl-5 text-base font-medium leading-6 text-ink-light dark:text-ink-dark">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-5 inline-flex w-full items-center justify-between rounded-lg border border-border-light px-4 py-2.5 font-heading text-sm font-semibold text-ink-light transition-all duration-300 hover:bg-ink-light hover:text-bg-light dark:border-border-dark dark:text-ink-dark dark:hover:bg-ink-dark dark:hover:text-bg-dark"
          >
            {t.aboutCollab}
            <ArrowRight size={14} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
