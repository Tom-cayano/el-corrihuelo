"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show after scroll
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Show tooltip after a delay
    const t = setTimeout(() => setTooltip(true), 4000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  // Auto-hide tooltip
  useEffect(() => {
    if (!tooltip) return;
    const t = setTimeout(() => setTooltip(false), 6000);
    return () => clearTimeout(t);
  }, [tooltip]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-3"
          role="complementary"
          aria-label="Contacto rápido por WhatsApp"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: 12, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass flex items-center gap-2.5 px-4 py-2.5 rounded-full"
                style={{ boxShadow: "var(--shadow-medium)" }}
              >
                <span
                  className="text-sm font-semibold whitespace-nowrap"
                  style={{ color: "var(--dark)", fontFamily: "Inter, sans-serif" }}
                >
                  ¡Reserva ahora!
                </span>
                <button
                  onClick={() => setTooltip(false)}
                  className="cursor-pointer border-0 bg-transparent p-0 leading-none flex-shrink-0"
                  aria-label="Cerrar tooltip"
                >
                  <X size={13} style={{ color: "var(--dark-secondary)" }} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href="https://wa.me/34601167585?text=Hola!%20Quiero%20información%20sobre%20El%20Corrihuelo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar con El Corrihuelo por WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="whatsapp-pulse relative w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(145deg, #25D366, #1aa34a)",
              boxShadow: "0 8px 32px rgba(37, 211, 102, 0.5)",
            }}
            onMouseEnter={() => setTooltip(true)}
          >
            <MessageCircle size={28} color="white" aria-hidden="true" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
