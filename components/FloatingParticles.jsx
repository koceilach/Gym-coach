"use client";
import { useEffect, useRef } from "react";

export default function FloatingParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frameId = 0;

    const isCoarsePointer =
      window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;

    const pointer = { x: -9999, y: -9999, active: false };
    const particleCount = Math.min(isCoarsePointer ? 26 : 56, Math.floor(window.innerWidth / 20));
    const linkDistance = isCoarsePointer ? 90 : 140;

    const lightColors = ["#a3e635", "#e85d2c", "#3d8b37", "#f59e0b"];
    const darkColors = ["#a3e635", "#e85d2c", "#7ccf76", "#f59e0b"];

    const getPalette = () =>
      document.documentElement.dataset.theme === "dark" ? darkColors : lightColors;

    let palette = getPalette();

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * (isCoarsePointer ? 0.22 : 0.34),
      vy: (Math.random() - 0.5) * (isCoarsePointer ? 0.2 : 0.3),
      size: Math.random() * 2.1 + 0.8,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.018 + 0.006,
      color: palette[Math.floor(Math.random() * palette.length)],
    }));

    const updateTheme = () => {
      palette = getPalette();
      particles.forEach((p) => {
        p.color = palette[Math.floor(Math.random() * palette.length)];
      });
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMouseMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    const onMouseLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.pulse += p.pulseSpeed;

        if (pointer.active) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.hypot(dx, dy) || 1;

          if (dist < 180) {
            const force = (1 - dist / 180) * 0.025;
            p.vx -= (dx / dist) * force;
            p.vy -= (dy / dist) * force;
          }
        }

        p.vx *= 0.992;
        p.vy *= 0.992;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;
        if (p.y < -30) p.y = height + 30;
        if (p.y > height + 30) p.y = -30;

        const pulseAlpha = 0.35 + (Math.sin(p.pulse) + 1) * 0.25;

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
        glow.addColorStop(0, `${p.color}66`);
        glow.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.globalAlpha = pulseAlpha;
        ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.min(1, pulseAlpha + 0.2);
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!isCoarsePointer) {
        for (let i = 0; i < particles.length; i += 1) {
          for (let j = i + 1; j < particles.length; j += 1) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.hypot(dx, dy);

            if (dist < linkDistance) {
              const alpha = (1 - dist / linkDistance) * 0.12;
              ctx.beginPath();
              ctx.strokeStyle = "rgba(255,255,255,0.45)";
              ctx.globalAlpha = alpha;
              ctx.lineWidth = 1;
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      ctx.globalAlpha = 1;
      frameId = window.requestAnimationFrame(animate);
    };

    const themeObserver = new MutationObserver(updateTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
        opacity: 0.85,
      }}
    />
  );
}
