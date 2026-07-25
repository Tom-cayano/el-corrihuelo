"use client";

import { useRef, useCallback } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { Waves, Home, Baby, Flame, Music, Trees } from "lucide-react";

const installations = [
  {
    id: "piscina",
    icon: Waves,
    title: "Piscina Privada",
    description: "Agua cristalina rodeada de naturaleza. El escenario perfecto para los días de calor en compañía de los tuyos.",
    image: "/images/terraza-piscina.jpg",
    color: "var(--green)",
    bg: "var(--green-pale)",
  },
  {
    id: "salones",
    icon: Home,
    title: "Amplios Salones",
    description: "Salones techados con madera natural, decorados con gusto y equipados para grandes celebraciones. Con espacio de sobra.",
    image: "/images/salon-decorado.jpg",
    color: "var(--gold-dark)",
    bg: "rgba(201,169,110,0.12)",
  },
  {
    id: "zona-infantil",
    icon: Baby,
    title: "Zona Infantil",
    description: "Un parque infantil seguro y divertido para que los más pequeños disfruten mientras los adultos celebran sin preocupaciones.",
    image: "/images/grupo-flamenca.jpg",
    color: "var(--red-spain)",
    bg: "rgba(193,48,58,0.08)",
  },
  {
    id: "barbacoa",
    icon: Flame,
    title: "Barbacoa & Paella",
    description: "Área de barbacoa equipada para preparar la mejor gastronomía murciana. Incluye zona techada y mesas en grupo.",
    image: "/images/paella-grupo.jpg",
    color: "var(--gold-dark)",
    bg: "rgba(201,169,110,0.12)",
  },
  {
    id: "karaoke",
    icon: Music,
    title: "Karaoke y Fiesta",
    description: "Equipo de sonido profesional, luces y espacio para que la música no pare. Crea recuerdos inolvidables bailando.",
    image: "/images/baile-noche.jpg",
    color: "var(--dark)",
    bg: "rgba(28,26,23,0.1)",
  },
  {
    id: "naturaleza",
    icon: Trees,
    title: "Entorno Natural",
    description: "Respirar aire puro entre olivos y pinos. Una finca vallada y privada que te aísla del ruido de la ciudad.",
    image: "/images/hero-jardin.jpg",
    color: "var(--green)",
    bg: "var(--green-pale)",
  },
];

function InstallationCard({ item, index }: { item: typeof installations[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  
  // Premium 3D Hover
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.article
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full flex flex-col rounded-3xl overflow-hidden cursor-pointer"
        aria-labelledby={`title-${item.id}`}
      >
        {/* Glow behind card */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10"
          style={{ background: item.color }} 
        />

        <div 
          className="relative flex-1 flex flex-col h-full bg-white z-10"
          style={{ 
            border: "1px solid var(--border-light)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-soft)",
            transition: "box-shadow 0.4s ease, border-color 0.4s ease"
          }}
        >
          {/* Image header */}
          <div className="relative h-56 md:h-64 overflow-hidden rounded-t-3xl img-hover-zoom">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100"
              style={{
                background: "linear-gradient(to top, rgba(28,26,23,0.4) 0%, transparent 100%)",
                transition: "opacity 0.4s ease"
              }}
            />
            {/* Hover floating icon overlay */}
            <div className="absolute top-4 right-4 z-20 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md"
                style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.4)" }}
              >
                <item.icon size={18} color="white" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col flex-1 transform translate-z-10" style={{ transform: "translateZ(20px)" }}>
            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                style={{ background: item.bg }}
              >
                <item.icon size={22} style={{ color: item.color }} />
              </div>
              <h3
                id={`title-${item.id}`}
                className="text-xl font-bold font-serif"
                style={{ color: "var(--dark)", letterSpacing: "-0.01em" }}
              >
                {item.title}
              </h3>
            </div>
            <p
              className="text-[0.95rem] leading-relaxed flex-1"
              style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}
            >
              {item.description}
            </p>
          </div>

          {/* Premium border hover */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{ borderColor: item.color }}
          />
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function Installations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="instalaciones"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--white)" }}
    >
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="tag-badge">Instalaciones Premium</span>
          <div className="divider-gold" />
          <h2 className="text-section-title font-serif mb-6" style={{ color: "var(--dark)" }}>
            Todo lo que necesitas para una{" "}
            <em className="italic" style={{ color: "var(--gold-dark)" }}>
              fiesta perfecta
            </em>
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}
          >
            Nuestros espacios han sido diseñados y equipados pensando en tu máxima comodidad y diversión.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {installations.map((item, index) => (
            <InstallationCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
