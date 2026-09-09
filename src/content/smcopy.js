// SM copy — the CURRENT site strings, moved verbatim from main.jsx.
// This is the "smcopy" content fork. client.js clones this and overrides copy.
// Translatable strings are { en, es } leaves resolved by localize() in content/index.jsx.
// Spanish source: docs/applewoods-spanish-copy-source.md (client Google Doc tab t.7fzpcif20wvo).
// Strategy: use the client's doc Spanish verbatim where it exists; direct-translate the gaps.
// Plain strings (brand, image paths, hrefs, icons, select values, phone/email, copyright) are not translated.

// FAQ entries introduced in the client's 2026-06 copy doc. These have no smcopy-optimized
// variant — both versions use the client's copy verbatim, so they are shared here and
// referenced by both content files. Paragraph breaks are encoded as \n\n (rendered as <p>s).
export const faqDocItems = {
  fillDirt: {
    question: {
      en: "Lots seem low and flood prone, do I have to add fill dirt?",
      es: "Los terrenos parecen bajos y propensos a inundaciones, ¿tengo que agregar relleno?",
    },
    answer: {
      en: "No. Apple Woods is not located in a flood-risk area, and the lots were carefully engineered as part of the community's drainage and safety design.\n\nAs an added precaution, the streets throughout Apple Woods were elevated substantially to provide an extra layer of flood protection during severe or unpredictable weather events. This thoughtful planning helps improve water management and gives homeowners greater peace of mind during heavy rains.\n\nAs part of the home construction process, homeowners will add the appropriate fill dirt and grading required for their individual home site.",
      es: "No. Apple Woods no se encuentra ubicado en una zona de riesgo de inundación, y los terrenos fueron cuidadosamente diseñados como parte del sistema general de drenaje y seguridad de la comunidad.\n\nComo medida adicional de protección, las calles dentro de Apple Woods fueron elevadas sustancialmente para proporcionar una capa extra de seguridad durante eventos climáticos severos o impredecibles. Esta planificación ayuda a mejorar el manejo pluvial y brinda mayor tranquilidad a los propietarios durante temporadas de lluvias intensas.\n\nComo parte del proceso de construcción de la vivienda, cada propietario agregará el relleno y nivelación necesarios de acuerdo con las características específicas de su terreno y diseño residencial.",
    },
  },
  traditional: {
    question: {
      // No doc Spanish for this question — natural-local translation.
      en: "What makes Apple Woods different from a traditional subdivision?",
      es: "¿Qué hace diferente a Apple Woods de un fraccionamiento tradicional?",
    },
    answer: {
      en: "Apple Woods is more than a collection of homes and lots — it is a lifestyle-driven community designed around smart living, wellness, connectivity, and a strong sense of belonging.\n\nDeveloped by PARK STREET, Apple Woods was created as an innovative residential concept that combines thoughtful planning, green spaces, technology, and shared amenities to simplify daily life and enhance both physical and mental well-being. The community is designed to encourage interaction, outdoor activity, and meaningful connections among neighbors and families.\n\nBy leveraging smart design, economies of scale, and structured community planning, Apple Woods offers residents access to attractive common areas, recreational spaces, and lifestyle-enhancing services in a way that is both efficient and sustainable.\n\nPlanned in phases, Apple Woods represents an ambitious vision for the future of residential living in Brownsville — a community designed not only for where people live, but for how they live.",
      es: "Apple Woods es mucho más que una colección de casas y terrenos; es una comunidad orientada al estilo de vida, diseñada alrededor de la vida inteligente, el bienestar, la conectividad y un fuerte sentido de pertenencia.\n\nDesarrollado por PARK STREET, Apple Woods fue creado como un concepto residencial innovador que combina planeación cuidadosa, áreas verdes, tecnología y amenidades compartidas para simplificar la vida diaria y mejorar tanto el bienestar físico como mental. La comunidad está diseñada para fomentar la convivencia, la actividad al aire libre y las conexiones significativas entre vecinos y familias.\n\nA través de un diseño inteligente, economías de escala y una planeación comunitaria estructurada, Apple Woods ofrece a sus residentes acceso a atractivas áreas comunes, espacios recreativos y servicios que enriquecen el estilo de vida de manera eficiente y sostenible.\n\nDesarrollado por etapas, Apple Woods representa una visión ambiciosa para el futuro de la vida residencial en Brownsville: una comunidad diseñada no solo para el lugar donde las personas viven, sino para la manera en que viven.",
    },
  },
  fountainsTech: {
    question: {
      en: "Why don't other communities offer the same level of fountains, technology, and integrated features as Apple Woods?",
      es: "¿Por qué otras comunidades no ofrecen el mismo nivel de fuentes, tecnología y características integradas que Apple Woods?",
    },
    answer: {
      en: "Apple Woods is unique because it was created by PARK STREET — a company with decades of experience in technology, hospitality, and real estate development. Since 1993, PARK STREET has developed technology solutions for the hospitality industry, including designing, engineering, manufacturing, and programming many of its own systems and equipment in-house.\n\nSince 2014, the company has also expanded into real estate, focusing on creating clean, well-maintained housing communities with long-term vision and efficiency in mind.\n\nApple Woods represents the merging of all that experience into one signature project. Because PARK STREET conceptualizes, designs, builds, programs, and maintains much of the technology internally — without relying heavily on third-party vendors or middlemen — the community can offer advanced features, beautiful water elements, and smart infrastructure at a level of quality and affordability that is difficult for traditional developments to match.\n\nThe result is a community designed not only to look impressive, but to function efficiently, remain maintainable long-term, and create a lasting sense of beauty, innovation, and pride for residents.",
      es: "Apple Woods es único porque fue creado por PARK STREET, una empresa con décadas de experiencia en tecnología, hospitalidad y desarrollo inmobiliario. Desde 1993, PARK STREET ha desarrollado soluciones tecnológicas para la industria hotelera, incluyendo el diseño, ingeniería, fabricación y programación interna de muchos de sus propios sistemas y equipos.\n\nDesde 2014, la empresa también se ha expandido al sector inmobiliario, enfocándose en crear comunidades residenciales limpias, bien mantenidas y desarrolladas con una visión de largo plazo y eficiencia.\n\nApple Woods representa la integración de toda esa experiencia en un proyecto distintivo. Debido a que PARK STREET conceptualiza, diseña, construye, programa y mantiene internamente gran parte de la tecnología — sin depender excesivamente de terceros o intermediarios — la comunidad puede ofrecer funciones avanzadas, hermosos elementos acuáticos e infraestructura inteligente con un nivel de calidad y accesibilidad difícil de igualar en desarrollos tradicionales.\n\nEl resultado es una comunidad diseñada no solo para verse impresionante, sino también para funcionar eficientemente, mantenerse de forma sostenible a largo plazo y crear un sentido duradero de belleza, innovación y orgullo para sus residentes.",
    },
  },
  cic: {
    question: {
      en: "After purchasing my lot, are there additional costs besides fill dirt?",
      es: "Después de comprar el terreno, ¿habrá costos adicionales más allá del relleno?",
    },
    answer: {
      en: "Yes. Apple Woods requires a Community Integration Cost (CIC) fee, designed to help each home blend harmoniously with the overall beauty, quality, and functionality of the community.\n\nRather than being an additional expense, the CIC represents an investment in features that, in many cases, homeowners would likely pay for individually anyway. The difference is that Apple Woods coordinates and standardizes these improvements to ensure consistency, quality, and a cohesive appearance throughout the entire community.\n\nThese improvements include items such as community connectivity, standardized fencing and mailboxes, quality grass installation, irrigation assurance, decorative sidewalk finishes, and other features intended to preserve the appearance, functionality, and long-term value of Apple Woods.",
      es: "Sí. Apple Woods requiere una cuota de Integración Comunitaria (CIC), diseñada para ayudar a que cada vivienda se integre armoniosamente con la belleza, calidad y funcionalidad general del fraccionamiento.\n\nMás que un gasto adicional, la cuota CIC representa una inversión en elementos que, en muchos casos, los propietarios tendrían que realizar individualmente de cualquier manera. La diferencia es que Apple Woods coordina y estandariza estas mejoras para asegurar uniformidad, calidad y una apariencia armónica en toda la comunidad.\n\nEstas mejoras incluyen elementos como conectividad comunitaria, bardas y buzones estandarizados, instalación de césped de calidad, aseguramiento de riego, acabados decorativos en banquetas y otras características destinadas a preservar la imagen, funcionalidad y valor a largo plazo de Apple Woods.",
    },
  },
  saveMoney: {
    question: {
      en: "Why can living in Apple Woods help save money compared to living elsewhere?",
      es: "¿Por qué vivir en Apple Woods podría ayudarme a ahorrar dinero comparado con otros lugares?",
    },
    answer: {
      en: "In Brownsville, property taxes are largely influenced by the size which determines the value of your home. At Apple Woods, homeowners can focus their budget on the spaces and features their family truly needs, without carrying the added construction, maintenance, and tax burden of oversized private amenities such as game rooms, home theaters, pools, or large gyms.\n\nInstead, Apple Woods is designed around thoughtfully planned community gathering areas and shared amenities that provide residents with access to more activities and experiences — while helping reduce individual ownership and upkeep costs. The result is a smarter, more efficient lifestyle that can help homeowners save on construction, maintenance, utilities, and long-term property taxes.",
      es: "En Brownsville, los impuestos sobre la propiedad están influenciados en gran medida por el tamaño con lo que determinan el valor de la propiedad. En Apple Woods, los propietarios pueden enfocar su presupuesto en los espacios y características que realmente necesita su familia, sin asumir la carga adicional de construcción, mantenimiento e impuestos que suelen implicar amenidades privadas de gran tamaño, como salas de juegos, cines en casa, albercas o gimnasios amplios.\n\nEn lugar de ello, Apple Woods ha sido diseñado alrededor de áreas comunitarias de convivencia y amenidades compartidas cuidadosamente planificadas, que brindan a los residentes acceso a más actividades y experiencias, al mismo tiempo que ayudan a reducir los costos individuales de propiedad y mantenimiento.\n\nEl resultado es un estilo de vida más inteligente y eficiente, que puede ayudar a los propietarios a ahorrar en construcción, mantenimiento, servicios y costos fiscales a largo plazo.",
    },
  },
  propertyValue: {
    question: {
      // No doc Spanish for this question — natural-local translation.
      en: "How does Apple Woods help protect my property value and long-term investment?",
      es: "¿Cómo ayuda Apple Woods a proteger el valor de mi propiedad y mi inversión a largo plazo?",
    },
    answer: {
      en: "Apple Woods is designed around the principles of safety, organization, and long-term community planning. Through maintained common areas, thoughtful community standards, controlled access, lighting, technology, and neighborhood oversight, the community creates an environment that promotes stability, pride of ownership, and lasting appeal.\n\nA clean, secure, and well-structured neighborhood not only provides peace of mind for residents, but also helps protect the beauty, desirability, and long-term value of every home within Apple Woods.",
      es: "Apple Woods está diseñado bajo los principios de seguridad, organización y planeación comunitaria a largo plazo. A través de áreas comunes cuidadosamente mantenidas, lineamientos comunitarios bien definidos, accesos controlados, iluminación, tecnología y supervisión del fraccionamiento, la comunidad crea un entorno que promueve estabilidad, orgullo de pertenencia y atractivo duradero.\n\nUn fraccionamiento limpio, seguro y bien estructurado no solo brinda tranquilidad a sus residentes, sino que también ayuda a proteger la belleza, el atractivo y el valor a largo plazo de cada vivienda dentro de Apple Woods.",
    },
  },
  petBags: {
    question: {
      en: "Will there be petbags available for homeowners?",
      es: "¿Habrá bolsas para deshechos de mascotas disponibles para los propietarios?",
    },
    answer: {
      en: "Yes. Trash bins and pet waste bag stations will be placed throughout the subdivision, including at key corners and common areas. The cost for these amenities will be shared only among pet owners and will not affect homeowners without pets.\n\nTo help maintain the beauty, cleanliness, and landscaping of Apple Woods, pet owners will be required to clean up after their pets at all times.",
      es: "Sí. Habrá estaciones con botes de basura y bolsas para desechos de mascotas distribuidas estratégicamente a lo largo del fraccionamiento, incluyendo esquinas principales y áreas comunes. El costo de estas amenidades será compartido únicamente entre los propietarios con mascotas y no afectará a los residentes que no tengan mascotas.\n\nPara ayudar a mantener la belleza, la limpieza y la jardinería de Apple Woods, los propietarios de mascotas deberán recoger y desechar adecuadamente los residuos de sus mascotas en todo momento.",
    },
  },
  guests: {
    question: {
      en: "Will I be able to bring friends and family members to the clubhouse or other activities?",
      es: "¿Tendré la oportunidad de invitar a amigos y familiares a la casa club u otras actividades?",
    },
    answer: {
      en: "Yes. Apple Woods will offer reasonable flexibility for homeowners to invite friends and family members to enjoy certain clubhouse amenities through guest access and visitor passes, depending on the specific facilities and usage policies.\n\nUse of common areas and amenities will always be subject to availability, scheduling, and community guidelines. To ensure residents enjoy full access to their neighborhood amenities, Apple Woods homeowners will always receive priority use of the facilities.",
      es: "Sí. Apple Woods ofrecerá una flexibilidad razonable para que los propietarios puedan invitar a amigos y familiares a disfrutar de ciertas amenidades de la casa club mediante accesos para invitados y pases de visitante, dependiendo de las instalaciones específicas y las políticas de uso aplicables.\n\nEl uso de las áreas comunes y amenidades estará siempre sujeto a disponibilidad, programación y lineamientos comunitarios. Para garantizar que los residentes disfruten plenamente de las amenidades del fraccionamiento, los propietarios de Apple Woods siempre tendrán prioridad en el uso de las instalaciones.",
    },
  },
  fruitTrees: {
    question: {
      en: "Can anyone enter my yard and pick fruit from my tree?",
      es: "¿Cualquiera puede meterse a mi jardín y tomar frutos de mi árbol?",
    },
    answer: {
      en: "No. Each fruit tree belongs to the homeowner and remains part of their private property. The orchard-style design at Apple Woods is intended to create a greener, healthier, and more sustainable community while helping reduce our environmental footprint.\n\nAll trees will be professionally maintained and regularly harvested to keep the community clean, beautiful, and enjoyable year-round. Fresh fruit may also be incorporated into complimentary morning fruit salads and select community desserts for homeowners — turning the orchard experience into a shared lifestyle benefit for the entire neighborhood.",
      es: "No. Cada árbol frutal pertenece al propietario y forma parte de su propiedad privada. El diseño estilo huerto de Apple Woods tiene como propósito crear una comunidad más verde, saludable y sostenible, al mismo tiempo que ayuda a reducir el impacto ambiental.\n\nTodos los árboles recibirán mantenimiento profesional y serán cosechados regularmente para mantener el fraccionamiento limpio, hermoso y agradable durante todo el año. La fruta fresca también podrá incorporarse en ensaladas matutinas de cortesía y en ciertos postres comunitarios para los propietarios, convirtiendo la experiencia del huerto en un beneficio compartido para toda la comunidad.",
    },
  },
  exclusive: {
    question: {
      en: "Why is Apple Woods considered an exclusive community?",
      es: "¿Por qué se considera a Apple Woods como una comunidad exclusiva?",
    },
    answer: {
      en: "Apple Woods is designed for homeowners who value a clean, healthy, and beautifully maintained environment. Exclusivity at Apple Woods is not about limiting people — it is about creating a community of like-minded residents who share pride in where they live and appreciate high standards of appearance, care, and quality of life.\n\nCommunity guidelines help preserve the neighborhood's beauty by encouraging well-maintained homes, landscaped lawns, organized outdoor spaces, and a welcoming atmosphere for everyone. The result is a peaceful, attractive, and harmonious community where residents can enjoy long-term value, comfort, and pride of ownership.",
      es: "Apple Woods está diseñado para propietarios que valoran un entorno limpio, saludable y bellamente mantenido. La exclusividad en Apple Woods no se trata de limitar a las personas, sino de crear una comunidad de residentes con valores similares, que comparten orgullo por el lugar donde viven y aprecian altos estándares de imagen, cuidado y calidad de vida.\n\nLos lineamientos comunitarios ayudan a preservar la belleza del fraccionamiento al fomentar viviendas bien mantenidas, jardines cuidados, espacios exteriores organizados y un ambiente agradable para todos. El resultado es una comunidad tranquila, atractiva y armónica, donde los residentes pueden disfrutar de valor a largo plazo, comodidad y orgullo de pertenencia.",
    },
  },
  smartLiving: {
    question: {
      en: "What do you mean by “Smart Living” or “Structured Living” at Apple Woods?",
      es: "¿Qué significa “Vivir inteligente” o de forma “estructurada”?",
    },
    answer: {
      en: "At Apple Woods, “Smart Living” and “Structured Living” represent a thoughtful approach to community design — one where beauty, comfort, convenience, and peace of mind are achieved through planning, organization, and shared vision.\n\nWe believe luxury does not have to mean excess or unnecessary expense. By working together as a community with common goals, residents can enjoy access to attractive amenities, beautiful surroundings, recreational spaces, environmental features, and a higher quality lifestyle in a more efficient and affordable way.\n\nStructured living means maintaining standards that protect the appearance, value, and harmony of the neighborhood. Smart living means creating a community where thoughtful design, shared resources, sustainability, and long-term planning allow homeowners to enjoy more while carrying less individual burden.\n\nThe result is a cleaner, safer, more connected, and more enjoyable place to live — designed for people who value both quality of life and smart investment.",
      es: "En Apple Woods, “Vida Inteligente” y “Vida Estructurada” representan una visión cuidadosamente pensada sobre cómo debe diseñarse una comunidad: un lugar donde la belleza, la comodidad, la conveniencia y la tranquilidad se logran a través de la planeación, la organización y una visión compartida.\n\nCreemos que el lujo no tiene que significar excesos ni gastos innecesarios. Al trabajar juntos como comunidad con objetivos en común, los residentes pueden disfrutar de amenidades atractivas, hermosos espacios exteriores, áreas recreativas, elementos naturales y una mejor calidad de vida de una manera más eficiente y accesible.\n\nLa vida estructurada significa mantener estándares que protejan la imagen, el valor y la armonía del fraccionamiento. La vida inteligente significa crear una comunidad donde el diseño cuidadoso, los recursos compartidos, la sostenibilidad y la planeación a largo plazo permitan a los propietarios disfrutar de más beneficios, mientras reducen cargas individuales innecesarias.\n\nEl resultado es un lugar más limpio, seguro, conectado y agradable para vivir, diseñado para personas que valoran tanto la calidad de vida como una inversión inteligente.",
    },
  },
  orchard: {
    question: {
      en: "How is Apple Woods designed as a community orchard?",
      es: "¿Cómo es que Apple Woods se relaciona con un huerto?",
    },
    answer: {
      en: "Apple Woods was created with the vision of blending residential living with nature and sustainability. Every home will include at least one fruit tree connected to the name of its street, creating a true orchard-inspired community experience.\n\nThe neighborhood streets are named after fruits such as Apple, Mango, Orange, Tangerine, Plum, Pear, Peach, and Passion Fruit, and homeowners will enjoy trees that reflect those themes throughout the community.\n\nIn addition, Apple Woods will feature a variety of other climate-adaptable fruit trees, including avocados, bananas, guayabas, limes, peaches, and more. Together, these trees help create a greener environment, provide natural beauty and shade, support sustainability efforts, and give the neighborhood its unique character and identity.",
      es: "Apple Woods fue creado con la visión de combinar la vida residencial con la naturaleza y la sostenibilidad. Cada vivienda incluirá al menos un árbol frutal relacionado con el nombre de su calle, creando una verdadera experiencia comunitaria inspirada en un huerto.\n\nLas calles del fraccionamiento llevan nombres de frutas como Manzana, Mango, Naranja, Mandarina, Ciruela, Pera, Durazno y otras, y los propietarios podrán disfrutar de árboles que reflejan estas temáticas a lo largo de toda la comunidad.\n\nAdemás, Apple Woods contará con una variedad adicional de árboles frutales adaptables al clima de la región, incluyendo aguacates, plátanos, guayabas, limones, duraznos y otros más. En conjunto, estos árboles ayudan a crear un entorno más verde, proporcionan belleza natural y sombra, apoyan los esfuerzos de sostenibilidad y otorgan al fraccionamiento un carácter e identidad únicos.",
    },
  },
  securityGuard: {
    question: {
      en: "Will Apple Woods have a security guard at the entrance?",
      es: "¿Tendrá Apple Woods caseta de seguridad en la entrada?",
    },
    answer: {
      en: "Apple Woods is designed with a modern, community-centered approach to safety. While there may not be traditional security guards stationed at the gate, the neighborhood will feature 24/7 CCTV monitoring throughout the community, including entrances, streets, playgrounds, and common areas.\n\nThe subdivision will be fully enclosed with perimeter fencing and walls, well-lit throughout the evening, and equipped with controlled access gates designed for residents and authorized guests only. Entry systems will help track vehicles, license plates, and visitor access to enhance awareness and security within the community.\n\nBeyond technology and infrastructure, Apple Woods is built around the idea that a connected community creates a safer environment. Residents who take pride in their neighborhood naturally help look after one another, creating a welcoming and secure atmosphere where families can feel comfortable, active, and at peace.",
      es: "Apple Woods está diseñado con un enfoque moderno y comunitario hacia la seguridad. Aunque puede no haber guardias de seguridad tradicionales estacionados en la entrada, la comunidad contará con monitoreo CCTV las 24 horas del día en todo el fraccionamiento, incluyendo accesos, calles, áreas de juegos y espacios comunes.\n\nEl fraccionamiento estará completamente cerrado con bardas y cercado perimetral, contará con iluminación nocturna en toda la comunidad y tendrá accesos controlados diseñados exclusivamente para residentes e invitados autorizados. Los sistemas de acceso ayudarán a monitorear vehículos, placas y entradas de visitantes para fortalecer la seguridad y el control dentro de la comunidad.\n\nMás allá de la tecnología y la infraestructura, Apple Woods está basado en la idea de que una comunidad conectada crea un entorno más seguro. Los residentes que sienten orgullo por su comunidad naturalmente se apoyan y cuidan unos a otros, creando un ambiente agradable y seguro donde las familias pueden sentirse cómodas, activas y tranquilas.",
    },
  },
  noise: {
    question: {
      en: "Will Apple Woods be noisy because of community activities?",
      es: "¿Será ruidoso Apple Woods debido a las actividades comunitarias?",
    },
    answer: {
      en: "Apple Woods is designed as an active, wellness-oriented community that encourages residents to enjoy events, recreation, and social interaction in a balanced and organized environment.\n\nThe neighborhood was thoughtfully planned with designated activity zones, allowing livelier areas such as the clubhouse, dog park, and community facilities to remain separated from quieter residential sections. Townhome areas and certain home sites are intentionally located within lower-noise zones to provide a more peaceful setting.\n\nCommunity activities and events will follow scheduling and sound guidelines to help maintain comfort and harmony throughout the neighborhood. Whether you prefer a quieter atmosphere or a more socially active lifestyle, Apple Woods offers a variety of home locations designed to fit different lifestyles and preferences.",
      es: "Apple Woods está diseñado como una comunidad activa y orientada al bienestar, que fomenta que los residentes disfruten eventos, recreación y convivencia social dentro de un entorno equilibrado y organizado.\n\nEl fraccionamiento fue cuidadosamente planeado con zonas de actividad definidas, permitiendo que las áreas más dinámicas — como la casa club, el parque para mascotas y las instalaciones comunitarias — permanezcan separadas de las secciones residenciales más tranquilas. Las áreas de townhomes y ciertos terrenos residenciales están ubicados intencionalmente dentro de zonas de menor ruido para ofrecer un ambiente más pacífico.\n\nLas actividades y eventos comunitarios seguirán horarios y lineamientos de sonido diseñados para mantener la comodidad y armonía dentro del fraccionamiento. Ya sea que prefiera un ambiente más tranquilo o un estilo de vida más social y activo, Apple Woods ofrece distintas ubicaciones residenciales diseñadas para adaptarse a diferentes estilos de vida y preferencias.",
    },
  },
  reading: {
    question: {
      en: "I enjoy reading and relaxing quietly. Will Apple Woods offer calm reading areas?",
      es: "Disfruto leer y relajarme en tranquilidad. ¿Apple Woods ofrecerá áreas tranquilas para lectura y descanso?",
    },
    answer: {
      en: "Yes. Apple Woods is designed to provide spaces for both activity and relaxation. Residents will enjoy outdoor shaded seating areas surrounded by beautiful landscaping and soothing water features, creating peaceful places to read, unwind, or simply enjoy nature.\n\nFor those who prefer an indoor setting, Apple Woods will also offer a climate-controlled, quiet library environment where residents can relax, enjoy refreshments, read comfortably, or even borrow a book to take home.",
      es: "Sí. Apple Woods está diseñado para ofrecer espacios tanto para la actividad como para la relajación. Los residentes podrán disfrutar de áreas exteriores con sombra, rodeadas de hermosa jardinería y relajantes elementos acuáticos, creando lugares tranquilos ideales para leer, descansar o simplemente disfrutar de la naturaleza.\n\nPara quienes prefieren un ambiente interior, Apple Woods también ofrecerá una biblioteca tranquila con clima controlado, donde los residentes podrán relajarse, disfrutar de bebidas y refrigerios, leer cómodamente o incluso tomar prestado un libro para llevar a casa.",
    },
  },
  outdoorSpaces: {
    question: {
      en: "I enjoy caring for my yard and have pets. How does Apple Woods handle personal outdoor spaces?",
      es: "Disfruto cuidar mi jardín y tengo mascotas. ¿Cómo maneja Apple Woods los espacios exteriores personales?",
    },
    answer: {
      en: "Apple Woods encourages homeowners to personalize and enjoy their outdoor living spaces while maintaining a beautiful and cohesive community appearance.\n\nCommunity standards primarily focus on the front yard and visible exterior areas to help preserve the neighborhood's overall beauty and property values. Backyard spaces offer homeowners much greater flexibility and privacy. As long as activities, pets, or outdoor features do not create a nuisance or negatively impact neighboring homes, residents are free to enjoy and maintain their private outdoor areas according to their own lifestyle and preferences.",
      es: "Apple Woods anima a los propietarios a personalizar y disfrutar sus espacios exteriores, mientras se mantiene una apariencia hermosa y armónica en toda la comunidad.\n\nLos lineamientos comunitarios se enfocan principalmente en los jardines frontales y las áreas exteriores visibles, con el objetivo de preservar la belleza general del fraccionamiento y el valor de las propiedades. Las áreas posteriores de las viviendas ofrecen mucha mayor flexibilidad y privacidad.\n\nSiempre que las actividades, mascotas o elementos exteriores no generen molestias ni afecten negativamente a las viviendas vecinas, los residentes tienen la libertad de disfrutar y mantener sus espacios privados de acuerdo con su propio estilo de vida y preferencias.",
    },
  },
  trashService: {
    question: {
      en: "If I have pets and want to use the optional trash can pull-out service, how do you help keep my pets safe?",
      es: "Si tengo mascotas y deseo utilizar el servicio opcional para sacar y regresar los botes de basura, ¿cómo ayuda Apple Woods a mantener seguras a mis mascotas?",
    },
    answer: {
      en: "For homeowners with pets who choose the optional trash can pull-out service, Apple Woods will require a secure barrier system to help prevent pets from accidentally leaving the yard during trash collection.\n\nHomeowners may install their own approved barrier, or Apple Woods can provide a personalized solution designed to match the appearance and style of the community fencing. These systems are intended to create a safe, separated access area for trash collection while helping protect your pets and maintain the neighborhood's clean, cohesive look.",
      es: "Para los propietarios con mascotas que decidan utilizar el servicio opcional de sacar y regresar los botes de basura, Apple Woods requerirá un sistema de barrera segura diseñado para ayudar a evitar que las mascotas salgan accidentalmente del patio durante la recolección de basura.\n\nLos propietarios podrán instalar su propia barrera aprobada, o Apple Woods podrá ofrecer una solución personalizada diseñada para integrarse con la apariencia y el estilo del cercado comunitario. Estos sistemas están pensados para crear un área de acceso separada y segura para el manejo de basura, mientras ayudan a proteger a las mascotas y mantener la imagen limpia y armónica del fraccionamiento.",
    },
  },
  // New doc FAQ section (2026-06-14 client comments doc): Restrictions + Life.
  // Restrictions additions (client FAQ doc 2026-06-19) — verbatim EN + ES from the doc.
  vehicleWork: {
    question: {
      en: "I enjoy working on my vehicles, woodworking, and other hands-on projects. Are there any restrictions?",
      es: "Disfruto trabajar en mis vehículos, hacer carpintería y realizar otros proyectos manuales. ¿Existen restricciones?",
    },
    answer: {
      en: "Absolutely. Many homeowners enjoy automotive work, woodworking, crafts, and other hands-on hobbies. If you anticipate spending significant time on these activities, we encourage you to design your home with a workshop, oversized garage, or climate-controlled work area so you can enjoy your hobbies comfortably year-round.\n\nTo help maintain the attractive appearance of the community and protect property values for all residents, outdoor storage of inoperable vehicles, prolonged vehicle repairs in driveways, and projects that create a visibly unfinished appearance from the street are not permitted.\n\nApple Woods is designed to balance personal freedom with a clean, welcoming environment that everyone can enjoy. These community standards help ensure that every homeowner can take pride in the appearance of the neighborhood while still enjoying their personal interests and hobbies.",
      es: "Por supuesto. Muchos propietarios disfrutan trabajar en sus vehículos, realizar proyectos de carpintería, manualidades y otras actividades prácticas. Si prevé dedicar una cantidad significativa de tiempo a estos pasatiempos, le recomendamos diseñar su hogar con un taller, un garaje ampliado o un área de trabajo climatizada para que pueda disfrutarlos cómodamente durante todo el año.\n\nPara ayudar a mantener la apariencia atractiva de la comunidad y proteger el valor de las propiedades de todos los residentes, no se permite el almacenamiento exterior de vehículos inoperables, las reparaciones prolongadas de vehículos en las entradas de las viviendas ni los proyectos que generen una apariencia descuidada o inconclusa visible desde la calle.\n\nApple Woods ha sido diseñado para lograr un equilibrio entre la libertad personal y un entorno limpio, ordenado y agradable para todos. Estas normas comunitarias ayudan a garantizar que cada propietario pueda sentirse orgulloso de la apariencia del vecindario mientras disfruta de sus intereses y pasatiempos personales.",
    },
  },
  garageEntertaining: {
    question: {
      en: "I enjoy entertaining friends and family and would like to keep items such as sofas, chairs, a billiard table, televisions, and grilling equipment in my garage so we can open the garage, play music, and socialize. Is that allowed?",
      es: "Disfruto recibir a mis amigos y familiares y me gustaría tener sofás, sillas, una mesa de billar, televisores y equipo para asar en mi garaje para poder abrirlo, poner música y convivir. ¿Está permitido?",
    },
    answer: {
      en: "Absolutely. Apple Woods is designed to be a place where friends, family, and neighbors can come together and create lasting memories. If you anticipate hosting gatherings regularly, we encourage you to design your home with dedicated indoor and outdoor entertainment spaces that comfortably accommodate your lifestyle and guests.\n\nTo help maintain the attractive appearance of the neighborhood and ensure a pleasant environment for all residents, garages should not be used as open-front entertainment areas that create a visible extension of living space or result in the prolonged display of furniture, recreational equipment, or other household items from the street.\n\nCommunity standards also help minimize noise and visual clutter while preserving the character and value of the neighborhood.\n\nFor larger celebrations, residents may have the option to reserve the Apple Woods Clubhouse, subject to availability and applicable reservation policies. Planning ahead and securing reservations when available is recommended for larger events.",
      es: "Por supuesto. Apple Woods ha sido diseñado como una comunidad donde los amigos, la familia y los vecinos pueden reunirse y crear recuerdos duraderos. Si considera que organizar reuniones será una parte importante de su estilo de vida, le recomendamos diseñar su hogar con espacios de entretenimiento interiores y exteriores que se adapten cómodamente a sus necesidades y a las de sus invitados.\n\nPara ayudar a mantener la apariencia atractiva del fraccionamiento y garantizar un ambiente agradable para todos los residentes, los garajes no deben utilizarse como áreas permanentes de convivencia abiertas hacia la calle ni como extensiones visibles de las áreas habitables de la vivienda. Asimismo, no se permite la exhibición prolongada de muebles, equipos recreativos u otros artículos domésticos visibles desde la vía pública.\n\nEstas normas comunitarias ayudan a reducir el ruido y el desorden visual, al mismo tiempo que preservan el carácter y el valor de las propiedades dentro de la comunidad.\n\nPara celebraciones de mayor tamaño, los residentes podrán tener la opción de reservar la Casa Club de Apple Woods, sujeto a disponibilidad y a las políticas de reservación aplicables. Para eventos más grandes, se recomienda planificar con anticipación y realizar la reservación correspondiente cuando haya fechas disponibles.",
    },
  },
  vehicleParking: {
    question: {
      en: "My children have grown up and our family now owns several vehicles. Can I park vehicles on my lawn or along the street?",
      es: "Mis hijos ya crecieron y ahora nuestra familia tiene varios vehículos. ¿Puedo estacionarlos sobre el césped o en la calle frente a mi casa?",
    },
    answer: {
      en: "Apple Woods is thoughtfully designed to provide an attractive streetscape, ample parking options, and a safe environment for residents and guests. To help preserve the appearance of the community and protect property values, personal vehicles must be parked in garages or on driveways and may not block sidewalks, streets, or neighboring properties. Parking on lawns or landscaped areas is not permitted.\n\nGuests may park in front of the home they are visiting, subject to community parking guidelines.\n\nTo maintain a clean and orderly environment, overnight street parking is not permitted.\n\nRecognizing that some households may require additional parking, Apple Woods has been planned with hundreds of conveniently located visitor parking spaces throughout the community. Depending on availability, residents may also have the option to rent additional parking spaces on a daily, weekly, or monthly basis.\n\nIf your family owns multiple vehicles, we encourage you to design your home with parking accommodations that suit your lifestyle and long-term needs.\n\nCommercial vehicles, recreational vehicles, trailers, boats, and similar equipment may not be stored in front of residences. However, special parking areas may be available for certain vehicle types. Please inquire regarding current options and availability.",
      es: "Apple Woods ha sido cuidadosamente diseñado para ofrecer una imagen urbana atractiva, amplias opciones de estacionamiento y un entorno seguro y ordenado para residentes y visitantes. Con el fin de preservar la apariencia del fraccionamiento y proteger el valor de las propiedades, los vehículos particulares deberán estacionarse dentro del garaje o sobre la cochera de la vivienda, sin obstruir banquetas, calles ni propiedades vecinas. No está permitido estacionar vehículos sobre áreas verdes, jardines o césped.\n\nLos visitantes podrán estacionarse frente a la vivienda que visitan, sujeto a las normas de estacionamiento de la comunidad.\n\nPara mantener un entorno limpio, seguro y agradable para todos, no se permite el estacionamiento nocturno en las calles.\n\nEntendiendo que algunas familias pueden requerir espacios adicionales, Apple Woods ha sido planificado con cientos de cajones de estacionamiento para visitantes distribuidos estratégicamente dentro del desarrollo. Sujeto a disponibilidad, los residentes también podrán tener la opción de rentar espacios adicionales de estacionamiento por día, semana o mes.\n\nSi su familia cuenta con varios vehículos, le recomendamos diseñar su vivienda considerando sus necesidades actuales y futuras de estacionamiento.\n\nLos vehículos comerciales, vehículos recreativos, remolques, embarcaciones y equipos similares no podrán almacenarse frente a las residencias. Sin embargo, podrían existir áreas especiales destinadas para ciertos tipos de vehículos. Le invitamos a consultar las opciones y disponibilidad vigentes.",
    },
  },
  respectAmenities: {
    question: {
      en: "How does Apple Woods help ensure that residents and guests feel comfortable and respected in shared amenities such as the pool, clubhouse, parks, and recreation areas?",
      es: "¿Cómo ayuda Apple Woods a garantizar que los residentes y visitantes se sientan cómodos, seguros y respetados en las amenidades compartidas, como la alberca, la Casa Club, los parques y las áreas recreativas?",
    },
    answer: {
      en: "Apple Woods is committed to fostering a family-oriented environment where every resident and guest is treated with dignity, courtesy, and respect. Whether enjoying the pool, fitness facilities, parks, clubhouse, or any other community amenity, all individuals should feel comfortable and free from harassment, intimidation, discrimination, or inappropriate behavior.\n\nThe community maintains clear standards of conduct designed to promote a welcoming atmosphere for people of all ages, backgrounds, and lifestyles. Inappropriate staring, unwanted attention, offensive language, harassment, racism, antisemitism, discrimination, bullying, or any other disrespectful behavior toward residents or guests is not tolerated. Every person deserves to enjoy the community's amenities without feeling uncomfortable, judged, or disrespected.\n\nTo encourage a positive and engaged community culture, Apple Woods has implemented the Resident Excellence Program™, a community recognition and accountability system designed to promote respect, participation, good citizenship, and pride of ownership. Through their resident portal, homeowners can view their current standing, track accomplishments, earn merits, identify opportunities for improvement, and work toward higher levels of recognition within the community.\n\nResidents demonstrating outstanding participation and community stewardship may qualify for special recognition, awards, privileges, and annual honors. Likewise, repeated violations of community standards may result in reductions in standing, temporary restrictions on certain privileges, or other actions consistent with community policies.\n\nOur goal is simple: to create an environment where families can relax, children can play, neighbors can connect, and everyone can enjoy the community with confidence, knowing they will be treated with respect and consideration.",
      es: "Apple Woods está comprometido con fomentar una comunidad orientada a la familia, donde cada residente e invitado sea tratado con dignidad, cortesía y respeto. Ya sea disfrutando de la piscina, las instalaciones deportivas, los parques, la Casa Club o cualquier otra amenidad, todas las personas deben sentirse cómodas, seguras y libres de acoso, intimidación, discriminación o conductas inapropiadas.\n\nLa comunidad mantiene normas claras de convivencia diseñadas para promover un ambiente acogedor para personas de todas las edades, antecedentes y estilos de vida. Las miradas inapropiadas, la atención no deseada, el lenguaje ofensivo, el acoso, el racismo, el antisemitismo, la discriminación, la intimidación o cualquier comportamiento irrespetuoso hacia residentes o invitados no serán tolerados. Toda persona tiene derecho a disfrutar de las amenidades de la comunidad sin sentirse incómoda, juzgada o faltada al respeto.\n\nPara fortalecer una cultura de participación positiva y sana convivencia, Apple Woods ha implementado el Programa de Excelencia Residencial™, un sistema de reconocimiento y responsabilidad comunitaria diseñado para fomentar el respeto, la participación, la buena ciudadanía y el orgullo de pertenecer a la comunidad. A través de su portal residencial, los propietarios podrán consultar su nivel de excelencia, dar seguimiento a sus logros, acumular méritos, identificar oportunidades de mejora y avanzar hacia niveles superiores de reconocimiento dentro de la comunidad.\n\nLos residentes que demuestren un compromiso ejemplar con los valores de Apple Woods, la participación comunitaria y el bienestar colectivo podrán ser elegibles para reconocimientos especiales, premios, privilegios y distinciones anuales. De igual manera, las conductas reiteradas que incumplan las normas comunitarias podrán afectar el nivel de excelencia del residente y dar lugar a restricciones temporales sobre ciertos privilegios o al acceso a determinadas amenidades, de conformidad con las políticas de la comunidad.\n\nNuestro objetivo es simple: crear un entorno donde las familias puedan relajarse, los niños puedan jugar, los vecinos puedan convivir y todos disfruten de la comunidad con la confianza de que serán tratados con respeto, consideración y cortesía.",
    },
  },
  designedFor: {
    question: {
      en: "Is Apple Woods designed for retirees, young families, professionals, or a specific type of resident?",
      es: "¿Apple Woods está diseñado para jubilados, familias jóvenes, profesionistas o algún tipo específico de residente?",
    },
    answer: {
      en: "Apple Woods was not designed for a particular age group, income level, or stage of life. It was thoughtfully planned to create an exceptional living environment that can be enjoyed by a wide variety of residents, each with their own goals, interests, and lifestyles.\n\nRetirees appreciate the peace of mind that comes from living in a well-maintained community with convenient amenities, recreational opportunities, and fewer day-to-day concerns. Young families enjoy the parks, sports facilities, recreational amenities, and family-oriented environment designed to help children thrive. In a time when many children spend increasing amounts of time on tablets, smartphones, video games, and other electronic devices, Apple Woods was planned to encourage a more active, balanced, and engaging lifestyle. Through sports, outdoor activities, social events, playgrounds, and community programs, children have opportunities to build friendships, develop confidence, and create lasting memories through real-world experiences.\n\nMany parents also appreciate the community's emphasis on safety and connectivity. Advanced security features, including strategically placed surveillance systems throughout common areas, help provide additional peace of mind while children participate in approved community activities. Combined with thoughtfully designed amenities and a strong sense of community, Apple Woods allows parents to feel more comfortable knowing their children are spending time in a safe, active, and enriching environment.\n\nProfessionals value the attractive surroundings, sense of pride, and amenities that support both active and social lifestyles. First-time homeowners appreciate the opportunity to become part of a thoughtfully planned community, while those looking to upgrade can enjoy features and amenities often associated with much higher-priced neighborhoods.\n\nApple Woods was not created exclusively for the wealthy, nor was it intended to be unattainable for hardworking families. Instead, it was designed around a simple belief: everyone deserves the opportunity to enjoy a beautiful home, a welcoming community, quality amenities, and a lifestyle that promotes well-being, connection, and pride of ownership. Luxury should not be reserved for a select few. At Apple Woods, many of the features that make a community feel exceptional have been thoughtfully incorporated from the very beginning, helping make quality living more attainable.\n\nWhether you are starting a family, raising children, building your career, enjoying retirement, or simply looking for a better place to call home, Apple Woods offers an environment designed to support your lifestyle today and adapt to your needs tomorrow.\n\nIn short, Apple Woods is not defined by age, occupation, or income level. It is defined by people who value community, respect, quality, opportunity, and the desire to live in a place they are proud to call home.",
      es: "Apple Woods no fue diseñado para un grupo de edad, nivel de ingresos o etapa de vida en particular. Fue cuidadosamente planificado para crear un entorno residencial excepcional que pueda ser disfrutado por una amplia variedad de personas, cada una con sus propias metas, intereses y estilo de vida.\n\nLos jubilados valoran la tranquilidad que brinda vivir en una comunidad bien mantenida, con amenidades convenientes, oportunidades recreativas y menos preocupaciones en el día a día. Las familias jóvenes disfrutan de los parques, instalaciones deportivas, amenidades recreativas y un entorno orientado a la familia, diseñado para ayudar a los niños a desarrollarse plenamente. En una época en la que muchos niños pasan cada vez más tiempo frente a tabletas, teléfonos inteligentes, videojuegos y otros dispositivos electrónicos, Apple Woods fue concebido para fomentar un estilo de vida más activo, equilibrado y participativo. A través de deportes, actividades al aire libre, eventos sociales, áreas de juego y programas comunitarios, los niños tienen la oportunidad de desarrollar amistades, fortalecer su confianza y crear recuerdos duraderos mediante experiencias reales e interactivas.\n\nMuchos padres también valoran el enfoque de la comunidad en la seguridad y la conectividad. Los sistemas de videovigilancia estratégicamente ubicados en las áreas comunes brindan una mayor tranquilidad mientras los niños participan en actividades comunitarias autorizadas. Combinados con amenidades cuidadosamente planificadas y un fuerte sentido de comunidad, estos elementos permiten que los padres se sientan más seguros sabiendo que sus hijos están aprovechando su tiempo en un entorno activo, saludable y enriquecedor.\n\nLos profesionistas valoran el entorno atractivo, el sentido de orgullo y las amenidades que respaldan tanto estilos de vida activos como sociales. Los compradores de su primera vivienda aprecian la oportunidad de formar parte de una comunidad cuidadosamente planificada, mientras que quienes buscan mejorar su calidad de vida pueden disfrutar de características y amenidades comúnmente asociadas con desarrollos de mucho mayor costo.\n\nApple Woods no fue creado exclusivamente para personas de altos ingresos, ni tampoco fue concebido para estar fuera del alcance de las familias trabajadoras. Por el contrario, fue diseñado bajo una convicción sencilla: toda persona merece la oportunidad de disfrutar de una hermosa vivienda, una comunidad acogedora, amenidades de calidad y un estilo de vida que fomente el bienestar, la convivencia y el orgullo de pertenencia. La calidad de vida no debería estar reservada para unos cuantos. En Apple Woods, muchos de los elementos que hacen excepcional a una comunidad han sido incorporados desde el inicio, ayudando a que una mejor forma de vivir sea más accesible para más personas.\n\nYa sea que esté formando una familia, criando hijos, desarrollando su carrera profesional, disfrutando de su jubilación o simplemente buscando un mejor lugar para vivir, Apple Woods ofrece un entorno diseñado para satisfacer sus necesidades actuales y adaptarse a las del futuro.\n\nEn resumen, Apple Woods no está definido por la edad, la profesión o el nivel de ingresos de sus residentes. Está definido por personas que valoran la comunidad, el respeto, la calidad, las oportunidades y el deseo de vivir en un lugar del que puedan sentirse orgullosas.",
    },
  },

  // --- Client doc additions, 2026-09 pass (EN + ES verbatim from the doc) ---
  payTwice: {
    question: {
      en: "Why Pay for Amenities Twice?",
      es: "¿Por qué pagar doble por las amenidades recreativas?",
    },
    answer: {
      en: "In many traditional neighborhoods, every homeowner pays to build and maintain their own entertainment spaces, fitness areas, recreational features, and outdoor gathering places.\n\nAt Apple Woods, many of these experiences are thoughtfully provided as part of the community.\n\nThat allows you to invest where it matters most to your family while enjoying amenities that would be impractical or prohibitively expensive to duplicate on every individual homesite.\n\nQuality of life doesn't have to mean owning everything. Sometimes it means sharing the very best.",
      es: "En muchos fraccionamientos tradicionales, cada propietario paga por construir y mantener sus propios espacios de entretenimiento, zonas de ejercicio, áreas recreativas y lugares de reunión al aire libre.\n\nEn Apple Woods, muchas de estas experiencias se ofrecen cuidadosamente como parte de la comunidad.\n\nEsto le permite invertir en lo que más le importa a su familia, al tiempo que disfruta de instalaciones que resultarían poco prácticas o excesivamente costosas de replicar en cada terreno de forma individual.\n\nLa calidad de vida no tiene por qué significar ser dueño de todo. A veces, significa compartir lo mejor.",
    },
  },
  sharedAmenities: {
    question: {
      en: "Why Does Apple Woods Offer Amenities and Experiences That Are Usually Found Only in Much More Expensive Communities?",
      es: "¿Por Qué Apple Woods Ofrece Amenidades y Experiencias que Generalmente Sólo se Encuentran en Comunidades Mucho Más Costosas?",
    },
    answer: {
      en: "Apple Woods was founded on a simple idea:\n\nWhat if many families could enjoy exceptional amenities and experiences by sharing the cost and maintenance together, rather than each homeowner having to build and maintain them individually?\n\nMany of the features found in luxury estates—private theaters, fitness facilities, resort-style recreation areas, water features, advanced technology, and enhanced security systems—are often financially practical only for a single high-end homeowner or exclusive resort.\n\nApple Woods takes a different approach.\n\nBy thoughtfully planning these amenities at the community level, residents can enjoy many of the same benefits at a fraction of the individual cost and without the responsibility of personally maintaining them.\n\nExamples include:\n\n- A private home theater becomes a community auditorium and presentation space.\n- A personal gym becomes a shared fitness center.\n- A private backyard entertainment area becomes a resort-style pool and clubhouse.\n- Individual water features evolve into the Apple Woods Water Walk™ and community landscapes.\n- Sophisticated security systems become community-wide safety and monitoring infrastructure.\n\nThe goal of Apple Woods is not to replicate any one private residence. Rather, it is to create a thoughtfully planned community where exceptional experiences, conveniences, and amenities become attainable and practical for many families through shared resources and collective stewardship.\n\nIn simple terms, Apple Woods believes that some of life's best experiences should not be reserved for only a few—they can be thoughtfully shared and enjoyed by an entire community.",
      es: "Apple Woods nació de una idea sencilla:\n\n¿Qué pasaría si muchas familias pudieran disfrutar de amenidades y experiencias excepcionales compartiendo los costos y el mantenimiento, en lugar de que cada propietario tuviera que construirlas y mantenerlas por su cuenta?\n\nMuchas de las características que se encuentran en residencias de lujo —como teatros privados, gimnasios, áreas recreativas tipo resort, cuerpos de agua, tecnología avanzada y sistemas de seguridad de alto nivel— suelen ser prácticas únicamente para propietarios de viviendas de muy alto valor o desarrollos exclusivos.\n\nApple Woods adopta un enfoque diferente.\n\nAl planificar cuidadosamente estas amenidades a nivel comunitario, los residentes pueden disfrutar de muchos de los mismos beneficios a una fracción del costo individual y sin la responsabilidad de mantenerlos personalmente.\n\nPor ejemplo:\n\n- Un cine privado en casa se convierte en un auditorio y sala de presentaciones para la comunidad.\n- Un gimnasio personal se transforma en un centro de acondicionamiento físico compartido.\n- Un área privada de entretenimiento al aire libre evoluciona en una alberca estilo resort y una casa club para todos los residentes.\n- Los cuerpos de agua privados se convierten en el Apple Woods Water Walk™ y en paisajes acuáticos comunitarios.\n- Los sofisticados sistemas de seguridad individuales se transforman en una infraestructura de seguridad y monitoreo para toda la comunidad.\n\nEl objetivo de Apple Woods no es replicar una residencia privada en particular. Más bien, busca crear un fraccionamiento cuidadosamente planeado donde experiencias, comodidades y amenidades excepcionales sean alcanzables y prácticas para muchas familias mediante recursos compartidos y una administración colectiva responsable.\n\nEn pocas palabras, Apple Woods cree que algunas de las mejores experiencias de la vida no deberían estar reservadas para unos cuantos; pueden ser cuidadosamente compartidas y disfrutadas por toda una comunidad.",
    },
  },
  maintenanceTech: {
    question: {
      en: "Why does Apple Woods include maintenance and technology facilities within the community?",
      es: "¿Por qué Apple Woods incluye un Centro de Mantenimiento y Salas de Tecnología dentro de la comunidad?",
    },
    answer: {
      en: "Apple Woods was designed around the idea that certain amenities and resources become more attainable and more useful when they are shared. By incorporating a Maintenance Center and Technology Rooms, the community can support its infrastructure more efficiently, adapt to future technologies, and provide resources that would be impractical or costly for many homeowners to maintain individually.\n\nMany of these services and community resources will be accessible directly from residents' private smartphones through the Apple Woods Concierge Service™ and the Apple Woods Portal™. Whether requesting assistance, reporting a maintenance issue, receiving community updates, managing smart features, reserving amenities, or accessing community services, residents will enjoy a convenient, connected, and responsive living experience right from the palm of their hand.\n\nIt is another example of the Apple Woods philosophy:\n\nExceptional experiences, services, and capabilities become more attainable when they are thoughtfully shared—allowing the many to enjoy benefits that might otherwise be reserved for only a few.\n\nApple Woods™: Smart Living™ through Technology, Convenience, Services, and Shared Benefits",
      es: "Apple Woods fue diseñado bajo la filosofía de que ciertos servicios, amenidades y recursos se vuelven más accesibles, eficientes y valiosos cuando se comparten entre una comunidad.\n\nPor ello, Apple Woods incorporará un Centro de Mantenimiento y Salas de Tecnología, permitiendo que la comunidad mantenga su infraestructura de manera más eficiente, se adapte a las nuevas tecnologías y ofrezca recursos que para muchos propietarios serían poco prácticos o demasiado costosos de mantener de forma individual.\n\nMuchos de estos servicios y recursos comunitarios estarán disponibles directamente desde los teléfonos inteligentes de los residentes a través del Servicio de Concierge de Apple Woods™ y del Portal Apple Woods™. Desde la palma de su mano, los residentes podrán:\n\n- Solicitar asistencia y servicios.\n- Reportar necesidades de mantenimiento.\n- Recibir avisos y comunicaciones de la comunidad.\n- Gestionar funciones y servicios inteligentes.\n- Reservar amenidades y espacios comunes.\n- Acceder de forma rápida y conveniente a diversos servicios comunitarios.\n\nEs un ejemplo más de la filosofía que inspira a Apple Woods:\n\nLas experiencias, servicios y capacidades excepcionales se vuelven más alcanzables cuando se comparten de manera inteligente, permitiendo que muchas familias disfruten de beneficios que de otra manera podrían estar reservados únicamente para unos cuantos.\n\nApple Woods™ Smart Living™: Tecnología, Conveniencia, Servicios y Beneficios Compartidos.",
    },
  },
  futureAmenities: {
    question: {
      en: "What amenities & activities will Apple Woods have?",
      es: "¿Qué amenidades y actividades tendrá Apple Woods?",
    },
    answer: {
      en: "Future Amenities & Activities\n\nPlanned for Future Development at Apple Woods™\n\nAt Apple Woods™, our vision extends far beyond homesites. As the community continues to grow and future phases are developed, residents can look forward to an expanding collection of amenities, activities, and services designed to promote wellness, recreation, convenience, and meaningful connections with neighbors.\n\n🏊 Resort & Recreation\n\n- Resort-Style Swimming Pools*\n- Children's Water Play Areas*\n- Signature Water Slide and Water Features*\n- Poolside Movie Nights and Sporting Events\n- Picnic and Grilling Areas\n- Scenic Gardens and Relaxation Spaces\n\n💪 Health & Wellness\n\n- Fitness Center*\n- Continuous Walking and Running Trail\n- Outdoor Exercise Stations\n- Yoga, Aerobics, and Wellness Programs\n- Organized Walking and Cycling Groups\n- Blue Zones™ Inspired Activities\n\n🎬 Entertainment & Social Spaces\n\n- Movie Theater and Auditorium*\n- Resident Lounge and Coffee Area\n- Indoor Playroom*\n- Community Game Room\n- Family Movie Nights\n- Sports Viewing Events\n- Holiday Celebrations and Festivals\n\n📚 Learning & Technology\n\n- Computer Center*\n- Library and Reading Room*\n- Homework and Study Areas\n- Technology Workshops\n- Educational Seminars and Guest Speakers\n- Smart Living™ Experience Center*\n\n⚽ Sports & Outdoor Activities\n\n- Basketball Courts*\n- Tennis and Pickleball Courts*\n- Mini Soccer Field*\n- Volleyball Area*\n- Children's Playgrounds*\n- Community Gardening Opportunities\n- Pet-Friendly Walking Areas\n\n🎉 Community Events\n\n- Seasonal Celebrations\n- Family Festivals and Outdoor Gatherings\n- Resident Appreciation Events\n- Farmers and Artisan Markets\n- Volunteer Programs and Community Service Activities\n- Apple Woods Resident Excellence Program™ Events and Awards\n\n🚗 Convenience & Services\n\n- Designated Guest Parking Areas (8-Hour Limit)\n- Controlled Access Pedestrian Gates\n- 24/7 Community Surveillance and Access Control\n- Courtesy Transportation to Select Local Destinations and Airports*\n- Private Resident Concierge Line*\n- Community Internet and Smart Living™ Services\n\nMore Than a Homesite. A Better Way to Live.\n\nApple Woods™ is thoughtfully designed to continuously evolve, with future amenities and activities added as the community grows and resident participation increases.\n\n*Amenities and services identified with an asterisk are planned concepts and may be introduced in future phases based on community growth, participation, and operational feasibility.",
      es: "Amenidades y Actividades Futuras\n\nPlaneadas para el Desarrollo Futuro de Apple Woods™\n\nEn Apple Woods™, nuestra visión va mucho más allá de los terrenos residenciales. A medida que la comunidad continúe creciendo y se desarrollen las futuras etapas, los residentes podrán disfrutar de una creciente variedad de amenidades, actividades y servicios diseñados para fomentar el bienestar, la recreación, la comodidad y las relaciones significativas entre vecinos.\n\n🏊 Diversión y Recreación\n\n- Albercas estilo resort*\n- Áreas acuáticas para niños*\n- Tobogán y elementos acuáticos distintivos*\n- Noches de cine y eventos deportivos junto a la alberca\n- Áreas de picnic y asadores\n- Jardines escénicos y espacios de descanso\n\n💪 Salud y Bienestar\n\n- Gimnasio*\n- Sendero continuo para caminar, trotar y correr\n- Estaciones de ejercicio al aire libre\n- Programas de yoga, aeróbicos y bienestar\n- Grupos organizados de caminata y ciclismo\n- Actividades inspiradas en el concepto de las Blue Zones™\n\n🎬 Entretenimiento y Convivencia\n\n- Cine y auditorio*\n- Sala lounge y área de café\n- Área de juegos interior*\n- Sala de juegos comunitaria\n- Noches de cine para las familias\n- Eventos para disfrutar de encuentros deportivos\n- Celebraciones y festividades de temporada\n\n📚 Educación y Tecnología\n\n- Centro de cómputo*\n- Biblioteca y sala de lectura*\n- Áreas para estudio y tareas\n- Talleres de tecnología\n- Seminarios educativos y conferencistas invitados\n- Centro de Experiencia Smart Living™*\n\n⚽ Deportes y Actividades al Aire Libre\n\n- Canchas de baloncesto*\n- Canchas de tenis y pickleball*\n- Mini cancha de fútbol*\n- Área de voleibol*\n- Áreas de juegos infantiles*\n- Espacios para jardinería comunitaria\n- Áreas pet-friendly para caminar y convivir con las mascotas\n\n🎉 Eventos Comunitarios\n\n- Celebraciones de temporada\n- Festivales familiares y reuniones al aire libre\n- Eventos de agradecimiento a los residentes\n- Mercados de productores y artesanos\n- Programas de voluntariado y servicio comunitario\n- Eventos y reconocimientos del Programa de Excelencia del Residente™ de Apple Woods\n\n🚗 Comodidad y Servicios\n\n- Áreas designadas para estacionamiento de visitantes (límite de 8 horas)\n- Puertas peatonales con acceso controlado\n- Sistema de vigilancia y control de acceso las 24 horas\n- Servicio de transporte de cortesía a destinos locales seleccionados y aeropuertos*\n- Línea privada de concierge para residentes*\n- Servicios de conectividad y Smart Living™ para la comunidad\n\nMás que un terreno. Una mejor forma de vivir.\n\nApple Woods™ está diseñado para evolucionar continuamente, incorporando nuevas amenidades, actividades y servicios conforme la comunidad crece y aumenta la participación de sus residentes.\n\n*Las amenidades y servicios identificados con un asterisco representan conceptos planificados y podrán incorporarse en futuras etapas de desarrollo, dependiendo del crecimiento de la comunidad, la participación de los residentes y la viabilidad operativa.",
    },
  },
};

