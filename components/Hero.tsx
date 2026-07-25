"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Calendar, Play } from "lucide-react";

const SLIDES = [
  { src: "/images/hero-salon.jpg", alt: "Salón principal de El Corrihuelo" },
  { src: "/images/evento-grupo.jpg", alt: "Celebración flamenca en El Corrihuelo" },
  { src: "/images/baile-noche.jpg", alt: "Fiesta nocturna en El Corrihuelo" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  // Mouse parallax
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMouseX(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    setMouseY(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Video load
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.play().catch(() => setVideoError(true));
  }, []);

  // Slideshow fallback (Ken Burns cycle)
  useEffect(() => {
    if (videoLoaded && !videoError) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [videoLoaded, videoError]);

  const scrollToNext = () => {
    const el = document.querySelector("#sobre-nosotros");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const showSlideshow = !videoLoaded || videoError;

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="hero-section relative w-full flex items-center justify-center overflow-hidden"
      aria-label="El Corrihuelo — Casa de Celebraciones en Murcia"
    >
      {/* ── VIDEO BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: videoLoaded ? 1 : 0,
              transform: `scale(1.04) translate(${mouseX * -4}px, ${mouseY * -4}px)`,
              transition: videoLoaded ? "transform 0.15s ease-out, opacity 2s ease" : "opacity 2s ease",
            }}
            aria-hidden="true"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
          </video>
        )}

        {/* Ken Burns Slideshow (fallback or while video loads) */}
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${slide.src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: showSlideshow && i === currentSlide ? 1 : (videoLoaded ? 0 : i === 0 ? 1 : 0),
              animation: showSlideshow && i === currentSlide ? "kenBurns 8s ease-in-out infinite" : "none",
              transform: `scale(1.04) translate(${mouseX * -4}px, ${mouseY * -4}px)`,
              transition: "transform 0.15s ease-out, opacity 1.5s ease",
            }}
          />
        ))}
      </div>

      {/* ── OVERLAYS ── */}
      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 z-10 hero-overlay-premium" />
      {/* Vignette */}
      <div className="absolute inset-0 z-10 hero-vignette" />
      {/* Noise texture */}
      <div className="absolute inset-0 z-10 hero-noise" />
      {/* Bottom fade to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 hero-bottom-fade" />
      {/* Gold glow accent */}
      <div className="absolute inset-0 z-10 hero-gold-glow" />

      {/* ── CONTENT ── */}
      <div className="relative z-20 text-center px-6 w-full max-w-6xl mx-auto py-32 pt-40">

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-4 mb-10"
        >
          <span className="hero-line" />
          <span className="hero-badge-text">
            Cabezo de la Plata · Murcia
          </span>
          <span className="hero-line" />
        </motion.div>

        {/* Main title */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            className="hero-title font-serif"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            El{" "}
            <em className="hero-title-em italic">Corrihuelo</em>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3"
        >
          <span className="hero-subtitle">Casa Vacacional y de Celebraciones</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="hero-tagline"
        >
          Naturaleza&nbsp;&nbsp;·&nbsp;&nbsp;Diversión&nbsp;&nbsp;·&nbsp;&nbsp;Momentos Inolvidables
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a
            href="https://wa.me/34601167585?text=Hola!%20Quiero%20reservar%20El%20Corrihuelo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary group"
            aria-label="Reservar El Corrihuelo por WhatsApp"
          >
            <span className="btn-hero-bg" aria-hidden="true" />
            <Calendar size={18} className="relative z-10" />
            <span className="relative z-10">Reservar ahora</span>
          </a>

          <button
            onClick={() => {
              document.querySelector("#galeria")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-hero-secondary group"
            aria-label="Ver galería de El Corrihuelo"
          >
            <Play size={16} className="opacity-80" />
            <span>Ver galería</span>
          </button>
        </motion.div>

        {/* Info strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="hero-info-strip"
        >
          <div className="hero-info-item">
            <span className="hero-info-icon">✦</span>
            <span>Desde 200€</span>
          </div>
          <span className="hero-info-sep" aria-hidden="true" />
          <div className="hero-info-item">
            <span className="hero-info-icon">✦</span>
            <span>12:00 – 24:00</span>
          </div>
          <span className="hero-info-sep hidden sm:block" aria-hidden="true" />
          <div className="hero-info-item hidden sm:flex">
            <span className="hero-info-icon">✦</span>
            <span>Sep – Jun</span>
          </div>
        </motion.div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={scrollToNext}
        className="scroll-trigger absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer bg-transparent border-0"
        aria-label="Desplazar hacia abajo para descubrir más"
      >
        <span className="scroll-trigger-label">Descubrir</span>
        <div className="scroll-trigger-mouse" aria-hidden="true">
          <div className="scroll-trigger-dot" />
        </div>
      </motion.button>

      {/* ── SLIDE DOTS ── */}
      {showSlideshow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 right-8 z-20 flex flex-col gap-2"
          aria-hidden="true"
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className="slide-dot"
              style={{
                background: i === currentSlide ? "var(--gold)" : "rgba(255,255,255,0.4)",
                width: i === currentSlide ? "24px" : "6px",
                height: "6px",
                borderRadius: "3px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </motion.div>
      )}
    </section>
  );
}
