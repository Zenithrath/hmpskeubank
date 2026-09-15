import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import SiteNavbar from "@/components/site-navbar";
import Starfield from "@/components/ui/starfield";
import AuroraBackground from "@/components/ui/aurora-background";
import SectionWatermark from "@/components/ui/section-watermark";
import Reveal from "@/components/ui/reveal";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { divisi, ketua, nilaiOrganisasi, sambutan, wakil } from "@/data/struktur";

function PimpinanCard({
  nama,
  prodi,
  jabatan,
  foto,
}: {
  nama: string;
  prodi: string;
  jabatan: string;
  foto: string;
}) {
  return (
    <div className="relative mx-auto flex w-full max-w-sm flex-col items-center">
      {/* Bingkai arch + ring glow */}
      <div className="w-56 rounded-t-[7rem] bg-gradient-to-b from-sky-200/50 via-white/10 to-transparent p-px sm:w-64">
        <div className="relative overflow-hidden rounded-t-[calc(7rem-1px)] bg-[#070d1f]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={foto}
            alt={nama}
            className="h-72 w-full object-cover object-top saturate-[.85] contrast-[1.05] sm:h-80"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070d1f]/80 via-transparent to-[#070d1f]/10" />
        </div>
      </div>
      {/* Papan nama kaca */}
      <div className="glass-pill relative z-10 -mt-8 w-full rounded-2xl px-6 py-4 text-center">
        <p className="relative z-[2] font-jakarta text-lg font-bold text-white">{nama}</p>
        <p className="relative z-[2] mt-0.5 font-mono text-[11px] tracking-[0.2em] text-sky-300/90 uppercase">
          {prodi}
        </p>
      </div>
      <span
        aria-hidden="true"
        className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-sky-300/70 to-transparent"
      />
      <p className="mt-3 text-center font-sans text-sm font-bold tracking-[0.25em] text-white/80 uppercase">
        {jabatan}
      </p>
    </div>
  );
}

