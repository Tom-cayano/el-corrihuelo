// Datos centralizados compartidos entre el grid del home y las páginas individuales
export const INSTALLATIONS_DATA = [
  {
    slug: "piscina",
    title: "La Piscina",
    headline: "El oasis privado de la finca",
    shortDescription:
      "Piscina privada de agua cristalina rodeada de vegetación mediterránea. Solárium, tumbonas y zonas de sombra.",
    fullDescription:
      "Nuestra piscina privada es el corazón del verano en El Corrihuelo. Con dimensiones generosas para grupos grandes y rodeada de césped natural, es el espacio perfecto para refrescarse, relajarse y disfrutar de un día completo al sol murciano. El solárium cuenta con tumbonas y zonas de sombra para que cada momento sea confortable.",
    heroImage: "/images/terraza-piscina.jpg",
    gallery: [
      "/images/terraza-piscina.jpg",
      "/images/detalle-piscina.jpg",
      "/images/flores-entrada.jpg",
      "/images/hero-jardin.jpg",
    ],
    features: [
      "Uso exclusivo incluido en el precio",
      "Temporada cálida: mayo a octubre",
      "Zona de solárium con tumbonas",
      "Césped natural alrededor",
      "Zonas de sombra disponibles",
      "Duchas exteriores",
    ],
    capacity: "Hasta 80 personas",
    icon: "🏊",
  },
  {
    slug: "salon",
    title: "El Gran Salón",
    headline: "Elegancia y amplitud para tu celebración",
    shortDescription:
      "Salón diáfano con capacidad para grandes grupos, climatizado, con decoración rústica moderna y equipo de sonido.",
    fullDescription:
      "El Gran Salón de El Corrihuelo es el corazón de las celebraciones bajo techo. Con más de 120 m² diáfanos, se adapta a cualquier tipo de evento: cenas de gala, reuniones familiares, cumpleaños o bodas íntimas. Está completamente climatizado para asegurar el confort en cualquier época del año y equipado con sistema de sonido de alta fidelidad y karaoke.",
    heroImage: "/images/hero-salon.jpg",
    gallery: [
      "/images/hero-salon.jpg",
      "/images/salon-decorado.jpg",
      "/images/flores-salon.jpg",
      "/images/mesa-gourmet.jpg",
    ],
    features: [
      "Más de 120 m² diáfanos",
      "Climatización completa (frío/calor)",
      "Sistema de sonido profesional",
      "Karaoke incluido",
      "Decoración rústica moderna",
      "Iluminación regulable",
    ],
    capacity: "Hasta 100 personas sentadas",
    icon: "🏠",
  },
  {
    slug: "jardines",
    title: "Los Jardines",
    headline: "Naturaleza y privacidad total",
    shortDescription:
      "Miles de metros cuadrados de jardines cuidados al milímetro. Zonas de barbacoa, área infantil y espacios de descanso.",
    fullDescription:
      "Los jardines de El Corrihuelo son un universo propio. Con miles de metros cuadrados de naturaleza mediterránea cuidada al detalle, ofrecen espacios diferenciados para cada momento de tu celebración: rincones íntimos para la sobremesa, zonas amplias para juegos y actividades, y un área infantil para que los más pequeños disfruten con total seguridad.",
    heroImage: "/images/hero-jardin.jpg",
    gallery: [
      "/images/hero-jardin.jpg",
      "/images/flores-entrada.jpg",
      "/images/grupo-exterior.jpg",
      "/images/baile-exterior.jpg",
    ],
    features: [
      "Más de 5.000 m² de parcela",
      "Zona de barbacoa exterior",
      "Área infantil equipada",
      "Árboles frutales y vegetación autóctona",
      "Aparcamiento privado incluido",
      "Iluminación exterior de ambiente",
    ],
    capacity: "Sin límite (espacio exterior)",
    icon: "🌿",
  },
  {
    slug: "gastronomia",
    title: "Zona Gourmet",
    headline: "Todo equipado para la buena mesa",
    shortDescription:
      "Cocina completamente equipada, zona de barbacoa exterior y espacios para catering. La gastronomía, sin límites.",
    fullDescription:
      "En El Corrihuelo creemos que la buena mesa es parte esencial de cualquier celebración. Por eso hemos equipado nuestros espacios gastronómicos al máximo nivel: una cocina interior completamente profesional y una zona de barbacoa exterior que permite disfrutar de paellas, arroces y asados con todas las comodidades. También puedes contratar un servicio de catering externo sin ningún problema.",
    heroImage: "/images/mesa-gourmet.jpg",
    gallery: [
      "/images/mesa-gourmet.jpg",
      "/images/paella-grupo.jpg",
      "/images/paella2.jpg",
      "/images/mesa-tapas.jpg",
    ],
    features: [
      "Cocina interior completamente equipada",
      "Barbacoa exterior de gran capacidad",
      "Zona de paellas",
      "Neveras y almacenamiento refrigerado",
      "Compatible con servicio de catering",
      "Utensilios y menaje disponibles",
    ],
    capacity: "Servicio para hasta 100 personas",
    icon: "🍽️",
  },
];

export type Installation = (typeof INSTALLATIONS_DATA)[0];
