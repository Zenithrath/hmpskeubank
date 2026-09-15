import Link from "next/link";
import { ArrowDown, ArrowRight, BadgeCheck, HeartHandshake, Lightbulb, MessagesSquare, ShieldCheck, Users } from "lucide-react";
import SiteNavbar from "@/components/site-navbar";
import Starfield from "@/components/ui/starfield";
import AuroraBackground from "@/components/ui/aurora-background";
import Planet from "@/components/ui/planet";
import SectionWatermark from "@/components/ui/section-watermark";
import Reveal from "@/components/ui/reveal";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { divisi } from "@/data/struktur";

const stats = [
  { value: "150+", label: "Anggota aktif" },
  { value: "30+", label: "Proker / tahun" },
  { value: "08", label: "Divisi" },
];

const makna = [
  {
    kata: "VISTARA",
    arti: "luas, berkembang, terbentang",
    deskripsi:
      "Vistara adalah keberanian untuk berpikir melampaui batas — wadah yang terbuka bagi siapa pun untuk tumbuh dan menjangkau lebih jauh.",
    poin: ["Berpikir luas & terbuka", "Bertumbuh tanpa henti", "Berdampak seluas-luasnya"],
  },
  {
    kata: "DHARMA",
    arti: "kebenaran, prinsip, integritas",
    deskripsi:
      "Dharma adalah kompas yang menjaga setiap langkah tetap lurus — kebenaran yang dipegang, prinsip yang konsisten, dan integritas yang amanah.",
    poin: ["Jujur & transparan", "Konsisten pada prinsip", "Amanah dalam karya"],
  },
];

const budaya = [
  {
    icon: HeartHandshake,
    title: "Kekeluargaan",
    desc: "Senior dan junior melebur jadi satu keluarga — tidak ada sekat angkatan dalam berkarya.",
  },
  {
    icon: MessagesSquare,
    title: "Keterbukaan",
    desc: "Kritik, saran, dan aspirasi didengar lewat forum terbuka. Semua suara punya ruang.",
  },
  {
    icon: ShieldCheck,
    title: "Integritas",
    desc: "Setiap keputusan dan dana organisasi dipertanggungjawabkan secara transparan.",
  },
  {
    icon: Lightbulb,
    title: "Inovasi",
    desc: "Cara lama yang sudah usang berani ditinggalkan demi program yang relevan dengan zaman.",
  },
  {
    icon: Users,
    title: "Kolaborasi",
    desc: "Antar divisi saling menopang — tidak ada yang berjalan sendiri-sendiri.",
  },
  {
    icon: BadgeCheck,
    title: "Tanggung Jawab",
    desc: "Amanah yang diterima diselesaikan tuntas. Komitmen bukan sekadar ucapan.",
  },
];

