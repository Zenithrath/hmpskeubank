import { ArrowRight } from "lucide-react";
import SectionWatermark from "@/components/ui/section-watermark";
import Reveal from "@/components/ui/reveal";

export default function AboutSection() {
  return (
    <section id="tentang" className="relative scroll-mt-24 overflow-hidden">
      <SectionWatermark text="TENTANG" className="-translate-y-2" />
      <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-12">
          <Reveal variant="right" className="md:col-span-3">
            <p className="font-sans text-sm font-medium text-white/70">
              Tentang HMPS
            </p>
          </Reveal>
          <Reveal variant="up" delay={100} className="md:col-span-9">
            <p className="bg-gradient-to-b from-white via-white/75 to-white/45 bg-clip-text font-sans text-xl leading-snug font-semibold text-transparent md:text-3xl">
              Di HMPS KeuBank, kami percaya organisasi bukan sekadar tentang
              program, tapi tentang manusia. Kami adalah himpunan mahasiswa
              Program Studi KeuBank yang tumbuh dengan prinsip vistara dan
              berpegang pada dharma, mengubah kebersamaan menjadi karya yang
              berdampak.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col items-stretch gap-4 md:flex-row md:items-stretch md:justify-start">
          <Reveal variant="pop" className="w-full md:w-72">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Pengurus HMPS KeuBank berdiskusi"
                className="h-60 w-full object-cover grayscale md:h-64"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal variant="pop" delay={120} className="w-full md:w-80">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop"
                alt="Rapat pengurus HMPS KeuBank"
                className="h-60 w-full object-cover grayscale md:h-64"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal variant="up" delay={200} className="w-full md:w-64">
            <div className="flex flex-col items-start justify-center">
              <p className="font-sans text-lg leading-snug font-semibold text-white md:text-xl">
                Orang-Orang Hebat di Balik Vistara Dharma
              </p>
              <a
                href="#divisi"
                className="btn-navy mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-jakarta text-sm font-semibold text-white"
              >
                Selengkapnya <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