// Ecology card (client doc) — no smcopy variant; same copy in both versions.
// `wide: true` renders it as the full-row card below the 6-card grid.
const ecologyCard = {
  title: { en: "Ecology built in", es: "Ecología integrada" },
  body: {
    en: "At Apple Woods, sustainability is more than a feature — it is part of the community's foundation. Designed with a vision for a greener future, the neighborhood aims to maintain a positive environmental footprint through thoughtful planning and eco-conscious amenities.\n\nEvery home will be part of a living orchard, with fruit trees integrated throughout the community to create beauty, shade, and a connection to nature. Solar-powered street lighting will help reduce energy consumption, while dedicated electric vehicle charging stations will support modern, sustainable transportation.\n\nApple Woods is also committed to creating natural habitats that encourage biodiversity and ecological balance. Landscaped areas and water features will help support beneficial species such as birds, bees, butterflies, ladybugs, fish, geckos, and other pollinators and wildlife that contribute to a healthy environment.\n\nBy blending nature, technology, and community living, Apple Woods is designed to be a beautiful place to live while helping preserve the environment for future generations.",
    es: "En Apple Woods, la sustentabilidad es más que una característica: es parte fundamental de la comunidad. Diseñado con una visión hacia un futuro más verde, el fraccionamiento busca mantener una huella ambiental positiva mediante una planeación inteligente y amenidades conscientes con el medio ambiente.\n\nCada hogar formará parte de un huerto vivo, con árboles frutales integrados en toda la comunidad para crear belleza, sombra y una conexión natural con el entorno. El alumbrado público alimentado por energía solar ayudará a reducir el consumo energético, mientras que las estaciones de carga para vehículos eléctricos respaldarán una movilidad moderna y sustentable.\n\nApple Woods también está comprometido con la creación de hábitats naturales que fomenten la biodiversidad y el equilibrio ecológico. Las áreas ajardinadas y los cuerpos de agua ayudarán a favorecer especies benéficas como aves, abejas, mariposas, catarinas, peces, geckos y otros polinizadores y especies silvestres que contribuyen a un entorno saludable.\n\nAl integrar naturaleza, tecnología y vida comunitaria, Apple Woods está diseñado para ser un lugar hermoso para vivir, mientras ayuda a preservar el medio ambiente para las futuras generaciones.",
  },
  image: "/assets/ecology.jpg",
  wide: true,
};

