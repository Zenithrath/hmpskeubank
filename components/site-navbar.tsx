"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface SiteNavbarProps {
  logoUrl?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
}

const SiteNavbar: React.FC<SiteNavbarProps> = ({
  logoUrl = "/img/logokeubank__1_-removebg-preview.png",
  navLinks = [
    { label: "Home", href: "#", isActive: true },
    { label: "Tentang", href: "#tentang" },
    { label: "Divisi", href: "#divisi" },
    { label: "Proker", href: "#proker" },
    { label: "Galeri", href: "#galeri" },
  ],
  ctaButtonText = "Gabung Kami",
  ctaButtonHref = "#kontak",
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#070d1f]/40 shadow-lg shadow-black/30 backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-6 pb-3">
        <div className="flex items-center justify-between pt-4">
          <a
            href="#"
            aria-label="Home"
            className="inline-flex h-[44px] w-[120px] items-center justify-center rounded bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${logoUrl})` }}
          />

          <nav
            className="hidden items-center gap-2 md:flex"
            aria-label="Primary"
          >
            <div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-white/10 backdrop-blur">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-current={link.isActive ? "page" : undefined}
                  className={cn(
                    "px-3 py-2 font-sans text-sm font-medium transition-colors hover:text-white",
                    link.isActive ? "text-white/90" : "text-white/80"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={ctaButtonHref}
                className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 font-sans text-sm font-medium text-neutral-900 transition-colors hover:bg-white/90"
              >
                {ctaButtonText}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </nav>

          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-white/90" />
            ) : (
              <Menu className="h-5 w-5 text-white/90" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            className="mt-3 rounded-2xl bg-black/60 p-2 ring-1 ring-white/15 backdrop-blur-xl md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 font-sans text-sm font-medium transition-colors hover:bg-white/10 hover:text-white",
                    link.isActive ? "text-white" : "text-white/80"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={ctaButtonHref}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-sans text-sm font-medium text-neutral-900 transition-colors hover:bg-white/90"
              >
                {ctaButtonText}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default SiteNavbar;
