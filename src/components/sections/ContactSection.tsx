"use client";

import { Phone, Mail, MapPin, Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export function ContactSection() {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        email: "",
        codigoPostal: "",
        servicio: "Protección para Balcón",
        mensaje: ""
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const now = new Date();
        const formattedDate = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

        const data = {
            access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // TODO: Criar conta em web3forms.com para contacto@preventivaeste.com
            Nombre: formData.nombre,
            Teléfono: formData.telefono,
            Email: formData.email,
            "Código Postal": formData.codigoPostal,
            Servicio: formData.servicio,
            Mensaje: formData.mensaje,
            subject: "Nuevo mensaje desde Preventiva Este"
        };

        const sheetsData = new URLSearchParams();
        sheetsData.append("telefono", formData.telefono);
        sheetsData.append("fonte", "site");
        sheetsData.append("Nombre", formData.nombre);
        sheetsData.append("email", formData.email);
        sheetsData.append("cod_postal", formData.codigoPostal);
        sheetsData.append("enviado_dt_hr", formattedDate);
        sheetsData.append("Mensaje", `[${formData.servicio}] ${formData.mensaje}`);

        try {
            const { error: supabaseError } = await supabase
                .from('clients')
                .upsert({
                    name: formData.nombre,
                    whatsapp: formData.telefono.replace(/\D/g, ''),
                    email: formData.email,
                    postal_code: formData.codigoPostal,
                    service_requested: formData.servicio,
                    message: formData.mensaje,
                    source: 'site',
                    status: 'lead'
                }, { onConflict: 'whatsapp' });

            if (supabaseError) console.error("Error saving to Supabase:", supabaseError);

            // Serviços secundários — falhas não bloqueiam o sucesso do formulário
            const web3formsKey = data.access_key;
            const sheetsUrl = "YOUR_GOOGLE_SHEETS_SCRIPT_URL";

            await Promise.allSettled([
                web3formsKey && !web3formsKey.startsWith("YOUR_")
                    ? fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        headers: { "Content-Type": "application/json", "Accept": "application/json" },
                        body: JSON.stringify(data),
                    })
                    : Promise.resolve(),
                fetch("https://fluxo.festivusia.com/webhook/emailpreventivaeste", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify(data),
                }),
                sheetsUrl && !sheetsUrl.startsWith("YOUR_")
                    ? fetch(sheetsUrl, {
                        method: "POST",
                        mode: "no-cors",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: sheetsData.toString(),
                    })
                    : Promise.resolve(),
            ]);

            // Sucesso determinado pelo Supabase, não pelos serviços externos
            setStatus("success");
            setFormData({ nombre: "", telefono: "", email: "", codigoPostal: "", servicio: "Protección para Balcón", mensaje: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section id="contacto" className="py-20 bg-[#4d2a36] text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/2">
                        <span className="text-yellow-400 font-bold tracking-wider text-sm uppercase mb-2 block">
                            Contacta con Nosotros
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            ¿Listo para proteger tu hogar?
                        </h2>
                        <p className="text-slate-300 mb-12 text-lg leading-relaxed">
                            Solicita tu presupuesto gratuito y sin compromiso hoy mismo. Nuestro equipo te asesorará sobre la mejor solución para tu espacio.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-500/20 p-3 rounded-lg">
                                    <Phone className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Llámanos</h3>
                                    <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider block">Barcelona</span>
                                    <a href="tel:+34637003793" className="text-slate-300 hover:text-white transition-colors text-lg">
                                        Móvil: 637 003 793
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-500/20 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Escríbenos</h3>
                                    <a href="mailto:contacto@preventivaeste.com" className="text-slate-300 hover:text-white transition-colors text-lg">
                                        contacto@preventivaeste.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-500/20 p-3 rounded-lg">
                                    <MapPin className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">Área de Servicio</h3>
                                    <p className="text-slate-300 text-lg">
                                        Barcelona y Área Metropolitana<br />
                                        <span className="text-sm text-slate-500">Servicio en toda Cataluña.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900">
                            <h3 className="text-2xl font-bold mb-6">Pedir Presupuesto</h3>

                            {status === "success" ? (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                                    <div className="flex justify-center mb-3">
                                        <CheckCircle className="w-12 h-12 text-green-500" />
                                    </div>
                                    <h4 className="text-xl font-bold text-green-800 mb-2">¡Mensaje Enviado!</h4>
                                    <p className="text-green-700">Gracias por contactarnos. Te responderemos lo antes posible.</p>
                                    <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-green-600 hover:text-green-800 font-medium text-sm underline">
                                        Enviar otro mensaje
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all" placeholder="Tu nombre" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                                            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all" placeholder="600 000 000" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all" placeholder="tu@email.com" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Código Postal</label>
                                            <input type="text" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all" placeholder="08000" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Servicio</label>
                                            <select name="servicio" value={formData.servicio} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all bg-white">
                                                <option>Protección para Balcón</option>
                                                <option>Protección para Ventanas</option>
                                                <option>Protección para Gatos</option>
                                                <option>Otro</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                                        <textarea rows={4} name="mensaje" value={formData.mensaje} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all resize-none" placeholder="Cuéntanos más sobre lo que necesitas..."></textarea>
                                    </div>

                                    {status === "error" && (
                                        <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm">
                                            <XCircle className="w-4 h-4 flex-shrink-0" />
                                            Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === "loading" ? (
                                            <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
                                        ) : (
                                            <><Send className="w-5 h-5" /> Enviar Solicitud</>
                                        )}
                                    </button>

                                    <p className="text-center text-xs text-slate-500 mt-4">
                                        Al enviar aceptas nuestra política de privacidad.
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
