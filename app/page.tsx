import Hero from "@/components/Hero";
import InstallationsGrid from "@/components/InstallationsGrid";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Discover from "@/components/Discover";
import Events from "@/components/Events";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <WhatsAppButton />

      {/* 1. Hero full-screen — primera impresión luxury */}
      <Hero />

      {/* 2. Nosotros — Discover section */}
      <Discover />

      {/* 3. Nuestras instalaciones — 9 espacios con fotos reales */}
      <InstallationsGrid />

      {/* 4. Galería inmersiva — Master-Detail */}
      <Gallery />

      {/* 5. Eventos — Tipos de celebraciones */}
      <Events />

      {/* 4. Por qué elegirnos — 6 ventajas Glassmorphism */}
      <Features />

      {/* 5. Lo que dicen — Testimonios carrusel */}
      <Testimonials />

      {/* 6. Ubicación y cómo llegar */}
      <Location />

      {/* 7. FAQ acordeón elegante */}
      <FAQ />

      {/* 8. Reserva — Glass premium */}
      <Booking />

      {/* 9. CTA Final — Conversión */}
      <CTAFinal />

      {/* 10. Footer con información completa */}
      <Footer />
    </main>
  );
}
