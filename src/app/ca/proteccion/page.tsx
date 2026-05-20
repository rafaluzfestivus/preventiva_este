import type { Metadata } from "next";
import CaProteccioContent from "./CaProteccioContent";

export const metadata: Metadata = {
  title: "Xarxes de Protecció a Barcelona | Nens, Gats i Ocells | Preventiva Este",
  description:
    "Protecció integral per a la teva llar a Barcelona. Malles certificades per a seguretat infantil, protecció de gats i control d'ocells. Instal·lació professional en 24h.",
  keywords: [
    "xarxes per a gats barcelona",
    "seguretat infantil barcelona",
    "control d'ocells barcelona",
    "malles de seguretat balcons",
    "protecció finestres nens",
    "Preventiva Este",
  ],
  alternates: {
    canonical: "https://preventivaeste.com/ca/proteccion",
    languages: {
      es: "https://preventivaeste.com/proteccion",
      ca: "https://preventivaeste.com/ca/proteccion",
    },
  },
  openGraph: {
    url: "https://preventivaeste.com/ca/proteccion",
    title: "Xarxes de Protecció a Barcelona | Nens, Gats i Ocells",
    description:
      "Protecció integral per a la teva llar a Barcelona. Malles certificades per a seguretat infantil, protecció de gats i control d'ocells.",
    images: [{ url: "https://preventivaeste.com/logo-preventiva-este.png", alt: "Preventiva Este" }],
  },
};

export default function CaProteccionPage() {
  return <CaProteccioContent />;
}
