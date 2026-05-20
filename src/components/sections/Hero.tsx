"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { SiteDict } from "@/dictionaries/types";

interface HeroProps {
    dict?: SiteDict["hero"];
    basePath?: string;
}

const defaultDict: SiteDict["hero"] = {
    badge: "Seguridad Certificada",
    title1: "Redes de Protección",
    title2: "para tu Hogar",
    description:
        'Especialistas en la instalación de <strong>redes de seguridad en toda el Área Metropolitana de Barcelona y alrededores</strong>. Protección certificada para niños y gatos en balcones y ventanas sin perder las vistas.',
    ctaPrimary: "Pedir Presupuesto GRATIS",
    ctaSecondary: "Ver Instalaciones",
    scrollHint: "Descubre más",
    logoAlt: "Preventiva Este - Instalación de Redes en Barcelona",
};

export function Hero({ dict = defaultDict, basePath = "" }: HeroProps) {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-start justify-center overflow-hidden bg-[#4d2a36]">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/hero-new.jpg"
                >
                    <source src="/grok-video-75d457db-6ffe-4a84-8c5e-689da5f46f68.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-20 pt-32 md:pt-40">
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">
                    <div className="max-w-3xl text-center md:text-left order-2 md:order-1">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-base font-semibold mb-6">
                                <ShieldCheck className="w-5 h-5" />
                                {dict.badge}
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                        >
                            {dict.title1} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
                                {dict.title2}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0"
                            dangerouslySetInnerHTML={{ __html: dict.description }}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                        >
                            <Link
                                href={`${basePath}#contacto`}
                                className="px-8 py-4 bg-yellow-500 text-white rounded-full font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg hover:shadow-yellow-500/30 flex items-center justify-center gap-2 group"
                            >
                                {dict.ctaPrimary}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href={`${basePath}#galeria`}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
                            >
                                {dict.ctaSecondary}
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 md:mb-0 order-1 md:order-2"
                    >
                        <Image
                            src="/logo-preventiva-este.png"
                            alt={dict.logoAlt}
                            width={500}
                            height={250}
                            className="h-32 md:h-64 w-auto object-contain brightness-0 invert drop-shadow-2xl"
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 cursor-pointer z-20"
            >
                <span className="text-xs uppercase tracking-widest">{dict.scrollHint}</span>
                <ArrowRight className="w-5 h-5 rotate-90" />
            </motion.div>
        </section>
    );
}
