"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Award, Target, Dumbbell, ArrowRight } from "lucide-react";
import { useLang } from "./LanguageProvider";
import styles from "./Community.module.css";

export default function Community() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const highlightIcons = [Award, Target, Dumbbell];

  return (
    <>
      {/* Scrolling text divider */}
      <div className={styles.dividerWrap}>
        <motion.div className={styles.dividerTrack} style={{ x: marqueeX }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className={styles.dividerText}>
              {t.coach.divider}
              <span className={styles.dividerDot}>✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Coach section */}
      <section className={styles.section} ref={ref} id="coach">
        <div className={`container ${styles.wrapper}`}>
          {/* Image side */}
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imageCard}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholderIcon}>👤</div>
                <span className={styles.placeholderLabel}>{t.coach.placeholder}</span>
              </div>

              {/* Floating badge */}
              <motion.div
                className={styles.expBadge}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <span className={styles.expNumber}>{t.coach.expNumber}</span>
                <span className={styles.expLabel}>{t.coach.expLabel.split('\n').map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}</span>
              </motion.div>
            </div>

            {/* Decorative accent bar */}
            <motion.div
              className={styles.accentBar}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>

          {/* Text side */}
          <div className={styles.textCol}>
            <motion.span
              className={styles.eyebrow}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className={styles.eyebrowDot} />
              {t.coach.eyebrow}
            </motion.span>

            <motion.h2
              className={styles.headline}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {t.coach.headline1}
              <br />
              <span className={styles.accent}>{t.coach.headlineAccent}</span>
            </motion.h2>

            <motion.p
              className={styles.bio}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              {t.coach.bio}
            </motion.p>

            <motion.div
              className={styles.highlights}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              {t.coach.highlights.map((label, i) => (
                <motion.div
                  key={i}
                  className={styles.tag}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {highlightIcons[i] && (() => { const Icon = highlightIcons[i]; return <Icon size={16} />; })()}
                  <span>{label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className={styles.ctaLink}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.6 }}
              whileHover={{ x: 4 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.coach.cta}
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}
