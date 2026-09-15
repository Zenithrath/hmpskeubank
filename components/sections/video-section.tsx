import Reveal from "@/components/ui/reveal";
import SectionWatermark from "@/components/ui/section-watermark";

// Ganti dengan ID video YouTube resmi himpunan (bagian setelah v= di URL).
// Contoh: https://www.youtube.com/watch?v=aqz-KE-bpKQ → ID-nya "aqz-KE-bpKQ".
const YOUTUBE_VIDEO_ID = "aqz-KE-bpKQ";

export default function VideoSection() {
  return (
    <section id="video" className="relative scroll-mt-24 overflow-hidden">
      {/* Tulisan raksasa di latar, seperti referensi */}
      <SectionWatermark text="COMPROF" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal variant="up">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 font-sans text-xs font-medium tracking-widest text-white uppercase">
              Video Profil
            </span>
            <h2 className="mt-4 font-sans text-4xl leading-tight font-bold tracking-tight text-white md:text-6xl">
              Kenali Vistara Dharma Lebih Dekat
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-white/70 md:text-base">
              Tonton video profil kabinet — ganti ID videonya di file
              video-section.tsx dengan video YouTube resmi himpunan.
            </p>
          </div>
        </Reveal>

        <Reveal variant="pop" delay={150}>
          <div className="relative mx-auto mt-12 max-w-4xl">
          {/* Ambient aurora — dikecilin khusus HP */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 h-56 w-[85%] max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-slate-200/25 via-blue-700/25 to-sky-300/20 blur-3xl sm:h-[28rem] sm:w-[52rem]"
          />
          {/* Glow yang ngikutin border + aurora silver/navy */}
          <div
            aria-hidden="true"
            className="animate-aurora absolute -inset-[3px] rounded-[18px] bg-[linear-gradient(120deg,rgba(226,232,240,0.75),rgba(30,58,138,0.75),rgba(125,211,252,0.65),rgba(226,232,240,0.75))] bg-[length:250%_250%] opacity-80 blur-[10px] sm:-inset-1 sm:rounded-[20px] sm:blur-xl"
          />
          <div className="relative overflow-hidden rounded-2xl bg-[#070d1f] ring-1 ring-white/20">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
                title="Video Profil HMPS KeuBank Kabinet Vistara Dharma"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
