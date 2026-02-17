"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Brain, MessageSquare, LineChart } from "lucide-react";
import { useLang } from "./LanguageProvider";
import styles from "./Community.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Community() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const edgeIcons = [MessageSquare, LineChart, Brain];
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <>
      <div className={styles.dividerWrap} aria-hidden="true">
        <motion.div className={styles.dividerTrack} style={{ x: marqueeX }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className={styles.dividerText}>
              {t.coach.divider}
              <span className={styles.dividerDot}>✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      <section className={styles.section} ref={ref} id="coach">
        <div className={`container ${styles.wrapper}`}>
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imageCard}>
              <Image
                src="/coach.jpg"
                alt="Coach"
                fill
                className={styles.coachImage}
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
              <div className={styles.imageOverlay} />

              <motion.div
                className={styles.expBadge}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35, duration: 0.45 }}
              >
                <span className={styles.expNumber}>{t.coach.expNumber}</span>
                <span className={styles.expLabel}>
                  {t.coach.expLabel.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </span>
              </motion.div>
            </div>
          </motion.div>

          <div className={styles.textCol}>
            <motion.span
              className={styles.eyebrow}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
            >
              {t.coach.eyebrow}
            </motion.span>

            <motion.h2
              className={styles.headline}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.coach.headline1}
              <br />
              <span className={styles.accent}>{t.coach.headlineAccent}</span>
            </motion.h2>

            <motion.p
              className={styles.bio}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0.16, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.coach.bio}
            </motion.p>

            {t.coach.note ? (
              <motion.div
                className={styles.note}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                transition={{ delay: 0.24, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className={styles.noteLabel}>{t.coach.noteLabel}</p>
                <p className={styles.noteText}>{t.coach.note}</p>
              </motion.div>
            ) : null}

            <motion.ul
              className={styles.highlights}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0.3, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.coach.highlights.map((item, i) => (
                <li key={i} className={styles.highlightItem}>
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            {t.coach.edgeItems?.length ? (
              <motion.div
                className={styles.edgeBlock}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                transition={{ delay: 0.34, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className={styles.edgeTitle}>{t.coach.edgeTitle}</p>
                <ul className={styles.edgeList}>
                  {t.coach.edgeItems.map((item, i) => {
                    const Icon = edgeIcons[i % edgeIcons.length];
                    return (
                      <li key={i} className={styles.edgeItem}>
                        <span className={styles.edgeIcon}>
                          <Icon size={16} />
                        </span>
                        <div className={styles.edgeContent}>
                          <div className={styles.edgeTop}>
                            <h3 className={styles.edgeItemTitle}>{item.title}</h3>
                            {item.metric ? (
                              <span className={styles.edgeMetric}>{item.metric}</span>
                            ) : null}
                          </div>
                          <p className={styles.edgeDesc}>{item.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ) : null}

            <motion.button
              className={styles.ctaLink}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              transition={{ delay: 0.38, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.coach.cta}
              <ArrowRight size={17} />
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}