export default function StrukturPage() {
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
            { label: "Struktur", href: "/struktur", isActive: true },
            { label: "Kontak", href: "/kontak" },
          ]}
          ctaButtonText="Gabung Kami"
          ctaButtonHref="/kontak"
        />

        {/* Hero — background sama dengan homepage */}
        <section className="relative isolate flex min-h-svh w-full flex-col overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.21st.dev/assets/mirror/a8/a8cf38f65f7315f95eba8c803c4a80a9d78cb2ea36fbfee49828396e4a0b9737.jpg"
            alt=""
            aria-hidden="true"
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover"
            style={{ filter: "hue-rotate(195deg) saturate(0.55) brightness(1.3)" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-blue-800/10" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070d1f]/60 via-transparent to-black" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black sm:h-48" />

          <div className="relative z-10 flex flex-1 flex-col justify-center">
            <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-10 sm:pb-20">
              <div className="mx-auto max-w-4xl text-center sm:mx-0 sm:text-left">
                <p className="animate-fade-slide-in-1 mb-5 font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>{" "}
                  / Struktur
                </p>
                <div className="animate-fade-slide-in-1 mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-2 py-0.5 font-sans text-xs font-medium text-neutral-900">
                    Struktur Organisasi
                  </span>
                  <span className="font-sans text-sm font-medium text-white">
                    Kabinet Vistara Dharma
                  </span>
                </div>

                <h1 className="animate-fade-slide-in-2 font-instrument-serif text-[19vw] leading-[0.9] font-normal tracking-tight text-white sm:text-8xl lg:text-9xl">
                  STRUKTUR
                </h1>
                <p className="animate-fade-slide-in-2 -mt-1 font-instrument-serif text-xl text-sky-200/90 italic sm:text-2xl">
                  kabinet vistara dharma — 2026
                </p>

                <p className="animate-fade-slide-in-3 mx-auto mt-6 max-w-2xl font-sans text-base text-white/65 sm:mx-0 sm:text-lg">
                  Kenali orang-orang di balik gerak kabinet — dari pimpinan
                  hingga empat divisi inti yang menopang kerja Vistara Dharma.
                </p>

                <div className="animate-fade-slide-in-4 mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                  <a
                    href="#divisi"
                    className="glass-pill inline-flex items-center gap-2 rounded-full px-5 py-3 font-jakarta text-sm font-semibold text-white"
                  >
                    Lihat Divisi
                    <ArrowRight className="relative z-[2] h-4 w-4" />
                  </a>
                  <a
                    href="#sambutan"
                    className="glass-pill inline-flex items-center gap-2 rounded-full px-5 py-3 font-jakarta text-sm font-medium text-white/85 transition-colors hover:text-white"
                  >
                    Sambutan Ketua
                    <ArrowDown className="relative z-[2] h-4 w-4" />
                  </a>
                </div>

                <dl className="animate-fade-slide-in-4 mx-auto mt-12 grid max-w-lg grid-cols-3 divide-x divide-white/10 border-y border-white/10 sm:mx-0">
                  {[
                    ["02", "Pimpinan"],
                    ["04", "Divisi Inti"],
                    ["05", "Nilai"],
                  ].map(([value, label]) => (
                    <div key={label} className="px-4 py-3.5 text-center sm:text-left">
                      <dt className="font-mono text-[10px] tracking-[0.2em] text-white/45 uppercase">
                        {label}
                      </dt>
                      <dd className="mt-1 font-sans text-xl font-bold tracking-tight text-white sm:text-2xl">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Sambutan */}
        <section id="sambutan" className="relative scroll-mt-24 overflow-hidden">
          <SectionWatermark text="SAMBUTAN" />
          <div className="relative mx-auto max-w-4xl px-6 pt-8 pb-16 md:py-24">
            <Reveal variant="up">
              <p className="text-center font-mono text-[11px] tracking-[0.35em] text-sky-300/80 uppercase">
                Sambutan Ketua & Wakil
              </p>
            </Reveal>
            <div className="mt-6 space-y-5">
              {sambutan.map((paragraf, i) => (
                <Reveal key={i} variant="up" delay={i * 100}>
                  <p className="text-center font-sans text-base leading-relaxed text-white/70 md:text-lg">
                    {paragraf}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pimpinan */}
        <section className="relative overflow-hidden border-t border-white/5">
          <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
            <div className="grid gap-14 sm:grid-cols-2 sm:gap-8">
              <Reveal variant="left">
                <PimpinanCard
                  nama={ketua.nama}
                  prodi={ketua.prodi}
                  jabatan={ketua.jabatan}
                  foto={ketua.foto}
                />
              </Reveal>
              <Reveal variant="right" delay={120}>
                <PimpinanCard
                  nama={wakil.nama}
                  prodi={wakil.prodi}
                  jabatan={wakil.jabatan}
                  foto={wakil.foto}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Divisi */}
        <section id="divisi" className="relative scroll-mt-24 overflow-hidden border-t border-white/5">
          <SectionWatermark text="DIVISI" />
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Reveal variant="up">
              <h2 className="text-center font-sans text-3xl font-bold tracking-tight text-white md:text-5xl">
                Empat Pilar Kabinet
              </h2>
            </Reveal>
            <div className="mt-12 space-y-6">
              {divisi.map((d, idx) => (
                <Reveal
                  key={d.slug}
                  variant={idx % 2 === 0 ? "left" : "right"}
                >
                  <Link
                    href={`/struktur/${d.slug}`}
                    className="group grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-sky-300/30 hover:bg-white/[0.04] sm:grid-cols-2"
                  >
                    <div
                      className={`relative h-52 overflow-hidden sm:h-full sm:min-h-64 ${
                        idx % 2 === 1 ? "sm:order-2" : ""
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={d.foto}
                        alt={d.nama}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                    <div className="flex flex-col justify-center p-6 sm:p-10">
                      <p className="font-mono text-[11px] tracking-[0.25em] text-sky-300/80 uppercase">
                        0{idx + 1} — Divisi
                      </p>
                      <h3 className="mt-2 font-sans text-2xl font-bold text-white sm:text-4xl">
                        {d.nama}
                      </h3>
                      <p className="mt-1 font-sans text-sm font-medium text-white/50">
                        {d.kepanjangan}
                      </p>
                      <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">
                        {d.deskripsi}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 font-jakarta text-sm font-semibold text-white">
                        Lihat Detail
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Nilai organisasi */}
        <section className="relative overflow-hidden border-t border-white/5">
          <div className="relative mx-auto max-w-5xl px-6 py-16 text-center md:py-24">
            <Reveal variant="up">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-white md:text-5xl">
                Nilai Organisasi
              </h2>
              <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-white/60 md:text-base">
                Lima nilai yang dipegang setiap anggota dalam berkarya.
              </p>
            </Reveal>
            <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
              {nilaiOrganisasi.map((nilai, i) => (
                <Reveal key={nilai} variant="pop" delay={i * 80}>
                  <span className="glass-pill inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-jakarta text-sm font-bold tracking-[0.15em] text-white sm:text-base">
                    {nilai}
                    <ArrowUpRight className="h-4 w-4 text-sky-300" />
                  </span>
                </Reveal>
              ))}
            </div>
            <Reveal variant="up" delay={150}>
              <p className="mt-12 font-sans text-xs text-white/40">
                * Data contoh — ganti dengan data resmi himpunan di{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono">
                  data/struktur.ts
                </code>
              </p>
            </Reveal>
          </div>
        </section>
      </div>
      <CinematicFooter basePath="/" />
    </main>
  );
}
