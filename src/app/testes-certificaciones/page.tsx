import { Metadata } from "next";
import CertificacionesContent from "./CertificacionesContent";

export const metadata: Metadata = {
    title: "Certificaciones y Resistencia de Redes | Preventiva Este",
    description: "Conoce la calidad técnica de nuestras redes de protección en Barcelona. Resistencia de 150kg/m², tratamiento Anti-UV e instalación certificada.",
    keywords: ["certificación redes seguridad", "resistencia mallas protección", "polietileno alta tenacidad", "redes ignífugas barcelona", "Preventiva Este"],
};

export default function CertificacionesPage() {
    return <CertificacionesContent />;
}
