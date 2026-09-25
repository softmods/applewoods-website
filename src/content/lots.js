// Lots page content, /lots and /es/terrenos. Softmods-owned page, same shape as a post
// (see posts/SCHEMA.md) minus id/category. `title` is the full <title> including brand.
// Extra blocks for this page only: { phaseDocs: "phase-1" | "phase-2" } renders that
// phase's lot map and price sheet images; { contactForm: true } renders the contact form.
// Facts: truth ledger in the vault (cms-ref-seo-run-loop). FAQ answers are the client's
// text from client.js contact.faq.groups, verbatim in both languages.
export default {
  datePublished: "2026-09-25",
  dateModified: "2026-09-25",
  heroImage: "/assets/hero-desktop.jpg",
  en: {
    slug: "lots",
    title: "Lots for Sale in Brownsville, TX | Apple Woods Gated Community",
    h1: "Residential lots for sale in Brownsville, TX",
    description:
      "Residential lots from $85,000 in Apple Woods, a gated smart community in Brownsville, Texas. Phase 1 and Phase 2 maps, prices, availability and build guidelines.",
    summary:
      "Apple Woods is a gated community of residential homesites in Brownsville, Texas. Phase 1 lots start at $85,000, and premier lots near the planned clubhouse and Water Walk are $95,000. Most homesites are about 6,000 square feet. You buy the lot, then build your own home with your own builder under the community's architectural standards. This page has the Phase 1 and Phase 2 maps and price sheets, what every lot comes with, dues while you hold the lot, and how to ask for current availability.",
    heroAlt:
      "Rendering of the planned gated entrance at Apple Woods, a community of residential lots for sale in Brownsville, TX",
    sections: [
      {
        h2: "Phase 1 lots and prices",
        blocks: [
          {
            p: "Phase 1 standard lots list at **$85,000** and premier lots at **$95,000**. Larger corner lots are priced in proportion to their size and location. These are the developer's public list prices, in US dollars.",
          },
          {
            table: {
              head: ["Lot type", "Where it sits", "List price"],
              rows: [
                ["Standard", "Throughout Phase 1, most about 6,000 sq ft", "$85,000"],
                ["Premier", "Near the planned clubhouse, Water Walk and resort-style pool", "$95,000"],
                ["Corner", "Larger or irregular lots", "Priced by size and location"],
              ],
            },
          },
          {
            p: "Phase 1 is the first release inside Apple Woods. The lot map below marks each homesite as sold, pending or possibly available. The price sheet lists every Phase 1 homesite with its suggested retail price and the developer's introductory offer.",
          },
          { phaseDocs: "phase-1" },
          {
            p: "Tap either image to open it full size. Lot status changes as buyers reserve homesites, so confirm a lot with the sales team before you plan around it. To picture the size on the ground, see [how big a 6,000 sq ft lot is](/blog/how-big-is-a-6000-sq-ft-lot).",
          },
        ],
      },
      {
        h2: "Phase 2",
        blocks: [
          {
            p: "Phase 2 has **77 homesites**. Under the developer's offer on the Phase 2 sheet, the first 20 homesites come without the Community Integration Cost (CIC).",
          },
          {
            p: "The CIC pays for the items that make each home match the rest of the community, such as standardized fencing and mailboxes, grass installation, irrigation and decorative sidewalk finishes. Ask the sales team how the offer applies to the lot you want.",
          },
          {
            p: "The Phase 2 sheet shows the developer's suggested retail price for each homesite. It has no introductory offer column like the Phase 1 sheet. If a lot you want has no price on the sheet, ask the sales team for it.",
          },
          { phaseDocs: "phase-2" },
          {
            p: "Phase 1 is expected to carry the lowest introductory pricing in Apple Woods. As lots sell, later phases are expected to price higher.",
          },
        ],
      },
      {
        h2: "What is included with every lot",
        blocks: [
          {
            p: "Every lot buys into the planned community around it, not only the land. Apple Woods will feature these shared systems and amenities as it builds out. They are planned today, and the images on this site are renderings of that plan.",
          },
          {
            ul: [
              "A controlled-access gated entry",
              "Security cameras placed across common areas",
              "Smart lighting and irrigation",
              "Flood mitigation measures",
              "A clubhouse",
              "A resort-style pool",
              "A fitness center",
              "The Water Walk, a pedestrian promenade with water features and landscaping",
            ],
          },
          {
            p: "Homeowners share the cost of these amenities, which is how the community plans to keep dues low. For how a gated community differs from an open neighborhood, read [gated community vs regular subdivision](/blog/gated-community-vs-regular-subdivision).",
          },
        ],
      },
      {
        h2: "Build your own home",
        blocks: [
          {
            p: "You build your own home on an Apple Woods lot, with the builder you choose. Homes range from about 1,600 square feet of living area up to 3,250 square feet per floor, with up to three stories.",
          },
          {
            p: "Every design goes through architectural review before construction. The community standards cover home size, architectural design, landscaping, exterior maintenance, lighting, noise, color selections and outdoor storage. A modest home and a large one can sit on the same street because both meet the same curb appeal rules.",
          },
          {
            p: "Most lots are about 60 feet wide by 100 feet deep. Standard setbacks are about 25 feet from the front property line, 5 feet from each side and 10 feet from the rear.",
          },
          {
            p: "Read the client's full answer to [What are the restrictions?](/#faq-shared-standards), or ask the sales team for the complete list of standards before you hire a builder.",
          },
        ],
      },
      {
        h2: "Dues while you own only the lot",
        blocks: [
          {
            p: "You pay reduced dues while you hold the lot, and full dues after the home is built. The reduced dues cover basic maintenance and essential community services, since most owners do not start building right away.",
          },
          {
            p: "Dues are mandatory for every owner. Sharing services across the community keeps each owner's cost down. Two examples from the community FAQ are front landscaping maintenance at about $25 per service per homeowner and hotspot internet at about $10 per month.",
          },
          {
            p: "Ask the sales team for the current monthly amount at each stage before you buy.",
          },
        ],
      },
      {
        h2: "Availability",
        blocks: [
          {
            p: "Ask the sales team for the current list of open lots. Availability changes as buyers reserve homesites and sign contracts, so the maps on this page show one moment in time.",
          },
          { p: "The lot maps use four colors:" },
          {
            ul: [
              "Sold",
              "Conditions apply",
              "Pending, meaning the lot is under contract and the deposit is not complete yet. Until the deposit arrives, a new buyer can still reserve it.",
              "Possible availability, meaning the lot may be open. Confirm it before you plan on it.",
            ],
          },
          {
            p: "Send the form below with the phase or lot numbers you want. The team will reply with what is open and the current price. If you are still comparing parts of town, [where to buy a lot in Brownsville](/blog/best-place-to-buy-a-lot-brownsville) covers what to check first.",
          },
          { contactForm: true },
        ],
      },
    ],
    faq: [
      {
        q: "Which lots are still available?",
        a: "Availability changes quickly as homesites are reserved or placed under contract. “Pending” lots are under contract but awaiting deposit completion. Because homesites are not fully secured until a deposit is received, pending lots may still be reserved by new buyers. Please confirm current availability with the sales team.",
      },
      {
        q: "Can I build on two lots?",
        a: "Apple Woods was intentionally designed so that most families can enjoy an exceptional lifestyle without needing oversized lots, while still providing flexibility for homeowners with unique architectural or space requirements.\n\nApple Woods was designed around the principle of quality over quantity, with thoughtfully planned individual homesites throughout the community. While combining two lots is not prohibited and may be permitted in select cases, smaller homesites were intentionally designed to accommodate homes that do not require larger construction areas and to offer a more budget-friendly option. When approved, additional architectural guidelines will apply, and modifications to the front entrance design may be required to maintain the community's overall cohesion and design standards.",
      },
      {
        q: "How big are the lots?",
        a: "Most homesites at Apple Woods are approximately 6,000 square feet, measuring 60 feet wide by 100 feet deep. Standard building setbacks are typically 25 feet from the front property line, 5 feet from each side property line, and 10 feet from the rear property line. These standards help maintain attractive streetscapes, privacy between homes, and a consistent neighborhood appearance.",
      },
      {
        q: "Do I pay dues on an empty lot?",
        a: "No. Apple Woods recognizes that lot owners may not begin construction right away. For that reason, a reduced dues structure applies during lot ownership, covering only basic maintenance and essential community services. Full community dues begin once a home has been built.",
      },
    ],
  },
  es: {
    slug: "terrenos",
    title: "Terrenos en venta en Brownsville, TX | Apple Woods",
    h1: "Terrenos residenciales en fraccionamiento privado en Brownsville",
    description:
      "Terrenos residenciales desde $85,000 en Apple Woods, fraccionamiento privado e inteligente en Brownsville, Texas. Mapas de Fase 1 y 2, precios, disponibilidad y reglas de construcción.",
    summary:
      "Apple Woods es un fraccionamiento privado con terrenos residenciales en Brownsville, Texas. La Fase 1 empieza en $85,000 USD, y los terrenos premier cerca de la casa club y el Water Walk planeados cuestan $95,000. La mayoría mide unos 6,000 pies cuadrados. Compra el terreno y construye tu casa con tu propio constructor, siguiendo los estándares de arquitectura de la comunidad. Aquí están los mapas y precios de las Fases 1 y 2, lo que incluye cada terreno, las cuotas y cómo pedir la lista de lotes disponibles.",
    heroAlt:
      "Representación de la entrada planeada del fraccionamiento privado Apple Woods, terrenos en venta en Brownsville, TX",
    sections: [
      {
        h2: "Fase 1: terrenos y precios",
        blocks: [
          {
            p: "En la Fase 1, el terreno estándar tiene un precio de lista de **$85,000** y el terreno premier de **$95,000**. Los terrenos en esquina, más grandes, tienen precio según su tamaño y ubicación. Son los precios públicos del desarrollador.",
          },
          {
            table: {
              head: ["Tipo de terreno", "Ubicación", "Precio de lista"],
              rows: [
                ["Estándar", "En toda la Fase 1, la mayoría de unos 6,000 pies cuadrados", "$85,000"],
                ["Premier", "Cerca de la casa club, el Water Walk y la alberca estilo resort planeados", "$95,000"],
                ["Esquina", "Terrenos más grandes o irregulares", "Según tamaño y ubicación"],
              ],
            },
          },
          {
            p: "La Fase 1 es el primer lanzamiento dentro de Apple Woods. El mapa marca cada terreno como vendido, pendiente o con posible disponibilidad. La lista de precios muestra cada terreno de la Fase 1 con su precio de venta sugerido y la oferta de lanzamiento del desarrollador.",
          },
          { phaseDocs: "phase-1" },
          {
            p: "Toca cualquiera de las dos imágenes para verla completa. El estado de cada terreno cambia conforme los compradores apartan, así que confirma con el equipo de ventas antes de hacer planes. Para darte una idea del tamaño, lee [qué tan grande es un terreno de 6,000 pies cuadrados](/es/blog/que-tan-grande-terreno-6000-pies).",
          },
        ],
      },
      {
        h2: "Fase 2",
        blocks: [
          {
            p: "La Fase 2 tiene **77 terrenos**. Con la oferta del desarrollador que aparece en la lista de la Fase 2, los primeros 20 terrenos no pagan la cuota de Integración Comunitaria (CIC).",
          },
          {
            p: "La CIC cubre lo que hace que cada casa se integre con el resto del fraccionamiento, como bardas y buzones estandarizados, instalación de césped, riego y acabados decorativos en banquetas. Pregunta al equipo de ventas cómo aplica la oferta al terreno que te interesa.",
          },
          {
            p: "La lista de la Fase 2 muestra el precio de venta sugerido por el desarrollador para cada terreno. No trae columna de oferta de lanzamiento como la de la Fase 1. Si un terreno no tiene precio en la lista, pídelo al equipo de ventas.",
          },
          { phaseDocs: "phase-2" },
          {
            p: "Se espera que la Fase 1 tenga los precios de lanzamiento más bajos de Apple Woods. Conforme se vendan los terrenos, se espera que las siguientes fases suban de precio.",
          },
        ],
      },
      {
        h2: "Qué incluye cada terreno",
        blocks: [
          {
            p: "Cada terreno te da entrada a toda la comunidad planeada, no solo a la tierra. Apple Woods contará con estos sistemas y amenidades conforme avance la obra. Hoy están planeados, y las imágenes de este sitio son representaciones del proyecto.",
          },
          {
            ul: [
              "Entrada con acceso controlado",
              "Cámaras de seguridad en las áreas comunes",
              "Iluminación y riego inteligentes",
              "Medidas preventivas contra inundaciones",
              "Casa club",
              "Alberca estilo resort",
              "Gimnasio",
              "El Water Walk, un paseo peatonal con elementos de agua y jardines",
            ],
          },
          {
            p: "Los propietarios comparten el costo de estas amenidades, y así la comunidad planea mantener cuotas accesibles. Si quieres comparar un fraccionamiento privado con una colonia abierta, lee [fraccionamiento privado vs colonia abierta](/es/blog/fraccionamiento-privado-vs-colonia-abierta).",
          },
        ],
      },
      {
        h2: "Construye tu casa",
        blocks: [
          {
            p: "En Apple Woods construyes tu casa con tu propio constructor. Las casas van desde unos 1,600 pies cuadrados de área habitable hasta un máximo de 3,250 pies cuadrados por nivel, con hasta tres niveles.",
          },
          {
            p: "Cada diseño pasa por una revisión arquitectónica antes de construir. Los estándares de la comunidad cubren el tamaño de la casa, el diseño arquitectónico, la jardinería, el mantenimiento exterior, la iluminación, el ruido, los colores y lo que se guarda afuera. Una casa sencilla y una grande pueden estar en la misma calle porque las dos cumplen las mismas reglas de imagen.",
          },
          {
            p: "La mayoría de los terrenos mide unos 60 pies de frente por 100 pies de fondo. Los retiros estándar son de unos 25 pies al frente, 5 pies de cada lado y 10 pies atrás.",
          },
          {
            p: "Lee la respuesta completa a [¿Cuáles son las restricciones?](/es#faq-shared-standards) o pide al equipo de ventas la lista completa de estándares antes de contratar a tu constructor.",
          },
        ],
      },
      {
        h2: "Cuotas mientras solo tienes el terreno",
        blocks: [
          {
            p: "Mientras solo tienes el terreno pagas cuotas reducidas, y las cuotas completas empiezan cuando la casa ya está construida. Las cuotas reducidas cubren el mantenimiento básico y los servicios comunitarios esenciales, porque muchos propietarios no empiezan a construir de inmediato.",
          },
          {
            p: "Las cuotas son obligatorias para todos los propietarios. Al compartir los servicios, cada uno paga menos. Dos ejemplos de las preguntas frecuentes son el mantenimiento de la jardinería frontal, de unos $25 por servicio por propietario, y el internet tipo hotspot, de unos $10 al mes.",
          },
          {
            p: "Pregunta al equipo de ventas el monto mensual actual de cada etapa antes de comprar.",
          },
        ],
      },
      {
        h2: "Disponibilidad",
        blocks: [
          {
            p: "Pide al equipo de ventas la lista actual de terrenos disponibles. La disponibilidad cambia conforme los compradores apartan y firman contrato, así que los mapas de esta página muestran un solo momento.",
          },
          { p: "Los mapas usan cuatro colores:" },
          {
            ul: [
              "Vendido",
              "Aplican condiciones",
              "Pendiente, es decir, bajo contrato y sin el depósito completo. Mientras no llegue el depósito, otro comprador todavía lo puede apartar.",
              "Posible disponibilidad, es decir, el terreno podría estar libre. Confírmalo antes de hacer planes.",
            ],
          },
          {
            p: "Manda el formulario con la fase o los números de terreno que te interesan. El equipo te responde con lo que está disponible y el precio actual. Si todavía estás comparando zonas, [dónde comprar terreno en Brownsville](/es/blog/donde-comprar-terreno-brownsville) explica qué revisar primero.",
          },
          { contactForm: true },
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué terrenos aún están disponibles?",
        a: "La disponibilidad cambia rápidamente a medida que los terrenos son reservados o se colocan bajo contrato. Los terrenos en estado “pendiente” se encuentran bajo contrato, pero a la espera de la confirmación del depósito. Debido a que los terrenos no se consideran totalmente asegurados hasta que se recibe el depósito, los terrenos pendientes aún pueden ser reservados por nuevos compradores. Por favor, confirme la disponibilidad actual con el equipo de ventas.",
      },
      {
        q: "¿Pudiese construir en dos terrenos?",
        a: "Apple Woods fue diseñado deliberadamente para que la mayoría de las familias puedan disfrutar de un estilo de vida excepcional sin necesidad de parcelas de gran tamaño, ofreciendo al mismo tiempo flexibilidad a los propietarios con necesidades arquitectónicas o de espacio particulares.\n\nApple Woods fue diseñado bajo el principio de calidad sobre cantidad, con terrenos residenciales cuidadosamente planificados a lo largo de la comunidad. Si bien la combinación de dos terrenos no está prohibida y puede permitirse en casos específicos, los terrenos más pequeños fueron diseñados intencionalmente para adaptarse a viviendas que no requieren grandes áreas de construcción, además de ofrecer una opción más accesible.\n\nCuando se aprueban este tipo de modificaciones, se aplicarán lineamientos arquitectónicos adicionales y, en algunos casos, podrán requerirse ajustes en el diseño de la fachada frontal para mantener la cohesión general y los estándares de diseño del fraccionamiento.",
      },
      {
        q: "¿Qué tan grandes son los terrenos?",
        a: "La mayoría de los terrenos en Apple Woods tienen aproximadamente 6,000 pies cuadrados, con medidas de 60 pies de frente por 100 pies de fondo. Los retiros de construcción estándar son generalmente de 25 pies desde la línea frontal del terreno, 5 pies desde cada línea lateral y 10 pies desde la línea posterior. Estos lineamientos ayudan a mantener calles visualmente atractivas, privacidad entre viviendas y una apariencia uniforme dentro del fraccionamiento.",
      },
      {
        q: "¿Pago cuotas si solo tengo el terreno?",
        a: "No. Apple Woods reconoce que los propietarios de terrenos pueden no iniciar la construcción de inmediato. Por esta razón, durante la etapa de propiedad del terreno se aplica una estructura reducida de cuotas, que cubre únicamente el mantenimiento básico y los servicios comunitarios esenciales. Las cuotas completas de la comunidad comienzan una vez que la vivienda ha sido construida.",
      },
    ],
  },
};
