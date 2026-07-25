"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, Send, CheckCircle, AlertCircle, MessageCircle } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  date: string;
  guests: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const CONTACTS = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Cabezo de la Plata, Murcia",
    link: "https://maps.google.com/?q=Cabezo+de+la+Plata,+Murcia",
    color: "var(--green)",
    bg: "var(--green-pale)",
  },
  {
    icon: Phone,
    label: "Teléfonos",
    value: "601 167 585 / 679 345 177",
    link: "tel:601167585",
    color: "var(--gold-dark)",
    bg: "rgba(201,169,110,0.12)",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "12:00 – 24:00 · Sep a Jun",
    link: null,
    color: "var(--green)",
    bg: "var(--green-pale)",
  },
];

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = "Por favor, introduce tu nombre completo";
  }
  if (form.phone && !/^[0-9\s+\-()]{7,15}$/.test(form.phone)) {
    errors.phone = "Introduce un número de teléfono válido";
  }
  if (form.date) {
    const d = new Date(form.date);
    if (d < new Date()) {
      errors.date = "La fecha debe ser futura";
    }
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Cuéntanos un poco más sobre tu celebración";
  }
  return errors;
}

function FormField({
  label,
  children,
  error,
  required,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="form-label">
        {label} {required && <span style={{ color: "var(--gold-dark)" }}>*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex items-center gap-1.5 mt-1.5"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
              color: "#C1303A",
            }}
          >
            <AlertCircle size={13} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const newErrors = validate({ ...form, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
    }
  };

  const touchField = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const allTouched = Object.keys(form).reduce(
        (acc, k) => ({ ...acc, [k]: true }),
        {} as Record<keyof FormState, boolean>
      );
      setTouched(allTouched);

      const validationErrors = validate(form);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) return;

      const text = [
        `Hola! Me gustaría información sobre El Corrihuelo.`,
        ``,
        `👤 Nombre: ${form.name}`,
        form.phone ? `📞 Teléfono: ${form.phone}` : "",
        form.date ? `📅 Fecha: ${new Date(form.date).toLocaleDateString("es-ES")}` : "",
        form.guests ? `👥 Asistentes: ${form.guests}` : "",
        `💬 Mensaje: ${form.message}`,
      ]
        .filter(Boolean)
        .join("\n");

      window.open(
        `https://wa.me/34601167585?text=${encodeURIComponent(text)}`,
        "_blank"
      );
      setStatus("success");
      setTimeout(() => setStatus("idle"), 6000);
    },
    [form]
  );

  return (
    <section
      id="contacto"
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
          className="text-center mb-16"
        >
          <span className="tag-badge">Contacto y Reservas</span>
          <div className="divider-gold" />
          <h2 className="text-section-title font-serif mb-4" style={{ color: "var(--dark)" }}>
            Hablemos de tu{" "}
            <em className="italic" style={{ color: "var(--gold-dark)" }}>
              celebración
            </em>
          </h2>
          <p
            className="text-base max-w-lg mx-auto"
            style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}
          >
            Respondemos en menos de 24 horas. Sin compromiso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Info — Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="space-y-5 mb-10">
              {CONTACTS.map(({ icon: Icon, label, value, link, color, bg }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: bg, boxShadow: "var(--shadow-soft)" }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <div
                      className="form-label mb-1"
                      style={{ marginBottom: "0.25rem" }}
                    >
                      {label}
                    </div>
                    {link ? (
                      <a
                        href={link}
                        className="text-base font-medium transition-colors"
                        style={{
                          color: "var(--dark)",
                          fontFamily: "Inter, sans-serif",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          ((e.target as HTMLElement).style.color = "var(--gold-dark)")
                        }
                        onMouseLeave={(e) =>
                          ((e.target as HTMLElement).style.color = "var(--dark)")
                        }
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        className="text-base font-medium"
                        style={{ color: "var(--dark)", fontFamily: "Inter, sans-serif" }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick action */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, var(--dark) 0%, var(--dark-secondary) 100%)",
                boxShadow: "var(--shadow-strong)",
              }}
            >
              <p
                className="text-sm mb-4"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.7,
                }}
              >
                ¿Prefieres contactar directamente? Escríbenos ahora y te responderemos en minutos.
              </p>
              <a
                href="https://wa.me/34601167585?text=Hola!%20Quiero%20información%20sobre%20El%20Corrihuelo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-sm"
                style={{ display: "flex" }}
              >
                <MessageCircle size={18} />
                Abrir WhatsApp
              </a>
            </div>

            {/* Map */}
            <div
              className="rounded-2xl overflow-hidden mt-6"
              style={{ height: "220px", boxShadow: "var(--shadow-soft)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24946.83!2d-1.158!3d38.042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCabezo+de+la+Plata%2C+Murcia!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de El Corrihuelo en Cabezo de la Plata, Murcia"
              />
            </div>
          </motion.div>

          {/* Form — Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-3xl p-8 md:p-10"
              style={{
                background: "var(--white)",
                boxShadow: "var(--shadow-medium)",
                border: "1px solid var(--border-light)",
              }}
            >
              <h3
                className="font-serif text-2xl mb-2"
                style={{ color: "var(--dark)" }}
              >
                Solicita información
              </h3>
              <p
                className="text-sm mb-8"
                style={{ color: "var(--dark-secondary)", fontFamily: "Inter, sans-serif" }}
              >
                Rellena el formulario y te contactaremos por WhatsApp inmediatamente.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Nombre completo" error={errors.name} required>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      onBlur={() => touchField("name")}
                      placeholder="María García"
                      className="form-input"
                      style={{
                        borderColor: errors.name ? "#C1303A" : touched.name && form.name ? "var(--green)" : undefined,
                      }}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      autoComplete="name"
                    />
                  </FormField>

                  <FormField label="Teléfono" error={errors.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      onBlur={() => touchField("phone")}
                      placeholder="600 000 000"
                      className="form-input"
                      style={{
                        borderColor: errors.phone ? "#C1303A" : touched.phone && form.phone ? "var(--green)" : undefined,
                      }}
                      aria-invalid={!!errors.phone}
                      autoComplete="tel"
                    />
                  </FormField>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Fecha deseada" error={errors.date}>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => updateField("date", e.target.value)}
                      onBlur={() => touchField("date")}
                      min={new Date().toISOString().split("T")[0]}
                      className="form-input"
                      style={{
                        borderColor: errors.date ? "#C1303A" : undefined,
                      }}
                    />
                  </FormField>

                  <FormField label="Número de asistentes">
                    <select
                      value={form.guests}
                      onChange={(e) => updateField("guests", e.target.value)}
                      className="form-input"
                      style={{ cursor: "pointer" }}
                    >
                      <option value="">Seleccionar...</option>
                      <option value="hasta 15">Hasta 15 personas</option>
                      <option value="15-30">15 a 30 personas</option>
                      <option value="30-50">30 a 50 personas</option>
                      <option value="50-80">50 a 80 personas</option>
                      <option value="+80">Más de 80</option>
                    </select>
                  </FormField>
                </div>

                <FormField label="Cuéntanos tu celebración" error={errors.message} required>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    onBlur={() => touchField("message")}
                    placeholder="Tipo de evento, fecha aproximada, necesidades especiales, preguntas..."
                    className="form-input"
                    style={{
                      resize: "none",
                      borderColor: errors.message ? "#C1303A" : touched.message && form.message.length >= 10 ? "var(--green)" : undefined,
                    }}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                  />
                  <div
                    className="text-right text-xs mt-1"
                    style={{ color: "var(--dark-light)", fontFamily: "Inter, sans-serif" }}
                  >
                    {form.message.length} caracteres
                  </div>
                </FormField>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, translateY: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full justify-center py-4 text-sm"
                  style={{ borderRadius: "var(--radius-lg)" }}
                  aria-label="Enviar consulta por WhatsApp"
                >
                  {status === "success" ? (
                    <>
                      <CheckCircle size={18} />
                      <span>¡WhatsApp abierto! Verifica el mensaje</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Enviar por WhatsApp</span>
                    </>
                  )}
                </motion.button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 p-4 rounded-xl text-sm"
                    style={{
                      background: "var(--green-pale)",
                      border: "1px solid rgba(61,107,79,0.2)",
                      fontFamily: "Inter, sans-serif",
                      color: "var(--green)",
                    }}
                  >
                    <CheckCircle size={18} />
                    ¡Mensaje preparado! Se ha abierto WhatsApp con tu consulta. Envíalo para confirmar.
                  </motion.div>
                )}

                <p
                  className="text-center text-xs"
                  style={{ color: "var(--dark-light)", fontFamily: "Inter, sans-serif" }}
                >
                  O llámanos directamente al{" "}
                  <a
                    href="tel:601167585"
                    style={{ color: "var(--gold-dark)", fontWeight: 600, textDecoration: "none" }}
                  >
                    601 167 585
                  </a>{" "}
                  ·{" "}
                  <a
                    href="tel:679345177"
                    style={{ color: "var(--gold-dark)", fontWeight: 600, textDecoration: "none" }}
                  >
                    679 345 177
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
