"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, Maximize2 } from "lucide-react";

const galleryImages = [
  { src: "/images/baile-noche.jpg", alt: "Fiesta y baile nocturno en El Corrihuelo", category: "Celebraciones", aspect: "portrait" },
  { src: "/images/mesa-gourmet.jpg", alt: "Mesa gourmet decorada para celebración en El Corrihuelo", category: "Gastronomía", aspect: "portrait" },
  { src: "/images/grupo-flamenca.jpg", alt: "Grupo de celebración flamenca en El Corrihuelo", category: "Celebraciones", aspect: "portrait" },
  { src: "/images/hero-salon.jpg", alt: "Salón principal de El Corrihuelo decorado con globos", category: "Instalaciones", aspect: "landscape" },
  { src: "/images/paella-grupo.jpg", alt: "Paella gigante con grupo de amigos en El Corrihuelo", category: "Gastronomía", aspect: "portrait" },
  { src: "/images/evento-grupo.jpg", alt: "Celebración de cumpleaños con trajes típicos en El Corrihuelo", category: "Celebraciones", aspect: "portrait" },
  { src: "/images/guitarrista.jpg", alt: "Guitarrista y bailaora actuando en El Corrihuelo", category: "Entretenimiento", aspect: "portrait" },
  { src: "/images/pareja-flamenco.jpg", alt: "Pareja bailando flamenco en El Corrihuelo", category: "Entretenimiento", aspect: "portrait" },
  { src: "/images/terraza-piscina.jpg", alt: "Terraza con vistas a la piscina de El Corrihuelo", category: "Instalaciones", aspect: "portrait" },
  { src: "/images/grupo-exterior.jpg", alt: "Grupo de amigos celebrando en el exterior de El Corrihuelo", category: "Celebraciones", aspect: "portrait" },
  { src: "/images/mesa-tapas.jpg", alt: "Mesa con tapas y decoración típica en El Corrihuelo", category: "Gastronomía", aspect: "portrait" },
  { src: "/images/salon-decorado.jpg", alt: "Salón decorado con guirnaldas y mesas preparadas", category: "Instalaciones", aspect: "portrait" },
  { src: "/images/baile-exterior.jpg", alt: "Baile flamenco en el exterior de El Corrihuelo", category: "Entretenimiento", aspect: "portrait" },
  { src: "/images/grupo-entrada.jpg", alt: "Grupo de celebración en la entrada de El Corrihuelo", category: "Celebraciones", aspect: "portrait" },
  { src: "/images/flores-salon.jpg", alt: "Flores y decoración floral en El Corrihuelo", category: "Detalles", aspect: "portrait" },
  { src: "/images/baile-dia.jpg", alt: "Baile y fiesta durante el día en los salones", category: "Celebraciones", aspect: "portrait" },
  { src: "/images/flores-entrada.jpg", alt: "Entrada de El Corrihuelo con flores y naturaleza murciana", category: "Detalles", aspect: "portrait" },
  { src: "/images/paella2.jpg", alt: "Paella tradicional en El Corrihuelo", category: "Gastronomía", aspect: "portrait" },
];

const categories = ["Todas", "Celebraciones", "Gastronomía", "Entretenimiento", "Instalaciones", "Detalles"];