export const smcopyContent = {
  nav: {
    logoAlt: "Apple Woods Smart Living",
    // Order mirrors the page scroll order; "Now" is the Phase 1 availability section.
    links: [
      { href: "#different", label: { en: "Community", es: "Comunidad" } },
      { href: "#structured", label: { en: "Amenities", es: "Servicios" } },
      { href: "#life-inside", label: { en: "Live Here", es: "Vive aquí" } },
      { href: "#phase-one", label: { en: "Now", es: "Ahora" } },
      { href: "#location", label: { en: "Location", es: "Ubicación" } },
    ],
    cta: { en: "Contact us", es: "Contáctanos" },
    portal: {
      href: "https://cms.park-street.us/login",
      label: { en: "Portal", es: "Portal" },
    },
  },
  hero: {
    tagline: { en: "Life, beautifully organized.", es: "La vida, bellamente organizada." },
    // ES headline is the client's doc copy ("Un lugar más seguro y más inteligente al que
    // llamar hogar"), split across the two display lines. Diverges from EN by design.
    headlineLines: [
      { en: "More Than a Subdivision:", es: "Un lugar más seguro y más inteligente" },
      { en: "A Place to Truly Call Home", es: "al que llamar hogar" },
    ],
    subhead: {
      en: "Apple Woods is a smart residential community designed around security, comfort, beauty, technology, and attainable everyday luxury.",
      es: "Apple Woods es una comunidad inteligente donde la seguridad, el lujo y la tecnología están integrados en la vida cotidiana.",
    },
    actions: {
      explore: { en: "Explore", es: "Explorar" },
      lots: { en: "View Lots", es: "Ver lotes" },
    },
    imageAlt: { en: "Apple Woods entrance at night", es: "Entrada de Apple Woods por la noche" },
  },
  difference: {
    eyebrow: { en: "How Apple Woods is different", es: "En qué se diferencia Apple Woods" },
    heading: {
      en: "Everything that makes a neighborhood feel premium is planned from the start.",
      es: "Todo lo que hace que un fraccionamiento se sienta exclusivo está planificado desde el principio.",
    },
    readMore: { en: "Read more", es: "Leer más" },
    readLess: { en: "Read less", es: "Leer menos" },
    items: [
      {
        title: { en: "Security built in", es: "Seguridad integrada" },
        body: {
          en: "Controlled access, CCTV monitoring, smart lighting, connected systems, and flood-conscious planning.",
          es: "Acceso controlado, planificación de CCTV, iluminación inteligente y sistemas conectados.",
        },
        image: "/assets/security-built-in-camera.jpg",
      },
      {
        title: { en: "Beauty built in", es: "Belleza integrada" },
        body: {
          en: "Landscaping, architectural standards, curb appeal guidelines, and preserved green areas.",
          es: "Paisajismo mantenido, estándares arquitectónicos y pautas de atractivo exterior.",
        },
        image: "/assets/beauty-built-in-house-closeup.jpg",
      },
      {
        title: { en: "Technology built in", es: "Tecnología integrada" },
        body: {
          en: "Smart lighting, irrigation, access systems, connectivity, and resident communication tools.",
          es: "Iluminación inteligente, sistemas de acceso y herramientas de comunicación para residentes.",
        },
        image: "/assets/technology-built-in-sign.jpg",
        // Client video (2026-09-09): street display sign. Silent loop, poster is
        // a frame from the same clip. Remove `video` to fall back to the still.
        video: "/assets/technology-built-in-sign.mp4",
        poster: "/assets/technology-built-in-sign-poster.jpg",
      },
      {
        title: { en: "Luxury built in", es: "Lujo integrado" },
        body: {
          en: "Shared amenities and services that add comfort without making every homeowner carry the full cost alone.",
          es: "Servicios y comodidades compartidos que agregan confort sin una carga adicional para el hogar.",
        },
        image: "/assets/luxury-built-in-clubhouse-aerial.jpg",
      },
      {
        // No doc Spanish (doc had only 4 difference cards) — direct translation.
        title: { en: "Wellness built in", es: "Bienestar integrado" },
        body: {
          en: "Blue Zone programs, fitness amenities, and wellness activities support an active mind and body.",
          es: "Los programas Blue Zone, las amenidades de fitness y las actividades de bienestar fomentan una mente y un cuerpo activos.",
        },
        image: "/assets/awclubpool.png",
      },
      {
        // No doc Spanish — direct translation.
        title: { en: "Attainability built in", es: "Accesibilidad integrada" },
        body: {
          en: "Community scale helps share service and amenity costs while keeping dues manageable.",
          es: "La escala de la comunidad ayuda a compartir los costos de servicios y amenidades mientras mantiene las cuotas accesibles.",
        },
        image: "/assets/attainability-aw.jpg",
      },
      ecologyCard,
    ],
  },
  amenities: {
    // "Affordable Luxury" value section — NEW section, no doc Spanish. Full direct translation.
    titleLines: [
      { en: "Affordable", es: "Lujo" },
      { en: "Luxury", es: "Accesible" },
    ],
    stories: [
      {
        label: { en: "Shared scale", es: "Escala compartida" },
        eyebrow: { en: "01 / shared scale", es: "01 / escala compartida" },
        title: {
          en: "Premium living, shared across the whole community.",
          es: "Vida premium, compartida por toda la comunidad.",
        },
        body: {
          en: "Security, landscaping, amenities, and technology are built and maintained for everyone here, so you get the lifestyle of a high-end neighborhood without carrying the full cost of it on your own.",
          es: "La seguridad, el paisajismo, las amenidades y la tecnología se construyen y se mantienen para todos aquí, así que obtienes el estilo de vida de un vecindario exclusivo sin cargar con todo el costo tú solo.",
        },
        image: "/assets/awclubpool.png",
      },
      {
        label: { en: "Cost clarity", es: "Claridad de costos" },
        eyebrow: { en: "02 / cost clarity", es: "02 / claridad de costos" },
        title: {
          en: "Shared costs keep the dues manageable.",
          es: "Los costos compartidos mantienen las cuotas accesibles.",
        },
        body: {
          en: "Because expenses are shared across the community, dues stay affordable. You pay reduced dues while you own the lot and before you build, and full dues begin only once your home is up.",
          es: "Como los gastos se comparten en toda la comunidad, las cuotas se mantienen accesibles. Pagas cuotas reducidas mientras eres dueño del lote y antes de construir, y las cuotas completas comienzan solo cuando tu casa está terminada.",
        },
        image: "/assets/value-stack-actual-plan.png",
      },
      {
        label: { en: "Attainable luxury", es: "Lujo accesible" },
        eyebrow: { en: "03 / attainable luxury", es: "03 / lujo accesible" },
        title: {
          en: "The quality of a luxury community, from $85,000.",
          es: "La calidad de una comunidad de lujo, desde $85,000.",
        },
        body: {
          en: "Phase 1 homesites start at just $85,000. That price buys you into a fully planned smart community, with all of this built in, not just a piece of land.",
          es: "Los lotes de la Fase 1 comienzan desde solo $85,000. Ese precio te integra a una comunidad inteligente totalmente planificada, con todo esto incluido, no solo un terreno.",
        },
        image: "/assets/luxury-built-in-clubhouse-aerial.jpg",
      },
      {
        label: { en: "Nothing like it here", es: "No hay nada igual aquí" },
        eyebrow: { en: "04 / nothing like it", es: "04 / nada igual" },
        title: {
          en: "There is nothing like this in Brownsville.",
          es: "No hay nada como esto en Brownsville.",
        },
        body: {
          en: "A gated, smart, amenity-rich community planned to this level, at these prices, does not exist anywhere else in the area. Phase 1 is the first and best opportunity to get in.",
          es: "Una comunidad cerrada, inteligente y llena de amenidades, planificada a este nivel y a estos precios, no existe en ningún otro lugar de la zona. La Fase 1 es la primera y mejor oportunidad para entrar.",
        },
        image: "/assets/location-map-brownsville.png",
      },
    ],
  },
  lifeInside: {
    eyebrow: { en: "Life Inside Apple Woods", es: "La vida dentro de Apple Woods" },
    heading: {
      en: "The comfort of a private community, built into everyday life.",
      es: "La comodidad de una comunidad privada, integrada en tu día a día.",
    },
    body: {
      en: "From the clubhouse and fitness center to the pool, landscaping, lighting, and shared services, Apple Woods is designed to make daily life feel easier, more comfortable, and more refined.",
      es: "Desde la casa club y el gimnasio hasta la piscina, el paisajismo, la iluminación y los servicios compartidos, Apple Woods está diseñado para que la vida diaria se sienta más fácil, limpia y elevada.",
    },
    readMore: { en: "Read more", es: "Leer más" },
    readLess: { en: "Read less", es: "Leer menos" },
    // `body` = full amenity description (client copy doc 2026-06-11), shown
    // behind a Read more toggle; `detail` stays as the always-visible teaser.
    items: [
      {
        term: { en: "Clubhouse", es: "Casa club" },
        // Clubhouse render (swap the JPEG at this path to update). The component
        // falls back to a styled placeholder for any item with an empty image.
        image: "/assets/life-clubhouse.jpg",
        detail: {
          en: "A central place for residents to gather and use shared spaces.",
          es: "Un lugar central para que los residentes se reúnan y utilicen espacios compartidos.",
        },
        body: {
          en: "At the heart of Apple Woods stands the Clubhouse, a welcoming gathering place designed to bring neighbors together and serve as the social center of the community. More than just a building, it is a destination where residents can connect, relax, learn, celebrate, and create lasting memories with family and friends.\n\nUpon entering, residents and guests will be welcomed by an inviting lobby, comfortable lounge spaces, and a café-style coffee bar designed for casual conversations, social gatherings, or simply enjoying a quiet moment throughout the day.\n\nThe Clubhouse will also feature a dedicated study and library area where students can collaborate on homework, residents can enjoy quiet reading, and homeowners can conveniently access printing and other basic office services. Reflecting Apple Woods' appreciation for both innovation and tradition, this space will include a unique display of historic technology and communication devices, creating a small museum-like experience that celebrates how far society has evolved while preserving an appreciation for the past. Residents may also enjoy a collection of books available for reading and community checkout.\n\nFor meetings, educational programs, and entertainment, the Clubhouse will include a private conference room along with a theater-style auditorium designed to host presentations, seminars, community meetings, movie nights, and special events throughout the year.\n\nA dedicated game room will provide opportunities for friendly competition and spontaneous fun, featuring activities such as billiards, table tennis, board games, and other recreational pursuits for residents of all ages.\n\nServing as the activity hub of Apple Woods, a multipurpose activity center will host a variety of scheduled programs and social events designed to foster community engagement. From poker nights, bingo tournaments, video game competitions, hobby workshops, educational classes, arts and crafts, and seasonal celebrations, this dynamic space will offer opportunities for residents of every generation to participate, learn new skills, build friendships, and enjoy an active community lifestyle.\n\nThoughtfully designed to support connection, recreation, lifelong learning, and entertainment, the Apple Woods Clubhouse represents the community's commitment to creating a vibrant neighborhood where residents can enjoy meaningful experiences and a true sense of belonging.",
          es: "En el corazón de Apple Woods se encuentra la Casa Club, un espacio acogedor diseñado para reunir a los vecinos y servir como el centro social de la comunidad. Más que un simple edificio, es un lugar donde los residentes pueden conectarse, relajarse, aprender, celebrar y crear recuerdos duraderos con familiares y amigos.\n\nAl ingresar, los residentes y visitantes serán recibidos por un elegante vestíbulo, cómodas áreas de descanso y una cafetería con estación de café estilo lounge, diseñada para conversaciones informales, reuniones sociales o simplemente para disfrutar de un momento de tranquilidad durante el día.\n\nLa Casa Club también contará con un área dedicada de estudio y biblioteca donde los estudiantes podrán colaborar en tareas escolares, los residentes podrán disfrutar de la lectura en un ambiente tranquilo y los propietarios tendrán acceso conveniente a servicios básicos de impresión y oficina. Como reflejo del aprecio de Apple Woods por la innovación y la tradición, este espacio incluirá una singular exhibición de dispositivos históricos de tecnología y comunicación, creando una experiencia similar a un pequeño museo que celebra la evolución de la sociedad mientras preserva el valor del pasado. Los residentes también podrán disfrutar de una colección de libros disponibles para lectura y préstamo comunitario.\n\nPara reuniones, programas educativos y entretenimiento, la Casa Club incluirá una sala de conferencias privada y un auditorio estilo cine diseñado para albergar presentaciones, seminarios, reuniones comunitarias, noches de cine y eventos especiales durante todo el año.\n\nUna sala de juegos dedicada ofrecerá oportunidades para la competencia amistosa y la diversión espontánea, con actividades como billar, tenis de mesa, juegos de mesa y otras opciones recreativas para residentes de todas las edades.\n\nComo centro de actividades de Apple Woods, un salón multifuncional albergará una amplia variedad de programas organizados y eventos sociales diseñados para fomentar la participación comunitaria. Desde noches de póker, torneos de bingo, competencias de videojuegos, talleres de pasatiempos, clases educativas, actividades artísticas y manualidades, hasta celebraciones de temporada, este dinámico espacio ofrecerá oportunidades para que residentes de todas las generaciones participen, aprendan nuevas habilidades, desarrollen amistades y disfruten de un estilo de vida comunitario activo.\n\nDiseñada cuidadosamente para fomentar la convivencia, la recreación, el aprendizaje continuo y el entretenimiento, la Casa Club de Apple Woods representa el compromiso de la comunidad con la creación de un vecindario vibrante donde los residentes puedan disfrutar de experiencias significativas y un verdadero sentido de pertenencia.",
        },
      },
      {
        term: { en: "Gym", es: "Gimnasio" },
        image: "/assets/life-gym.jpg",
        detail: {
          en: "Fitness access inside the community, without leaving the neighborhood.",
          es: "Acceso a fitness dentro de la comunidad, sin salir del vecindario.",
        },
      },
      {
        term: { en: "Pool", es: "Piscina" },
        image: "/assets/aw-pool-slide.jpg",
        detail: {
          en: "A shared outdoor amenity for family time, relaxation, and weekend use.",
          es: "Un servicio compartido al aire libre para tiempo en familia, relajación y uso los fines de semana.",
        },
        body: {
          en: "The Apple Woods Pool Complex is designed to be far more than a swimming pool—it is a vibrant outdoor destination where families, friends, and neighbors can gather, relax, play, and create lasting memories together.\n\nInspired by the atmosphere of a private resort, the pool will feature a unique terraced design that gently descends in levels, creating a natural amphitheater-like setting. This innovative layout allows residents to comfortably enjoy movies, sporting events, concerts, music videos, and special presentations displayed on a larger-than-life LED video wall positioned above the outdoor grilling and entertainment area.\n\nThroughout the pool complex, thoughtfully placed tables, seating areas, and shaded gathering spaces will provide the perfect setting for family cookouts, celebrations, casual dining, or simply relaxing while enjoying the surrounding amenities. Residents can watch a favorite game, enjoy an outdoor movie night, or unwind while taking in the soothing sounds of decorative fountains and cascading waterfalls integrated throughout the pool environment.\n\nThe experience is further enhanced by interactive water features designed for all ages, creating an atmosphere that is both exciting and relaxing. As the centerpiece of aquatic fun, an exciting figure-eight water slide will provide endless entertainment, laughter, and adventure for children and adults alike.\n\nWhether gathering for a community event, enjoying a weekend barbecue, spending quality time with family, or simply escaping the stresses of everyday life, the Apple Woods Pool Complex is designed to deliver a resort-inspired experience that brings people together and elevates everyday living.",
          es: "El Complejo de Piscinas de Apple Woods ha sido concebido para ser mucho más que una simple alberca; será un vibrante destino al aire libre donde familias, amigos y vecinos podrán reunirse, relajarse, divertirse y crear recuerdos inolvidables juntos.\n\nInspirado en la atmósfera de un resort privado, el complejo contará con un diseño único de niveles escalonados que descienden suavemente, creando un entorno similar a un anfiteatro natural. Este innovador concepto permitirá a los residentes disfrutar cómodamente de películas, eventos deportivos, conciertos, videos musicales y presentaciones especiales proyectadas en una pantalla LED de gran formato ubicada sobre el área de asadores y entretenimiento al aire libre.\n\nA lo largo del complejo se distribuirán cuidadosamente mesas, áreas de descanso y espacios sombreados para reuniones, ofreciendo el escenario perfecto para parrilladas familiares, celebraciones, comidas informales o simplemente para relajarse mientras se disfrutan las amenidades circundantes. Los residentes podrán ver su evento favorito, disfrutar de una noche de cine al aire libre o descansar mientras escuchan el relajante sonido de fuentes ornamentales y cascadas integradas en todo el entorno acuático.\n\nLa experiencia se complementará con atractivos elementos interactivos de agua diseñados para todas las edades, creando un ambiente que combina diversión y relajación. Como protagonista de la diversión acuática, un emocionante tobogán en forma de ocho ofrecerá horas interminables de entretenimiento, risas y aventura para niños y adultos por igual.\n\nYa sea para participar en un evento comunitario, disfrutar de una parrillada de fin de semana, compartir tiempo de calidad con la familia o simplemente escapar del estrés cotidiano, el Complejo de Piscinas de Apple Woods ha sido diseñado para ofrecer una experiencia inspirada en los mejores resorts, reuniendo a las personas y elevando la calidad de vida de la comunidad.",
        },
      },
      {
        // Client doc 2026-09-07 (Alfonso, WhatsApp): new heading + body, verbatim.
        // bodyImage: Angel's graphic (last version, 2026-08-26) goes here once the
        // file arrives; it renders inside "Read more" after the text.
        term: {
          en: "Outdoor Spaces — Active Living, Teams & Traditions",
          es: "Espacios al Aire Libre — Vida Activa, Equipos y Tradiciones",
        },
        image: "/assets/life-outdoor-spaces.jpg",
        bodyImage: "",
        bodyImageAlt: {
          en: "Apple Woods outdoor spaces and youth teams graphic",
          es: "Gráfico de espacios al aire libre y equipos juveniles de Apple Woods",
        },
        detail: {
          en: "Recreation areas planned for sports, play, celebrations, and time together outdoors.",
          es: "Áreas recreativas pensadas para deportes, juegos, celebraciones y convivencia al aire libre.",
        },
        body: {
          en: "At Apple Woods, outdoor recreation is designed to be much more than a collection of places to play. It is part of our vision for an active, connected, and family-oriented community where children can step outside, meet their neighbors, discover a sport they enjoy, and eventually have the opportunity to play together as a team representing Apple Woods. Our outdoor spaces are planned to support activities such as flag football, volleyball, pickleball, basketball, badminton, mini soccer, tennis, playground activities, traditional outdoor games, community celebrations, piñatas, and many other gatherings and events.\n\nFrom organized activities to an afternoon pickup game, the goal is simple: give our children more reasons to play outside, build friendships, develop confidence, and create the kind of childhood memories that last a lifetime. As participation grows, Apple Woods intends to encourage the formation of our own intercommunity youth teams and programs. When there is sufficient interest in a particular sport and appropriate opportunities are available, those teams may progress from friendly games within Apple Woods to participating against other communities, clubs, or similar recreational leagues. A child who first learns to throw a football, serve a volleyball, shoot a basket, or kick a soccer ball just a few steps from home could someday put on an Apple Woods jersey and represent the community alongside friends they grew up with.\n\nAnd this vision isn't only about the kids. Parents and residents can become part of it too—coaching, volunteering, organizing teams, helping with practices, supporting events, or simply becoming the enthusiastic cheering section on game day. We want sports to create connections not only between children, but among entire families.\n\nApple Woods also believes those accomplishments deserve to become part of our community's story. Team trophies, championships, photographs, awards, and special recognitions may be proudly displayed in the Apple Woods Museum, preserving the achievements of the young people and volunteers who helped build these traditions. Years later, we want a child to be able to walk through that museum with their own family, point to a photograph or trophy, and say, “I was part of that team.”\n\nBecause at Apple Woods, outdoor spaces aren't simply amenities. They're places where friendships begin, teams are formed, parents get involved, traditions are created, and happy memories become part of our community's legacy.",
          es: "En Apple Woods, la recreación al aire libre está diseñada para ser mucho más que una colección de espacios para jugar. Es parte de nuestra visión de crear una comunidad activa, conectada y orientada a la familia, donde los niños puedan salir de casa, conocer a sus vecinos, descubrir algún deporte que les apasione y, con el tiempo, tener la oportunidad de jugar juntos como un equipo representando a Apple Woods. Nuestros espacios al aire libre están planeados para fomentar actividades como flag football, voleibol, pickleball, básquetbol, bádminton, mini fútbol, tenis, áreas de juegos infantiles, juegos tradicionales, celebraciones comunitarias, piñatas y muchas otras actividades y eventos.\n\nDesde actividades organizadas hasta un partido improvisado por la tarde, el objetivo es sencillo: darles a nuestros niños más razones para salir a jugar, hacer amistades, desarrollar confianza y crear esos recuerdos de infancia que permanecen toda la vida. A medida que crezca la participación, Apple Woods buscará impulsar la formación de nuestros propios equipos y programas deportivos juveniles dentro de la comunidad. Cuando exista suficiente interés en algún deporte y se presenten las oportunidades adecuadas, estos equipos podrán evolucionar desde partidos amistosos dentro de Apple Woods hasta competir con otras comunidades, clubes o ligas recreativas similares. Un niño que aprenda a lanzar un balón, hacer un saque de voleibol, encestar o patear una pelota a unos cuantos pasos de su casa podría algún día ponerse la camiseta de Apple Woods y representar a su comunidad junto a los amigos con quienes creció.\n\nY esta visión no es solamente para los niños. Los padres y demás residentes también podrán formar parte de ella: entrenando, participando como voluntarios, ayudando a organizar equipos y prácticas, apoyando eventos o simplemente convirtiéndose en la mejor porra durante los partidos. Queremos que el deporte no solamente cree vínculos entre nuestros niños, sino también entre familias enteras.\n\nEn Apple Woods creemos, además, que esos logros merecen convertirse en parte de la historia de nuestra comunidad. Trofeos de los equipos, campeonatos, fotografías, reconocimientos y logros especiales podrán exhibirse con orgullo en el Museo de Apple Woods, preservando las historias de los jóvenes y voluntarios que ayudaron a construir estas tradiciones. Queremos que, muchos años después, uno de esos niños pueda recorrer el museo con su propia familia, señalar una fotografía o un trofeo y decir con orgullo: “Yo fui parte de ese equipo.”\n\nPorque en Apple Woods, los espacios al aire libre no son simplemente amenidades. Son lugares donde nacen amistades, se forman equipos, los padres se involucran, se crean tradiciones y los recuerdos felices se convierten en parte del legado de nuestra comunidad.",
        },
      },
      {
        term: { en: "Event Center", es: "Salón de eventos" },
        image: "/assets/life-event-center.jpg",
        detail: {
          en: "An indoor venue for larger gatherings, celebrations, and community events year-round.",
          es: "Un espacio interior para reuniones, celebraciones y eventos comunitarios durante todo el año.",
        },
        body: {
          en: "Completing the social heart of Apple Woods will be a thoughtfully designed indoor event center, created to accommodate larger gatherings, celebrations, and community events. This versatile venue will provide residents with an inviting space to host birthdays, anniversaries, holiday parties, family reunions, and other special occasions throughout the year.\n\nTo further enhance the community experience, the event center will support food and beverage service for both indoor functions and adjacent outdoor amenities, including the resort-style pool area. Whether hosting an intimate gathering or a larger celebration, residents will have access to a comfortable and convenient setting designed to bring family, friends, and neighbors together.\n\nAs Apple Woods continues to grow, this expanded social space has been planned to meet the evolving needs of the community, ensuring that residents can enjoy exceptional amenities and memorable experiences for years to come.",
          es: "Como complemento final al corazón social de Apple Woods, se incorporará un elegante centro de eventos interior diseñado para albergar reuniones, celebraciones y eventos comunitarios de mayor escala. Este espacio versátil brindará a los residentes un entorno acogedor y funcional para celebrar cumpleaños, aniversarios, festividades, reuniones familiares y muchas otras ocasiones especiales a lo largo del año.\n\nPara enriquecer aún más la experiencia de la comunidad, el centro de eventos contará con la capacidad de apoyar servicios de alimentos y bebidas tanto para actividades interiores como para las amenidades exteriores adyacentes, incluida el área de alberca estilo resort. Ya sea para una reunión íntima o una celebración de mayor tamaño, los residentes dispondrán de un espacio cómodo y conveniente diseñado para reunir a familiares, amigos y vecinos.\n\nA medida que Apple Woods continúe creciendo, este espacio social ampliado ha sido concebido para responder a las necesidades futuras de la comunidad, garantizando que los residentes disfruten de amenidades excepcionales y experiencias memorables durante muchos años.",
        },
      },
      {
        term: { en: "Maintained surroundings", es: "Entorno mantenido" },
        image: "/assets/life-maintained-surroundings.jpg",
        detail: {
          en: "Landscaping, lighting, and standards that help the community stay beautiful.",
          es: "Paisajismo, iluminación y estándares que ayudan a que la comunidad se mantenga bella.",
        },
      },
    ],
    imageAlt: {
      en: "Apple Woods clubhouse exterior render",
      es: "Representación exterior de la casa club de Apple Woods",
    },
  },
  phaseOne: {
    eyebrow: { en: "Phase 1 Homesites", es: "Lotes de la Fase 1" },
    heading: {
      en: "The first opportunity to own in Apple Woods.",
      es: "La primera oportunidad de ser propietario en Apple Woods.",
    },
    // Read more / less for long lot-card bodies (e.g. the Premier collection).
    readMore: { en: "Read more", es: "Leer más" },
    readLess: { en: "Read less", es: "Leer menos" },
    body: {
      en: "Phase 1 is the first release inside Apple Woods and gives early buyers a strong opportunity to secure a homesite at introductory pricing.",
      es: "La Fase 1 es el primer lanzamiento dentro de la comunidad de Apple Woods y se espera que sea el punto de entrada con el precio más bajo. Revisa la disponibilidad, compara los tipos de lotes y confirma los precios actuales antes de que los lotes preferidos pasen a estar reservados, bajo contrato o vendidos.",
    },
    lots: [
      {
        // ES name from doc ("Lotes estándar") — diverges from EN "Classic Homesites".
        name: { en: "Classic Homesites", es: "Lotes estándar" },
        price: { en: "Expected from $85,000", es: "Se esperan desde $85,000" },
        // Lot render — click expands to a full-screen lightbox, same as the
        // map / price sheet above. Swap the JPEG at this path to update.
        image: "/assets/lot-classic.jpg",
        body: {
          en: "An attractive introductory opportunity to join the Apple Woods community, with Phase 1 homesites offered at early-release pricing designed to provide exceptional value within a thoughtfully planned neighborhood.",
          es: "Un fuerte punto de entrada a la comunidad de Apple Woods.",
        },
      },
      {
        name: { en: "Premier Homesites", es: "Lotes prémium" },
        price: { en: "Expected from $95,000", es: "Se esperan desde $95,000" },
        image: "/assets/aw-water-walk.jpg",
        body: {
          en: "A limited collection near the planned clubhouse, river walk, natural water elements, landscaping, and resort-style pool area.",
          es: "Terrenos seleccionados cerca del área planificada de la casa club.",
        },
      },
      {
        name: { en: "Corner Homesites", es: "Lotes en esquina" },
        price: { en: "Priced individually", es: "Precio individual" },
        image: "/assets/lot-corner.jpg",
        body: {
          en: "Larger or irregular homesites priced by size and location.",
          es: "Lotes más grandes o irregulares con precio según el tamaño y la ubicación.",
        },
      },
    ],
    phaseNote: {
      en: "Lot status can change quickly once buyers begin confirming selections. As availability decreases, future pricing may increase.",
      es: "El estado de los lotes puede cambiar rápidamente una vez que los compradores comienzan a confirmar las selecciones. A medida que la disponibilidad disminuya, los precios futuros podrían aumentar.",
    },
    priceSheet: {
      // No doc Spanish — direct translation.
      eyebrow: { en: "Current Price Sheet", es: "Lista de precios actual" },
      heading: { en: "Developer's introductory offer", es: "Oferta introductoria del desarrollador" },
      body: {
        en: "Review the latest Phase 1 homesite list, suggested retail pricing, and introductory offer pricing.",
        es: "Revisa la lista más reciente de lotes de la Fase 1, los precios de venta sugeridos y los precios de la oferta introductoria.",
      },
    },
    mapAlt: {
      en: "Apple Woods Phase 1 sold lot map",
      es: "Mapa de lotes vendidos de la Fase 1 de Apple Woods",
    },
    masterplanHint: { en: "Tap to explore the lot map", es: "Toca para explorar el mapa de lotes" },
    priceSheetHint: { en: "Tap to view the price sheet", es: "Toca para ver la lista de precios" },
    pricePreviewAlt: {
      en: "Apple Woods Phase 1 developer introductory offer price sheet preview",
      es: "Vista previa de la lista de precios de la oferta introductoria del desarrollador de la Fase 1 de Apple Woods",
    },
    // Phase switcher: each entry swaps the lot map + price sheet shown in the
    // document cards / lightboxes. Image paths are prefixes — the component
    // appends ".png" (card preview) and "@2x.png" (lightbox).
    phaseSwitchLabel: { en: "Choose a phase", es: "Elige una fase" },
    phases: [
      {
        key: "1",
        label: { en: "Phase 1", es: "Fase 1" },
        map: "/assets/phase-1-aw-sold-map",
        mapAlt: { en: "Apple Woods Phase 1 lot map", es: "Mapa de lotes de la Fase 1 de Apple Woods" },
        priceSheet: "/assets/apple-woods-price-sheet-v3",
        priceSheetAlt: {
          en: "Apple Woods Phase 1 developer introductory offer price sheet",
          es: "Lista de precios de la oferta introductoria del desarrollador de la Fase 1 de Apple Woods",
        },
      },
      {
        key: "2",
        label: { en: "Phase 2", es: "Fase 2" },
        map: "/assets/phase-2-aw-sold-map",
        mapAlt: { en: "Apple Woods Phase 2 lot map", es: "Mapa de lotes de la Fase 2 de Apple Woods" },
        priceSheet: "/assets/apple-woods-price-sheet-phase-2",
        priceSheetAlt: {
          en: "Apple Woods Phase 2 developer suggested retail price sheet",
          es: "Lista de precios de venta sugeridos del desarrollador de la Fase 2 de Apple Woods",
        },
      },
    ],
  },
  location: {
    eyebrow: { en: "Location", es: "Ubicación" },
    heading: {
      en: "A private community with fast access to where Brownsville is growing.",
      es: "Una comunidad privada con acceso rápido a donde Brownsville está creciendo.",
    },
    body: {
      en: "Apple Woods combines everyday convenience with regional access to major highways, Rancho Viejo, the Port of Brownsville, South Padre Island, and key commercial areas.",
      es: "Apple Woods ofrece a los residentes acceso a elementos esenciales diarios, carreteras clave, Rancho Viejo y el corredor de crecimiento portuario desde una comunidad diseñada para sentirse protegida, moderna y diferenciada.",
    },
    imageAlt: { en: "Apple Woods location context", es: "Contexto de ubicación de Apple Woods" },
    mapHint: { en: "Tap to explore the map", es: "Toca para explorar el mapa" },
    mapOpenLabel: { en: "Open the Brownsville location map", es: "Abrir el mapa de ubicación de Brownsville" },
  },
  contact: {
    heading: {
      // No doc Spanish for the inquiry heading block — direct translation.
      eyebrow: { en: "3.0 Inquiry", es: "3.0 Consulta" },
      title: { en: "Tell us what you are thinking.", es: "Cuéntanos qué estás pensando." },
      body: {
        en: "Share as much or as little as you want. A few details help us point you toward the right next step.",
        es: "Comparte tanto o tan poco como quieras. Unos pocos detalles nos ayudan a orientarte hacia el siguiente paso adecuado.",
      },
    },
    direct: {
      eyebrow: { en: "Direct contact", es: "Contacto directo" },
      heading: { en: "Rather talk it through?", es: "¿Prefieres hablarlo?" },
      body: {
        en: "Call or message if that is easier. The form is here to start the conversation, not make you do homework.",
        es: "Llama o escribe si es más fácil. El formulario está aquí para iniciar la conversación, no para hacerte tarea.",
      },
      links: [
        {
          label: { en: "Call sales", es: "Llamar a ventas" },
          detail: "956-455-9555",
          href: "tel:+19564559555",
          icon: "phone",
        },
        {
          label: { en: "Email", es: "Correo electrónico" },
          detail: "info@applewoods.us",
          href: "mailto:alfonso@park-street.us",
          icon: "mail",
        },
        {
          label: { en: "WhatsApp", es: "WhatsApp" },
          detail: "956-455-9555",
          href: "https://wa.me/19564559555",
          icon: "message",
        },
      ],
      nextLabel: { en: "What happens next", es: "Qué sigue" },
      nextBody: {
        en: "We confirm current Phase 1 availability, answer first questions, and help you understand which lots fit what you are considering.",
        es: "Confirmamos la disponibilidad actual de la Fase 1, respondemos las primeras preguntas y te ayudamos a entender qué lotes se ajustan a lo que estás considerando.",
      },
    },
    form: {
      eyebrow: { en: "Quick note", es: "Nota rápida" },
      title: { en: "What would make this useful for you?", es: "¿Qué haría esto útil para ti?" },
      body: {
        en: "Only a phone or email is needed so we can reply. Everything else is optional context.",
        es: "Solo se necesita un teléfono o correo electrónico para poder responderte. Todo lo demás es contexto opcional.",
      },
      labels: {
        name: { en: "Name", es: "Nombre" },
        phone: { en: "Phone", es: "Teléfono" },
        email: { en: "Email", es: "Correo electrónico" },
        notes: { en: "Questions or comments", es: "Preguntas o comentarios" },
        lotType: { en: "Lot type", es: "Tipo de lote" },
        budget: { en: "Budget", es: "Presupuesto" },
        timing: { en: "Timing", es: "Plazo" },
        interest: { en: "What are you interested in?", es: "¿Qué te interesa?" },
      },
      placeholders: {
        name: { en: "Your name", es: "Tu nombre" },
        phone: { en: "Phone number", es: "Número de teléfono" },
        email: { en: "Email address", es: "Correo electrónico" },
        notes: {
          en: "Tell us what you are considering. Share as much or as little as you want.",
          es: "Cuéntanos qué estás considerando. Comparte tanto o tan poco como quieras.",
        },
      },
      selects: {
        lotInterest: [
          { value: "not-sure", label: { en: "Not sure yet", es: "Aún no estoy seguro" } },
          { value: "standard", label: { en: "Standard lot", es: "Lote estándar" } },
          { value: "premier", label: { en: "Premier lot", es: "Lote prémium" } },
          { value: "corner", label: { en: "Corner lot", es: "Lote en esquina" } },
        ],
        budget: [
          { value: "not-sure", label: { en: "Not sure yet", es: "Aún no estoy seguro" } },
          { value: "85-95", label: { en: "$85k to $95k", es: "$85k a $95k" } },
          { value: "95-plus", label: { en: "$95k+", es: "$95k+" } },
          { value: "depends", label: { en: "Depends on lot", es: "Depende del lote" } },
        ],
        timeline: [
          { value: "not-sure", label: { en: "Not sure yet", es: "Aún no estoy seguro" } },
          { value: "now", label: { en: "Ready now", es: "Listo ahora" } },
          { value: "soon", label: { en: "Next 30 days", es: "Próximos 30 días" } },
          { value: "later", label: { en: "Planning ahead", es: "Planeando a futuro" } },
        ],
      },
      interestOptions: [
        { value: "availability", label: { en: "Check availability", es: "Consultar disponibilidad" } },
        { value: "buy", label: { en: "Buy a lot", es: "Comprar un lote" } },
        { value: "build", label: { en: "Build a home", es: "Construir una casa" } },
      ],
      submit: { en: "Send inquiry", es: "Enviar consulta" },
      submitSending: { en: "Sending...", es: "Enviando..." },
      submitSent: { en: "Sent", es: "Enviado" },
      successMessage: {
        en: "Sent. We have enough to start the conversation.",
        es: "Enviado. Tenemos lo necesario para iniciar la conversación.",
      },
      errorMessage: {
        en: "Something did not send. Please call, text, email, or WhatsApp and we can take it from there.",
        es: "Algo no se envió. Llama, envía un mensaje, escribe un correo o usa WhatsApp y seguimos desde ahí.",
      },
      verificationError: {
        en: "We could not load the secure form check. Please retry before sending.",
        es: "No pudimos cargar la verificación segura del formulario. Intenta de nuevo antes de enviarlo.",
      },
      verificationRetry: { en: "Retry secure check", es: "Reintentar verificación" },
      errors: {
        contact: {
          en: "Add a phone or email so we can reply.",
          es: "Agrega un teléfono o correo electrónico para poder responderte.",
        },
        email: {
          en: "Use a valid email, or leave it blank and add a phone.",
          es: "Usa un correo electrónico válido, o déjalo en blanco y agrega un teléfono.",
        },
      },
      requiredHint: {
        en: "Only a phone or email is needed. Everything else can stay blank.",
        es: "Solo se necesita un teléfono o correo electrónico. Todo lo demás puede quedar en blanco.",
      },
    },
    faq: {
      eyebrow: {
        en: "Before Phase 1 availability changes",
        es: "Antes de que cambie la disponibilidad de la Fase 1",
      },
      heading: { en: "Confirm the details that matter.", es: "Confirma los detalles que importan." },
      // FAQ is grouped by the doc's categories. Group count/order must match client.js
      // (parity guard compares array lengths). New doc entries come from faqDocItems.
      // 10 reasons block — client doc 2026-09: "al inicio del Q&A, separado y sin tema".
      intro: {
        heading: { en: "10 Reasons to Live or Invest in Apple Woods", es: "10 razones para vivir o invertir en Apple Woods" },
        items: [
          { title: { en: "Master-Planned Community", es: "Comunidad Planeada" }, body: { en: "Thoughtfully designed from the ground up to provide a higher quality of life, enhanced security, and a superior residential experience.", es: "Diseñada desde cero para ofrecer una mejor calidad de vida, mayor seguridad y una experiencia residencial superior." } },
          { title: { en: "Strong Appreciation Potential", es: "Plusvalía Potencial" }, body: { en: "A growing development featuring unique amenities, infrastructure, and lifestyle concepts designed to support long-term property value.", es: "Desarrollo en crecimiento con infraestructura, amenidades y conceptos diferenciadores que impulsan el valor de la inversión." } },
          { title: { en: "Smart Living™", es: "Smart Living™" }, body: { en: "Integrated technology designed to improve communication, convenience, transparency, and community engagement.", es: "Tecnología integrada para facilitar la comunicación, la administración y la experiencia de propietarios y residentes." } },
          { title: { en: "Resort-Style Amenities", es: "Amenidades Tipo Resort" }, body: { en: "A collection of recreational and leisure spaces created to help families relax, connect, and enjoy everyday life.", es: "Alberca, áreas recreativas, espacios de convivencia y amenidades pensadas para toda la familia." } },
          { title: { en: "Exclusive Water Walk™", es: "Water Walk™" }, body: { en: "A beautifully landscaped water corridor featuring natural water elements, exotic landscaping, and peaceful gathering spaces.", es: "Exclusivo corredor con elementos acuáticos, paisajismo y áreas de descanso que conectan las zonas premium con las amenidades principales." } },
          { title: { en: "Community Orchard™", es: "Nuestro Huerto™" }, body: { en: "Tree-lined streets featuring fruit trees that reinforce the identity, beauty, and unique character of the neighborhood.", es: "Cada calle contará con árboles frutales seleccionados para reforzar la identidad, belleza y sentido de comunidad." } },
          { title: { en: "Security & Peace of Mind", es: "Seguridad y Tranquilidad" }, body: { en: "Controlled access, modern monitoring systems, and community-focused design intended to promote safety and tranquility.", es: "Acceso controlado, monitoreo tecnológico y diseño enfocado en brindar tranquilidad a residentes y visitantes." } },
          { title: { en: "Active Community Lifestyle", es: "Comunidad Activa" }, body: { en: "Programs, activities, and gathering spaces designed to encourage interaction, participation, and a strong sense of belonging.", es: "Programas, actividades y espacios que promueven la convivencia entre vecinos y fortalecen el sentido de pertenencia." } },
          { title: { en: "Builder-Friendly Opportunity", es: "Oportunidad para Constructores" }, body: { en: "Architectural standards, quality infrastructure, and a distinctive community vision that support attractive, high-value residential construction.", es: "Lineamientos arquitectónicos, infraestructura moderna y una comunidad diferenciada que favorece proyectos residenciales de alto valor." } },
          { title: { en: "A Unique Concept in the Region", es: "Un Concepto Único en la Región" }, body: { en: "Apple Woods combines nature, technology, amenities, and community into a lifestyle experience unlike traditional subdivisions.", es: "Apple Woods combina naturaleza, tecnología, amenidades y comunidad en una propuesta difícil de encontrar en desarrollos tradicionales." } },
        ],
      },
      groups: [
        {
          label: { en: "General", es: "General" },
          items: [
            {
              question: { en: "Which homesites are still available?", es: "¿Qué lotes siguen disponibles?" },
              answer: {
                en: "Availability changes quickly. Some homesites may be pending but not fully secured until deposit is received, so buyers should confirm current status with the sales team.",
                es: "La disponibilidad puede cambiar rápidamente a medida que los compradores reservan o pasan a estar bajo contrato. Confirma el estado actual con el equipo de ventas.",
              },
            },
            {
              question: { en: "Can I design my own home?", es: "¿Puedo diseñar mi propia casa?" },
              answer: {
                en: "Yes. Homeowners can design custom homes, subject to architectural review, so each home supports the community's standards and long-term curb appeal.",
                es: "Sí. Las casas pasan por una revisión arquitectónica para proteger el atractivo exterior y los estándares de la comunidad.",
              },
            },
            faqDocItems.fillDirt,
            faqDocItems.traditional,
            faqDocItems.fountainsTech,
          ],
        },
        {
          label: { en: "Cost", es: "Costos" },
          items: [
            {
              question: {
                en: "I hear I can find cheaper lots elsewhere. Why Apple Woods?",
                es: "Escuché que puedo encontrar lotes más baratos en otro lugar. ¿Por qué Apple Woods?",
              },
              answer: {
                en: "Some lots may cost less, but Apple Woods offers more than land: standards, landscaping, technology, amenities, security, services, and long-term planning that help protect the neighborhood experience.",
                es: "Algunos lotes pueden costar menos, pero Apple Woods ofrece más que un terreno: estándares, paisajismo, tecnología, amenidades, seguridad, servicios y planificación a largo plazo que ayudan a proteger la experiencia del vecindario.",
              },
            },
            {
              question: { en: "Will prices stay the same?", es: "¿Se mantendrán los precios?" },
              answer: {
                en: "Phase 1 is expected to offer the strongest introductory pricing. As inventory becomes more limited, later pricing is expected to increase.",
                es: "Se espera que la Fase 1 sea el punto de entrada con el precio más bajo. A medida que la disponibilidad disminuya, los precios futuros podrían aumentar.",
              },
            },
            {
              question: { en: "Are the dues expensive?", es: "¿Las cuotas son caras?" },
              answer: {
                en: "No. Shared community costs help keep dues manageable while supporting landscaping, services, amenities, and neighborhood quality.",
                es: "No. Los costos compartidos de la comunidad ayudan a mantener las cuotas accesibles mientras respaldan el paisajismo, los servicios, las amenidades y la calidad del vecindario.",
              },
            },
            {
              question: { en: "Are dues mandatory?", es: "¿Las cuotas son obligatorias?" },
              answer: {
                en: "Yes. Core dues are required for all homeowners and help maintain shared services, appearance, and community quality. Optional services are paid only by residents who choose them.",
                es: "Sí. Las cuotas básicas son obligatorias para todos los propietarios y ayudan a mantener los servicios compartidos, la apariencia y la calidad de la comunidad. Los servicios opcionales los pagan solo los residentes que los eligen.",
              },
            },
            {
              question: {
                en: "Am I responsible for all dues when I purchase?",
                es: "¿Soy responsable de todas las cuotas al comprar?",
              },
              answer: {
                en: "No. A reduced dues structure applies during lot ownership before construction, covering basic maintenance and essential services. Full dues begin after the home is built.",
                es: "No. Durante la propiedad del lote, antes de construir, aplica una estructura de cuotas reducida que cubre el mantenimiento básico y los servicios esenciales. Las cuotas completas comienzan después de construir la casa.",
              },
            },
            faqDocItems.cic,
            faqDocItems.saveMoney,
            faqDocItems.propertyValue,
            faqDocItems.payTwice,
          ],
        },
        {
          label: { en: "Size", es: "Tamaño" },
          items: [
            {
              question: { en: "Do I have to build a huge home?", es: "¿Tengo que construir una casa enorme?" },
              answer: {
                en: "No. Apple Woods focuses on design, curb appeal, and standards rather than oversized homes. The minimum covered area is 2,000 sq. ft.",
                es: "No. Apple Woods se enfoca en el diseño, el atractivo exterior y los estándares, no en casas de gran tamaño. El área cubierta mínima es de 2,000 pies cuadrados.",
              },
            },
            {
              question: {
                en: "If I build an expensive home, will less expensive homes affect my value?",
                es: "Si construyo una casa costosa, ¿las casas menos costosas afectarán su valor?",
              },
              answer: {
                en: "No. Homes can vary in size and budget, but architectural and landscaping standards protect curb appeal, consistency, and long-term community value.",
                es: "No. Las casas pueden variar en tamaño y presupuesto, pero los estándares arquitectónicos y de paisajismo protegen el atractivo exterior, la consistencia y el valor de la comunidad a largo plazo.",
              },
            },
            {
              question: { en: "How big are the homesites?", es: "¿De qué tamaño son los lotes?" },
              answer: {
                en: "Most homesites are about 6,000 sq. ft., typically 60 ft. wide by 100 ft. deep, with standard setbacks of 25 ft. front, 5 ft. sides, and 10 ft. rear.",
                es: "La mayoría de los lotes miden aproximadamente 6,000 pies cuadrados, normalmente 60 pies de ancho por 100 pies de profundidad, con retiros estándar de 25 pies al frente, 5 pies a los lados y 10 pies atrás.",
              },
            },
            {
              question: {
                en: "Are 6,000 sq. ft. homesites too small?",
                es: "¿Los lotes de 6,000 pies cuadrados son demasiado pequeños?",
              },
              answer: {
                en: "Not necessarily. Apple Woods pairs efficient homesites with shared amenities, green areas, pool, fitness, and gathering spaces, so owners can invest in the home while the community provides more of the lifestyle.",
                es: "No necesariamente. Apple Woods combina lotes eficientes con amenidades compartidas, áreas verdes, piscina, fitness y espacios de reunión, para que los propietarios inviertan en la casa mientras la comunidad aporta más estilo de vida.",
              },
            },
            {
              question: { en: "Can I build on two lots?", es: "¿Puedo construir en dos lotes?" },
              answer: {
                en: "Combining lots may be permitted in select cases. If approved, added architectural and entrance-design guidelines may apply.",
                es: "Combinar lotes puede permitirse en casos selectos. Si se aprueba, pueden aplicar lineamientos adicionales de arquitectura y diseño de entrada.",
              },
            },
          ],
        },
        {
          label: { en: "Shared Standards", es: "Estándares compartidos" },
          items: [
            {
              question: { en: "What are the restrictions?", es: "¿Cuáles son las restricciones?" },
              answer: {
                en: "Community standards cover home size, architecture, landscaping, maintenance, lighting, noise, colors, and outdoor storage to protect the community's appearance and quality of life.",
                es: "Los estándares de la comunidad cubren el tamaño de la casa, la arquitectura, el paisajismo, el mantenimiento, la iluminación, el ruido, los colores y el almacenamiento exterior para proteger la apariencia y la calidad de vida de la comunidad.",
              },
            },
            faqDocItems.vehicleWork,
            faqDocItems.garageEntertaining,
            faqDocItems.vehicleParking,
            faqDocItems.respectAmenities,
          ],
        },
        {
          label: { en: "Life", es: "Vida" },
          items: [
            faqDocItems.petBags,
            faqDocItems.guests,
            faqDocItems.fruitTrees,
            faqDocItems.exclusive,
            faqDocItems.smartLiving,
            faqDocItems.orchard,
            faqDocItems.securityGuard,
            faqDocItems.noise,
            faqDocItems.reading,
            faqDocItems.outdoorSpaces,
            faqDocItems.trashService,
            faqDocItems.designedFor,
            faqDocItems.sharedAmenities,
            faqDocItems.maintenanceTech,
            faqDocItems.futureAmenities,
          ],
        },
      ],
    },
  },
  footer: {
    message: {
      en: "Apple Woods is designed for a calmer way to live in Brownsville: organized, secure, beautiful, and built around everyday comfort.",
      es: "Apple Woods está diseñado para una forma más tranquila de vivir en Brownsville: organizada, segura, hermosa y construida en torno al confort cotidiano.",
    },
    facebookLabel: { en: "Apple Woods on Facebook", es: "Apple Woods en Facebook" },
    info: [
      "Brownsville, Texas",
      { en: "Phase 1 Homesites", es: "Lotes de la Fase 1" },
      { en: "Private Smart Living Community", es: "Comunidad privada de vida inteligente" },
    ],
    nav: [
      { href: "#different", label: { en: "Community", es: "Comunidad" } },
      { href: "#structured", label: { en: "Amenities", es: "Servicios" } },
      { href: "#life-inside", label: { en: "Live Here", es: "Vive aquí" } },
      { href: "#phase-one", label: { en: "Now", es: "Ahora" } },
      { href: "#location", label: { en: "Location", es: "Ubicación" } },
      { href: "#contact", label: { en: "Contact Us", es: "Contáctanos" } },
    ],
    copyright: "Copyright © Apple Woods 2026",
    backToTop: { en: "Back to top", es: "Volver arriba" },
  },
};
