"use client";

import { useState, useMemo, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Calendar as CalendarIcon, 
  PhoneCall, 
  MessageCircle, 
  CheckCircle, 
  Clock, 
  Flame, 
  Home, 
  Baby, 
  Music, 
  Waves,
  ShieldCheck,
  Zap
} from "lucide-react";

// --- TIPOS ---
type DateStatus = "available" | "booked" | "pending";
type FormState = {
  name: string;
  phone: string;
  email: string;
  date: string;
  guests: string;
  eventType: string;
  message: string;
};
type FormErrors = Partial<Record<keyof FormState, string>>;

// --- CONSTANTES ---
const FEATURES = [
  { icon: Waves, text: "Piscina (temporada)" },
  { icon: Flame, text: "Barbacoa y exteriores" },
  { icon: Home, text: "Amplios salones" },
  { icon: Music, text: "Karaoke y sonido" },
  { icon: Baby, text: "Parque infantil" },
];

const TRUST_BADGES = [
  { icon: Zap, title: "Respuesta Inmediata", desc: "Contestamos en minutos por WhatsApp." },
  { icon: ShieldCheck, title: "Sin Compromiso", desc: "Consulta disponibilidad y precios gratis." },
  { icon: CheckCircle, title: "Exclusividad Total", desc: "Toda la finca solo para ti y tus invitados." }
];

// --- UTILIDADES ---
function pseudoRandom(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = Math.imul(31, hash) + seed.charCodeAt(i) | 0;
  }
  const x = Math.sin(hash) * 10000;
  return x - Math.floor(x);
}

// --- HOOK DE DISPONIBILIDAD SIMULADA (Para futuras integraciones) ---
function useCalendarData(year: number, month: number) {
  // Aquí en el futuro se llamaría a Supabase o Google Calendar API
  // Devolvemos datos simulados para demostrar la interfaz
  const data = useMemo(() => {
    const dummy: Record<string, DateStatus> = {};
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
      // Lógica pseudoaleatoria determinista para simulación visual
      const rand = pseudoRandom(dateStr);
      if (rand > 0.7) dummy[dateStr] = "booked";
      else if (rand > 0.6) dummy[dateStr] = "pending";
      else dummy[dateStr] = "available";
    }
    
    // Forzamos fines de semana a estar más ocupados
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
      const dayOfWeek = new Date(year, month, i).getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) { // Sabado o Domingo
        if (pseudoRandom(dateStr + "weekend") > 0.3) dummy[dateStr] = "booked";
      }
    }
    
    return dummy;
  }, [year, month]);

  return data;
}

