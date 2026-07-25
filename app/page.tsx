import Hero from "@/components/Hero";
import Discover from "@/components/Discover";
import Installations from "@/components/Installations";
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
      
      {/* 1. Impacto visual del espacio puro */}
      <Hero />
      
      {/* 2. El Espacio a gran escala */}
      <Discover />
      
      {/* 3. Detalles de las instalaciones (Boutique) */}
      <Installations />
      
      {/* 4. Emociones y personas (Masonry grid) */}
      <Moments />
      
      {/* 5. Imaginando la celebración (Cards a WhatsApp) */}
      <Events />
      
      {/* 6. Lo que incluye (Valor racional) */}
      <Includes />
      
      {/* 7. Galería inmersiva completa */}
      <Gallery />
      
      {/* 8. Prueba Social */}
      <Testimonials />
      
      {/* 9. Confianza (Trust badges) */}
      <Features />
      
      {/* 10. Ubicación logística */}
      <Location />
      
      {/* 11. Dudas resueltas (Objeciones) */}
      <FAQ />
      
      {/* 12. Cierre de Venta (Calendario y Form) */}
      <Booking />
      
      {/* 13. Última llamada */}
      <CTAFinal />
      
      {/* 14. Información y legal */}
      <Footer />
    </main>
  );
}
