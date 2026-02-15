"use client";
import { motion } from "framer-motion";
import { Check, X, ArrowUpRight } from "lucide-react";
import { useLang } from "./LanguageProvider";
import AnimatedSection from "./AnimatedSection";
import styles from "./Qualification.module.css";

export default function Qualification() {
  const { t } = useLang();

  return (
    <section className="section" id="qualification">
      <div className="container">
        <AnimatedSection variant="fadeUp">
          <div className={styles.header}>
            <p className="section-label">{t.qualification.eyebrow}</p>
            <h2 className="section-title">
              {t.qualification.headline1} <span className={styles.accent}>{t.qualification.headlineAccent}</span> {t.qualification.headline2}
            </h2>
            <p className={styles.subtitle}>
              {t.qualification.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {/* Right Fit Card */}
          <AnimatedSection variant="fadeUp" delay={0.1}>
            <motion.div
              className={`${styles.card} ${styles.cardPositive}`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIconWrap}>
                  <Check size={20} strokeWidth={2.5} />
                </div>
                <h3 className={styles.cardTitle}>{t.qualification.rightTitle}</h3>
              </div>

              <ul className={styles.list}>
                {t.qualification.rightFit.map((item, i) => (
                  <motion.li
                    key={i}
                    className={styles.listItem}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                  >
                    <span className={styles.iconPositive}>
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>

          {/* Wrong Fit Card */}
          <AnimatedSection variant="fadeUp" delay={0.2}>
            <motion.div
              className={`${styles.card} ${styles.cardNegative}`}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cardHeader}>
                <div className={`${styles.cardIconWrap} ${styles.cardIconNeg}`}>
                  <X size={20} strokeWidth={2.5} />
                </div>
                <h3 className={styles.cardTitle}>{t.qualification.wrongTitle}</h3>
              </div>

              <ul className={styles.list}>
                {t.qualification.wrongFit.map((item, i) => (
                  <motion.li
                    key={i}
                    className={styles.listItem}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                  >
                    <span className={styles.iconNegative}>
                      <X size={15} strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection variant="fadeUp" delay={0.3}>
          <div className={styles.ctaWrap}>
            <button
              className={styles.ctaBtn}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.qualification.cta}
              <ArrowUpRight size={18} />
            </button>
            <p className={styles.ctaNote}>{t.qualification.ctaNote}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
