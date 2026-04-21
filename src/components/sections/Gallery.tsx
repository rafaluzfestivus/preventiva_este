"use client";

import { motion } from "framer-motion";

export function Gallery() {
    const projects = [
        { id: 1, src: "/gallery-1.jpg", cat: "Balcón" },
        { id: 2, src: "/gallery-2.jpg", cat: "Terraza" },
        { id: 3, src: "/gallery-3.jpg", cat: "Ventana" },
        { id: 4, src: "/gallery-4.jpg", cat: "Estructura" },
        { id: 5, src: "/gallery-5.jpg", cat: "Mascotas" },
        { id: 6, src: "/gallery-6.jpg", cat: "Seguridad" },
    ];

    return (
        <section id="galeria" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Nuestros Trabajos
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Explora algunas de nuestras instalaciones recientes en Barcelona. Seguridad impecable con el mínimo impacto visual.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square group overflow-hidden rounded-xl bg-slate-200"
                        >
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${project.src})` }}
                                aria-label={`Proyecto de red de protección en ${project.cat}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold text-lg">{project.cat}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://www.instagram.com/preventivaeste/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 font-semibold hover:underline">
                        Ver más en Instagram &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
