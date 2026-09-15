import { ArrowRight } from "lucide-react";
import SectionWatermark from "@/components/ui/section-watermark";

export default function AboutSection() {
  return (
    <section id="tentang" className="relative scroll-mt-24 overflow-hidden">
      <SectionWatermark text="TENTANG" className="-translate-y-2" />
      <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-12">
          <p className="font-sans text-sm font-medium text-white/70 md:col-span-3">
            Tentang HMPS
          </p>
          <p className="bg-gradient-to-b from-white via-white/75 to-white/45 bg-clip-text font-sans text-xl leading-snug font-semibold text-transparent md:col-span-9 md:text-3xl">
            Di HMPS KeuBank, kami percaya organisasi bukan sekadar tentang
            program — tapi tentang manusia. Kami adalah himpunan mahasiswa
            Program Studi KeuBank yang tumbuh dengan prinsip vistara dan
            berpegang pada dharma, mengubah kebersamaan menjadi karya yang
            berdampak.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-stretch gap-4 md:flex-row md:items-stretch md:justify-start">
          <div className="w-full overflow-hidden rounded-2xl md:w-72">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
              alt="Pengurus HMPS KeuBank berdiskusi"
              className="h-60 w-full object-cover grayscale md:h-64"
              loading="lazy"
            />
          </div>
          <div className="w-full overflow-hidden rounded-2xl md:w-80">
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop"
              alt="Rapat pengurus HMPS KeuBank"
              className="h-60 w-full object-cover grayscale md:h-64"
              loading="lazy"
            />
          </div>
          <div className="flex w-full flex-col items-start justify-center md:w-64">
            <p className="font-sans text-lg leading-snug font-semibold text-white md:text-xl">
              Orang-Orang Hebat di Balik Vistara Dharma
            </p>
            <a
              href="#divisi"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 font-sans text-sm font-medium text-white shadow-lg shadow-blue-600/25 transition-colors hover:bg-blue-500"
            >
              Selengkapnya <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
