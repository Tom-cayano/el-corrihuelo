import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, var(--gold-dark) 0%, transparent 70%)", transform: "translate(-50%, -50%)" }}
      />
      
      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6 relative w-40 h-12">
              <img 
                src="/images/logo-corrihuelo.svg"
                alt="El Corrihuelo Logo"
                className="w-full h-full object-contain object-left"
              />
            </Link>
            <p className="text-sm opacity-70 leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
              Tu casa vacacional y de celebraciones en la naturaleza murciana. 
              El espacio perfecto para crear recuerdos inolvidables con total exclusividad.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-dark transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-dark transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Navegación</h4>
            <ul className="space-y-4" style={{ fontFamily: "Inter, sans-serif" }}>
              <li><a href="#inicio" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">Inicio</a></li>
              <li><a href="#instalaciones" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">Instalaciones</a></li>
              <li><a href="#galeria" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">Galería</a></li>
              <li><a href="#eventos" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">Eventos</a></li>
              <li><a href="#faq" className="text-sm opacity-70 hover:opacity-100 hover:text-gold transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Col 3: Contacto */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Contacto</h4>
            <ul className="space-y-5" style={{ fontFamily: "Inter, sans-serif" }}>
              <li>
                <a href="tel:601167585" className="group flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 text-gold-light group-hover:text-gold transition-colors" />
                  <div>
                    <span className="block text-sm opacity-90 group-hover:text-gold transition-colors">601 167 585</span>
                    <span className="block text-sm opacity-90 group-hover:text-gold transition-colors">679 345 177</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@elcorrihuelo.es" className="group flex items-center gap-3">
                  <Mail size={18} className="text-gold-light group-hover:text-gold transition-colors" />
                  <span className="text-sm opacity-90 group-hover:text-gold transition-colors">info@elcorrihuelo.es</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-gold-light" />
                  <span className="text-sm opacity-90">Cabezo de la Plata,<br />Murcia, España</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Horario y CTA */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-gold">Horario</h4>
            <p className="text-sm opacity-70 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
              Lunes a Domingo
            </p>
            <p className="text-sm opacity-100 font-bold mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              12:00 – 24:00 hrs
            </p>
            <a 
              href="#reserva"
              className="inline-flex items-center justify-center w-full py-3 px-6 bg-gold text-dark font-bold text-sm rounded-full transition-transform hover:scale-105"
            >
              Reservar Fecha
            </a>
          </div>

        </div>

        {/* Bottom Bar: Legal */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50" style={{ fontFamily: "Inter, sans-serif" }}>
            &copy; {currentYear} El Corrihuelo. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 md:gap-6 text-xs opacity-50" style={{ fontFamily: "Inter, sans-serif" }}>
            <Link href="/aviso-legal" className="hover:text-gold hover:opacity-100 transition-colors">Aviso Legal</Link>
            <Link href="/privacidad" className="hover:text-gold hover:opacity-100 transition-colors">Política de Privacidad</Link>
            <Link href="/cookies" className="hover:text-gold hover:opacity-100 transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
