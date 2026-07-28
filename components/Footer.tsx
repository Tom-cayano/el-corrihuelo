"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";
import { INSTALLATIONS_DATA } from "@/lib/installations";

const WA = "https://wa.me/34601167585";
const IG = "https://www.instagram.com/casa_vacacional_ocio_y_turismo";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navSections = [
    { label: "Inicio", href: "#inicio" },
    { label: "Instalaciones", href: "#instalaciones" },
    { label: "Galería", href: "#galeria" },
    { label: "Por qué elegirnos", href: "#ventajas" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "FAQ", href: "#faq" },
    { label: "Reserva", href: "#reserva" },
  ];

  return (
    <footer style={{ background: "#060504", color: "#fff", paddingTop: "clamp(64px, 10vw, 100px)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 48px)" }}>

        <div className="footer-grid" style={{ display: "grid", gap: "clamp(40px, 6vw, 64px)", marginBottom: "clamp(64px, 10vw, 100px)" }}>
          <style>{`
            .footer-grid { grid-template-columns: 1fr; }
            @media (min-width: 640px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
            @media (min-width: 1024px) { .footer-grid { grid-template-columns: 1.8fr 1fr 1fr 1.4fr; gap: clamp(32px, 4vw, 48px); } }
            .f-link { color: rgba(255,255,255,0.55); transition: color .3s; text-decoration: none; font-family: Inter, sans-serif; font-size: 14px; font-weight: 300; display: flex; align-items: center; gap: 8px; line-height: 1.4; }
            .f-link:hover { color: #C9A96E; }
          `}</style>

          {/* Brand */}
          <div>
            <a href="#inicio" onClick={scrollToTop} style={{ display: "inline-block", marginBottom: "clamp(20px, 3vw, 28px)" }} aria-label="El Corrihuelo — Inicio">
              <Image
                src="/images/logo-oficial.png"
                alt="El Corrihuelo — Casa de Celebraciones en Murcia"
                width={220} height={88}
                style={{ height: "clamp(40px, 5vw, 52px)", width: "auto", mixBlendMode: "screen", filter: "brightness(0.9)" }}
              />
            </a>
            <p style={{
              fontFamily: "Inter, sans-serif", fontSize: "clamp(13px, 1.6vw, 14.5px)",
              color: "rgba(255,255,255,0.48)", lineHeight: 1.75, fontWeight: 300,
              maxWidth: "320px", margin: "0 0 clamp(24px, 3vw, 32px)",
            }}>
              Finca exclusiva para celebraciones privadas en Cabezo de la Plata, Murcia. Piscina, salones, barbacoa, karaoke y jardines mediterráneos.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Instagram" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "all .3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.color = "#111"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#fff"; }}>
                {/* Instagram SVG */}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* Facebook — prepared for when URL is available */}
              <a href="#" aria-label="Facebook (próximamente)" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.35)", cursor: "not-allowed" }} title="Facebook — próximamente">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp" style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "all .3s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "#25D366"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}>
                {/* WhatsApp SVG */}
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", fontWeight: 700, color: "#fff", margin: "0 0 clamp(16px, 2.5vw, 24px)" }}>
              Navegación
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {navSections.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="f-link">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Instalaciones */}
          <div>
            <h4 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", fontWeight: 700, color: "#fff", margin: "0 0 clamp(16px, 2.5vw, 24px)" }}>
              Instalaciones
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {INSTALLATIONS_DATA.map((item) => (
                <li key={item.slug}>
                  <Link href={`/instalaciones/${item.slug}`} className="f-link">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", fontWeight: 700, color: "#fff", margin: "0 0 clamp(16px, 2.5vw, 24px)" }}>
              Contacto
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "clamp(18px, 2.5vw, 24px)" }}>
              <li>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="f-link">
                  <Phone size={15} color="#C9A96E" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                  <span>+34 601 167 585</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@elcorrihuelo.es" className="f-link">
                  <Mail size={15} color="#C9A96E" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                  <span>info@elcorrihuelo.es</span>
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", fontWeight: 300, lineHeight: 1.6 }}>
                <Clock size={15} color="#C9A96E" strokeWidth={1.5} style={{ marginTop: "3px", flexShrink: 0 }} />
                <span>Lunes a Domingo<br />12:00h – 00:00h</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontFamily: "Inter, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", fontWeight: 300, lineHeight: 1.6 }}>
                <MapPin size={15} color="#C9A96E" strokeWidth={1.5} style={{ marginTop: "3px", flexShrink: 0 }} />
                <span>Cabezo de la Plata<br />Murcia, España</span>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Cabezo+de+la+Plata,+Murcia" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "11px 18px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
                  color: "rgba(255,255,255,0.8)", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500,
                  textDecoration: "none", transition: "all .3s",
                }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}>
                  Google Maps <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          padding: "clamp(20px, 3vw, 28px) 0",
          display: "flex", flexDirection: "column", gap: "12px",
          alignItems: "center", justifyContent: "space-between",
        }}>
          <style>{`
            @media(min-width:768px) { .footer-bottom { flex-direction: row !important; } }
          `}</style>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.35)", margin: 0, fontWeight: 300 }}>
            © {new Date().getFullYear()} El Corrihuelo. Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", gap: "clamp(16px, 3vw, 28px)" }}>
            {["Aviso Legal", "Privacidad", "Cookies"].map((label) => (
              <Link key={label} href={`/${label.toLowerCase().replace(" ", "-")}`} style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color .3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}>
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
