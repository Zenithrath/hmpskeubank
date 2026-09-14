"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  speed: number;
  phase: number;
  glow: boolean;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

interface StarfieldProps {
  className?: string;
  /** Satu bintang per sekian px persegi. Makin kecil makin rapat. */
  density?: number;
  /** Jeda antar meteor dalam ms: [min, max] */
  meteorInterval?: [number, number];
}

export default function Starfield({
  className = "",
  density = 1 / 7500,
  meteorInterval = [3000, 6500],
}: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let stars: Star[] = [];
    let meteors: Meteor[] = [];
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const seedStars = () => {
      const count = Math.min(320, Math.floor(w * h * density));
      stars = Array.from({ length: count }, () => {
        const roll = Math.random();
        // 80% kecil, 15% sedang, 5% besar + glow
        const r =
          roll < 0.8
            ? Math.random() * 0.9 + 0.3
            : roll < 0.95
              ? Math.random() * 0.6 + 1.2
              : Math.random() * 1.0 + 1.8;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r,
          baseAlpha: r > 1.6 ? 0.95 : Math.random() * 0.5 + 0.4,
          speed: Math.random() * 1.6 + 0.5,
          phase: Math.random() * Math.PI * 2,
          glow: r > 1.6,
        };
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedStars();
    };

    const spawnMeteor = () => {
      const goingRight = Math.random() < 0.5;
      const speed = 5 + Math.random() * 4;
      meteors.push({
        x: w * 0.1 + Math.random() * w * 0.8,
        y: Math.random() * h * 0.35,
        vx: (goingRight ? 1 : -1) * speed,
        vy: speed * 0.45,
        life: 80,
        maxLife: 80,
      });
    };

    const drawStars = (t: number) => {
      ctx.fillStyle = "#ffffff";
      for (const s of stars) {
        ctx.globalAlpha =
          s.baseAlpha * (0.55 + 0.45 * Math.sin(t * s.speed + s.phase));
        if (s.glow) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = "rgba(255,255,255,0.9)";
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };

    const drawMeteors = () => {
      const tail = 18;
      meteors = meteors.filter((m) => m.life > 0);
      for (const m of meteors) {
        m.x += m.vx;
        m.y += m.vy;
        m.life -= 1;
        const p = Math.max(m.life / m.maxLife, 0);
        const tx = m.x - m.vx * tail;
        const ty = m.y - m.vy * tail;
        const grad = ctx.createLinearGradient(m.x, m.y, tx, ty);
        grad.addColorStop(0, `rgba(255,255,255,${0.95 * p})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();
        ctx.globalAlpha = p;
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(255,255,255,0.9)";
        ctx.beginPath();
        ctx.arc(m.x, m.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      drawStars(0);
      return () => window.removeEventListener("resize", resize);
    }

    let nextMeteor = performance.now() + 1200;
    const tick = (now: number) => {
      const t = now / 1000;
      ctx.clearRect(0, 0, w, h);
      drawStars(t);
      if (now >= nextMeteor) {
        spawnMeteor();
        const [min, max] = meteorInterval;
        nextMeteor = now + min + Math.random() * (max - min);
      }
      drawMeteors();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density, meteorInterval]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
