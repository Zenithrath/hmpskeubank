/**
 * Planet CSS murni — bola solid berterminator + sabuk + cincin.
 * Varian: ringed (Saturnus), moon (bulan berkawah), giant (raksasa).
 */
interface PlanetProps {
  variant?: "ringed" | "moon" | "giant";
  className?: string;
}

const RING_TILT = "translate(-50%,-50%) rotate(-16deg) scaleY(0.34)";

export default function Planet({ variant = "ringed", className = "" }: PlanetProps) {
  if (variant === "moon") {
    return (
      <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
        <div className="animate-planet-float relative h-24 w-24 sm:h-32 sm:w-32">
          <div
            className="absolute inset-0 overflow-hidden rounded-full"
            style={{
              background:
                "radial-gradient(circle at 34% 30%, #f8fafc 0%, #cbd5e1 42%, #64748b 72%, #0f172a 100%)",
              boxShadow:
                "inset -10px -8px 24px rgba(2,6,23,0.8), 0 0 36px 6px rgba(148,163,184,0.3)",
            }}
          >
            {/* kawah */}
            <span className="absolute top-[30%] left-[30%] h-[16%] w-[16%] rounded-full bg-slate-800/25" />
            <span className="absolute top-[55%] left-[55%] h-[22%] w-[22%] rounded-full bg-slate-800/20" />
            <span className="absolute top-[62%] left-[28%] h-[11%] w-[11%] rounded-full bg-slate-800/25" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "giant") {
    return (
      <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
        <div className="animate-planet-float relative h-[22rem] w-[22rem] sm:h-[30rem] sm:w-[30rem]">
          <div
            className="absolute inset-0 overflow-hidden rounded-full"
            style={{
              background:
                "radial-gradient(circle at 36% 30%, #e0f2fe 0%, #60a5fa 34%, #1d4ed8 60%, #060b1d 85%)",
              boxShadow:
                "inset -40px -30px 90px rgba(2,6,23,0.85), 0 0 90px 18px rgba(37,99,235,0.28)",
            }}
          >
            {/* sabuk gas */}
            <span
              className="absolute inset-0 opacity-25"
              style={{
                background:
                  "repeating-linear-gradient(176deg, transparent 0 22px, rgba(255,255,255,0.35) 22px 25px, transparent 25px 46px)",
              }}
            />
            {/* terminator malam */}
            <span
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 72% 70%, transparent 42%, rgba(2,6,23,0.88) 74%)",
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <div className="animate-planet-float relative h-52 w-52 sm:h-72 sm:w-72">
        {/* cincin belakang */}
        <div
          className="absolute top-1/2 left-1/2 h-[36%] w-[185%] rounded-[50%] border-[3px] border-slate-100/30"
          style={{ transform: RING_TILT }}
        />
        {/* bola */}
        <div
          className="absolute inset-[13%] overflow-hidden rounded-full"
          style={{
            background:
              "radial-gradient(circle at 34% 30%, #ffffff 0%, #bfdbfe 32%, #3b82f6 58%, #0a1230 86%)",
            boxShadow:
              "inset -20px -14px 44px rgba(2,6,23,0.85), 0 0 44px 8px rgba(125,211,252,0.28)",
          }}
        >
          <span
            className="absolute inset-0 opacity-25"
            style={{
              background:
                "repeating-linear-gradient(178deg, transparent 0 12px, rgba(255,255,255,0.4) 12px 14px, transparent 14px 26px)",
            }}
          />
          <span
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 70% 68%, transparent 44%, rgba(2,6,23,0.85) 76%)",
            }}
          />
        </div>
        {/* cincin depan — busur bawah saja */}
        <div
          className="absolute top-1/2 left-1/2 h-[36%] w-[185%] rounded-[50%] border-[3px] border-slate-100/50"
          style={{ transform: RING_TILT, clipPath: "inset(56% 0 0 0)" }}
        />
      </div>
    </div>
  );
}
