"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Users, PartyPopper, CalendarDays } from "lucide-react";

const events = [
  {
    id: "cumpleanos",
    icon: PartyPopper,
    title: "Cumpleaños y Fiestas",
    description:
      "Celebra tu día especial por todo lo alto. Nuestro espacio es ideal para fiestas sorpresa, aniversarios y cumpleaños con temática murciana o flamenca. Disponemos de espacio para música, baile y catering.",
    image: "/images/evento-grupo.jpg",
    tags: ["Fiestas Sorpresa", "Aniversarios", "Música"],
  },
  {
    id: "familiares",
    icon: Users,
    title: "Reuniones Familiares",
    description:
      "El entorno perfecto para juntar a toda la familia. Mientras los adultos disfrutan de la sobremesa o preparan una paella en la barbacoa, los niños pueden jugar seguros en la zona infantil o en la piscina.",
    image: "/images/grupo-exterior.jpg",
    tags: ["Comuniones", "Bautizos", "Comidas Familiares"],
  },
  {
    id: "privados",
    icon: CalendarDays,
    title: "Eventos Privados",
    description:
      "Si buscas privacidad absoluta para tu celebración, El Corrihuelo es tu sitio. Una finca cerrada exclusiva para ti y tus invitados, sin compartir espacios ni limitaciones de horario durante tu reserva.",
    image: "/images/guitarrista.jpg",
    tags: ["Exclusividad", "Privacidad", "Despedidas"],
  },
];

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="eventos"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--cream)" }}
    >
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <span className="tag-badge">Tus Eventos</span>
          <div className="divider-gold" />
          <h2 className="text-section-title font-serif mb-6" style={{ color: "var(--dark)" }}>
            Un espacio,{" "}
            <em className="italic" style={{ color: "var(--gold-dark)" }}>
              infinitas posibilidades
            </em>
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}
          >
            Nos adaptamos a tu celebración. Desde eventos íntimos hasta grandes fiestas.
          </p>
        </motion.div>

        {/* Layout Alternante */}
        <div className="flex flex-col gap-24 md:gap-32">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <EventRow key={event.id} event={event} isEven={isEven} />
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <a
            href="#reserva"
            className="btn-primary inline-flex items-center justify-center bg-transparent border-2 border-dark text-dark hover:bg-dark hover:text-white"
            style={{ borderRadius: "2rem", padding: "1rem 2.5rem" }}
          >
            Consulta disponibilidad para tu evento
          </a>
        </motion.div>

      </div>
    </section>
  );
}

function EventRow({ event, isEven }: { event: typeof events[0]; isEven: boolean }) {
  const rowRef = useRef(null);
  const isInView = useInView(rowRef, { once: true, margin: "-15%" });

  return (
    <div
      ref={rowRef}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-12 md:gap-20 lg:gap-24`}
    >
      {/* Imagen */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40, filter: "blur(12px)" }}
        animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-1/2 relative"
      >
        <div
          className="relative rounded-[2rem] overflow-hidden img-hover-zoom aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] card-3d"
          style={{ boxShadow: "var(--shadow-strong)" }}
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Subtle overlay */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.15)" }} 
          />
        </div>
        
        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute ${isEven ? "-bottom-6 -right-6" : "-bottom-6 -left-6"} w-24 h-24 rounded-full border border-dashed flex items-center justify-center -z-10`}
          style={{ borderColor: "var(--gold-dark)", background: "var(--cream-dark)" }}
        >
          <event.icon size={28} style={{ color: "var(--gold-dark)" }} opacity={0.4} />
        </motion.div>
      </motion.div>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-1/2"
      >
        <div className="inline-flex items-center gap-3 mb-6">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: "var(--white)", boxShadow: "var(--shadow-soft)" }}
          >
            <event.icon size={22} style={{ color: "var(--gold-dark)" }} />
          </div>
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "var(--gold-dark)", fontFamily: "Inter, sans-serif" }}
          >
            {event.title}
          </span>
        </div>

        <h3
          className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight"
          style={{ color: "var(--dark)" }}
        >
          {event.title}
        </h3>
        
        <p
          className="text-lg leading-relaxed mb-10"
          style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}
        >
          {event.description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {event.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full"
              style={{
                background: "rgba(201,169,110,0.1)",
                color: "var(--gold-dark)",
                border: "1px solid rgba(201,169,110,0.2)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