// --- CALENDARIO UI ---
function CalendarMonth({ year, month, selectedDate, onSelect }: { year: number; month: number; selectedDate: string; onSelect: (d: string) => void }) {
  const data = useCalendarData(year, month);
  const monthName = new Date(year, month).toLocaleString("es-ES", { month: "long" });
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();
  // Ajuste para que lunes sea el primer día (0=Lunes, 6=Domingo)
  const adjustedFirstDay = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: adjustedFirstDay }, (_, i) => i);

  return (
    <div className="w-full">
      <h4 className="text-center font-serif text-lg capitalize mb-4" style={{ color: "var(--dark)" }}>
        {monthName} {year}
      </h4>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
          <div key={d} className="text-xs font-bold" style={{ color: "var(--dark-light)" }}>{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {blanks.map((b) => (
          <div key={`blank-${b}`} className="aspect-square" />
        ))}
        {days.map((d) => {
          const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
          const status = data[dateStr] || "available";
          const isSelected = selectedDate === dateStr;
          const isPast = new Date(year, month, d) < new Date(new Date().setHours(0,0,0,0));

          let bg = "transparent";
          let color = "var(--dark)";
          let border = "1px solid var(--border-light)";
          let cursor = "pointer";

          if (isPast) {
            color = "var(--dark-light)";
            border = "1px dashed var(--border-light)";
            cursor = "not-allowed";
          } else if (status === "booked") {
            bg = "var(--border-light)";
            color = "var(--dark-light)";
            cursor = "not-allowed";
          } else if (status === "pending") {
            bg = "rgba(245, 158, 11, 0.1)"; // Naranja
            color = "#D97706";
            border = "1px solid rgba(245, 158, 11, 0.3)";
          } else {
            bg = "rgba(37, 211, 102, 0.08)"; // Verde
            color = "#16a34a";
            border = "1px solid rgba(37, 211, 102, 0.2)";
          }

          if (isSelected) {
            bg = "var(--gold)";
            color = "var(--dark)";
            border = "1px solid var(--gold-dark)";
          }

          return (
            <button
              key={d}
              disabled={isPast || status === "booked"}
              onClick={() => onSelect(dateStr)}
              className="aspect-square rounded-lg flex items-center justify-center text-sm transition-all duration-200"
              style={{
                background: bg,
                color,
                border,
                cursor,
                transform: isSelected ? "scale(1.05)" : "scale(1)",
                fontWeight: isSelected ? "bold" : "normal",
                boxShadow: isSelected ? "var(--shadow-medium)" : "none",
              }}
              title={isPast ? "Fecha pasada" : status === "booked" ? "Ocupado" : status === "pending" ? "Pendiente de confirmación" : "Disponible"}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// --- MAIN COMPONENT ---
export default function Booking() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", email: "", date: "", guests: "", eventType: "", message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fechas actuales
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const nextMonthDate = new Date(currentYear, currentMonth + 1, 1);

  const handleDateSelect = (date: string) => {
    setForm(prev => ({ ...prev, date }));
    setErrors(prev => ({ ...prev, date: undefined }));
  };

  const validate = () => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "El nombre es obligatorio";
    if (!form.phone.trim() || form.phone.length < 9) errs.phone = "Teléfono inválido";
    if (!form.date) errs.date = "Selecciona una fecha";
    if (!form.guests) errs.guests = "Indica los asistentes";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrs = validate();
    if (Object.keys(validationErrs).length > 0) {
      setErrors(validationErrs);
      return;
    }

    setIsSubmitting(true);

    // Formatear texto para WhatsApp
    const text = `Hola. Me gustaría consultar disponibilidad para celebrar un evento en El Corrihuelo.%0A%0A*Nombre:* ${form.name}%0A*Teléfono:* ${form.phone}${form.email ? `%0A*Email:* ${form.email}` : ""}%0A*Fecha deseada:* ${form.date}%0A*Asistentes:* ${form.guests}%0A*Tipo:* ${form.eventType || "No especificado"}%0A*Mensaje:* ${form.message || "Sin mensaje adicional"}%0A%0AEspero vuestra respuesta. Muchas gracias.`;

    // Simular animación de procesamiento premium antes de abrir WA
    setTimeout(() => {
      window.open(`https://wa.me/34601167585?text=${text}`, "_blank");
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section id="reserva" ref={ref} className="section-padding relative" style={{ background: "var(--white)" }}>
      <div className="container-max">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="tag-badge">Reserva tu fecha</span>
          <div className="divider-gold" />
          <h2 className="text-section-title font-serif mb-4" style={{ color: "var(--dark)" }}>
            Las mejores fechas se reservan con <em className="italic" style={{ color: "var(--gold-dark)" }}>antelación</em>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}>
            Consulta nuestro calendario de disponibilidad. Ponte en contacto con nosotros 
            sin ningún compromiso para organizar tu celebración perfecta.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* MAIN CONTENT (Calendar + Form) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 flex flex-col gap-10"
          >
            {/* CALENDARIO PREMIUM */}
            <div 
              className="bg-white rounded-3xl p-6 md:p-8"
              style={{ boxShadow: "var(--shadow-medium)", border: "1px solid var(--border-light)" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <CalendarIcon size={24} style={{ color: "var(--gold-dark)" }} />
                <h3 className="font-serif text-2xl" style={{ color: "var(--dark)" }}>Disponibilidad</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <CalendarMonth year={currentYear} month={currentMonth} selectedDate={form.date} onSelect={handleDateSelect} />
                <CalendarMonth year={nextMonthDate.getFullYear()} month={nextMonthDate.getMonth()} selectedDate={form.date} onSelect={handleDateSelect} />
              </div>

              {/* Leyenda */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#16a34a" }} /> Disponible
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#D97706" }} /> Pendiente
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <div className="w-3 h-3 rounded-full" style={{ background: "var(--border-light)" }} /> Ocupado
                </div>
              </div>
            </div>

            {/* FORMULARIO */}
            <div 
              className="bg-cream rounded-3xl p-6 md:p-8"
              style={{ boxShadow: "inset 0 2px 20px rgba(0,0,0,0.02)", border: "1px solid rgba(201,169,110,0.2)" }}
            >
              <h3 className="font-serif text-2xl mb-6" style={{ color: "var(--dark)" }}>Datos de la Reserva</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Nombre *</label>
                    <input 
                      type="text" className="form-input" placeholder="Tu nombre" 
                      value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      style={{ borderColor: errors.name ? "red" : undefined }}
                    />
                    {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
                  </div>
                  <div>
                    <label className="form-label">Teléfono *</label>
                    <input 
                      type="tel" className="form-input" placeholder="600 000 000" 
                      value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                      style={{ borderColor: errors.phone ? "red" : undefined }}
                    />
                    {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Fecha (Desde calendario) *</label>
                    <input 
                      type="text" className="form-input bg-gray-50" readOnly 
                      placeholder="Selecciona arriba" value={form.date}
                      style={{ borderColor: errors.date ? "red" : undefined }}
                    />
                    {errors.date && <span className="text-xs text-red-500 mt-1 block">{errors.date}</span>}
                  </div>
                  <div>
                    <label className="form-label">Asistentes *</label>
                    <select 
                      className="form-input" 
                      value={form.guests} onChange={e => setForm({...form, guests: e.target.value})}
                      style={{ borderColor: errors.guests ? "red" : undefined }}
                    >
                      <option value="">Seleccionar...</option>
                      <option value="15">Hasta 15 personas</option>
                      <option value="30">15 a 30 personas</option>
                      <option value="50">30 a 50 personas</option>
                      <option value="+50">Más de 50</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">Tipo de Celebración</label>
                  <input 
                    type="text" className="form-input" placeholder="Ej. Cumpleaños, Bautizo, Reunión familiar" 
                    value={form.eventType} onChange={e => setForm({...form, eventType: e.target.value})}
                  />
                </div>

                <div>
                  <label className="form-label">Mensaje o peticiones especiales</label>
                  <textarea 
                    className="form-input min-h-[100px]" placeholder="Cuéntanos los detalles de tu evento..." 
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="btn-whatsapp w-full justify-center py-4 mt-2 relative overflow-hidden"
                  type="submit"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Preparando mensaje...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <MessageCircle size={20} />
                        <span className="font-semibold">Consultar disponibilidad</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </motion.div>


          {/* SIDEBAR (Glassmorphism Card) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <div 
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.8)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
            >
              {/* Decorative gradient behind glass */}
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: "var(--gold-dark)" }}
              />
              
              <div className="mb-6">
                <span className="text-sm font-semibold tracking-widest uppercase block mb-2" style={{ color: "var(--gold-dark)", fontFamily: "Inter, sans-serif" }}>
                  Alquiler Exclusivo
                </span>
                <div className="flex items-end gap-2 text-dark">
                  <span className="text-sm pb-1.5 opacity-60 font-medium">Desde</span>
                  <span className="font-serif font-bold text-5xl tracking-tight">200€</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {FEATURES.map((feat) => (
                  <div key={feat.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-cream-dark">
                      <feat.icon size={14} style={{ color: "var(--dark)" }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}>
                      {feat.text}
                    </span>
                  </div>
                ))}
                
                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(201,169,110,0.1)" }}>
                    <Clock size={14} style={{ color: "var(--gold-dark)" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "var(--dark)", fontFamily: "Inter, sans-serif" }}>
                    Horario: 12:00 a 24:00
                  </span>
                </div>
              </div>

              <a
                href="tel:601167585"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "var(--dark)",
                  color: "white",
                  boxShadow: "0 10px 20px rgba(28,26,23,0.2)",
                }}
              >
                <PhoneCall size={18} />
                Llamar ahora
              </a>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-8 space-y-5">
              {TRUST_BADGES.map((badge, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--cream-dark)" }}>
                    <badge.icon size={18} style={{ color: "var(--gold-dark)" }} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-0.5" style={{ color: "var(--dark)" }}>{badge.title}</h5>
                    <p className="text-xs" style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif", lineHeight: 1.5 }}>
                      {badge.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
