"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionWatermarkProps {
  text: string;
  className?: string;
}

/**
 * Tulisan raksasa memudar di latar section, seperti "COMPROF"
 * di section video. Section pemakai wajib `relative` + `overflow-hidden`.
 * Punya parallax scrub: geser naik perlahan mengikuti scroll.
 */
export default function SectionWatermark({
  text,
  className = "",
}: SectionWatermarkProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mm = gsap.matchMedia();
    // Parallax cuma di desktop — di HP watermark diam biar stabil.
    mm.add("(min-width: 768px)", () => {
      const tween = gsap.fromTo(
        el,
        { yPercent: 40 },
        {
          yPercent: -40,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
    return () => mm.revert();
  }, [text]);

  const sizeClass =
    text.length > 10 ? "text-[12vw]" : text.length > 7 ? "text-[15vw]" : "text-[19vw]";

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-2 bg-gradient-to-b from-white/[0.18] via-white/[0.09] to-transparent bg-clip-text text-center font-sans leading-none font-bold tracking-tight whitespace-nowrap text-transparent select-none will-change-transform sm:top-8 sm:text-[18vw] lg:text-[13rem] ${sizeClass} ${className}`}
    >
      {text}
    </span>
  );
}
