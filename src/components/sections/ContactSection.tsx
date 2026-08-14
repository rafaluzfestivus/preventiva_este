"use client";

import { Phone, Mail, MapPin, Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import type { SiteDict } from "@/dictionaries/types";

const ADS_ID = 'AW-18111431326';
const ADS_CONVERSION = `${ADS_ID}/CONVERSION_LABEL`;

interface ContactSectionProps {
    dict?: SiteDict["contact"];
}

const defaultDict: SiteDict["contact"] = {
    tag: "Contacta con Nosotros",
    title: "¿Listo para proteger tu hogar?",
    description:
        "Solicita tu presupuesto gratuito y sin compromiso hoy mismo. Nuestro equipo te asesorará sobre la mejor solución para tu espacio.",
    callTitle: "Llámanos",
    callLabel: "Barcelona",
    writeTitle: "Escríbenos",
    serviceAreaTitle: "Área de Servicio",
    serviceAreaText: "Barcelona y Área Metropolitana",
    serviceAreaSub: "Servicio en toda Cataluña.",
    formTitle: "Pedir Presupuesto",
    formName: "Nombre",
    formPhone: "Teléfono",
    formEmail: "Email",
    formPostal: "Código Postal",
    formService: "Tipo de Servicio",
    formMessage: "Mensaje",
    formNamePlaceholder: "Tu nombre",
    formMessagePlaceholder: "Cuéntanos más sobre lo que necesitas...",
    formSubmit: "Solicitar Presupuesto GRATIS",
    formSending: "Enviando...",
    formSuccessTitle: "¡Mensaje Enviado!",
    formSuccessDesc: "Gracias por contactarnos. Te responderemos lo antes posible.",
    formSendAnother: "Enviar otro mensaje",
    formError: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
    formPrivacy: "Al enviar aceptas nuestra política de privacidad.",
    defaultService: "Protección para Balcón",
    serviceOptions: [
        "Protección para Balcón",
        "Protección para Ventanas",
        "Protección para Gatos",
        "Otro",
    ],
    subject: "Nuevo mensaje desde Preventiva Este",
};

function fireConversionTracking() {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'conversion', {
            'send_to': ADS_CONVERSION,
            'value': 1.0,
            'currency': 'EUR',
        });
    }
    if (typeof window !== 'undefined' && Array.isArray((window as any).dataLayer)) {
        (window as any).dataLayer.push({ 'event': 'generate_lead', 'form_name': 'contact_form' });
    }
}

function trackPhoneClick(number: string) {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'phone_click', { 'event_category': 'contact', 'phone_number': number });
    }
    if (typeof window !== 'undefined' && Array.isArray((window as any).dataLayer)) {
        (window as any).dataLayer.push({ 'event': 'phone_click', 'phone_number': number });
    }
}

export function ContactSection({ dict = defaultDict }: ContactSectionProps) {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        email: "",
        codigoPostal: "",
        servicio: dict.defaultService,
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
            access_key: "dad08198-4366-413c-8549-d3f46bd328bb",
            Nombre: formData.nombre,
            Teléfono: formData.telefono,
            Email: formData.email,
            "Código Postal": formData.codigoPostal,
            Servicio: formData.servicio,
            Mensaje: formData.mensaje,
            subject: dict.subject,
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
            const sheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL ?? "";

            const emailPromise = fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify(data),
            });

            const [emailResult] = await Promise.allSettled([
                emailPromise,
                fetch("/api/lead", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        nombre: formData.nombre,
                        telefono: formData.telefono,
                        email: formData.email,
                        codigoPostal: formData.codigoPostal,
                        servicio: formData.servicio,
                        mensaje: formData.mensaje,
                    }),
                }),
                fetch("https://fluxo.festivusia.com/webhook/emailpreventivaeste", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Accept": "application/json" },
                    body: JSON.stringify(data),
                }),
                sheetsUrl
                    ? fetch(sheetsUrl, {
                        method: "POST",
                        mode: "no-cors",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: sheetsData.toString(),
                    })
                    : Promise.resolve(),
            ]) as [PromiseSettledResult<Response>, ...unknown[]];

            if (emailResult.status === 'fulfilled' && emailResult.value.ok) {
                fireConversionTracking();
                setStatus("success");
                setFormData({ nombre: "", telefono: "", email: "", codigoPostal: "", servicio: dict.defaultService, mensaje: "" });
            } else {
                setStatus("error");
            }
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
                            {dict.tag}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {dict.title}
                        </h2>
                        <p className="text-slate-300 mb-12 text-lg leading-relaxed">
                            {dict.description}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-500/20 p-3 rounded-lg">
                                    <Phone className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">{dict.callTitle}</h3>
                                    <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider block">{dict.callLabel}</span>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:+34681625566" onClick={() => trackPhoneClick('+34681625566')} className="text-slate-300 hover:text-white transition-colors text-lg">
                                            Móvil: 681 625 566
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-500/20 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">{dict.writeTitle}</h3>
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
                                    <h3 className="font-bold text-xl mb-1">{dict.serviceAreaTitle}</h3>
                                    <p className="text-slate-300 text-lg">
                                        {dict.serviceAreaText}<br />
                                        <span className="text-sm text-slate-500">{dict.serviceAreaSub}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900">
                            <h3 className="text-2xl font-bold mb-6">{dict.formTitle}</h3>

                            {status === "success" ? (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                                    <div className="flex justify-center mb-3">
                                        <CheckCircle className="w-12 h-12 text-green-500" />
                                    </div>
                                    <h4 className="text-xl font-bold text-green-800 mb-2">{dict.formSuccessTitle}</h4>
                                    <p className="text-green-700">{dict.formSuccessDesc}</p>
                                    <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-green-600 hover:text-green-800 font-medium text-sm underline">
                                        {dict.formSendAnother}
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">{dict.formName}</label>
                                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all" placeholder={dict.formNamePlaceholder} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">{dict.formPhone}</label>
                                            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all" placeholder="600 000 000" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">{dict.formEmail}</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all" placeholder="tu@email.com" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">{dict.formPostal}</label>
                                            <input type="text" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all" placeholder="08000" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-1">{dict.formService}</label>
                                            <select name="servicio" value={formData.servicio} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all bg-white">
                                                {dict.serviceOptions.map((opt) => (
                                                    <option key={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">{dict.formMessage}</label>
                                        <textarea rows={4} name="mensaje" value={formData.mensaje} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all resize-none" placeholder={dict.formMessagePlaceholder}></textarea>
                                    </div>

                                    {status === "error" && (
                                        <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm">
                                            <XCircle className="w-4 h-4 flex-shrink-0" />
                                            {dict.formError}
                                        </div>
                                    )}

                                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg px-4 py-3 flex items-center gap-3 text-sm text-slate-600">
                                        <span className="text-yellow-600 font-bold text-base">✓</span>
                                        <span>Presupuesto gratuito · Sin compromiso · Respuesta en menos de 24h</span>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {status === "loading" ? (
                                            <><Loader2 className="w-5 h-5 animate-spin" /> {dict.formSending}</>
                                        ) : (
                                            <><Send className="w-5 h-5" /> {dict.formSubmit}</>
                                        )}
                                    </button>

                                    <p className="text-center text-xs text-slate-500 mt-4">
                                        Al enviar aceptas nuestra{" "}
                                        <a href="/politica-privacidad" className="underline hover:text-slate-700">
                                            política de privacidad
                                        </a>
                                        .
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
