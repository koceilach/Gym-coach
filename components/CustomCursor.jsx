"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { damping: 25, stiffness: 300, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300, mass: 0.5 });

  const trailX = useSpring(cursorX, { damping: 40, stiffness: 150, mass: 0.8 });
  const trailY = useSpring(cursorY, { damping: 40, stiffness: 150, mass: 0.8 });

  const handleMouseMove = useCallback((e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [cursorX, cursorY, isVisible]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    window.addEventListener("mousemove", handleMouseMove);
    
    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    const handleHoverIn = (e) => {
      const target = e.target;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.tagName === "BUTTON" ||
        target.tagName === "A"
      ) {
        setIsHovering(true);
      }
    };
    const handleHoverOut = () => setIsHovering(false);
    document.addEventListener("mouseover", handleHoverIn);
    document.addEventListener("mouseout", handleHoverOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseover", handleHoverIn);
      document.removeEventListener("mouseout", handleHoverOut);
    };
  }, [isMobile, handleMouseMove]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer glow trail */}
      <motion.div
        style={{
          position: "fixed",
          left: trailX,
          top: trailY,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          borderRadius: "50%",
          border: `1.5px solid ${isHovering ? "rgba(163, 230, 53, 0.4)" : "rgba(232, 93, 44, 0.2)"}`,
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          transition: "width 0.3s, height 0.3s, border 0.3s, opacity 0.3s",
          mixBlendMode: "difference",
        }}
      />
      {/* Inner dot */}
      <motion.div
        style={{
          position: "fixed",
          left: springX,
          top: springY,
          width: isClicking ? 6 : isHovering ? 10 : 8,
          height: isClicking ? 6 : isHovering ? 10 : 8,
          borderRadius: "50%",
          background: isHovering ? "#a3e635" : "#e85d2c",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          opacity: isVisible ? 1 : 0,
          transition: "width 0.2s, height 0.2s, background 0.3s, opacity 0.3s",
          boxShadow: isHovering
            ? "0 0 20px rgba(163, 230, 53, 0.5), 0 0 40px rgba(163, 230, 53, 0.2)"
            : "0 0 10px rgba(232, 93, 44, 0.3)",
        }}
      />
    </>
  );
}
