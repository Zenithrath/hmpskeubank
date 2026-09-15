"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  AtSign,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import SiteNavbar from "@/components/site-navbar";
import Starfield from "@/components/ui/starfield";
import AuroraBackground from "@/components/ui/aurora-background";
import SectionWatermark from "@/components/ui/section-watermark";
import Reveal from "@/components/ui/reveal";
import { CinematicFooter } from "@/components/ui/motion-footer";

// GANTI dengan nomor WhatsApp resmi himpunan (format: kode negara tanpa +).
const WA_NUMBER = "6281234567890";

const KATEGORI = [
  "Akademik & Perkuliahan",
  "Fasilitas Kampus",
  "Organisasi & Kegiatan",
  "Keuangan & Transparansi",
  "Lainnya",
];

const kontakInfo = [
  {
    icon: MapPin,
    label: "Sekretariat",
    value: "Gedung Kemahasiswaan, Kampus KeuBank",
    href: undefined as string | undefined,
  },
  {
    icon: Mail,
    label: "Email",
    value: "hmpskeubank@example.ac.id",
    href: "mailto:hmpskeubank@example.ac.id",
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: "@hmpskeubank",
    href: "https://instagram.com/hmpskeubank",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 812-3456-7890",
    href: `https://wa.me/${WA_NUMBER}`,
  },
];

