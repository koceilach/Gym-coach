"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ClipboardCheck, LineChart, Handshake, Rocket, Trophy } from "lucide-react";
import { useLang } from "./LanguageProvider";
import styles from "./About.module.css";

const stepIcons = [ClipboardCheck, LineChart, Handshake, Rocket, Trophy];
const stepColors = ["#a3e635", "#e85d2c", "#3d8b37", "#f59e0b", "#a3e635"];

export default function About() {
  const { t } = useLang();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  // Separate the final step from the timeline steps
  const timelineSteps = t.about.steps.filter((s) => !s.isFinal);
  const finalStep = t.about.steps.find((s) => s.isFinal);

  return (
    <section className="section" id="about" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            {t.about.eyebrow}
          </span>
          <h2 className={styles.title}>
            {t.about.headline1}<br />
            {t.about.headline2}<span className={styles.accent}>{t.about.headlineAccent}</span>
          </h2>
          <p className={styles.subtitle}>
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {/* Animated vertical line */}
          <div className={styles.line}>
            <motion.div className={styles.lineProgress} style={{ height: lineHeight }} />
          </div>

          {timelineSteps.map((step, i) => {
            const Icon = stepIcons[i];
            const color = stepColors[i];
            return (
              <motion.div
                key={i}
                className={`${styles.step} ${i % 2 === 1 ? styles.stepRight : ""}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Dot on the line */}
                <motion.div
                  className={styles.dot}
                  style={{ borderColor: color }}
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                >
                  <div className={styles.dotInner} style={{ background: color }} />
                </motion.div>

                {/* Card */}
                <motion.div
                  className={styles.card}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <div className={styles.cardTop}>
                    <span className={styles.stepNum} style={{ color }}>{step.num}</span>
                    <div className={styles.iconWrap} style={{ background: `${color}12`, color }}>
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                  <p className={styles.cardDesc}>{step.desc}</p>

                  {/* Bottom accent line */}
                  <div className={styles.cardAccent} style={{ background: color }} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Final Step — Centered */}
        {finalStep && (
          <motion.div
            className={styles.finalStep}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.15 + timelineSteps.length * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Connecting dot */}
            <motion.div
              className={styles.finalDot}
              whileInView={{ scale: [0, 1.4, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + timelineSteps.length * 0.15 }}
            />

            <motion.div
              className={styles.finalCard}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={styles.finalGlow} />
              <div className={styles.finalIconWrap}>
                <Trophy size={28} />
              </div>
              <span className={styles.finalNum}>{finalStep.num}</span>
              <h3 className={styles.finalTitle}>{finalStep.title}</h3>
              <p className={styles.finalDesc}>{finalStep.desc}</p>
              <div className={styles.finalAccentLine} />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
