import { ArrowRight, Compass, Eye, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import SectionWatermark from "@/components/ui/section-watermark";
import Reveal from "@/components/ui/reveal";

const misi = [
  {
    no: "01",
    icon: Compass,
    title: "Arah Gerak Adaptif",
    desc: "Mengembangkan arah gerak organisasi yang terencana, adaptif, dan responsif terhadap perkembangan zaman.",
  },
  {
    no: "02",
    icon: ShieldCheck,
    title: "Kebenaran & Integritas",
    desc: "Menegakkan nilai kebenaran, kejujuran, dan integritas sebagai dasar dalam setiap kebijakan dan pelaksanaan program kerja.",
  },
  {
    no: "03",
    icon: Eye,
    title: "Profesional & Transparan",
    desc: "Meningkatkan profesionalisme dan transparansi dalam tata kelola organisasi.",
  },
  {
    no: "04",
    icon: Lightbulb,
    title: "Inovasi Berkelanjutan",
    desc: "Mendorong inovasi dan efisiensi dalam seluruh aktivitas kabinet untuk menciptakan program yang efektif dan berkelanjutan.",
  },
  {
    no: "05",
    icon: HeartHandshake,
    title: "Bermanfaat Nyata",
    desc: "Mengoptimalkan kebermanfaatan organisasi bagi anggota dan masyarakat kampus dengan menjunjung etika, kualitas, dan akuntabilitas.",
  },
];

export default function VisiMisiSection() {
  return (
    <section className="relative overflow-hidden border-y border-slate-400/10">
      <SectionWatermark text="VISI-MISI" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal variant="left">
            <h2 className="max-w-xl font-sans text-4xl leading-tight font-bold tracking-tight text-white md:text-6xl">
              Panca Gerak Vistara Dharma
            </h2>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <div className="max-w-sm">
              <p className="font-sans text-xs font-medium tracking-widest text-white/50 uppercase">
                Visi Kabinet
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">
                Mewujudkan kabinet yang visioner, inovatif, dan berintegritas
                dalam membangun organisasi yang profesional, beretika, dan
                bermanfaat bagi seluruh anggota.
              </p>
              <a
                href="#kontak"
                className="btn-navy mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-jakarta text-sm font-semibold text-white"
              >
                Gabung Kami <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]"
          />
          <div className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {misi.map((item, idx) => (
            <Reveal
              key={item.no}
              variant="pop"
              delay={Math.floor(idx / 2) * 120 + (idx % 2) * 90}
              className={idx === misi.length - 1 ? "col-span-2 lg:col-span-1" : ""}
            >
            <div
              className="group relative flex h-full min-h-[17rem] flex-col overflow-hidden rounded-2xl border border-slate-400/15 bg-white/[0.02] p-4 transition-all duration-300 before:absolute before:inset-x-4 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-sky-300/60 before:to-transparent hover:z-10 hover:-translate-y-2 hover:rotate-2 hover:border-transparent hover:bg-[#bfc7d1] hover:shadow-[0_25px_60px_-15px_rgba(191,199,209,0.5)] active:scale-[0.98] sm:min-h-[20rem] sm:p-6"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-white ring-1 ring-blue-400/30 transition-colors duration-300 group-hover:bg-[#0b1530]/10 group-hover:text-[#0b1530] group-hover:ring-[#0b1530]/20 sm:h-11 sm:w-11">
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </div>
              <h3 className="mt-4 font-sans text-base leading-snug font-semibold text-white transition-colors duration-300 group-hover:text-[#0b1530] sm:mt-6 sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-auto pt-4 font-sans text-xs leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-slate-600 sm:pt-6 sm:text-sm">
                {item.desc}
              </p>
            </div>
            </Reveal>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
