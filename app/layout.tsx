import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const SITE_URL = "https://elcorrihuelo.es";
const SITE_NAME = "El Corrihuelo";
const SITE_DESCRIPTION =
  "Casa vacacional y de eventos en Cabezo de la Plata, Murcia. Piscina privada, salones amplios, barbacoa, karaoke y zona infantil. Celebra tu cumpleaños, reunión familiar o evento privado de forma única. Desde 200€. Temporada Sep–Jun.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Casa de Celebraciones en Murcia · Desde 200€`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "casa celebraciones murcia",
    "alquiler finca murcia",
    "cumpleaños privado murcia",
    "casa rural eventos murcia",
    "cabezo de la plata murcia",
    "alquiler sala eventos murcia",
    "piscina privada murcia",
    "celebraciones familiares murcia",
    "el corrihuelo murcia",
    "finca celebraciones cabezo plata",
    "karaoke barbacoa murcia",
    "fiesta privada murcia",
    "cumpleaños adultos murcia",
    "alquiler finca con piscina murcia",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  generator: "Next.js",
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  category: "Event Venue",

  // Canonical
  alternates: {
    canonical: SITE_URL,
    languages: { "es-ES": SITE_URL },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Casa de Celebraciones en Murcia`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/images/real/real-52.webp`,
        width: 1920,
        height: 1080,
        alt: "El Corrihuelo — Casa de Celebraciones en Cabezo de la Plata, Murcia",
        type: "image/webp",
      },
      {
        url: `${SITE_URL}/images/real/real-54.webp`,
        width: 1920,
        height: 1080,
        alt: "Gran Salón en El Corrihuelo — Murcia",
        type: "image/webp",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Casa de Celebraciones en Murcia`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/images/real/real-52.webp`],
    creator: "@elcorrihuelo",
    site: "@elcorrihuelo",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Geo
  other: {
    "geo.region": "ES-MU",
    "geo.placename": "Cabezo de la Plata, Murcia",
    "geo.position": "38.042;-1.158",
    "ICBM": "38.042, -1.158",
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EventVenue"],
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  alternateName: "El Corrihuelo Casa de Celebraciones",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: [
    `${SITE_URL}/images/real/real-54.webp`,
    `${SITE_URL}/images/real/real-52.webp`,
    `${SITE_URL}/images/real/real-1.webp`,
  ],
  logo: `${SITE_URL}/images/real/real-54.webp`,
  telephone: ["+34601167585", "+34679345177"],
  email: "info@elcorrihuelo.es",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cabezo de la Plata",
    addressLocality: "Murcia",
    addressRegion: "Murcia",
    postalCode: "30100",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.042,
    longitude: -1.158,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "12:00",
      closes: "00:00",
    },
  ],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Bank Transfer",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Piscina privada", value: true },
    { "@type": "LocationFeatureSpecification", name: "Barbacoa equipada", value: true },
    { "@type": "LocationFeatureSpecification", name: "Karaoke profesional", value: true },
    { "@type": "LocationFeatureSpecification", name: "Zona Infantil", value: true },
    { "@type": "LocationFeatureSpecification", name: "Salones amplios", value: true },
    { "@type": "LocationFeatureSpecification", name: "Futbolín", value: true },
    { "@type": "LocationFeatureSpecification", name: "Ping Pong", value: true },
  ],
  sameAs: [
    "https://www.instagram.com/elcorrihuelo",
    "https://www.facebook.com/elcorrihuelo",
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es el precio de alquiler de El Corrihuelo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El alquiler comienza desde 200€. El precio final depende del número de asistentes y necesidades. Contáctanos para recibir un presupuesto personalizado sin compromiso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántas personas pueden asistir a una celebración en El Corrihuelo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Corrihuelo dispone de amplios salones y espacios exteriores que permiten acomodar diferentes grupos. Contáctanos con el número de asistentes para confirmar disponibilidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el horario de El Corrihuelo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El horario estándar es de 12:00 a 24:00 horas, dando 12 horas completas para disfrutar de todas las instalaciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué temporada está disponible El Corrihuelo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Estamos disponibles de septiembre a junio. Para fechas fuera de este período, consúltanos directamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde está ubicado El Corrihuelo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Corrihuelo está en Cabezo de la Plata, Murcia. Una finca privada enclavada en plena naturaleza murciana.",
      },
    },
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "es-ES",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />

        {/* Theme color */}
        <meta name="theme-color" content="#1C1A17" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#FAF8F4" media="(prefers-color-scheme: light)" />
        <meta name="color-scheme" content="light" />

        {/* Additional meta */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
      </head>
      <body>
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[999] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
          style={{ background: "var(--gold)", color: "var(--dark)" }}
        >
          Saltar al contenido principal
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
