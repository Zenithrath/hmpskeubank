import { ArrowRight } from "lucide-react";
import { DraggablePills } from "@/components/ui/draggable-pills";
import SectionWatermark from "@/components/ui/section-watermark";

const stats = [
  {
    value: "150+",
    unit: "Anggota",
    desc: "Keluarga besar mahasiswa KeuBank yang aktif berkarya dan berorganisasi.",
    variant: "blue" as const,
  },
  {
    value: "30+",
    unit: "Proker",
    desc: "Program kerja yang dirancang untuk berdampak bagi anggota dan kampus.",
    variant: "silver" as const,
  },
  {
    value: "8",
    unit: "Divisi",
    desc: "Delapan pilar yang menopang gerak kabinet Vistara Dharma.",
    variant: "dark" as const,
  },
];

export default function AngkaSection() {
  return (
    <section className="relative overflow-hidden">
      <SectionWatermark text="ANGKA" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <h2 className="max-w-xl font-sans text-4xl leading-tight font-bold tracking-tight text-white md:text-6xl">
            Angka di Balik Vistara Dharma
          </h2>
          <div className="max-w-sm lg:pt-2">
            <p className="font-sans text-sm leading-relaxed text-white/70">
              Vistara yang bertumbuh luas, Dharma yang terukur dan akuntabel —
              untuk setiap langkah yang berani.
            </p>
            <a
              href="#kontak"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 font-sans text-sm font-medium text-white shadow-lg shadow-blue-600/30 transition-colors hover:bg-blue-500"
            >
              Gabung Kami <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.unit}
              className={
                item.variant === "blue"
                  ? "rounded-2xl bg-blue-600 p-8 shadow-lg shadow-blue-600/25"
                  : item.variant === "silver"
                    ? "rounded-2xl bg-[#bfc7d1] p-8"
                    : "rounded-2xl border border-slate-400/15 p-8"
              }
            >
              <p
                className={
                  item.variant === "silver"
                    ? "flex items-start gap-2 font-sans text-6xl font-bold tracking-tight text-[#0b1530] md:text-7xl"
                    : "flex items-start gap-2 font-sans text-6xl font-bold tracking-tight text-white md:text-7xl"
                }
              >
                {item.value}
                <span className="mt-2 font-sans text-xl font-medium md:text-2xl">
                  {item.unit}
                </span>
              </p>
              <p
                className={
                  item.variant === "silver"
                    ? "mt-8 font-sans text-sm leading-relaxed text-[#0b1530]/70"
                    : "mt-8 font-sans text-sm leading-relaxed text-white/70"
                }
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <DraggablePills />
        </div>
        <p className="mt-4 text-center font-sans text-xs text-white/50">
          * Angka contoh — ganti dengan data resmi himpunan.
        </p>
      </div>
    </section>
  );
}
