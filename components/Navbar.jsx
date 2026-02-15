"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLang } from "./LanguageProvider";
import styles from "./Navbar.module.css";

const linkMap = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "qualification", href: "#qualification" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { theme, toggle } = useTheme();
  const { lang, toggle: toggleLang, t } = useLang();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoDot}>●</span>
          <span className={styles.logoText}>Youmene</span>
        </a>

        <div className={`${styles.links} ${mobileOpen ? styles.open : ""}`}>
          {linkMap.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={styles.link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
              onClick={() => setMobileOpen(false)}
            >
              {t.nav[link.key]}
            </motion.a>
          ))}

          {/* Language toggle */}
          <button
            className={styles.langToggle}
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            <Globe size={14} />
            <motion.span
              key={lang}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              {lang === "en" ? "FR" : "EN"}
            </motion.span>
          </button>

          {/* Theme toggle */}
          <button
            className={styles.themeToggle}
            onClick={toggle}
            aria-label="Toggle theme"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.div>
          </button>

          <motion.a
            href="#contact"
            className={styles.cta}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.cta}
          </motion.a>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.active : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </motion.nav>
  );
}
