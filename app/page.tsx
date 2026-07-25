import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Installations from "@/components/Installations";
import Includes from "@/components/Includes";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Installations />
      <Includes />
      <Gallery />
      <Experience />
      <Events />
      <Testimonials />
      <Location />
      <FAQ />
      <Booking />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
