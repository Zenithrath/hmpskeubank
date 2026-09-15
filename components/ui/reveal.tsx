"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export type RevealVariant = "up" | "pop" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** up = fade naik, pop = zoom, left/right = geser dari sisi */
  variant?: RevealVariant;
}

/**
 * Animasi scroll yang main dua arah: muncul saat masuk viewport,
 * mengulang saat user scroll balik ke atas/bawah.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-variant={variant}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
