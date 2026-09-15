/**
 * AuroraBackground — cahaya silver & biru yang melayang perlahan
 * di belakang konten. Opasitasnya naik-turun (muncul-hilang),
 * jadi tidak selalu terlihat.
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="animate-aurora-1 absolute -left-[20%] top-[8%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(191,199,209,0.13),transparent_65%)] blur-[100px]" />
      <div className="animate-aurora-2 absolute -right-[25%] top-[42%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.15),transparent_65%)] blur-[120px]" />
      <div className="animate-aurora-3 absolute top-[72%] left-[5%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.11),transparent_65%)] blur-[110px]" />
    </div>
  );
}
