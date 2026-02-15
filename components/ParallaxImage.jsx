"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImage({ src, alt, speed = 0.3, className = "", style = {} }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}px`, `${speed * 100}px`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        overflow: "hidden",
        borderRadius: "var(--radius-md)",
        ...style,
      }}
    >
      <motion.div
        style={{ y, scale, width: "100%", height: "100%" }}
      >
        {src ? (
          <img
            src={src}
            alt={alt || ""}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1510 100%)",
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
