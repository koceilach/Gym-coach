"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Trophy, Users, Clock, Flame, ChevronDown } from "lucide-react";
import { useLang } from "./LanguageProvider";
import styles from "./Tagline.module.css";

const statIcons = [Users, Trophy, Clock, Flame];
const statColors = ["#a3e635", "#e85d2c", "#3d8b37", "#f59e0b"];

const marqueeWords = [
  "VITESSE", "FORCE", "AGILITÉ", "PUISSANCE", "ENDURANCE",
  "FOCUS", "RÉSILIENCE", "PERFORMANCE", "DÉVOUEMENT", "RÉSULTATS",
];

function AnimatedCounter({ value, inView }) {
  const numericPart = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9]/g, "");

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {inView ? numericPart : "0"}{suffix}
    </motion.span>
  );
}

export default function Tagline() {
  const { t } = useLang();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const scrollToNext = () => {
    const nextSection = sectionRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* Marquee strip */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marquee}>
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className={styles.marqueeWord}>
              {word}
              <span className={styles.marqueeDot}>●</span>
            </span>
          ))}
        </div>
      </div>

      <div className={`container ${styles.container}`}>
        {/* Top content — headline + description */}
        <motion.div className={styles.topRow} style={{ y: y2 }}>
          <motion.div
            className={styles.headlineBlock}
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              {t.tagline.eyebrow}
            </span>
            <h2 className={styles.headline}>
              {t.tagline.headline1}<br />
              {t.tagline.headline2}<span className={styles.accent}>{t.tagline.headlineAccent}</span>
            </h2>
          </motion.div>

          <motion.div
            className={styles.descBlock}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.description}>
              {t.tagline.description}
            </p>
            <button className={styles.scrollBtn} onClick={scrollToNext}>
              {t.tagline.scrollBtn}
              <ChevronDown size={16} />
            </button>
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <motion.div className={styles.statsGrid} style={{ y: y1, opacity }}>
          {t.tagline.stats.map((stat, i) => {
            const Icon = statIcons[i];
            const color = statColors[i];
            return (
              <motion.div
                key={i}
                className={styles.statCard}
                initial={{ opacity: 0, y: 50, rotate: -2 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  className={styles.statIconWrap}
                  style={{ background: `${color}15`, color }}
                >
                  <Icon size={22} />
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statValue} style={{ color }}>
                    <AnimatedCounter value={stat.value} inView={isInView} />
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
                <div
                  className={styles.statGlow}
                  style={{ background: `radial-gradient(circle, ${color}08, transparent 70%)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Decorative floating shapes */}
      <motion.div
        className={`${styles.floatShape} ${styles.shape1}`}
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className={`${styles.floatShape} ${styles.shape2}`}
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </section>
  );
}
