"use client";
import { motion } from "framer-motion";
import {
  Zap,
  Dumbbell,
  HeartPulse,
  Timer,
  Flame,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useLang } from "./LanguageProvider";
import AnimatedSection from "./AnimatedSection";
import styles from "./Services.module.css";

const serviceIcons = [Zap, Dumbbell, HeartPulse, Timer, Flame, Shield];

export default function Services() {
  const { t } = useLang();
  const proofs = t.services.proofs || [];

  return (
    <section className="section" id="services">
      <div className="container">
        <AnimatedSection variant="fadeUp">
          <div className={styles.header}>
            <p className="section-label">{t.services.eyebrow}</p>
            <h2 className="section-title">
              {t.services.headline1}<br />
              {t.services.headline2}<span className={styles.accent}>{t.services.headlineAccent}</span>
            </h2>
            <p className="section-subtitle">
              {t.services.subtitle}
            </p>
            {proofs.length ? (
              <div className={styles.proofRow}>
                {proofs.map((proof, i) => (
                  <span key={i} className={styles.proofChip}>
                    <CheckCircle2 size={14} />
                    {proof}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {t.services.items.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <AnimatedSection key={i} variant="fadeUp" delay={i * 0.08}>
                <motion.div
                  className={`${styles.card} ${s.tag ? styles.featured : ""} ${i === 0 ? styles.speedCard : ""}`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {s.tag && <span className={styles.tag}>{s.tag}</span>}
                  <div className={styles.iconWrap}>
                    <Icon size={22} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{s.title}</h3>
                    <p className={styles.cardDesc}>{s.desc}</p>
                  </div>
                  {(s.focus || s.result) ? (
                    <div className={styles.meta}>
                      {s.focus ? (
                        <span className={styles.metaItem}>
                          <strong>{t.services.metaFocus}</strong> {s.focus}
                        </span>
                      ) : null}
                      {s.result ? (
                        <span className={styles.metaItem}>
                          <strong>{t.services.metaResult}</strong> {s.result}
                        </span>
                      ) : null}
                    </div>
                  ) : null}
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection variant="fadeUp" delay={0.25}>
          <div className={styles.bottomCta}>
            <div>
              <p className={styles.bottomTitle}>{t.services.bottomTitle}</p>
              <p className={styles.bottomText}>{t.services.bottomText}</p>
            </div>
            <motion.button
              className={styles.bottomBtn}
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.services.bottomCta}
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
