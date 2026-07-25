"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: "var(--dark)" }}>
      {/* Decorative Blur */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, var(--gold-dark) 0%, transparent 70%)" }}
      />
      
      <div className="container-max text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-serif text-[12rem] leading-none font-bold text-white mb-4 tracking-tighter" style={{ textShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
            404
          </h1>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
            Página no encontrada
          </h2>
          <p className="text-lg opacity-70 text-white max-w-lg mx-auto mb-12" style={{ fontFamily: "Inter, sans-serif" }}>
            Parece que te has perdido. La página que buscas no existe o ha sido movida, 
            pero siempre puedes volver al inicio para seguir explorando nuestra finca.
          </p>
          
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 py-4 px-8 bg-gold text-dark font-bold text-sm rounded-full transition-shadow hover:shadow-[0_0_20px_rgba(201,169,110,0.4)]"
            >
              <ArrowLeft size={18} />
              Volver al inicio
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
