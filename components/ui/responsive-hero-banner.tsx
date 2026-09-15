"use client";

import type React from "react";
import { ArrowRight, Play } from "lucide-react";

interface ResponsiveHeroBannerProps {
  backgroundImageUrl?: string;
  badgeText?: string;
  badgeLabel?: string;
  title?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  backgroundImageUrl = "https://cdn.21st.dev/assets/mirror/a8/a8cf38f65f7315f95eba8c803c4a80a9d78cb2ea36fbfee49828396e4a0b9737.jpg",
  badgeLabel = "HMPS KeuBank",
  badgeText = "Kabinet Periode 2026",
  title = "Vistara Dharma",
  titleLine2 = "",
  description = "Kabinet Vistara Dharma — Vistara berarti luas, berkembang, dan terbentang; Dharma berarti kebenaran, prinsip, serta integritas. Inilah kompas kami dalam berkarya dan melayani mahasiswa KeuBank.",
  primaryButtonText = "Jelajahi Program Kerja",
  primaryButtonHref = "#proker",
  secondaryButtonText = "Tentang Kami",
  secondaryButtonHref = "#tentang",
}) => {
  return (
    <section className="relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-[#070d1f]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={backgroundImageUrl}
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover"
        // Silver cerah + navy: garis jadi terang keperakan, langit jadi navy tua
        style={{ filter: "hue-rotate(195deg) saturate(0.55) brightness(1.3)" }}
      />
      {/* Overlay navy tipis: teks tetap terbaca, garis tetap terang */}
      <div className="pointer-events-none absolute inset-0 bg-blue-800/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070d1f]/60 via-transparent to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black sm:h-48" />

      <div className="relative z-10 flex flex-1 flex-col justify-center sm:justify-end">
        <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-10 sm:pb-20">
          <div className="mx-auto max-w-4xl text-center sm:mx-0 sm:text-left">
            <div className="animate-fade-slide-in-1 mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur">
              <span className="inline-flex items-center rounded-full bg-white/90 px-2 py-0.5 font-sans text-xs font-medium text-neutral-900">{badgeLabel}</span>
              <span className="font-sans text-sm font-medium text-white">{badgeText}</span>
            </div>

            <h1 className="animate-fade-slide-in-2 font-instrument-serif text-[19vw] leading-[0.9] font-normal tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
              {title}
              {titleLine2 ? (
                <>
                  <br className="hidden sm:block" /> {titleLine2}
                </>
              ) : null}
            </h1>

            <p className="animate-fade-slide-in-3 mx-auto mt-6 max-w-2xl text-base text-white sm:mx-0 sm:text-lg">{description}</p>

            <div className="animate-fade-slide-in-4 mt-10 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a href={primaryButtonHref} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-sans text-sm font-medium text-white ring-1 ring-white/15 transition-colors hover:bg-white/15">
                {primaryButtonText}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={secondaryButtonHref} className="inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-3 font-sans text-sm font-medium text-white transition-colors hover:text-white">
                {secondaryButtonText}
                <Play className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveHeroBanner;
