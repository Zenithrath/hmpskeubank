import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import Starfield from "@/components/ui/starfield";
import SiteNavbar from "@/components/site-navbar";
import AboutSection from "@/components/sections/about-section";
import VideoSection from "@/components/sections/video-section";
import AngkaSection from "@/components/sections/angka-section";
import VisiMisiSection from "@/components/sections/visi-misi-section";
import FaqSection from "@/components/sections/faq-section";
import { CinematicFooter } from "@/components/ui/motion-footer";
import AuroraBackground from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* Shield konten — harus solid + di atas footer fixed biar curtain reveal jalan */}
      <div className="relative z-10 flex min-h-screen flex-col bg-black">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <Starfield />
      </div>
      <AuroraBackground />
      <SiteNavbar
        navLinks={[
          { label: "Home", href: "#", isActive: true },
          { label: "Tentang", href: "#tentang" },
          { label: "Divisi", href: "/struktur" },
          { label: "Proker", href: "#proker" },
          { label: "Galeri", href: "#galeri" },
        ]}
        ctaButtonText="Gabung Kami"
        ctaButtonHref="#kontak"
      />
      <ResponsiveHeroBanner
        badgeLabel="HMPS KeuBank"
        badgeText="Kabinet Periode 2026"
        title="Vistara Dharma"
        description="Kabinet Vistara Dharma — Vistara berarti luas, berkembang, dan terbentang; Dharma berarti kebenaran, prinsip, serta integritas. Inilah kompas kami dalam berkarya dan melayani mahasiswa KeuBank."
        primaryButtonText="Jelajahi Program Kerja"
        primaryButtonHref="#proker"
        secondaryButtonText="Tentang Kami"
        secondaryButtonHref="#tentang"
      />
      <AboutSection />
      <VisiMisiSection />
      <VideoSection />
      <AngkaSection />
      <FaqSection />
      </div>
      <CinematicFooter />
    </main>
  );
}
