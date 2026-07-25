"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Home } from "lucide-react";

export default function GraciasPage() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: "var(--cream)" }}>
      {/* Decorative Elements */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-20"
        style={{ background: "var(--gold-dark)" }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-30"
        style={{ background: "var(--white)" }}
      />

      <div className="container-max max-w-2xl text-center relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-[3rem] p-10 md:p-16 relative"
          style={{ boxShadow: "var(--shadow-medium)", border: "1px solid var(--border-light)" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
            className="w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center"
            style={{ background: "rgba(37, 211, 102, 0.1)" }}
          >
            <CheckCircle size={48} color="#16a34a" />
          </motion.div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--dark)" }}>
            ¡Gracias por tu solicitud!
          </h1>
          
          <p className="text-lg mb-10" style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}>
            Hemos recibido los datos de tu reserva correctamente. Nos pondremos en contacto contigo lo antes posible para confirmar la disponibilidad y todos los detalles.
          </p>
          
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 py-4 px-8 font-bold text-sm rounded-full transition-shadow"
              style={{ background: "var(--dark)", color: "white", boxShadow: "0 10px 20px rgba(28,26,23,0.15)" }}
            >
              <Home size={18} />
              Volver al inicio
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
