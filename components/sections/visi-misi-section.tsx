import { ArrowRight, Compass, Eye, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import SectionWatermark from "@/components/ui/section-watermark";

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
      <SectionWatermark text="DHARMA" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="max-w-xl font-sans text-4xl leading-tight font-bold tracking-tight text-white md:text-6xl">
            Panca Gerak Vistara Dharma
          </h2>
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
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 font-sans text-sm font-medium text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-500"
            >
              Gabung Kami <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {misi.map((item) => (
            <div
              key={item.no}
              className="group relative flex min-h-[20rem] flex-col rounded-2xl border border-slate-400/15 p-6 transition-all duration-300 hover:z-10 hover:-translate-y-2 hover:rotate-2 hover:border-transparent hover:bg-[#bfc7d1] hover:shadow-[0_25px_60px_-15px_rgba(191,199,209,0.5)]"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-white ring-1 ring-blue-400/30 transition-colors duration-300 group-hover:bg-[#0b1530]/10 group-hover:text-[#0b1530] group-hover:ring-[#0b1530]/20">
                  <item.icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-6 font-sans text-xl leading-snug font-semibold text-white transition-colors duration-300 group-hover:text-[#0b1530]">
                {item.title}
              </h3>
              <p className="mt-auto pt-6 font-sans text-sm leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
