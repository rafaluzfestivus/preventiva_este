"use client";

import { motion } from "framer-motion";
import { Home, Maximize, Shield, Dumbbell, Waves, Bird } from "lucide-react";
import Link from "next/link";
import type { SiteDict } from "@/dictionaries/types";

interface ServicesProps {
    dict?: SiteDict["services"];
}

const defaultDict: SiteDict["services"] = {
    title: "Soluciones de Seguridad Integral",
    subtitle:
        "Adaptamos nuestras redes de protección a cualquier espacio y necesidad garantizando la máxima resistencia.",
    readMore: "Leer más →",
    items: [
        {
            title: "Mallas para Gatos",
            description:
                "Especialistas en redes de protección anti-caídas. Evita el ‘síndrome del paracaidista’ con nuestras mallas de seguridad.",
            href: "/proteccion#gatos",
        },
        {
            title: "Seguridad Infantil",
            description:
                "Protección certificada para ventanas, balcones y escaleras. Sustitución de rejas con estética limpia.",
            href: "/proteccion#ninos",
        },
        {
            title: "Control de Aves",
            description:
                "Solución definitiva contra palomas en Barcelona. Higiene y protección ética para tu edificio.",
            href: "/proteccion#aves",
        },
        {
            title: "Redes Deportivas",
            description:
                "Redes de protección para canchas, pistas, campos de futbol, arenas, gimnasio y demás.",
        },
        {
            title: "Mallas para Terrazas",
            description:
                "Seguridad y protección para sus terrazas y balcones sin impactos visuales.",
        },
        {
            title: "Redes para Piscinas",
            description:
                "Protección y seguridad de piscinas para poder disfrutar con tranquilidad.",
        },
    ],
};

const icons = [
    <Home key="home" className="w-10 h-10 text-yellow-500" />,
    <Shield key="shield" className="w-10 h-10 text-yellow-500" />,
    <Bird key="bird" className="w-10 h-10 text-yellow-500" />,
    <Dumbbell key="dumbbell" className="w-10 h-10 text-yellow-500" />,
    <Maximize key="maximize" className="w-10 h-10 text-yellow-500" />,
    <Waves key="waves" className="w-10 h-10 text-yellow-500" />,
];

export function Services({ dict = defaultDict }: ServicesProps) {
    return (
        <section id="servicios" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        {dict.title}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {dict.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dict.items.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group flex flex-col h-full"
                        >
                            <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors">
                                {icons[index]}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                                {service.description}
                            </p>
                            {service.href && (
                                <Link href={service.href} className="text-yellow-600 font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto">
                                    {dict.readMore}
                                </Link>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
