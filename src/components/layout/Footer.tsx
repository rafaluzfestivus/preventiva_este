"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import { ca as caDict } from "@/dictionaries/ca";

export function Footer() {
    const pathname = usePathname();
    const isCA = pathname.startsWith("/ca");
    const dict = isCA ? caDict.footer : {
        description:
            "Especialistas en la instalación de redes de protección de alta resistencia en Barcelona. Seguridad certificada para balcones, ventanas, terrazas, niños y mascotas.",
        quickLinksTitle: "Enlaces Rápidos",
        protectionForTitle: "Protección Para",
        contactTitle: "Contacto",
        copyright: "Todos los derechos reservados.",
        legalNotice: "Aviso Legal",
        privacyPolicy: "Política de Privacidad",
        cookies: "Cookies",
        mobileLabel: "Barcelona",
        serviceArea: "Barcelona y Área Metropolitana.",
        serviceAreaSub: "Servicio en toda Cataluña.",
        quickLinks: [
            { label: "Inicio", href: "/" },
            { label: "Testes y Certificaciones", href: "/testes-certificaciones" },
            { label: "Nuestros Servicios", href: "/#servicios" },
            { label: "Galería", href: "/#galeria" },
            { label: "Contacto", href: "/#contacto" },
        ],
        protectionLinks: [
            { label: "Seguridad Infantil", href: "/proteccion#ninos" },
            { label: "Redes para Gatos", href: "/proteccion#gatos" },
            { label: "Control de Aves (Palomas)", href: "/proteccion#aves" },
            { label: "Terrazas y Balcones", href: "/#servicios" },
            { label: "Ventanas y Escaleras", href: "/#servicios" },
        ],
    };
    const privacyHref = isCA ? "/ca/politica-privacitat" : "/politica-privacidad";
    const homeHref = isCA ? "/ca" : "/";

    return (
        <footer className="bg-[#4d2a36] text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href={homeHref} className="inline-block relative">
                            <Image
                                src="/logo-preventiva-este.png"
                                alt="Preventiva Este Logo"
                                width={180}
                                height={50}
                                className="h-14 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed">
                            {dict.description}
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="hover:text-yellow-400 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/preventivaeste/" className="hover:text-rose-500 transition-colors" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">{dict.quickLinksTitle}</h3>
                        <ul className="space-y-3 text-sm">
                            {dict.quickLinks.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">{dict.protectionForTitle}</h3>
                        <ul className="space-y-3 text-sm">
                            {dict.protectionLinks.map((link) => (
                                <li key={link.href + link.label}>
                                    <Link href={link.href} className="hover:text-yellow-400 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">{dict.contactTitle}</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-yellow-400 shrink-0 mt-1" />
                                <div>
                                    <span className="text-xs text-slate-400 font-bold uppercase block">{dict.mobileLabel}</span>
                                    <a href="tel:+34672078885" className="hover:text-white transition-colors">Móvil: 672 078 885</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
                                <span>contacto@preventivaeste.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-yellow-400 shrink-0" />
                                <span>{dict.serviceArea}<br /><span className="text-slate-500">{dict.serviceAreaSub}</span></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Preventiva Este. {dict.copyright}</p>
                    <div className="flex gap-6">
                        <Link href={privacyHref} className="hover:text-white transition-colors">{dict.legalNotice}</Link>
                        <Link href={privacyHref} className="hover:text-white transition-colors">{dict.privacyPolicy}</Link>
                        <Link href={privacyHref} className="hover:text-white transition-colors">{dict.cookies}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
