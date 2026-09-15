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
  const sizeClass =
    text.length > 10 ? "text-[12vw]" : text.length > 7 ? "text-[15vw]" : "text-[19vw]";
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-2 bg-gradient-to-b from-white/[0.18] via-white/[0.09] to-transparent bg-clip-text text-center font-sans leading-none font-bold tracking-tight whitespace-nowrap text-transparent select-none sm:top-8 sm:text-[18vw] lg:text-[13rem] ${sizeClass} ${className}`}
    >
      {text}
    </span>
  );
}
