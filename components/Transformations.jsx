"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useLang } from "./LanguageProvider";
import AnimatedSection from "./AnimatedSection";
import styles from "./Transformations.module.css";

const images = [
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop",
];

export default function Transformations() {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);
  const item = t.testimonials.items[idx];
  const prev = () => setIdx((i) => (i === 0 ? t.testimonials.items.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === t.testimonials.items.length - 1 ? 0 : i + 1));

  return (
    <section className="section" id="transformations">
      <div className="container">
        <AnimatedSection variant="fadeUp">
          <div className={styles.header}>
            <p className="section-label">{t.testimonials.eyebrow}</p>
            <h2 className="section-title">
              {t.testimonials.headline1}<span className={styles.accent}>{t.testimonials.headlineAccent}</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className={styles.carousel}>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.textSide}>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="var(--accent)" color="var(--accent)" />
                  ))}
                </div>
                <blockquote className={styles.quote}>"{item.quote}"</blockquote>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    <img src={images[idx]} alt={item.name} />
                  </div>
                  <div>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.role}>{item.role}</p>
                  </div>
                </div>
              </div>

              <div className={styles.photoSide}>
                <img src={images[idx]} alt={item.name} className={styles.photo} />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.nav}>
            <button onClick={prev} className={styles.navBtn} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <span className={styles.counter}>{idx + 1} / {t.testimonials.items.length}</span>
            <button onClick={next} className={styles.navBtn} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
