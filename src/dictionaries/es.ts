import type { SiteDict } from './types';

export const es: SiteDict = {
  locale: 'es',
  navbar: {
    inicio: 'Inicio',
    nosotros: 'Nosotros',
    certificaciones: 'Certificaciones',
    proteccion: 'Protección',
    servicios: 'Servicios',
    contacto: 'Contacto',
    llamarAhora: 'Llamar Ahora',
    solicitarPresupuesto: 'Solicitar Presupuesto',
    abrirMenu: 'Abrir menú',
    basePath: '',
  },
  hero: {
    badge: 'Seguridad Certificada',
    title1: 'Redes de Protección',
    title2: 'para tu Hogar',
    description:
      'Especialistas en la instalación de <strong>redes de seguridad en toda el Área Metropolitana de Barcelona y alrededores</strong>. Protección certificada para niños y gatos en balcones y ventanas sin perder las vistas.',
    ctaPrimary: 'Pedir Presupuesto GRATIS',
    ctaSecondary: 'Ver Instalaciones',
    scrollHint: 'Descubre más',
    logoAlt: 'Preventiva Este - Instalación de Redes en Barcelona',
  },
  trustBar: {
    certified: 'CE Certificado',
    guarantee: 'Garantía',
    guaranteeHighlight: 'Total',
  },
  services: {
    title: 'Soluciones de Seguridad Integral',
    subtitle:
      'Adaptamos nuestras redes de protección a cualquier espacio y necesidad garantizando la máxima resistencia.',
    readMore: 'Leer más →',
    items: [
      {
        title: 'Mallas para Gatos',
        description:
          'Especialistas en redes de protección anti-caídas. Evita el ‘síndrome del paracaidista’ con nuestras mallas de seguridad.',
        href: '/proteccion#gatos',
      },
      {
        title: 'Seguridad Infantil',
        description:
          'Protección certificada para ventanas, balcones y escaleras. Sustitución de rejas con estética limpia.',
        href: '/proteccion#ninos',
      },
      {
        title: 'Control de Aves',
        description:
          'Solución definitiva contra palomas en Barcelona. Higiene y protección ética para tu edificio.',
        href: '/proteccion#aves',
      },
      {
        title: 'Redes Deportivas',
        description:
          'Redes de protección para canchas, pistas, campos de futbol, arenas, gimnasio y demás.',
      },
      {
        title: 'Mallas para Terrazas',
        description:
          'Seguridad y protección para sus terrazas y balcones sin impactos visuales.',
      },
      {
        title: 'Redes para Piscinas',
        description:
          'Protección y seguridad de piscinas para poder disfrutar con tranquilidad.',
      },
    ],
  },
  benefits: {
    tag: 'Por Qué Elegirnos',
    title1: 'Seguridad que no se ve,',
    title2: 'tranquilidad que se siente',
    description:
      'Nuestras redes de polietileno de alta tenacidad son la opción preferida por familias y arquitectos. Combinan la máxima seguridad técnica con un impacto visual mínimo.',
    items: [
      'Resistencia Certificada: Soportan hasta 150kg/m².',
      'Tratamiento Anti-UV: Larga durabilidad expuestas al sol.',
      'Máxima Estética: No alteran la fachada ni las vistas.',
      'Material Ignífugo y No Tóxico.',
      'Instalación sin Obras molestas.',
      'Garantía de 3 años en materiales e instalación.',
      'Servicio a nivel nacional.',
    ],
    quote: 'El mejor servicio',
    quoteDesc:
      'Instalación rápida y el resultado es impecable. Muy recomendados.',
  },
  whyUs: {
    tag: 'Diferenciación Técnica',
    title1: '¿Por qué confiar en',
    title2: 'Preventiva Este?',
    description:
      'Unimos la experiencia internacional con el servicio local en Barcelona para ofrecerte la máxima seguridad sin comprometer la estética de tu hogar.',
    catAlt: 'Gato protegido con red de seguridad en terraza',
    reasons: [
      {
        title: 'Instaladores Propios',
        description:
          'No subcontratamos. Nuestro personal está especializado exclusivamente en redes de alta seguridad.',
      },
      {
        title: '10 Años en el Mercado',
        description:
          'Más de una década de experiencia instalando redes de protección en toda la Península Ibérica.',
      },
      {
        title: 'Atención Ágil',
        description:
          'Presupuestos por WhatsApp en menor tiempo y plazos de instalación mínimos en toda el Área Metropolitana de Barcelona.',
      },
      {
        title: 'Certificación Técnica',
        description:
          'Solo utilizamos polietileno virgen, testado para soportar 150kg/m².',
      },
    ],
  },
  aboutUs: {
    tag: 'Nuestra Historia',
    title: 'Sobre',
    titleHighlight: 'Nosotros',
    p1: 'Después de Preventiva Norte (Norte de Portugal y Galicia), Preventiva Sur (Andalucía) y Preventiva Centro (Madrid), ha llegado Preventiva Este para cubrir las necesidades del Área Metropolitana de Barcelona y Cataluña.',
    p2: 'Preventiva Norte Redes de Protección, que actualmente es la principal empresa en el Norte de Portugal de instalación y venta de kits de redes de protección, fue creada para cubrir las necesidades de personas que conviven con riesgos de accidentes en el hogar, sobretodo de niños y mascotas, por el peligro de caídas a través de las ventanas, balcones, terrazas, escaleras y aperturas.',
    p3: 'Además de impedir la entrada de aves indeseables que imposibilitan el uso principalmente de terrazas y balcones.',
  },
  gallery: {
    title: 'Nuestros Trabajos',
    subtitle:
      'Explora algunas de nuestras instalaciones recientes en Barcelona. Seguridad impecable con el mínimo impacto visual.',
    viewMore: 'Ver más en Instagram →',
    projects: [
      { cat: 'Balcón', ariaLabel: 'Proyecto de red de protección en Balcón' },
      { cat: 'Terraza', ariaLabel: 'Proyecto de red de protección en Terraza' },
      { cat: 'Ventana', ariaLabel: 'Proyecto de red de protección en Ventana' },
      {
        cat: 'Estructura',
        ariaLabel: 'Proyecto de red de protección en Estructura',
      },
      {
        cat: 'Mascotas',
        ariaLabel: 'Proyecto de red de protección para Mascotas',
      },
      {
        cat: 'Seguridad',
        ariaLabel: 'Proyecto de red de protección de Seguridad',
      },
    ],
  },
  testimonials: {
    title: 'Lo que dicen nuestros clientes',
    verMas: 'Ver más',
    items: [
      {
        name: 'Ana García',
        location: 'Gràcia, Barcelona',
        text: 'Llevaba meses buscando una solución para mis dos gatos en el balcón. Mandé una foto por WhatsApp y en menos de 24 horas ya tenía presupuesto. La instalación fue limpia, rápida y los chicos super amables. La red es prácticamente invisible y mis gatos ya disfrutan del sol sin que yo me muera de angustia. ¡Totalmente recomendable!',
      },
      {
        name: 'Miguel Fernández',
        location: 'Eixample, Barcelona',
        text: 'Llevaba dos años sufriendo con las palomas en la terraza. Manchaban todo, hacían ruido y era imposible limpiar. Llamé a Preventiva Este y en tres días solucionaron el problema de forma definitiva. La red apenas se ve y las palomas no han vuelto. Ojalá lo hubiera hecho antes.',
      },
      {
        name: 'Lucía Moreno',
        location: "L'Hospitalet de Llobregat",
        text: 'Instalamos las redes de seguridad infantil en todas las ventanas del piso. Tenemos una niña de 2 años muy inquieta y desde el primer momento nos preocupó la seguridad. El equipo fue muy profesional, explicaron todo el proceso y terminaron en pocas horas. Ahora respiramos tranquilos.',
      },
      {
        name: 'Roberto Jiménez',
        location: 'Sant Cugat del Vallès',
        text: 'Pedí presupuesto a varias empresas y Preventiva Este fue la más competitiva y la que mejores referencias tenía. El resultado superó mis expectativas: la red está perfectamente tensada, sin arrugas, y la fijación en la pared quedó impecable. Atención al cliente de diez.',
      },
      {
        name: 'Carmen Vidal',
        location: 'Sarrià-Sant Gervasi, Barcelona',
        text: 'Mi gato se cayó del balcón hace dos años y por suerte sobrevivió. Desde entonces busqué la mejor protección posible. Preventiva Este instaló una red que cubre cada rincón sin dejar ni un hueco. El material es de una calidad increíble y el presupuesto fue justo. No dudaría en volver a contratar su servicio.',
      },
    ],
  },
  contact: {
    tag: 'Contacta con Nosotros',
    title: '¿Listo para proteger tu hogar?',
    description:
      'Solicita tu presupuesto gratuito y sin compromiso hoy mismo. Nuestro equipo te asesorará sobre la mejor solución para tu espacio.',
    callTitle: 'Llámanos',
    callLabel: 'Barcelona',
    writeTitle: 'Escríbenos',
    serviceAreaTitle: 'Área de Servicio',
    serviceAreaText: 'Barcelona y Área Metropolitana',
    serviceAreaSub: 'Servicio en toda Cataluña.',
    formTitle: 'Pedir Presupuesto',
    formName: 'Nombre',
    formPhone: 'Teléfono',
    formEmail: 'Email',
    formPostal: 'Código Postal',
    formService: 'Tipo de Servicio',
    formMessage: 'Mensaje',
    formNamePlaceholder: 'Tu nombre',
    formMessagePlaceholder: 'Cuéntanos más sobre lo que necesitas...',
    formSubmit: 'Enviar Solicitud',
    formSending: 'Enviando...',
    formSuccessTitle: '¡Mensaje Enviado!',
    formSuccessDesc:
      'Gracias por contactarnos. Te responderemos lo antes posible.',
    formSendAnother: 'Enviar otro mensaje',
    formError:
      'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    formPrivacy: 'Al enviar aceptas nuestra política de privacidad.',
    defaultService: 'Protección para Balcón',
    serviceOptions: [
      'Protección para Balcón',
      'Protección para Ventanas',
      'Protección para Gatos',
      'Otro',
    ],
    subject: 'Nuevo mensaje desde Preventiva Este',
  },
  footer: {
    description:
      'Especialistas en la instalación de redes de protección de alta resistencia en Barcelona. Seguridad certificada para balcones, ventanas, terrazas, niños y mascotas.',
    quickLinksTitle: 'Enlaces Rápidos',
    protectionForTitle: 'Protección Para',
    contactTitle: 'Contacto',
    copyright: 'Todos los derechos reservados.',
    legalNotice: 'Aviso Legal',
    privacyPolicy: 'Política de Privacidad',
    cookies: 'Cookies',
    mobileLabel: 'Barcelona',
    serviceArea: 'Barcelona y Área Metropolitana.',
    serviceAreaSub: 'Servicio en toda Cataluña.',
    quickLinks: [
      { label: 'Inicio', href: '/' },
      {
        label: 'Testes y Certificaciones',
        href: '/testes-certificaciones',
      },
      { label: 'Nuestros Servicios', href: '/#servicios' },
      { label: 'Galería', href: '/#galeria' },
      { label: 'Contacto', href: '/#contacto' },
    ],
    protectionLinks: [
      { label: 'Seguridad Infantil', href: '/proteccion#ninos' },
      { label: 'Redes para Gatos', href: '/proteccion#gatos' },
      {
        label: 'Control de Aves (Palomas)',
        href: '/proteccion#aves',
      },
      { label: 'Terrazas y Balcones', href: '/#servicios' },
      { label: 'Ventanas y Escaleras', href: '/#servicios' },
    ],
  },
  whatsapp: {
    message: 'Hola, quisiera más información sobre las redes de protección.',
    ariaLabel: 'Contactar por WhatsApp',
  },
  cookie: {
    text: 'Utilizamos cookies propias y de terceros para mejorar su experiencia y nuestros servicios, analizando la navegación en nuestro sitio web. Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra',
    linkText: 'Política de Privacidad',
    linkHref: '/politica-privacidad',
    accept: 'Aceptar',
    close: 'Cerrar',
  },
  proteccion: {
    heroTag: 'Seguridad Integral en toda el Área Metropolitana de Barcelona',
    heroTitle: 'Protección',
    heroTitleHighlight: 'Total',
    heroDescription:
      'Soluciones especializadas en redes de seguridad para niños, mascotas y control de aves en toda el Área Metropolitana de Barcelona. Resistencia, estética y tranquilidad garantizada.',
    heroCtaWhatsapp: 'Presupuesto por WhatsApp',
    heroCtaSolutions: 'Ver Soluciones',
    navNinos: 'Seguridad Infantil',
    navGatos: 'Protección Gatos',
    navAves: 'Control de Aves',
    ninosTitle: 'Seguridad Infantil:',
    ninosSubtitle: 'Tranquilidad para los Padres',
    ninosDescription:
      'Protege a los que más quieres en tu hogar. Solución discreta y resistente, con seguridad certificada para ventanas, balcones y escaleras sin sacrificar la luminosidad de tu vivienda.',
    ninosF1Title: 'Resistencia Certificada',
    ninosF1Desc:
      'Soportan el peso y el impacto accidental de un niño en todo momento.',
    ninosF2Title: 'Sustitución de Rejas',
    ninosF2Desc:
      'Estética limpia y discreta que sustituye las pesadas rejas de hierro.',
    ninosF3Title: 'Sin Aristas',
    ninosF3Desc: 'Suaves al tacto y seguras para toda la familia.',
    ninosF4Title: 'Instalación Profesional',
    ninosF4Desc:
      'Técnicos especialistas en toda el Área Metropolitana de Barcelona.',
    ninosQuote:
      'No esperes a que tu hijo empiece a gatear o escalar. Asegura tu hogar hoy.',
    ninosCta: 'Pedir presupuesto ahora',
    ninosOverlay:
      'Casi imperceptible para la vista, total protección para tus hijos.',
    ninosBrand: 'Premium Safety Mesh Spain',
    gatosTitle: 'Protección Total para tus Gatos:',
    gatosSubtitle: 'Mallas Anti-Caídas',
    gatosDescription:
      'Evita el temido “Síndrome del Paracaidista”. Instalamos redes ultra-resistentes en balcones de toda el Área Metropolitana de Barcelona. Diseñadas para que tus felinos disfruten de la brisa con total seguridad.',
    gatosF1Title: 'Instalación sin Huecos',
    gatosF1Desc:
      'Garantizamos el cierre perimetral completo, sin espacios por donde puedan escapar.',
    gatosF2Title: 'Estética Integrada',
    gatosF2Desc:
      'Redes de bajo grosor que pasan desapercibidas en las fachadas de Barcelona.',
    gatosCta: 'Presupuesto por WhatsApp',
    avesTitle: 'Control de Aves:',
    avesSubtitle: 'Solución Definitiva contra Palomas',
    avesDescription:
      'En Barcelona, el problema de las palomas es una plaga urbana persistente. Nuestras redes crean un bloqueo físico que impide que las palomas aniden o se posen de forma definitiva y ética.',
    avesF1Title: 'Higiene y Salud',
    avesF1Desc: 'Evita excrementos ácidos, ácaros y bacterias.',
    avesF2Title: 'Mantenimiento A/C',
    avesF2Desc: 'Mantiene equipos de aire y ventanas limpias.',
    avesF3Title: 'Solución Ética',
    avesF3Desc: 'Barrera física real sin dañar a los animales.',
    avesF4Title: 'Especial Patios',
    avesF4Desc: 'Expertos en cerramientos de patios de luces.',
    avesCtaTitle: '¿Harto de las palomas?',
    avesCtaDesc:
      'Acaba hoy con el problema. Presupuesto sin compromiso para comunidades y particulares en toda Barcelona.',
    avesCta: 'Solicitar por WhatsApp',
    finalTitle: '¿Qué necesitas proteger hoy?',
    finalDescription:
      'Nuestro equipo técnico está listo para asesorarte. Instalaciones profesionales en toda el Área Metropolitana de Barcelona.',
    finalCtaForm: 'Formulario de Contacto',
  },
  certificaciones: {
    heroTitle: 'Seguridad Certificada y',
    heroTitleHighlight: 'Calidad Técnica',
    heroDescription:
      'En Preventiva Este, la seguridad no es una promesa, es una certificación técnica. Utilizamos materiales de última generación diseñados para resistir las condiciones climáticas de Barcelona.',
    materialTitle: 'Polietileno de Alta Tenacidad (Virgen)',
    materialDescription:
      'Nuestras redes están fabricadas con Polietileno de Alta Densidad (PEAD) 100% virgen. A diferencia del nylon convencional, nuestro material no absorbe humedad, lo que evita que la red se debilite con la lluvia.',
    materialF1: 'No absorbe agua ni se pudre',
    materialF2: 'Mantiene la tensión mecánica por años',
    materialF3: 'Resistente a agentes químicos y ambientales',
    fixingTitle: 'Sistema de Fijación de Alta Performance',
    fixingDescription:
      'No solo la red es premium; nuestro sistema de anclaje utiliza tacos expansivos y ganchos de acero galvanizado o inoxidable, diseñados para anclarse firmemente en ladrillo, hormigón o estructuras metálicas de los edificios de Barcelona, sin riesgo de desprendimiento.',
    ctaTitle: '¿Protegemos tu hogar con calidad certificada?',
    ctaDescription:
      'Solicita una visita técnica gratuita en Barcelona y comprueba la calidad de nuestros materiales.',
    ctaButton: 'Solicitar Presupuesto Gratis',
    specs: [
      {
        title: 'Tratamiento Anti-UV',
        text: 'Equipadas con doble tratamiento Anti-UV y antioxidantes. Soportan la intensa radiación solar de Barcelona sin cristalizarse ni perder su color. Este componente técnico es lo que nos permite ofrecer una garantía real de durabilidad.',
      },
      {
        title: 'Resistencia de 150kg/m²',
        text: 'Seguridad Mecánica: Nuestras redes están testadas para soportar una presión de hasta 150 kg por metro cuadrado. Un nivel superior a los estándares del mercado, garantizando una barrera infranqueable ante caídas accidentales.',
      },
      {
        title: 'Material Ignífugo',
        text: 'Material No Tóxico e Ignífugo: Nuestras mallas no son inflamables y son totalmente seguras para el contacto con niños y mascotas, cumpliendo con las normativas europeas.',
      },
      {
        title: 'Impacto Visual Mínimo',
        text: 'Con un grosor optimizado de 0.8mm a 1mm, nuestras redes ofrecen un impacto visual mínimo. Son aceptadas por la mayoría de las comunidades de vecinos en Barcelona.',
      },
    ],
  },
  privacyPolicy: {
    title: 'Política de Privacidad',
    intro:
      'En Preventiva Este, nos comprometemos a proteger y respetar su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos sus datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea y la legislación española vigente.',
    s1Title: '1. Responsable del Tratamiento',
    s1Content:
      'Los datos personales recabados a través de este sitio web son responsabilidad de Preventiva Este. Correo electrónico de contacto: contacto@preventivaeste.com. Teléfono: 672 078 885. Ubicación: Barcelona, Cataluña (Prestamos servicio en toda el Área Metropolitana de Barcelona y Cataluña).',
    s2Title: '2. Finalidad del Tratamiento',
    s2Intro:
      'Recopilamos y tratamos sus datos personales con las siguientes finalidades:',
    s2Items: [
      'Atención de solicitudes: Para gestionar las consultas, solicitudes de presupuesto o información enviadas a través de nuestros formularios de contacto o canales de comunicación (WhatsApp, email, teléfono).',
      'Prestación de servicios: Para llevar a cabo la instalación de redes de protección y servicios contratados, incluyendo la facturación y gestión administrativa.',
      'Mejora del servicio: Para analizar el uso de nuestra web mediante cookies y mejorar la experiencia de usuario.',
    ],
    s3Title: '3. Legitimación',
    s3Content:
      'La base legal para el tratamiento de sus datos es su consentimiento explícito al enviar un formulario de contacto o aceptar nuestras cookies, así como la ejecución de un contrato en caso de contratar nuestros servicios.',
    s4Title: '4. Destinatarios de los Datos',
    s4Content:
      'Sus datos no serán cedidos a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio (por ejemplo, empresas de transporte o instaladores colaboradores, siempre bajo acuerdos de confidencialidad).',
    s5Title: '5. Derechos del Usuario',
    s5Intro: 'Usted tiene derecho a:',
    s5Items: [
      'Acceder a sus datos personales.',
      'Rectificar datos inexactos o incompletos.',
      'Solicitar la supresión de sus datos cuando ya no sean necesarios.',
      'Oponerse al tratamiento o solicitar su limitación.',
      'Portabilidad de sus datos.',
    ],
    s5Footer:
      'Para ejercer estos derechos, puede enviar un correo electrónico a contacto@preventivaeste.com indicando el derecho que desea ejercer.',
    s6Title: '6. Seguridad de los Datos',
    s6Content:
      'Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración.',
    s7Title: '7. Uso de Cookies',
    s7Content:
      'Este sitio web utiliza cookies propias y de terceros para mejorar la navegación y obtener datos estadísticos. Usted puede configurar su navegador para rechazar las cookies, aunque esto podría afectar al funcionamiento de la web.',
    s8Title: '8. Cambios en la Política de Privacidad',
    s8Content:
      'Preventiva Este se reserva el derecho de modificar esta política para adaptarla a novedades legislativas o jurisprudenciales. Se recomienda su lectura periódica.',
    lastUpdated: 'Última actualización:',
  },
};
