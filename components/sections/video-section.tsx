// Ganti dengan ID video YouTube resmi himpunan (bagian setelah v= di URL).
// Contoh: https://www.youtube.com/watch?v=aqz-KE-bpKQ → ID-nya "aqz-KE-bpKQ".
const YOUTUBE_VIDEO_ID = "aqz-KE-bpKQ";

export default function VideoSection() {
  return (
    <section id="video" className="relative scroll-mt-24 overflow-hidden">
      {/* Tulisan raksasa di latar, seperti referensi */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-10 bg-gradient-to-b from-white/[0.12] via-white/[0.06] to-transparent bg-clip-text text-center font-sans text-[30vw] leading-none font-bold tracking-tight whitespace-nowrap text-transparent select-none md:text-[16rem]"
      >
        COMPROF
      </span>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
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

        <div className="relative mx-auto mt-12 max-w-4xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 h-[38rem] w-[70rem] max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200/40 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-400/20 shadow-[0_25px_80px_-20px_rgba(191,199,209,0.4)]">
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
      </div>
    </section>
  );
}