export default function KontakPage() {
  const [nama, setNama] = useState("");
  const [prodi, setProdi] = useState("");
  const [kategori, setKategori] = useState("");
  const [isi, setIsi] = useState("");
  const [anonim, setAnonim] = useState(false);
  const [error, setError] = useState("");
  const [waUrl, setWaUrl] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!anonim && nama.trim().length < 3) {
      setError("Isi nama dulu (min. 3 huruf) atau centang kirim sebagai anonim.");
      return;
    }
    if (!kategori) {
      setError("Pilih kategori aspirasi dulu.");
      return;
    }
    if (isi.trim().length < 10) {
      setError("Ceritakan aspirasimu sedikit lebih lengkap (min. 10 huruf).");
      return;
    }

    const baris = [
      "Halo HMPS KeuBank! Saya ingin menyampaikan aspirasi:",
      "",
      `Nama: ${anonim ? "Anonim" : nama.trim()}`,
      `Prodi/Angkatan: ${prodi.trim() || "-"}`,
      `Kategori: ${kategori}`,
      "",
      isi.trim(),
      "",
      "Dikirim via web HMPS KeuBank.",
    ];
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(baris.join("\n"))}`;
    setWaUrl(url);
    window.open(url, "_blank", "noopener");
  };

  const resetForm = () => {
    setNama("");
    setProdi("");
    setKategori("");
    setIsi("");
    setAnonim(false);
    setError("");
    setWaUrl("");
  };

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
            { label: "Tentang", href: "/tentang" },
            { label: "Struktur", href: "/struktur" },
            { label: "Kontak", href: "/kontak", isActive: true },
          ]}
          ctaButtonText="Kirim Aspirasi"
          ctaButtonHref="#aspirasi"
        />

        {/* Hero — streak sama kayak homepage, beda crop + tint */}
        <section className="relative isolate flex min-h-svh w-full flex-col overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.21st.dev/assets/mirror/a8/a8cf38f65f7315f95eba8c803c4a80a9d78cb2ea36fbfee49828396e4a0b9737.jpg"
            alt=""
            aria-hidden="true"
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full object-cover object-[78%_25%]"
            style={{ filter: "hue-rotate(222deg) saturate(0.75) brightness(1.05)" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070d1f]/40 via-transparent to-black" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black sm:h-48" />

          <div className="relative z-10 flex flex-1 flex-col justify-center">
            <div className="mx-auto w-full max-w-7xl px-6 pt-24 pb-10 sm:pb-20">
              <div className="mx-auto max-w-4xl text-center sm:mx-0 sm:text-left">
                <p className="animate-fade-slide-in-1 mb-5 font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>{" "}
                  / Kontak
                </p>
                <div className="animate-fade-slide-in-1 mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-2 py-0.5 font-sans text-xs font-medium text-neutral-900">
                    Hubungi Kami
                  </span>
                  <span className="font-sans text-sm font-medium text-white">
                    Respon &lt; 2×24 jam
                  </span>
                </div>

                <h1 className="animate-fade-slide-in-2 font-instrument-serif text-[19vw] leading-[0.9] font-normal tracking-tight text-white sm:text-8xl lg:text-9xl">
                  KONTAK
                </h1>
                <p className="animate-fade-slide-in-2 -mt-1 font-instrument-serif text-xl text-sky-200/90 italic sm:text-2xl">
                  suaramu berarti 2026
                </p>

                <p className="animate-fade-slide-in-3 mx-auto mt-6 max-w-2xl font-sans text-base text-white/65 sm:mx-0 sm:text-lg">
                  Ada pertanyaan, keluhan, atau ide? Sampaikan lewat form
                  aspirasi atau hubungi kanal resmi kami di bawah.
                </p>

                <div className="animate-fade-slide-in-4 mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                  <a
                    href="#aspirasi"
                    className="glass-pill inline-flex items-center gap-2 rounded-full px-5 py-3 font-jakarta text-sm font-semibold text-white"
                  >
                    Tulis Aspirasi
                    <Send className="relative z-[2] h-4 w-4" />
                  </a>
                  <a
                    href="#info"
                    className="glass-pill inline-flex items-center gap-2 rounded-full px-5 py-3 font-jakarta text-sm font-medium text-white/85 transition-colors hover:text-white"
                  >
                    Info Kontak
                    <ArrowRight className="relative z-[2] h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info kontak */}
        <section id="info" className="relative scroll-mt-24 overflow-hidden">
          <SectionWatermark text="INFO" />
          <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-16 md:py-24">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {kontakInfo.map((item, i) => (
                <Reveal key={item.label} variant="pop" delay={i * 80}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex h-full items-start gap-4 rounded-2xl border border-white/15 bg-[#0d1730]/85 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-[#16244d]/85"
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-white ring-1 ring-blue-400/30">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-mono text-[10px] tracking-[0.2em] text-white/45 uppercase">
                          {item.label}
                        </span>
                        <span className="mt-1 block font-jakarta text-sm font-semibold break-words text-white">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  ) : (
                    <div className="flex h-full items-start gap-4 rounded-2xl border border-white/15 bg-[#0d1730]/85 p-6 backdrop-blur">
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-white ring-1 ring-blue-400/30">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block font-mono text-[10px] tracking-[0.2em] text-white/45 uppercase">
                          {item.label}
                        </span>
                        <span className="mt-1 block font-jakarta text-sm font-semibold text-white">
                          {item.value}
                        </span>
                      </span>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Form aspirasi */}
        <section
          id="aspirasi"
          className="relative scroll-mt-24 overflow-hidden border-t border-white/5"
        >
          <SectionWatermark text="ASPIRASI" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-24 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Reveal variant="left">
                <p className="font-mono text-[11px] tracking-[0.3em] text-sky-300/80 uppercase">
                  Form Aspirasi
                </p>
                <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Sampaikan aspirasimu, kami dengarkan.
                </h2>
                <p className="mt-4 font-sans text-sm leading-relaxed text-white/65 sm:text-base">
                  Isi form di samping. Aspirasimu langsung diteruskan ke
                  WhatsApp resmi himpunan. Boleh anonim kalau lebih nyaman.
                </p>
                <p className="mt-6 flex items-start gap-2 font-sans text-xs leading-relaxed text-white/45">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky-300/70" />
                  Dibaca pengurus maksimal 2×24 jam pada hari kerja.
                </p>
              </Reveal>
            </div>

            <Reveal variant="right" delay={120} className="lg:col-span-3">
              <div className="rounded-2xl border border-white/15 bg-[#0b1530]/85 p-6 ring-1 ring-white/10 backdrop-blur-xl sm:p-8">
                {waUrl ? (
                  <div className="flex flex-col items-center py-8 text-center">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/40">
                      <Send className="h-6 w-6 text-emerald-300" />
                    </span>
                    <h3 className="mt-5 font-jakarta text-xl font-bold text-white">
                      Aspirasi siap dikirim!
                    </h3>
                    <p className="mt-2 max-w-sm font-sans text-sm leading-relaxed text-white/60">
                      WhatsApp sudah dibuka di tab baru. Tinggal tekan kirim.
                      Kalau belum kebuka, pakai tombol di bawah.
                    </p>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-navy inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-jakarta text-sm font-semibold text-white"
                      >
                        Buka WhatsApp
                        <ArrowRight className="h-4 w-4" />
                      </a>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="glass-pill inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-jakarta text-sm font-medium text-white/85 hover:text-white"
                      >
                        Tulis Lagi
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="aspirasi-nama"
                          className="mb-2 block font-jakarta text-xs font-semibold tracking-wider text-white/70 uppercase"
                        >
                          Nama {!anonim && <span className="text-sky-300">*</span>}
                        </label>
                        <input
                          id="aspirasi-nama"
                          type="text"
                          value={nama}
                          onChange={(e) => setNama(e.target.value)}
                          disabled={anonim}
                          placeholder="Nama lengkap"
                          className="w-full rounded-xl border border-white/15 bg-black/70 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:border-sky-300/50 focus:ring-1 focus:ring-sky-300/30 focus:outline-none disabled:opacity-40"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="aspirasi-prodi"
                          className="mb-2 block font-jakarta text-xs font-semibold tracking-wider text-white/70 uppercase"
                        >
                          Prodi / Angkatan
                        </label>
                        <input
                          id="aspirasi-prodi"
                          type="text"
                          value={prodi}
                          onChange={(e) => setProdi(e.target.value)}
                          placeholder="cth. KeuBank '24"
                          className="w-full rounded-xl border border-white/15 bg-black/70 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:border-sky-300/50 focus:ring-1 focus:ring-sky-300/30 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label
                        htmlFor="aspirasi-kategori"
                        className="mb-2 block font-jakarta text-xs font-semibold tracking-wider text-white/70 uppercase"
                      >
                        Kategori <span className="text-sky-300">*</span>
                      </label>
                      <select
                        id="aspirasi-kategori"
                        value={kategori}
                        onChange={(e) => setKategori(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-white/15 bg-black/70 px-4 py-3 font-sans text-sm text-white focus:border-sky-300/50 focus:ring-1 focus:ring-sky-300/30 focus:outline-none"
                      >
                        <option value="" className="bg-[#0b1530]">
                          Pilih kategori
                        </option>
                        {KATEGORI.map((k) => (
                          <option key={k} value={k} className="bg-[#0b1530]">
                            {k}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mt-5">
                      <label
                        htmlFor="aspirasi-isi"
                        className="mb-2 block font-jakarta text-xs font-semibold tracking-wider text-white/70 uppercase"
                      >
                        Isi Aspirasi <span className="text-sky-300">*</span>
                      </label>
                      <textarea
                        id="aspirasi-isi"
                        value={isi}
                        onChange={(e) => setIsi(e.target.value)}
                        rows={5}
                        placeholder="Tulis aspirasi, keluhan, atau idemu di sini…"
                        className="w-full resize-y rounded-xl border border-white/15 bg-black/70 px-4 py-3 font-sans text-sm leading-relaxed text-white placeholder:text-white/30 focus:border-sky-300/50 focus:ring-1 focus:ring-sky-300/30 focus:outline-none"
                      />
                    </div>

                    <label className="mt-5 flex cursor-pointer items-center gap-3 font-sans text-sm text-white/70">
                      <input
                        type="checkbox"
                        checked={anonim}
                        onChange={(e) => setAnonim(e.target.checked)}
                        className="h-4 w-4 accent-sky-400"
                      />
                      Kirim sebagai anonim
                    </label>

                    {error && (
                      <p role="alert" className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 font-sans text-sm text-red-200">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="btn-navy mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-jakarta text-sm font-bold text-white sm:w-auto"
                    >
                      Kirim via WhatsApp
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </div>
      <CinematicFooter />
    </main>
  );
}
