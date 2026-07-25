"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

// TODO: Replace with real reviews later
const reviews = [
  {
    id: 1,
    name: "María José T.",
    event: "Cumpleaños 40",
    rating: 5,
    text: "La mejor celebración de mi vida. Alquilamos la finca para un fin de semana y todo fue espectacular. La barbacoa, la piscina, el sonido... Repetiremos sin duda.",
    date: "Hace 2 meses",
  },
  {
    id: 2,
    name: "Carlos Martínez",
    event: "Reunión Familiar",
    rating: 5,
    text: "Un lugar increíble para juntar a toda la familia. Los niños se lo pasaron en grande en el parque infantil y nosotros pudimos relajarnos tranquilamente. 10/10.",
    date: "Hace 1 mes",
  },
  {
    id: 3,
    name: "Elena G.",
    event: "Despedida",
    rating: 5,
    text: "La exclusividad del lugar es lo mejor. No compartes espacio con nadie. El karaoke dio muchísimo juego y los salones son súper amplios. Trato excelente por parte del dueño.",
    date: "Hace 3 semanas",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonios" ref={ref} className="section-padding overflow-hidden relative" style={{ background: "var(--cream-dark)" }}>
      <div className="container-max">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="tag-badge">Prueba Social</span>
          <div className="divider-gold" />
          <h2 className="text-section-title font-serif mb-6" style={{ color: "var(--dark)" }}>
            Lo que dicen{" "}
            <em className="italic" style={{ color: "var(--gold-dark)" }}>nuestros clientes</em>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}>
            No te fíes solo de nosotros. Descubre la experiencia de quienes ya han 
            celebrado sus momentos especiales en El Corrihuelo.
          </p>
        </motion.div>

        {/* Carousel / Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-8 relative flex flex-col h-full"
              style={{ boxShadow: "var(--shadow-soft)", border: "1px solid var(--border-light)" }}
            >
              <Quote 
                size={48} 
                className="absolute top-6 right-6 opacity-10" 
                style={{ color: "var(--gold-dark)" }} 
              />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} size={18} fill="var(--gold)" color="var(--gold)" />
                ))}
              </div>

              <p 
                className="text-base italic mb-8 flex-1" 
                style={{ color: "var(--dark)", fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center font-serif text-lg font-bold" style={{ color: "var(--gold-dark)" }}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm" style={{ color: "var(--dark)" }}>{review.name}</h4>
                  <span className="text-xs" style={{ color: "var(--dark-light)" }}>
                    {review.event} · {review.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
