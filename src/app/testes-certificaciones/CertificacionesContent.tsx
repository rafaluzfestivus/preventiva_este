"use client";

import { motion } from "framer-motion";
import { Shield, Sun, Weight, Flame, EyeOff, Anchor, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CertificacionesContent() {
    const specs = [
        {
            icon: <Sun className="w-12 h-12 text-yellow-500" />,
            title: "Tratamiento Anti-UV",
            text: "Equipadas con doble tratamiento Anti-UV y antioxidantes. Soportan la intensa radiación solar de Barcelona sin cristalizarse ni perder su color. Este componente técnico es lo que nos permite ofrecer una garantía real de durabilidad."
        },
        {
            icon: <Weight className="w-12 h-12 text-yellow-500" />,
            title: "Resistencia de 150kg/m²",
            text: "Seguridad Mecánica: Nuestras redes están testadas para soportar una presión de hasta 150 kg por metro cuadrado. Un nivel superior a los estándares del mercado, garantizando una barrera infranqueable ante caídas accidentales."
        },
        {
            icon: <Flame className="w-12 h-12 text-yellow-500" />,
            title: "Material Ignífugo",
            text: "Material No Tóxico e Ignífugo: Nuestras mallas no son inflamables y son totalmente seguras para el contacto con niños y mascotas, cumpliendo con las normativas europeas."
        },
        {
            icon: <EyeOff className="w-12 h-12 text-yellow-500" />,
            title: "Impacto Visual Mínimo",
            text: "Con un grosor optimizado de 0.8mm a 1mm, nuestras redes ofrecen un impacto visual mínimo. Son aceptadas por la mayoría de las comunidades de vecinos en Barcelona."
        }
    ];

    return (
        <main className="pt-24 min-h-screen bg-white">
            <section className="bg-[#4d2a36] py-20 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Seguridad Certificada y <br />
                            <span className="text-yellow-400">Calidad Técnica</span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            En Preventiva Este, la seguridad no es una promesa, es una certificación técnica.
                            Utilizamos materiales de última generación diseñados para resistir las condiciones climáticas de Barcelona.
                        </p>
                    </motion.div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500/5 -skew-x-12 translate-x-1/4" />
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Polietileno de Alta Tenacidad (Virgen)</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Nuestras redes están fabricadas con Polietileno de Alta Densidad (PEAD) 100% virgen.
                                A diferencia del nylon convencional, nuestro material no absorbe humedad, lo que evita que la red se debilite con la lluvia.
                            </p>
                            <div className="space-y-4 text-slate-800">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-yellow-500 w-6 h-6" />
                                    <span className="font-medium">No absorbe agua ni se pudre</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-yellow-500 w-6 h-6" />
                                    <span className="font-medium">Mantiene la tensión mecánica por años</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="text-yellow-500 w-6 h-6" />
                                    <span className="font-medium">Resistente a agentes químicos y ambientales</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-3xl aspect-video relative overflow-hidden shadow-inner">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                <Shield className="w-32 h-32 opacity-20" />
                            </div>
                            <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/gallery-1.jpg')" }} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {specs.map((spec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all bg-white"
                            >
                                <div className="mb-6">{spec.icon}</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{spec.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{spec.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
                    <Anchor className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Sistema de Fijación de Alta Performance</h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-12">
                        No solo la red es premium; nuestro sistema de anclaje utiliza tacos expansivos y ganchos de acero galvanizado o inoxidable,
                        diseñados para anclarse firmemente en ladrillo, hormigón o estructuras metálicas de los edificios de Barcelona, sin riesgo de desprendimiento.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <div className="bg-[#4d2a36] rounded-3xl p-12 text-white shadow-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Protegemos tu hogar con calidad certificada?</h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Solicita una visita técnica gratuita en Barcelona y comprueba la calidad de nuestros materiales.
                        </p>
                        <Link
                            href="/#contacto"
                            className="inline-block bg-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 transition-all transform hover:scale-105"
                        >
                            Solicitar Presupuesto Gratis
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
