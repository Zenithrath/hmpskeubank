/**
 * BlackHole CSS murni — lubang hitam + photon ring + cakram akresi
 * silver-biru yang berputar pelan.
 */
export default function BlackHole({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <div className="animate-planet-float relative h-60 w-60 sm:h-96 sm:w-96">
        {/* halo */}
        <div className="absolute -inset-12 rounded-full bg-blue-700/25 blur-[70px]" />
        {/* cakram akresi luar — redup */}
        <div
          className="animate-spin-slower absolute -inset-9 rounded-full opacity-40 blur-md"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(96,165,250,0.5) 70deg, transparent 130deg, transparent 200deg, rgba(226,232,240,0.45) 290deg, transparent 340deg)",
          }}
        />
        {/* cakram akresi utama */}
        <div
          className="animate-spin-slower absolute -inset-4 rounded-full opacity-90 blur-[3px]"
          style={{
            background:
              "conic-gradient(from 90deg, rgba(125,211,252,0.9) 0deg, rgba(226,232,240,0.95) 60deg, transparent 120deg, transparent 210deg, rgba(37,99,235,0.9) 280deg, rgba(125,211,252,0.9) 360deg)",
          }}
        />
        {/* lubang hitam + photon ring */}
        <div
          className="absolute inset-7 rounded-full bg-black sm:inset-10"
          style={{
            boxShadow:
              "0 0 0 2px rgba(186,230,253,0.95), 0 0 34px 8px rgba(125,211,252,0.55), inset 0 0 40px rgba(0,0,0,1)",
          }}
        />
      </div>
    </div>
  );
}
