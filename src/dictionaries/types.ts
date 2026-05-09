export type Locale = 'es' | 'ca';

export interface ServiceItem {
  title: string;
  description: string;
  href?: string;
}

export interface Reason {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
}

export interface GalleryProject {
  cat: string;
  ariaLabel: string;
}

export interface SiteDict {
  locale: Locale;
  navbar: {
    inicio: string;
    nosotros: string;
    certificaciones: string;
    proteccion: string;
    servicios: string;
    contacto: string;
    llamarAhora: string;
    solicitarPresupuesto: string;
    abrirMenu: string;
    // base paths for locale-aware links
    basePath: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
    logoAlt: string;
  };
  trustBar: {
    certified: string;
    guarantee: string;
    guaranteeHighlight: string;
  };
  services: {
    title: string;
    subtitle: string;
    readMore: string;
    items: ServiceItem[];
  };
  benefits: {
    tag: string;
    title1: string;
    title2: string;
    description: string;
    items: string[];
    quote: string;
    quoteDesc: string;
  };
  whyUs: {
    tag: string;
    title1: string;
    title2: string;
    description: string;
    catAlt: string;
    reasons: Reason[];
  };
  aboutUs: {
    tag: string;
    title: string;
    titleHighlight: string;
    p1: string;
    p2: string;
    p3: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    viewMore: string;
    projects: GalleryProject[];
  };
  testimonials: {
    title: string;
    verMas: string;
    items: Testimonial[];
  };
  contact: {
    tag: string;
    title: string;
    description: string;
    callTitle: string;
    callLabel: string;
    writeTitle: string;
    serviceAreaTitle: string;
    serviceAreaText: string;
    serviceAreaSub: string;
    formTitle: string;
    formName: string;
    formPhone: string;
    formEmail: string;
    formPostal: string;
    formService: string;
    formMessage: string;
    formNamePlaceholder: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSending: string;
    formSuccessTitle: string;
    formSuccessDesc: string;
    formSendAnother: string;
    formError: string;
    formPrivacy: string;
    defaultService: string;
    serviceOptions: string[];
    subject: string;
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    protectionForTitle: string;
    contactTitle: string;
    copyright: string;
    legalNotice: string;
    privacyPolicy: string;
    cookies: string;
    mobileLabel: string;
    serviceArea: string;
    serviceAreaSub: string;
    quickLinks: { label: string; href: string }[];
    protectionLinks: { label: string; href: string }[];
  };
  whatsapp: {
    message: string;
    ariaLabel: string;
  };
  cookie: {
    text: string;
    linkText: string;
    linkHref: string;
    accept: string;
    close: string;
  };
  proteccion: {
    heroTag: string;
    heroTitle: string;
    heroTitleHighlight: string;
    heroDescription: string;
    heroCtaWhatsapp: string;
    heroCtaSolutions: string;
    navNinos: string;
    navGatos: string;
    navAves: string;
    ninosTitle: string;
    ninosSubtitle: string;
    ninosDescription: string;
    ninosF1Title: string;
    ninosF1Desc: string;
    ninosF2Title: string;
    ninosF2Desc: string;
    ninosF3Title: string;
    ninosF3Desc: string;
    ninosF4Title: string;
    ninosF4Desc: string;
    ninosQuote: string;
    ninosCta: string;
    ninosOverlay: string;
    ninosBrand: string;
    gatosTitle: string;
    gatosSubtitle: string;
    gatosDescription: string;
    gatosF1Title: string;
    gatosF1Desc: string;
    gatosF2Title: string;
    gatosF2Desc: string;
    gatosCta: string;
    avesTitle: string;
    avesSubtitle: string;
    avesDescription: string;
    avesF1Title: string;
    avesF1Desc: string;
    avesF2Title: string;
    avesF2Desc: string;
    avesF3Title: string;
    avesF3Desc: string;
    avesF4Title: string;
    avesF4Desc: string;
    avesCtaTitle: string;
    avesCtaDesc: string;
    avesCta: string;
    finalTitle: string;
    finalDescription: string;
    finalCtaForm: string;
  };
  certificaciones: {
    heroTitle: string;
    heroTitleHighlight: string;
    heroDescription: string;
    materialTitle: string;
    materialDescription: string;
    materialF1: string;
    materialF2: string;
    materialF3: string;
    fixingTitle: string;
    fixingDescription: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    specs: { title: string; text: string }[];
  };
  privacyPolicy: {
    title: string;
    intro: string;
    s1Title: string;
    s1Content: string;
    s2Title: string;
    s2Intro: string;
    s2Items: string[];
    s3Title: string;
    s3Content: string;
    s4Title: string;
    s4Content: string;
    s5Title: string;
    s5Intro: string;
    s5Items: string[];
    s5Footer: string;
    s6Title: string;
    s6Content: string;
    s7Title: string;
    s7Content: string;
    s8Title: string;
    s8Content: string;
    lastUpdated: string;
  };
}
