"use client";

import { motion } from "framer-motion";
import { UserCheck, Sparkles, Clock, FileCheck2 } from "lucide-react";

export function WhyUs() {
    const reasons = [
        {
            icon: <UserCheck className="w-8 h-8 text-yellow-500" />,
            title: "Instaladores Propios",
            description: "No subcontratamos. Nuestro personal está especializado exclusivamente en redes de alta seguridad.",
        },
        {
            icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
            title: "Instalación Limpia",
            description: "La limpieza de su casa es nuestro compromiso. Su casa quedará impecable.",
        },
        {
            icon: <Clock className="w-8 h-8 text-yellow-500" />,
            title: "Atención Ágil",
            description: "Presupuestos por WhatsApp en menor tiempo y plazos de instalación mínimos en toda el Área Metropolitana de Barcelona.",
        },
        {
            icon: <FileCheck2 className="w-8 h-8 text-yellow-500" />,
            title: "Certificación Técnica",
            description: "Solo utilizamos polietileno virgen, testado para soportar 150kg/m\u00b2.",
        }
    ];

    return (
        <section className="py-24 bg-[#4d2a36] text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/3">
                        <span className="text-yellow-400 font-bold tracking-wider text-sm uppercase mb-3 block">
                            Diferenciación Técnica
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            ¿Por qué confiar en <br />
                            <span className="text-yellow-400">Preventiva Este?</span>
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            Unimos la experiencia internacional con el servicio local en Barcelona para ofrecerte la máxima seguridad sin comprometer la estética de tu hogar.
                        </p>
                        <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1200&auto=format&fit=crop')" }}
                                aria-label="Gato protegido con red de seguridad en terraza"
                            />
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all group"
                            >
                                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {reason.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                                    {reason.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {reason.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
