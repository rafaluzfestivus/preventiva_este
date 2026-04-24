import { Metadata } from "next";
import ProteccionContent from "./ProteccionContent";

export const metadata: Metadata = {
    title: "Redes de Protección en Barcelona | Niños, Gatos y Aves",
    description: "Protección integral para tu hogar en Barcelona. Mallas certificadas para seguridad infantil, protección de gatos y control de aves. Instalación profesional en 24h.",
    keywords: ["redes para gatos barcelona", "seguridad infantil barcelona", "control de aves barcelona", "mallas de seguridad balcones", "protección ventanas niños", "Preventiva Este"],
    alternates: {
        canonical: "https://preventivaeste.com/proteccion",
    },
    openGraph: {
        url: "https://preventivaeste.com/proteccion",
        title: "Redes de Protección en Barcelona | Niños, Gatos y Aves",
        description: "Protección integral para tu hogar en Barcelona. Mallas certificadas para seguridad infantil, protección de gatos y control de aves.",
        images: [{ url: "https://preventivaeste.com/logo-preventiva-este.png", alt: "Preventiva Este" }],
    },
};

export default function ProteccionPage() {
    return <ProteccionContent />;
}
