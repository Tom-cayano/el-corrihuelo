import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | El Corrihuelo",
  robots: { index: false, follow: false },
};

export default function Privacidad() {
  return (
    <main>
      <Navbar />
      <section className="pt-40 pb-24 section-padding" style={{ background: "var(--cream)", minHeight: "100vh" }}>
        <div className="container-max max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl" style={{ boxShadow: "var(--shadow-soft)", border: "1px solid var(--border-light)" }}>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8" style={{ color: "var(--dark)" }}>
            Política de Privacidad
          </h1>
          <div className="prose prose-sm md:prose-base max-w-none text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
            <p><strong>1. Protección de Datos (RGPD)</strong></p>
            <p>
              El Corrihuelo cumple con las directrices del Reglamento (UE) 2016/679 del Parlamento Europeo 
              y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD), 
              así como la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía 
              de los derechos digitales (LOPDGDD).
            </p>
            
            <p className="mt-6"><strong>2. Recogida de datos</strong></p>
            <p>
              Los datos personales recabados a través del formulario de contacto y/o reserva serán tratados 
              con la única finalidad de gestionar tu solicitud, ofrecerte un presupuesto y mantener el contacto 
              comercial para la posible celebración del evento.
            </p>

            <p className="mt-6"><strong>3. Derechos del usuario</strong></p>
            <p>
              En cualquier momento puedes ejercer tus derechos de acceso, rectificación, cancelación 
              u oposición, así como la limitación del tratamiento o la portabilidad de tus datos, enviando 
              un correo a info@elcorrihuelo.es.
            </p>

            <p className="mt-8 text-sm opacity-70">
              * Este documento es una plantilla. Debe ser revisado y rellenado con los datos legales definitivos del titular de la finca.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
