"use client";

import { Star, Quote } from "lucide-react";
import { useState } from "react";

export function Testimonials() {
    const testimonials = [
        {
            name: "Ana García",
            location: "Gràcia, Barcelona",
            text: "Llevaba meses buscando una solución para mis dos gatos en el balcón. Mandé una foto por WhatsApp y en menos de 24 horas ya tenía presupuesto. La instalación fue limpia, rápida y los chicos super amables. La red es prácticamente invisible y mis gatos ya disfrutan del sol sin que yo me muera de angustia. ¡Totalmente recomendable!",
        },
        {
            name: "Miguel Fernández",
            location: "Eixample, Barcelona",
            text: "Llevaba dos años sufriendo con las palomas en la terraza. Manchaban todo, hacían ruido y era imposible limpiar. Llamé a Preventiva Este y en tres días solucionaron el problema de forma definitiva. La red apenas se ve y las palomas no han vuelto. Ojalá lo hubiera hecho antes.",
        },
        {
            name: "Lucía Moreno",
            location: "L'Hospitalet de Llobregat",
            text: "Instalamos las redes de seguridad infantil en todas las ventanas del piso. Tenemos una niña de 2 años muy inquieta y desde el primer momento nos preocupó la seguridad. El equipo fue muy profesional, explicaron todo el proceso y terminaron en pocas horas. Ahora respiramos tranquilos.",
        },
        {
            name: "Roberto Jiménez",
            location: "Sant Cugat del Vallès",
            text: "Pedí presupuesto a varias empresas y Preventiva Este fue la más competitiva y la que mejores referencias tenía. El resultado superó mis expectativas: la red está perfectamente tensada, sin arrugas, y la fijación en la pared quedó impecable. Atención al cliente de diez.",
        },
        {
            name: "Carmen Vidal",
            location: "Sarrià-Sant Gervasi, Barcelona",
            text: "Mi gato se cayó del balcón hace dos años y por suerte sobrevivió. Desde entonces busqué la mejor protección posible. Preventiva Este instaló una red que cubre cada rincón sin dejar ni un hueco. El material es de una calidad increíble y el presupuesto fue justo. No dudaría en volver a contratar su servicio.",
        },
    ];

    const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16">
                    Lo que dicen nuestros clientes
                </h2>

                <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] md:min-w-[400px] bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all relative flex flex-col snap-center h-full"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-[#4d2a36]/10 fill-[#4d2a36]/10" />
                            <div className="flex text-yellow-400 mb-4 gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-4 h-4 fill-yellow-400" />
                                ))}
                            </div>
                            <div className="flex-grow mb-6">
                                <p className="text-slate-600 italic line-clamp-4">&ldquo;{t.text}&rdquo;</p>
                                {t.text.length > 150 && (
                                    <button
                                        onClick={() => setSelectedTestimonial(t)}
                                        className="text-yellow-600 text-sm font-semibold mt-2 hover:underline focus:outline-none"
                                    >
                                        Ver más
                                    </button>
                                )}
                            </div>
                            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold shrink-0">
                                    {t.name[0]}
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="font-bold text-slate-900 truncate">{t.name}</h4>
                                    <span className="text-sm text-slate-500 truncate block">{t.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedTestimonial && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
                        <button
                            onClick={() => setSelectedTestimonial(null)}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-slate-500"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                        <div className="flex text-yellow-400 mb-6 gap-1">
                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-yellow-400" />)}
                        </div>
                        <p className="text-slate-700 text-lg leading-relaxed mb-8">&ldquo;{selectedTestimonial.text}&rdquo;</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl">
                                {selectedTestimonial.name[0]}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">{selectedTestimonial.name}</h4>
                                <span className="text-slate-500">{selectedTestimonial.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 -z-10" onClick={() => setSelectedTestimonial(null)} />
                </div>
            )}
        </section>
    );
}
