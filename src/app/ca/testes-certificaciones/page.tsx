import type { Metadata } from "next";
import CaCertificacionsContent from "./CaCertificacionsContent";

export const metadata: Metadata = {
  title: "Certificacions i Resistència de Xarxes | Preventiva Este",
  description:
    "Coneix la qualitat tècnica de les nostres xarxes de protecció a Barcelona. Resistència de 150kg/m², tractament Anti-UV i instal·lació certificada.",
  keywords: [
    "certificació xarxes seguretat",
    "resistència malles protecció",
    "polietilè alta tenacitat",
    "xarxes ignífugues barcelona",
    "Preventiva Este",
  ],
  alternates: {
    canonical: "https://preventivaeste.com/ca/testes-certificaciones",
    languages: {
      es: "https://preventivaeste.com/testes-certificaciones",
      ca: "https://preventivaeste.com/ca/testes-certificaciones",
    },
  },
  openGraph: {
    url: "https://preventivaeste.com/ca/testes-certificaciones",
    title: "Certificacions i Resistència de Xarxes | Preventiva Este",
    description:
      "Qualitat tècnica certificada a Barcelona. Resistència de 150kg/m², tractament Anti-UV i instal·lació professional.",
    images: [{ url: "https://preventivaeste.com/logo-preventiva-este.png", alt: "Preventiva Este" }],
  },
};

export default function CaCertificacionsPage() {
  return <CaCertificacionsContent />;
}
