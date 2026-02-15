"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Users, Dumbbell } from "lucide-react";
import Image from "next/image";
import { useLang } from "./LanguageProvider";
import styles from "./Hero.module.css";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 80, scale: 1.05 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const { t } = useLang();

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.card}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Decorative elements */}
          <motion.div
            className={styles.glowOrb}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
          <div className={styles.gridPattern} />

          {/* Left — Text side */}
          <motion.div className={styles.textSide} variants={staggerContainer}>
            <motion.p className={styles.greeting} variants={fadeUp}>
              {t.hero.greeting}
            </motion.p>

            <motion.h1 className={styles.headline} variants={fadeUp}>
              {t.hero.headline1}{" "}
              <motion.span
                className={styles.highlight}
                initial={{ backgroundSize: "0% 3px" }}
                animate={{ backgroundSize: "100% 3px" }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {t.hero.headlineAccent}
              </motion.span>
              <br />
              {t.hero.headline2}
            </motion.h1>

            <motion.p className={styles.description} variants={fadeUp}>
              {t.hero.description}
            </motion.p>

            <motion.div className={styles.actions} variants={fadeUp}>
              <motion.button
                className={styles.ctaBtn}
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.hero.cta}
              </motion.button>
              <motion.button
                className={styles.arrowBtn}
                whileHover={{ rotate: 45, scale: 1.1, borderColor: "#a3e635" }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUpRight size={18} />
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div className={styles.stats} variants={fadeUp}>
              {[
                { icon: Award, number: "5+", label: t.hero.statYears },
                { icon: Users, number: "200+", label: t.hero.statClients },
                { icon: Dumbbell, number: "500+", label: t.hero.statSessions },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  style={{ display: "contents" }}
                >
                  {i > 0 && <div className={styles.statDivider} />}
                  <motion.div
                    className={styles.stat}
                    whileHover={{ y: -3, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className={styles.statIcon}>
                      <stat.icon size={16} />
                    </div>
                    <div className={styles.statInfo}>
                      <motion.span
                        className={styles.statNumber}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 + i * 0.15, duration: 0.5 }}
                      >
                        {stat.number}
                      </motion.span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Background watermark text */}
            <motion.div
              className={styles.watermark}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.hero.watermark}
            </motion.div>
          </motion.div>

          {/* Right — Trainer image */}
          <motion.div className={styles.imageSide} variants={slideRight}>
            <Image
              src="/trainer.jpg"
              alt="Youmene - Fitness Trainer"
              fill
              className={styles.trainerImage}
              priority
              quality={100}
              sizes="50vw"
              unoptimized
            />
            <div className={styles.imageOverlay} />
            <motion.div
              className={styles.cornerAccent}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6, ease: "backOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
