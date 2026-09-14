interface SectionWatermarkProps {
  text: string;
  className?: string;
}

/**
 * Tulisan raksasa memudar di latar section, seperti "COMPROF"
 * di section video. Section pemakai wajib `relative` + `overflow-hidden`.
 */
export default function SectionWatermark({
  text,
  className = "",
}: SectionWatermarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-8 bg-gradient-to-b from-white/[0.12] via-white/[0.06] to-transparent bg-clip-text text-center font-sans text-[26vw] leading-none font-bold tracking-tight whitespace-nowrap text-transparent select-none md:text-[13rem] ${className}`}
    >
      {text}
    </span>
  );
}
