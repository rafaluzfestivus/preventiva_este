import { Metadata } from "next";
import ProteccionContent from "./ProteccionContent";

export const metadata: Metadata = {
    title: "Redes de Protección en Barcelona | Niños, Gatos y Aves",
    description: "Protección integral para tu hogar en Barcelona. Mallas certificadas para seguridad infantil, protección de gatos y control de aves. Instalación profesional en 24h.",
    keywords: ["redes para gatos barcelona", "seguridad infantil barcelona", "control de aves barcelona", "mallas de seguridad balcones", "protección ventanas niños", "Preventiva Este"],
};

export default function ProteccionPage() {
    return <ProteccionContent />;
}
