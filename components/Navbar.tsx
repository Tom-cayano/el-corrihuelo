"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Inicio", href: "#inicio" },
  { name: "Instalaciones", href: "#instalaciones" },
  { name: "Galería", href: "#galeria" },
  { name: "Ubicación", href: "#ubicacion" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Si es "#inicio", subir arriba del todo
    if (href === "#inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-white/5 backdrop-blur-md ${
          scrolled 
            ? "py-3 bg-black/80 shadow-lg shadow-black/10" 
            : "py-6 bg-black/40"
        }`}
      >
        <div className="container-max mx-auto px-4 md:px-6">
          {/* MOBILE LAYOUT (Logo Center, Hamburger Left, Nothing right to keep balance, or button right) */}
          <div className="flex items-center justify-between lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-gold transition-colors z-50 p-2 -ml-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, "#inicio")}
              className="relative z-50 flex items-center justify-center flex-grow"
              aria-label="Ir a Inicio"
            >
              <div className="relative w-48 h-12 transition-transform duration-300 active:scale-95">
                <img 
                  src="/images/logo-corrihuelo.svg"
                  alt="El Corrihuelo Logo"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </a>
            
            {/* Empty div to balance the hamburger menu and keep logo perfectly centered */}
            <div className="w-10"></div>
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden lg:flex items-center justify-between">
            {/* LOGO */}
            <a
              href="#inicio"
              onClick={(e) => scrollToSection(e, "#inicio")}
              className="relative z-50 flex items-center gap-3 group"
              aria-label="Ir a Inicio"
            >
              <div className={`transition-all duration-500 relative ${scrolled ? "w-44 h-11" : "w-56 h-14"}`}>
                <img 
                  src="/images/logo-corrihuelo.svg"
                  alt="El Corrihuelo Logo"
                  className="w-full h-full object-contain object-left group-hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            </a>

            {/* NAV LINKS */}
            <div className="flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-medium tracking-wide text-white/90 hover:text-gold transition-colors duration-300 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </a>
              ))}
            </div>

            {/* RESERVA BUTTON */}
            <a
              href="#reserva"
              onClick={(e) => scrollToSection(e, "#reserva")}
              className="bg-gold hover:bg-[#d8b87b] text-dark font-bold text-sm tracking-wide px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(201,169,110,0.3)] hover:shadow-[0_0_25px_rgba(201,169,110,0.5)] transform hover:-translate-y-0.5"
            >
              Reserva tu fecha
            </a>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl pt-32 px-6 pb-12 flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8 w-full">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-serif text-3xl text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full mt-8 pt-8 border-t border-white/10"
              >
                <a
                  href="#reserva"
                  onClick={(e) => scrollToSection(e, "#reserva")}
                  className="block w-full bg-gold text-dark text-center font-bold text-lg py-4 rounded-full shadow-[0_0_20px_rgba(201,169,110,0.4)] active:scale-95 transition-transform"
                >
                  Reserva tu fecha
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
