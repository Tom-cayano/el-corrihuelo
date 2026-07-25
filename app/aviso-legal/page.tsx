import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | El Corrihuelo",
  robots: { index: false, follow: false },
};

export default function AvisoLegal() {
  return (
    <main>
      <Navbar />
      <section className="pt-40 pb-24 section-padding" style={{ background: "var(--cream)", minHeight: "100vh" }}>
        <div className="container-max max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl" style={{ boxShadow: "var(--shadow-soft)", border: "1px solid var(--border-light)" }}>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8" style={{ color: "var(--dark)" }}>
            Aviso Legal
          </h1>
          <div className="prose prose-sm md:prose-base max-w-none text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
            <p><strong>1. Datos identificativos</strong></p>
            <p>
              En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, 
              de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, 
              a continuación se reflejan los siguientes datos: la empresa titular de dominio web es 
              [Nombre Legal de la Empresa/Autónomo] (en adelante El Corrihuelo), con domicilio a estos 
              efectos en Cabezo de la Plata, Murcia. Correo electrónico de contacto: info@elcorrihuelo.es.
            </p>
            
            <p className="mt-6"><strong>2. Usuarios</strong></p>
            <p>
              El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, 
              desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
            </p>

            <p className="mt-6"><strong>3. Uso del portal</strong></p>
            <p>
              elcorrihuelo.es proporciona el acceso a multitud de informaciones, servicios, 
              programas o datos (en adelante, &ldquo;los contenidos&rdquo;) en Internet pertenecientes a 
              El Corrihuelo o a sus licenciantes a los que el USUARIO pueda tener acceso. 
              El USUARIO asume la responsabilidad del uso del portal.
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
