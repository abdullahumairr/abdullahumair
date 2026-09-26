"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Briefcase,
  CalendarDays,
  ExternalLink,
  FolderKanban,
} from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { useCarousel } from "@/lib/use-carousel";
import type { Dict } from "@/lib/i18n";

type TabKey = "projects" | "awards" | "experience";

type CardItem = {
  num: string;
  eyebrow: string;
  title: string;
  desc: string;
  img: string;
  url?: string;
  tags?: string[];
  date?: string;
};

const awardImages = [
  "/images/award/bnsp_junior_web_developer.jpg",
  "/images/award/dicoding_spec_driven.jpg",
  "/images/award/Kompina_Informatika_gold.png",
  "/images/award/Umair_TechSoft2026.jpg",
];

const experienceImages = [
  "/images/experience/ldks_2025.jpeg",
  "/images/experience/classsmeet_2025.jpeg",
  "/images/experience/english_camp_20024.png",
];

function CardContent({
  item,
  detailLabel,
}: {
  item: CardItem;
  detailLabel: string;
}) {
  return (
    <>
      <div className="relative aspect-[1.45/1] overflow-hidden border-b border-border-light bg-bg-light dark:border-border-dark dark:bg-bg-dark">
        <div className="absolute inset-x-0 top-0 z-10 flex h-5 items-center gap-1 border-b border-border-light bg-card-light px-2 dark:border-border-dark dark:bg-card-dark">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e5a59c]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#e5d69c]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#a7c99c]" />
          <span className="ml-auto font-heading text-[0.6rem] font-semibold tracking-widest text-muted-light dark:text-muted-dark">
            {item.num}
          </span>
        </div>
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover pt-5 transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="eyebrow text-[0.65rem]">{item.eyebrow}</p>
        <h3 className="mt-2 font-heading text-lg font-bold text-ink-light dark:text-ink-dark">
          {item.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted-light dark:text-muted-dark">
          {item.desc}
        </p>

        <div className="mt-4 flex items-center justify-between gap-2 border-t border-border-light pt-3 dark:border-border-dark">
          {item.tags && (
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-border-light px-2.5 py-1 font-heading text-xs font-medium text-muted-light dark:border-border-dark dark:text-muted-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {item.date && (
            <span className="inline-flex items-center gap-1.5 font-heading text-xs font-medium text-muted-light dark:text-muted-dark">
              <CalendarDays size={13} />
              {item.date}
            </span>
          )}

          {item.url && (
            <span className="inline-flex shrink-0 items-center gap-1 font-heading text-xs font-semibold text-ink-light dark:text-ink-dark">
              {detailLabel}
              <ExternalLink
                size={13}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          )}
        </div>
      </div>
    </>
  );
}

const cardBase =
  "group flex flex-col overflow-hidden rounded-xl border border-border-light bg-card-light transition-colors duration-300 hover:border-ink-light dark:border-border-dark dark:bg-card-dark dark:hover:border-ink-dark";

function MobileCard({
  item,
  detailLabel,
}: {
  item: CardItem;
  detailLabel: string;
}) {
  const className = `${cardBase} h-full w-[280px] shrink-0 sm:w-[340px]`;
  const content = <CardContent item={item} detailLabel={detailLabel} />;

  return item.url ? (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

function DesktopCard({
  item,
  index,
  detailLabel,
}: {
  item: CardItem;
  index: number;
  detailLabel: string;
}) {
  const motionProps = {
    initial: { opacity: 0, y: 28 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: (index % 3) * 0.1,
      },
    },
    whileHover: { y: -6, transition: { duration: 0.25 } },
    viewport: { once: true, amount: 0.15 },
  };
  const className = `${cardBase} h-full`;
  const content = <CardContent item={item} detailLabel={detailLabel} />;

  return item.url ? (
    <motion.a
      {...motionProps}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </motion.a>
  ) : (
    <motion.div {...motionProps} className={className}>
      {content}
    </motion.div>
  );
}

function MobileCarousel({
  items,
  detailLabel,
}: {
  items: CardItem[];
  detailLabel: string;
}) {
  const carousel = useCarousel(0.35);
  const looped = [...items, ...items];

  return (
    <div
      className="block overflow-hidden lg:hidden"
      onPointerEnter={carousel.onPointerEnter}
      onPointerLeave={carousel.onPointerLeave}
    >
      <div
        ref={carousel.trackRef}
        onPointerDown={carousel.onPointerDown}
        onPointerMove={carousel.onPointerMove}
        onPointerUp={carousel.onPointerUp}
        className="flex flex-nowrap gap-4 py-1"
        style={{
          touchAction: "pan-y",
          cursor: carousel.paused ? "grabbing" : "grab",
          willChange: "transform",
        }}
      >
        {looped.map((item, i) => (
          <MobileCard key={i} item={item} detailLabel={detailLabel} />
        ))}
      </div>
    </div>
  );
}

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

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function Projects() {
  const { t } = useLang() as { t: Dict };
  const [tab, setTab] = useState<TabKey>("projects");
  const [showMore, setShowMore] = useState(false);

  const projects: CardItem[] = [
    {
      num: "01",
      eyebrow: "PLATFORM OTOMASI",
      title: t.p1Title,
      desc: t.p1Desc,
      url: "https://kodein.sch.id/",
      tags: ["Next.js", "Tailwind CSS"],
      img: "/images/projects/kodein-school/image.png",
    },
    {
      num: "02",
      eyebrow: "SISTEM MANAJEMEN",
      title: t.p2Title,
      desc: t.p2Desc,
      url: "https://pkbm-bima-generasi.vercel.app/",
      tags: ["Next.js", "Tailwind CSS"],
      img: "/images/projects/pkbm-bina-generasi/image.png",
    },
    {
      num: "03",
      eyebrow: "IDENTITAS DIGITAL",
      title: t.p3Title,
      desc: t.p3Desc,
      url: "https://monity-omega.vercel.app/",
      tags: ["Next.js", "TypeScript"],
      img: "/images/projects/monity/image.png",
    },
    {
      num: "04",
      eyebrow: "SERTIFIKASI WEB",
      title: t.p4Title,
      desc: t.p4Desc,
      url: "https://bnsp-umair.vercel.app/",
      tags: ["Next.js", "Tailwind CSS"],
      img: "/images/projects/bnsp-junior-developer/image.png",
    },
  ];

  const awards: CardItem[] = t.awardItems.map((a, i) => ({
    num: pad(i),
    eyebrow: a.eyebrow,
    title: a.title,
    desc: a.desc,
    date: a.date,
    img: awardImages[i] ?? awardImages[0],
  }));

  const experiences: CardItem[] = t.experienceItems.map((e, i) => ({
    num: pad(i),
    eyebrow: e.eyebrow,
    title: e.title,
    desc: e.desc,
    date: e.date,
    img: experienceImages[i] ?? experienceImages[0],
  }));

  const data: Record<TabKey, CardItem[]> = {
    projects,
    awards,
    experience: experiences,
  };

  const tabs: { key: TabKey; label: string; icon: typeof Award }[] = [
    { key: "projects", label: t.projectsTabProjects, icon: FolderKanban },
    { key: "awards", label: t.projectsTabAwards, icon: Award },
    { key: "experience", label: t.projectsTabExperience, icon: Briefcase },
  ];

  const subtitles: Record<TabKey, string> = {
    projects: t.projectsSubtitle,
    awards: t.awardsSubtitle,
    experience: t.experienceSubtitle,
  };

  const items = data[tab];
  const canExpand = items.length > 3;
  const visibleItems = showMore ? items : items.slice(0, 3);

  const handleTab = (key: TabKey) => {
    if (key === tab) return;
    setTab(key);
    setShowMore(false);
  };

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-9 flex items-end justify-between gap-4"
      >
        <div>
          <motion.p variants={item} className="eyebrow">
            {t.projectsEyebrow}
          </motion.p>
          <motion.h2
            variants={item}
            className="mt-2 font-heading text-4xl font-bold tracking-tight text-ink-light dark:text-ink-dark"
          >
            {t.projectsHeading}
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-2 text-sm text-muted-light dark:text-muted-dark"
          >
            {subtitles[tab]}
          </motion.p>
        </div>
        {tab === "projects" && (
          <motion.a
            variants={item}
            href="https://github.com/abdulumair"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-border-light px-3 py-2 font-heading text-sm font-semibold text-ink-light transition-colors hover:bg-card-light sm:inline-flex dark:border-border-dark dark:text-ink-dark dark:hover:bg-card-dark"
          >
            {t.projectsAllLink}
            <ArrowUpRight size={14} />
          </motion.a>
        )}
      </motion.div>

      <div className="mb-8 flex justify-center sm:justify-start">
        <div
          role="tablist"
          className="inline-flex gap-1 rounded-lg border border-border-light bg-card-light p-1 dark:border-border-dark dark:bg-card-dark"
        >
          {tabs.map(({ key, label, icon: Icon }) => {
            const active = tab === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => handleTab(key)}
                className={`relative inline-flex items-center gap-2 rounded-md px-3 py-2 font-heading text-sm font-semibold transition-colors sm:px-4 ${
                  active
                    ? "text-bg-light dark:text-bg-dark"
                    : "text-muted-light hover:text-ink-light dark:text-muted-dark dark:hover:text-ink-dark"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="projects-tab-pill"
                    className="absolute inset-0 rounded-md bg-ink-light dark:bg-ink-dark"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon size={15} className="relative z-10" />
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <MobileCarousel
        key={`carousel-${tab}`}
        items={items}
        detailLabel={t.projectsDetail}
      />

      <div key={`grid-${tab}`} className="hidden gap-6 lg:grid lg:grid-cols-3">
        {visibleItems.map((card, i) => (
          <DesktopCard
            key={`${tab}-${card.num}`}
            item={card}
            index={i}
            detailLabel={t.projectsDetail}
          />
        ))}
      </div>

      {canExpand && (
        <div className="mt-7 hidden justify-center lg:flex">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowMore((v) => !v)}
            className="inline-flex items-center gap-2 rounded-lg border border-border-light bg-card-light px-4 py-2.5 font-heading text-sm font-semibold text-ink-light transition-shadow duration-300 hover:shadow-md dark:border-border-dark dark:bg-card-dark dark:text-ink-dark"
          >
            {showMore ? t.projectsHide : t.projectsViewMore}
            <ArrowDown
              size={13}
              className={`transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}
            />
          </motion.button>
        </div>
      )}
    </section>
  );
}
