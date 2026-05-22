"use client";

import { motion } from "framer-motion";
import type { SiteDict } from "@/dictionaries/types";

interface GalleryProps {
    dict?: SiteDict["gallery"];
}

const defaultDict: SiteDict["gallery"] = {
    title: "Nuestros Trabajos",
    subtitle:
        "Explora algunas de nuestras instalaciones recientes en Barcelona. Seguridad impecable con el mínimo impacto visual.",
    viewMore: "Ver más en Instagram →",
    projects: [
        { cat: "Balcón", ariaLabel: "Proyecto de red de protección en Balcón" },
        { cat: "Terraza", ariaLabel: "Proyecto de red de protección en Terraza" },
        { cat: "Ventana", ariaLabel: "Proyecto de red de protección en Ventana" },
        { cat: "Estructura", ariaLabel: "Proyecto de red de protección en Estructura" },
        { cat: "Mascotas", ariaLabel: "Proyecto de red de protección para Mascotas" },
        { cat: "Seguridad", ariaLabel: "Proyecto de red de protección de Seguridad" },
    ],
};

const imageSrcs = [
    "/img-1.jpg",
    "/img-2.jpg",
    "/img-3.jpg",
    "/img-4.jpg",
    "/img-5.jpg",
    "/img-6.jpg",
];

export function Gallery({ dict = defaultDict }: GalleryProps) {
    return (
        <section id="galeria" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        {dict.title}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {dict.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {dict.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square group overflow-hidden rounded-xl bg-slate-200"
                        >
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${imageSrcs[index]})` }}
                                aria-label={project.ariaLabel}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold text-lg">{project.cat}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://www.instagram.com/preventivaeste/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 font-semibold hover:underline">
                        {dict.viewMore}
                    </a>
                </div>
            </div>
        </section>
    );
}
