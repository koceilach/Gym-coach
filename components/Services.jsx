"use client";
import { motion } from "framer-motion";
import { Zap, Dumbbell, HeartPulse, Timer, Flame, Shield } from "lucide-react";
import { useLang } from "./LanguageProvider";
import AnimatedSection from "./AnimatedSection";
import styles from "./Services.module.css";

const serviceIcons = [Zap, Dumbbell, HeartPulse, Timer, Flame, Shield];

export default function Services() {
  const { t } = useLang();

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
          </div>
        </AnimatedSection>

        <div className={styles.grid}>
          {t.services.items.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <AnimatedSection key={i} variant="fadeUp" delay={i * 0.08}>
                <motion.div
                  className={`${styles.card} ${s.tag ? styles.featured : ""}`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {s.tag && <span className={styles.tag}>{s.tag}</span>}
                  <div className={styles.iconWrap}>
                    <Icon size={22} />
                  </div>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.desc}</p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
