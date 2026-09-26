"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Github, Linkedin, Instagram } from "lucide-react";
import { useLang } from "@/lib/lang-context";

export default function Footer() {
  const { t } = useLang();
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("home");
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : 600;
      setShowBackTop(window.scrollY > heroBottom - 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { icon: Github, href: "https://github.com/abdullahumairr" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abdullah-umair-a60b753b1/",
    },
    { icon: Instagram, href: "https://instagram.com/abdlumrr" },
  ];

  return (
    <footer className="relative z-10 border-t border-border-light px-4 py-8 dark:border-border-dark sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm text-muted-light dark:text-muted-dark sm:text-left">
          {t.footerRights}
        </p>

        <div className="flex items-center gap-4">
          {links.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-light transition-colors hover:text-ink-light dark:text-muted-dark dark:hover:text-ink-dark"
            >
              <Icon size={18} />
            </a>
          ))}
          <AnimatePresence>
            {showBackTop && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-1.5 rounded-full border border-border-light px-3 py-2 font-heading text-sm font-semibold text-ink-light transition-colors hover:bg-ink-light hover:text-bg-light dark:border-border-dark dark:text-ink-dark dark:hover:bg-ink-dark dark:hover:text-bg-dark"
              >
                {t.footerBackTop}
                <ArrowUp size={13} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
}
