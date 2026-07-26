"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#050505", color: "#fff", paddingTop: "100px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        
        <div className="footer-grid" style={{ display: "grid", gap: "64px", marginBottom: "100px" }}>
          <style>{`
            .footer-grid { grid-template-columns: 1fr; }
            @media (min-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
            @media (min-width: 1024px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 40px; } }
            .footer-link { color: rgba(255,255,255,0.6); transition: color .3s; text-decoration: none; font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; display: inline-flex; align-items: center; gap: 8px; }
            .footer-link:hover { color: #C9A96E; }
          `}</style>

          {/* Brand Col */}
          <div>
            <Link href="/" onClick={scrollToTop} style={{ display: "inline-block", marginBottom: "32px" }}>
              <Image 
                src="/images/logo-oficial.png" 
                alt="El Corrihuelo" 
                width={200} height={80} 
                style={{ height: "48px", width: "auto", mixBlendMode: "screen", filter: "brightness(0.9)" }} 
              />
            </Link>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontWeight: 300, maxWidth: "320px", marginBottom: "32px" }}>
              El Corrihuelo es más que un espacio de eventos; es un santuario de celebración diseñado para ofrecer la máxima privacidad y exclusividad en un entorno natural incomparable.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <a href="https://www.instagram.com/casa_vacacional_ocio_y_turismo" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "all .3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.color = "#111"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#fff"; }}>
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "all .3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.color = "#111"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#fff"; }}>
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "24px" }}>Navegación</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              <li><Link href="/#inicio" className="footer-link">Inicio</Link></li>
              <li><Link href="/#instalaciones" className="footer-link">Instalaciones</Link></li>
              <li><Link href="/#galeria" className="footer-link">Galería</Link></li>
              <li><Link href="/#ventajas" className="footer-link">Ventajas</Link></li>
              <li><Link href="/#faq" className="footer-link">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "24px" }}>Contacto</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              <li>
                <a href="https://wa.me/34601167585" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <Phone size={16} color="#C9A96E" /> +34 601 16 75 85
                </a>
              </li>
              <li>
                <a href="mailto:info@elcorrihuelo.es" className="footer-link">
                  <Mail size={16} color="#C9A96E" /> info@elcorrihuelo.es
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", fontWeight: 300, lineHeight: 1.6 }}>
                <Clock size={16} color="#C9A96E" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>Lunes a Domingo<br/>12:00h - 24:00h</span>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "24px" }}>Ubicación</h4>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", fontWeight: 300, lineHeight: 1.6, marginBottom: "24px" }}>
              <MapPin size={16} color="#C9A96E" style={{ marginTop: "2px", flexShrink: 0 }} />
              <span>Cabezo de la Plata<br/>Murcia, España</span>
            </div>
            <a href="https://maps.google.com/?q=Cabezo+de+la+Plata,+Murcia" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 20px", borderRadius: "8px",
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500,
              textDecoration: "none", transition: "all .3s"
            }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}>
              Ver en Google Maps <ArrowUpRight size={14} />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "32px", paddingBottom: "32px", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", justifyContent: "space-between" }} className="footer-bottom">
          <style>{`
            @media (min-width: 768px) { .footer-bottom { flex-direction: row !important; } }
          `}</style>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", margin: 0, fontWeight: 300 }}>
            © {new Date().getFullYear()} El Corrihuelo. Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/aviso-legal" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color .3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
              Aviso Legal
            </Link>
            <Link href="/privacidad" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color .3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
              Privacidad
            </Link>
            <Link href="/cookies" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color .3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
              Cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
