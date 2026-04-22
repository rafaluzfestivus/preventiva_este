import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieConsent } from "@/components/layout/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instalación de Redes de Protección en Barcelona | Preventiva Este",
  description: "Especialistas en instalación de redes de protección para balcones, ventanas y terrazas en Barcelona y alrededores. Resistencia de 150kg/m² y 3 años de garantía.",
  keywords: ["redes de protección barcelona", "mallas de seguridad barcelona", "redes para balcones barcelona", "redes para gatos barcelona", "seguridad infantil ventanas barcelona", "instalación redes barcelona", "mallas antiacaídas", "protección terrazas barcelona", "Preventiva Este", "precio redes protección", "presupuesto mallas seguridad", "instaladores redes barcelona"],
  authors: [{ name: "Preventiva Este", url: "https://preventivaeste.com" }],
  creator: "Preventiva Este",
  publisher: "Preventiva Este",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://preventivaeste.com",
    title: "Preventiva Este | Redes de Protección en Barcelona",
    description: "Instalación profesional de redes de protección y mallas de seguridad en Barcelona. Protege a tus seres queridos sin sacrificar la estética.",
    siteName: "Preventiva Este",
    images: [
      {
        url: "/logo-preventiva-este.png",
        width: 800,
        height: 600,
        alt: "Logo Preventiva Este",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preventiva Este | Redes de Protección en Barcelona",
    description: "Instalación profesional de redes de protección y mallas de seguridad en Barcelona.",
    images: ["/logo-preventiva-este.png"],
  },
  alternates: {
    canonical: "https://preventivaeste.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo-preventiva-este.png",
    shortcut: "/logo-preventiva-este.png",
    apple: "/logo-preventiva-este.png",
  },
  verification: {
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Preventiva Este",
    "image": "https://preventivaeste.com/logo-preventiva-este.png",
    "description": "Especialistas en instalación de redes de protección y mallas de seguridad para balcones, ventanas y terrazas en Barcelona.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barcelona",
      "addressRegion": "Cataluña",
      "addressCountry": "ES"
    },
    "url": "https://preventivaeste.com",
    "telephone": "+34637003793",
    "email": "contacto@preventivaeste.com",
    "priceRange": "$$",
    "areaServed": ["Barcelona", "L'Hospitalet de Llobregat", "Badalona", "Sabadell", "Terrassa", "Sant Cugat del Vallès", "Área Metropolitana de Barcelona"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N5BW7JW9');`,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50 flex flex-col min-h-screen`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N5BW7JW9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <WhatsAppButton />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