export default function TentangPage() {
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
            { label: "Tentang", href: "/tentang", isActive: true },
            { label: "Struktur", href: "/struktur" },
            { label: "Kontak", href: "/kontak" },
          ]}
          ctaButtonText="Gabung Kami"
          ctaButtonHref="/kontak"
        />

        {/* Hero — space: planet raksasa + nebula */}
        <section className="relative isolate flex min-h-svh w-full flex-col overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-blue-700/20 blur-[120px]"
          />
          <Planet variant="giant" className="right-[-14rem] bottom-[-10rem] sm:right-[-10rem]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070d1f]/40 via-transparent to-black" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black sm:h-48" />

          <div className="relative z-10 flex flex-1 flex-col justify-center">
            <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-10 sm:pb-20">
              <div className="mx-auto max-w-4xl text-center sm:mx-0 sm:text-left">
                <p className="animate-fade-slide-in-1 mb-5 font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>{" "}
                  / Tentang
                </p>
                <div className="animate-fade-slide-in-1 mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-2 py-0.5 font-sans text-xs font-medium text-neutral-900">
                    Profil Himpunan
                  </span>
                  <span className="font-sans text-sm font-medium text-white">
                    Kabinet Vistara Dharma
                  </span>
                </div>

                <h1 className="animate-fade-slide-in-2 font-instrument-serif text-[19vw] leading-[0.9] font-normal tracking-tight text-white sm:text-8xl lg:text-9xl">
                  TENTANG
                </h1>
                <p className="animate-fade-slide-in-2 -mt-1 font-instrument-serif text-xl text-sky-200/90 italic sm:text-2xl">
                  siapa kami — 2026
                </p>

                <p className="animate-fade-slide-in-3 mx-auto mt-6 max-w-2xl font-sans text-base text-white/65 sm:mx-0 sm:text-lg">
                  Himpunan mahasiswa Program Studi KeuBank — rumah bagi mereka
                  yang ingin bertumbuh, berkarya, dan berdampak.
                </p>

                <div className="animate-fade-slide-in-4 mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                  <a
                    href="#profil"
                    className="glass-pill inline-flex items-center gap-2 rounded-full px-5 py-3 font-jakarta text-sm font-semibold text-white"
                  >
                    Kenali Kami
                    <ArrowDown className="relative z-[2] h-4 w-4" />
                  </a>
                  <Link
                    href="/struktur"
                    className="glass-pill inline-flex items-center gap-2 rounded-full px-5 py-3 font-jakarta text-sm font-medium text-white/85 transition-colors hover:text-white"
                  >
                    Lihat Struktur
                    <ArrowRight className="relative z-[2] h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profil */}
        <section id="profil" className="relative scroll-mt-24 overflow-hidden">
          <SectionWatermark text="KAMI" />
          <div className="relative mx-auto max-w-4xl px-6 pt-8 pb-16 text-center md:py-24">
            <Reveal variant="up">
              <p className="font-mono text-[11px] tracking-[0.35em] text-sky-300/80 uppercase">
                Siapa Kami
              </p>
            </Reveal>
            <Reveal variant="up" delay={100}>
              <p className="mt-6 bg-gradient-to-b from-white via-white/75 to-white/45 bg-clip-text font-sans text-xl leading-snug font-semibold text-transparent md:text-3xl">
                Di HMPS KeuBank, kami percaya organisasi bukan sekadar tentang
                program — tapi tentang manusia. Kami tumbuh dengan prinsip
                vistara dan berpegang pada dharma, mengubah kebersamaan menjadi
                karya yang berdampak bagi anggota dan kampus.
              </p>
            </Reveal>
            <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 divide-x divide-white/10 border-y border-white/10">
              {stats.map((s) => (
                <div key={s.label} className="px-4 py-4">
                  <dt className="font-mono text-[10px] tracking-[0.2em] text-white/45 uppercase">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-sans text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Makna Vistara Dharma */}
        <section className="relative overflow-hidden border-t border-white/5">
          <SectionWatermark text="MAKNA" />
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Reveal variant="up">
              <p className="text-center font-mono text-[11px] tracking-[0.35em] text-sky-300/80 uppercase">
                Makna Nama Kabinet
              </p>
              <h2 className="mx-auto mt-3 max-w-2xl text-center font-sans text-3xl font-bold tracking-tight text-white md:text-5xl">
                Dua kata, satu kompas
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {makna.map((m, i) => (
                <Reveal key={m.kata} variant={i === 0 ? "left" : "right"} delay={i * 120}>
                  <div className="glass-pill flex h-full flex-col rounded-3xl p-8 sm:p-10">
                    <p className="relative z-[2] font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl">
                      {m.kata}
                    </p>
                    <p className="relative z-[2] mt-1 font-instrument-serif text-lg text-sky-200/90 italic">
                      {m.arti}
                    </p>
                    <p className="relative z-[2] mt-5 font-sans text-sm leading-relaxed text-white/65 sm:text-base">
                      {m.deskripsi}
                    </p>
                    <ul className="relative z-[2] mt-6 space-y-2.5 border-t border-white/10 pt-6">
                      {m.poin.map((p) => (
                        <li key={p} className="flex items-center gap-3 font-sans text-sm font-medium text-white/80">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Budaya organisasi */}
        <section className="relative overflow-hidden border-t border-white/5">
          <SectionWatermark text="BUDAYA" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
            <Reveal variant="up">
              <p className="text-center font-mono text-[11px] tracking-[0.35em] text-sky-300/80 uppercase">
                Budaya Organisasi
              </p>
              <h2 className="mx-auto mt-3 max-w-2xl text-center font-sans text-3xl font-bold tracking-tight text-white md:text-5xl">
                Cara kami bekerja & bertumbuh
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-center font-sans text-sm leading-relaxed text-white/60 md:text-base">
                Enam kebiasaan yang dijaga setiap anggota — dari rapat
                mingguan sampai cara menyambut anggota baru.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {budaya.map((b, i) => (
                <Reveal key={b.title} variant="pop" delay={(i % 3) * 90}>
                  <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/[0.04] sm:p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-white ring-1 ring-blue-400/30">
                      <b.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-sans text-lg font-bold text-white">
                      {b.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-white/60">
                      {b.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Divisi singkat */}
        <section className="relative overflow-hidden border-t border-white/5">
          <SectionWatermark text="DIVISI" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
            <Reveal variant="up">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <h2 className="max-w-xl font-sans text-3xl font-bold tracking-tight text-white md:text-5xl">
                  Digerakkan empat divisi
                </h2>
                <Link
                  href="/struktur"
                  className="inline-flex shrink-0 items-center gap-2 font-jakarta text-sm font-semibold text-sky-300 transition-colors hover:text-white"
                >
                  Struktur lengkap
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {divisi.map((d, i) => (
                <Reveal key={d.slug} variant="pop" delay={i * 80}>
                  <Link
                    href={`/struktur/${d.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/[0.04]"
                  >
                    <div className="relative h-40 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={d.foto}
                        alt={d.nama}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-sans text-lg font-bold text-white">
                        {d.nama}
                      </h3>
                      <p className="mt-1 line-clamp-2 font-sans text-xs leading-relaxed text-white/55">
                        {d.kepanjangan}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 font-jakarta text-xs font-semibold text-sky-300">
                        Detail
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-white/5">
          <div className="relative mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
            <Reveal variant="pop">
              <div className="glass-pill rounded-3xl px-6 py-12 sm:px-12">
                <h2 className="relative z-[2] font-sans text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Tertarik jadi bagian cerita?
                </h2>
                <p className="relative z-[2] mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-white/60">
                  Pendaftaran anggota baru dibuka setiap awal periode. Sapa kami
                  dulu — tidak ada salahnya kenalan.
                </p>
                <div className="relative z-[2] mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/kontak"
                    className="btn-navy inline-flex items-center gap-2 rounded-full px-6 py-3 font-jakarta text-sm font-bold text-white"
                  >
                    Hubungi Kami
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/struktur"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-jakarta text-sm font-medium text-white/80 transition-colors hover:text-white"
                  >
                    Kenali Pengurus
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
      <CinematicFooter basePath="/" />
    </main>
  );
}
