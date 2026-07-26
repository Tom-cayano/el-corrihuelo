import Hero from "@/components/Hero";
import InstallationsGrid from "@/components/InstallationsGrid";
import Moments from "@/components/Moments";
import Events from "@/components/Events";
import Features from "@/components/Features";
import Includes from "@/components/Includes";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* 1. Impacto visual — Hero full-screen */}
      <Hero />

      {/* 2. Nuestros espacios — compact card grid linking to detail pages */}
      <InstallationsGrid />

      {/* 3. Emociones y personas */}
      <Moments />

      {/* 4. Imaginando la celebración */}
      <Events />

      {/* 5. Lo que incluye */}
      <Includes />

      {/* 6. Galería inmersiva */}
      <Gallery />

      {/* 7. Prueba Social */}
      <Testimonials />

      {/* 8. Confianza */}
      <Features />

      {/* 9. Ubicación */}
      <Location />

      {/* 10. FAQ */}
      <FAQ />

      {/* 11. Reserva */}
      <Booking />

      {/* 12. CTA Final */}
      <CTAFinal />

      {/* 13. Footer */}
      <Footer />
    </main>
  );
}
