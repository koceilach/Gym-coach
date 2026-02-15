"use client";
import { motion } from "framer-motion";
import styles from "./GlowCard.module.css";

export default function GlowCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`${styles.card} ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className={styles.glowBorder} />
      <div className={styles.content}>{children}</div>
    </motion.div>
  );
}
