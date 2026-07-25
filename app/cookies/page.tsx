import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | El Corrihuelo",
  robots: { index: false, follow: false },
};

export default function Cookies() {
  return (
    <main>
      <Navbar />
      <section className="pt-40 pb-24 section-padding" style={{ background: "var(--cream)", minHeight: "100vh" }}>
        <div className="container-max max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl" style={{ boxShadow: "var(--shadow-soft)", border: "1px solid var(--border-light)" }}>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8" style={{ color: "var(--dark)" }}>
            Política de Cookies
          </h1>
          <div className="prose prose-sm md:prose-base max-w-none text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
            <p><strong>1. ¿Qué son las cookies?</strong></p>
            <p>
              Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. 
              Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los 
              hábitos de navegación de un usuario o de su equipo.
            </p>
            
            <p className="mt-6"><strong>2. ¿Qué tipos de cookies utiliza esta página web?</strong></p>
            <p>
              - <strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una 
              página web y la utilización de las diferentes opciones o servicios que en ella existan.
              <br />
              - <strong>Cookies de análisis:</strong> Son aquellas que permiten cuantificar el número de usuarios 
              y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio.
            </p>

            <p className="mt-6"><strong>3. Revocación y eliminación de cookies</strong></p>
            <p>
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración 
              de las opciones del navegador instalado en tu ordenador.
            </p>

            <p className="mt-8 text-sm opacity-70">
              * Este documento es una plantilla general y no sustituye al aviso/banner dinámico de cookies si integras analíticas de terceros (ej. Google Analytics).
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