function GalleryCard({
  img,
  index,
  onClick,
}: {
  img: (typeof galleryImages)[0];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 6) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="masonry-item group"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl overflow-hidden cursor-pointer gallery-card"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
        aria-label={`Ver imagen: ${img.alt}`}
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={800}
          height={600}
          className="w-full h-auto object-cover gallery-img"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover overlay */}
        <div className="gallery-hover-overlay absolute inset-0">
          {/* Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(28,26,23,0.7) 0%, rgba(28,26,23,0.1) 60%, transparent 100%)",
            }}
          />
          {/* Zoom icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="gallery-zoom-btn">
              <Maximize2 size={18} color="white" />
            </div>
          </div>
          {/* Bottom info */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <span className="gallery-category-badge">{img.category}</span>
            <span className="gallery-img-number text-white/60 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
              0{index + 1}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof galleryImages;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  const resetZoom = () => {
    setScale(1);
    setIsZoomed(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { resetZoom(); onPrev(); }
      else if (e.key === "ArrowRight") { resetZoom(); onNext(); }
      else if (e.key === "Escape") onClose();
      else if (e.key === "+" || e.key === "=") setScale((s) => Math.min(s + 0.25, 3));
      else if (e.key === "-") setScale((s) => Math.max(s - 0.25, 1));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  // Scroll lock effect
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);


  const toggleZoom = () => {
    if (isZoomed) { setScale(1); setIsZoomed(false); }
    else { setScale(2); setIsZoomed(true); }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="lightbox-premium"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visor de galería"
    >
      {/* Blur backdrop */}
      <div className="lightbox-backdrop" />

      {/* Top bar */}
      <div
        className="lightbox-topbar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="lightbox-counter">
            {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
          <span className="lightbox-category">{images[index].category}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="lightbox-btn"
            onClick={toggleZoom}
            aria-label={isZoomed ? "Restablecer zoom" : "Zoom"}
          >
            <ZoomIn size={18} color="white" />
          </button>
          <button
            className="lightbox-btn"
            onClick={onClose}
            aria-label="Cerrar galería"
          >
            <X size={18} color="white" />
          </button>
        </div>
      </div>

      {/* Image */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: -16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="lightbox-image-wrapper"
        onClick={(e) => { e.stopPropagation(); toggleZoom(); }}
        style={{ cursor: isZoomed ? "zoom-out" : "zoom-in" }}
      >
        <Image
          src={images[index].src}
          alt={images[index].alt}
          width={1400}
          height={900}
          className="lightbox-image"
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            transformOrigin: "center center",
          }}
          priority
        />
      </motion.div>

      {/* Navigation */}
      <button
        className="lightbox-nav lightbox-nav-prev"
        onClick={(e) => { e.stopPropagation(); resetZoom(); onPrev(); }}
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={24} color="white" />
      </button>
      <button
        className="lightbox-nav lightbox-nav-next"
        onClick={(e) => { e.stopPropagation(); resetZoom(); onNext(); }}
        aria-label="Imagen siguiente"
      >
        <ChevronRight size={24} color="white" />
      </button>

      {/* Thumbnail strip */}
      <div className="lightbox-thumbnails" onClick={(e) => e.stopPropagation()}>
        {images.map((img, i) => (
          <button
            key={i}
            className={`lightbox-thumb ${i === index ? "lightbox-thumb-active" : ""}`}
            onClick={() => {}}
            aria-label={`Ver imagen ${i + 1}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={80}
              height={60}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Caption */}
      <div className="lightbox-caption">
        <p>{images[index].alt}</p>
        <span>Use ← → para navegar · ESC para cerrar · + / − para zoom</span>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "Todas"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));
  }, [filtered.length]);

  return (
    <section
      id="galeria"
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
          className="text-center mb-14"
        >
          <span className="tag-badge" aria-label="Sección Galería">Galería</span>
          <div className="divider-gold" />
          <h2 className="text-section-title font-serif mb-4" style={{ color: "var(--dark)" }}>
            Momentos que{" "}
            <em className="italic" style={{ color: "var(--gold-dark)" }}>
              hablan por sí solos
            </em>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}>
            Cada imagen es un recuerdo real. Así de vivas son las celebraciones en El Corrihuelo.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="tablist"
          aria-label="Filtros de galería"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              className="gallery-filter-btn"
              style={{
                background: activeCategory === cat ? "var(--gold)" : "var(--white)",
                color: activeCategory === cat ? "var(--dark)" : "var(--dark-secondary)",
                borderColor: activeCategory === cat ? "var(--gold)" : "var(--warm-dark)",
                boxShadow: activeCategory === cat ? "var(--shadow-gold)" : "var(--shadow-soft)",
              }}
            >
              {cat}
              {activeCategory === cat && (
                <span className="gallery-filter-dot" />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="masonry-grid"
          >
            {filtered.map((img, i) => (
              <GalleryCard
                key={img.src + i}
                img={img}
                index={i}
                onClick={() => openLightbox(i)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 text-sm"
          style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}
        >
          Mostrando <strong style={{ color: "var(--gold-dark)" }}>{filtered.length}</strong> de {galleryImages.length} fotografías reales · Haz clic para ampliar
        </motion.p>
      </div>

      {/* Premium Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
