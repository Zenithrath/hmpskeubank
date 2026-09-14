import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Bagaimana cara bergabung dengan HMPS KeuBank?",
    a: "Pendaftaran dibuka setiap awal periode kepengurusan melalui open recruitment. Pantau pengumuman di media sosial himpunan atau hubungi kontak di bawah.",
  },
  {
    q: "Apakah ada syarat khusus untuk menjadi anggota?",
    a: "Terdaftar sebagai mahasiswa aktif Program Studi KeuBank dan memiliki komitmen mengikuti rangkaian kaderisasi. IPK bukan syarat utama.",
  },
  {
    q: "Apakah ada iuran atau biaya keanggotaan?",
    a: "Ada iuran kas ringan per periode yang dipakai untuk operasional dan program kerja. Nominalnya ditetapkan transparan saat musyawarah.",
  },
  {
    q: "Apa benefit yang didapat anggota?",
    a: "Relasi lintas angkatan, pengalaman organisasi dan kepanitiaan, pelatihan soft skill, serta sertifikat kepengurusan/kepanitiaan.",
  },
  {
    q: "Ke mana menghubungi jika ada pertanyaan?",
    a: "Datang langsung ke sekretariat HMPS, kirim email, atau DM media sosial himpunan yang tercantum di bagian kontak.",
  },
];

export default function FaqSection() {
  return (
    <section className="relative border-t border-slate-400/10">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 font-sans text-xs font-medium tracking-widest text-white uppercase">
            FAQ
          </span>
          <h2 className="mt-4 font-instrument-serif text-4xl text-white md:text-5xl">
            Sering Ditanyakan
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-400/15 open:border-blue-400/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-sans text-sm font-semibold text-white md:text-base [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 font-sans text-sm leading-relaxed text-white/70">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
