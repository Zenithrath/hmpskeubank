import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, User } from "lucide-react";
import SiteNavbar from "@/components/site-navbar";
import Starfield from "@/components/ui/starfield";
import AuroraBackground from "@/components/ui/aurora-background";
import SectionWatermark from "@/components/ui/section-watermark";
import Reveal from "@/components/ui/reveal";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { divisi } from "@/data/struktur";

export function generateStaticParams() {
  return divisi.map((d) => ({ slug: d.slug }));
}

export default async function DivisiDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = divisi.find((item) => item.slug === slug);
  if (!d) notFound();

  const idx = divisi.indexOf(d);

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="relative z-10 flex min-h-screen flex-col bg-black">
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
          <Starfield />
        </div>
        <AuroraBackground />
        <SiteNavbar
          navLinks={[
            { label: "Home", href: "/" },
            { label: "Tentang", href: "/#tentang" },
            { label: "Divisi", href: "/struktur", isActive: true },
            { label: "Proker", href: "/#proker" },
            { label: "Galeri", href: "/#galeri" },
          ]}
          ctaButtonText="Gabung Kami"
          ctaButtonHref="/#kontak"
        />

        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <SectionWatermark text={d.nama} />
          <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-12 sm:pt-36">
            <Reveal variant="up">
              <Link
                href="/struktur"
                className="inline-flex items-center gap-2 font-jakarta text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Struktur
              </Link>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="mt-8 font-mono text-[11px] tracking-[0.25em] text-sky-300/80 uppercase">
                0{idx + 1} — Divisi
              </p>
              <h1 className="mt-2 font-sans text-5xl font-bold tracking-tight text-white sm:text-7xl">
                {d.nama}
              </h1>
              <p className="mt-2 font-sans text-lg font-medium text-white/50">
                {d.kepanjangan}
              </p>
              <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70">
                {d.deskripsi}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Foto */}
        <section className="relative">
          <div className="relative mx-auto max-w-7xl px-6">
            <Reveal variant="pop">
              <div className="relative h-64 overflow-hidden rounded-2xl ring-1 ring-white/15 sm:h-96">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.foto}
                  alt={d.nama}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Proker + staf */}
        <section className="relative">
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:py-20 lg:grid-cols-2">
            <div>
              <Reveal variant="left">
                <h2 className="font-sans text-2xl font-bold text-white sm:text-3xl">
                  Program Kerja
                </h2>
              </Reveal>
              <ul className="mt-6 space-y-4">
                {d.proker.map((p, i) => (
                  <Reveal key={p} variant="up" delay={i * 80}>
                    <li className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                      <span className="font-sans text-sm leading-relaxed text-white/80 sm:text-base">
                        {p}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
            <div>
              <Reveal variant="right">
                <h2 className="font-sans text-2xl font-bold text-white sm:text-3xl">
                  Pengurus Divisi
                </h2>
              </Reveal>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {d.staf.map((s, i) => (
                  <Reveal key={s.nama} variant="pop" delay={i * 80}>
                    <li className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                        <User className="h-5 w-5 text-sky-300" />
                      </span>
                      <span>
                        <span className="block font-jakarta text-sm font-bold text-white">
                          {s.nama}
                        </span>
                        <span className="block font-mono text-[10px] tracking-[0.18em] text-white/50 uppercase">
                          {s.peran}
                        </span>
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Navigasi antar divisi */}
        <section className="relative border-t border-white/5">
          <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-10">
            {idx > 0 ? (
              <Link
                href={`/struktur/${divisi[idx - 1].slug}`}
                className="glass-pill inline-flex items-center gap-2 rounded-full px-5 py-3 font-jakarta text-sm font-semibold text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                {divisi[idx - 1].nama}
              </Link>
            ) : (
              <span />
            )}
            {idx < divisi.length - 1 ? (
              <Link
                href={`/struktur/${divisi[idx + 1].slug}`}
                className="glass-pill inline-flex items-center gap-2 rounded-full px-5 py-3 font-jakarta text-sm font-semibold text-white"
              >
                {divisi[idx + 1].nama}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </section>
      </div>
      <CinematicFooter basePath="/" />
    </main>
  );
}
