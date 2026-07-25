# El Corrihuelo — Premium Vacation Rental

Este proyecto es la plataforma oficial de reservas y presencia online de la finca de alquiler vacacional y celebraciones "El Corrihuelo" (Murcia, España). Diseñada con estándares de calidad de nivel agencia (*Awwwards Level*), maximiza la conversión y la experiencia del usuario a través de diseño inmersivo, microinteracciones y rendimiento ultra optimizado.

## 🚀 Tecnologías Core
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Lenguaje:** TypeScript (Estricto)
- **Estilos:** Tailwind CSS v4 + Vanilla CSS (Variables y Tokens)
- **Animaciones:** Framer Motion + CSS Transitions
- **Iconografía:** Lucide React
- **Arquitectura:** Static Site Generation (SSG)

## 📦 Instalación y Desarrollo Local

1. Clona el repositorio:
   ```bash
   git clone <tu-repositorio>
   cd el-corrihuelo
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗 Build y Despliegue (Producción)

El proyecto está optimizado para generar HTML estático ultrarrápido sin dependencias activas del servidor (excepto en peticiones futuras si conectas una API).

Para compilar el proyecto localmente:
```bash
npm run build
```

**Despliegue recomendado en Vercel:**
1. Sube el código a un repositorio de GitHub.
2. Inicia sesión en [Vercel](https://vercel.com).
3. Importa tu repositorio de GitHub.
4. No necesitas configurar comandos adicionales, Vercel detectará Next.js automáticamente y desplegará la web.

## 📁 Estructura del Proyecto

```
el-corrihuelo/
├── app/
│   ├── globals.css         # CSS Tokens, Reset y Utilidades
│   ├── layout.tsx          # Wrapper principal + Metadata + JSON-LD (SEO)
│   ├── page.tsx            # Landing Page maestra (Arquitectura de conversión)
│   ├── not-found.tsx       # Página de error 404 personalizada
│   ├── aviso-legal/        # Páginas legales estáticas
│   ├── privacidad/         # Páginas legales estáticas
│   ├── cookies/            # Páginas legales estáticas
│   └── gracias/            # Thank You page post-reserva
├── components/
│   ├── Hero.tsx            # Impacto visual inicial (Ken Burns effect)
│   ├── Booking.tsx         # Motor de Reservas (Calendario + Formulario)
│   ├── Gallery.tsx         # Galería premium con Lightbox y navegación por teclado
│   ├── Features.tsx        # Sección "Por qué elegirnos"
│   └── ... (Resto de componentes modulares)
└── public/                 # Assets (Imágenes, Fuentes, favicon)
```

## 🛠 Guía de Edición y Mantenimiento

### ¿Cómo modificar textos?
Todos los textos (títulos, descripciones, preguntas frecuentes) se encuentran hardcodeados dentro de sus respectivos componentes en la carpeta `components/`. 
- **Ejemplo (FAQ):** Abre `components/FAQ.tsx` y modifica el array `faqs`.

### ¿Cómo cambiar los precios?
1. En el componente de la cuadrícula de matriz: `components/Includes.tsx`
2. En la tarjeta de reserva: `components/Booking.tsx`
3. En el FAQ: `components/FAQ.tsx`

### ¿Cómo actualizar el número de teléfono o email?
Para centralizar la conversión a WhatsApp y llamadas telefónicas, edita los siguientes archivos:
1. `components/Footer.tsx` (Sección de Contacto)
2. `components/Booking.tsx` (Link de redirección de WhatsApp)
3. `components/WhatsAppButton.tsx` (Botón flotante global)

### ¿Cómo cambiar imágenes?
Sustituye las imágenes actuales dentro de la carpeta `public/` (ej. `public/hero-bg.jpg`) o altera la ruta referenciada en los componentes de imagen de Next.js (`<Image src="/nueva-foto.jpg" />`). 
**Recomendación:** Utiliza siempre imágenes optimizadas en formato `WebP` o `JPG` comprimido, respetando resoluciones proporcionadas para no alterar el *performance* de Lighthouse.

## 🔮 Futuras Ampliaciones (Arquitectura Preparada)

- **Conexión de Calendario Real:** En `components/Booking.tsx`, la función `useCalendarData` actualmente devuelve datos simulados. Para conectar con **Google Calendar** o **Supabase**, basta con sustituir la lógica interna de esta función por una llamada HTTP (Fetch), sin tocar la UI.
- **Pasarela de Pago (Stripe):** La redirección a WhatsApp en el formulario de `Booking.tsx` se puede sustituir fácilmente por un POST a un EndPoint propio de Next.js Server Actions para generar una sesión de Stripe Checkout.

---
*Desarrollado con ♥ por AI Tech Lead.*
