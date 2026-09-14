import { AtSign, Mail, MapPin } from "lucide-react";

const navigasi = [
  { label: "Home", href: "#" },
  { label: "Tentang", href: "#tentang" },
  { label: "Divisi", href: "#divisi" },
  { label: "Proker", href: "#proker" },
  { label: "Galeri", href: "#galeri" },
];

const divisi = [
  "PSDM",
  "Humas",
  "Akademik",
  "Media Kreatif",
  "Kewirausahaan",
  "Minat & Bakat",
];

export default function SiteFooter() {
  return (
    <footer id="kontak" className="relative scroll-mt-24 border-t border-slate-400/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <img
            src="/img/logokeubank__1_-removebg-preview.png"
            alt="Logo HMPS KeuBank"
            className="h-11 w-auto"
          />
          <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-white/70">
            HMPS KeuBank — Kabinet Vistara Dharma. Bertumbuh luas dengan
            kebenaran, prinsip, dan integritas.
          </p>
        </div>

        <nav aria-label="Navigasi footer">
          <p className="font-sans text-xs font-semibold tracking-widest text-white/50 uppercase">
            Navigasi
          </p>
          <ul className="mt-4 space-y-2.5">
            {navigasi.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-sans text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-sans text-xs font-semibold tracking-widest text-white/50 uppercase">
            Divisi
          </p>
          <ul className="mt-4 space-y-2.5">
            {divisi.map((item) => (
              <li
                key={item}
                className="font-sans text-sm text-white/70"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-sans text-xs font-semibold tracking-widest text-white/50 uppercase">
            Kontak
          </p>
          <ul className="mt-4 space-y-2.5 font-sans text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" />
              Sekretariat HMPS, Gedung Student Center Lt. 2
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-white" />
              hmpskeubank@kampus.ac.id
            </li>
            <li className="flex items-center gap-2">
              <AtSign className="h-4 w-4 shrink-0 text-white" />
              @hmpskeubank
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-400/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 sm:flex-row">
          <p className="font-sans text-xs text-white/50">
            © 2026 HMPS KeuBank — Kabinet Vistara Dharma.
          </p>
          <p className="font-sans text-xs text-white/40">
            Vistara • Tumbuh Luas — Dharma • Kebenaran & Integritas
          </p>
        </div>
      </div>
    </footer>
  );
}
