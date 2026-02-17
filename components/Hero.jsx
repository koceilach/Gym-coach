"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLang } from "./LanguageProvider";
import styles from "./Hero.module.css";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: 40, scale: 1.02 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const { t } = useLang();

  const stats = [
    { number: "15+", label: t.hero.statYears },
    { number: "500+", label: t.hero.statClients },
    { number: "10K+", label: t.hero.statSessions },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.layout}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div className={styles.textSide} variants={staggerContainer}>
            <motion.p className={styles.eyebrow} variants={fadeUp}>
              {t.hero.availability}
            </motion.p>

            <motion.p className={styles.greeting} variants={fadeUp}>
              {t.hero.greeting}
            </motion.p>

            <motion.h1 className={styles.headline} variants={fadeUp}>
              {t.hero.headline1}{" "}
              <span className={styles.highlight}>{t.hero.headlineAccent}</span>
              <br />
              {t.hero.headline2}
            </motion.h1>

            <motion.p className={styles.description} variants={fadeUp}>
              {t.hero.description}
            </motion.p>

            <motion.p className={styles.coachLine} variants={fadeUp}>
              <strong>{t.hero.humanTitle}</strong> {t.hero.humanText}
            </motion.p>

            <motion.div className={styles.actions} variants={fadeUp}>
              <motion.button
                className={styles.ctaBtn}
                type="button"
                onClick={() => scrollToSection("contact")}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {t.hero.cta}
              </motion.button>

              <motion.button
                className={styles.linkBtn}
                type="button"
                onClick={() => scrollToSection("transformations")}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.hero.ctaSecondary}
                <ArrowUpRight size={15} />
              </motion.button>
            </motion.div>

            <motion.div className={styles.stats} variants={fadeUp}>
              {stats.map((stat, i) => (
                <div key={i} className={styles.stat}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className={styles.imageSide} variants={slideIn}>
            <Image
              src="/trainer.jpg"
              alt="Youmene - Fitness Trainer"
              fill
              className={styles.trainerImage}
              priority
              quality={100}
              sizes="(max-width: 1024px) 100vw, 48vw"
              unoptimized
            />
            <div className={styles.imageOverlay} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
