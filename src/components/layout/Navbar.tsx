"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

function getLocaleFromPath(pathname: string): "es" | "ca" {
    return pathname.startsWith("/ca") ? "ca" : "es";
}

function getAlternatePath(pathname: string, targetLocale: "es" | "ca"): string {
    const currentLocale = getLocaleFromPath(pathname);
    if (currentLocale === targetLocale) return pathname;

    if (targetLocale === "ca") {
        return "/ca" + pathname;
    } else {
        return pathname.replace(/^\/ca/, "") || "/";
    }
}

const navConfig = {
    es: {
        links: [
            { name: "Inicio", href: "/" },
            { name: "Nosotros", href: "/#sobre-nosotros" },
            { name: "Certificaciones", href: "/testes-certificaciones" },
            { name: "Protección", href: "/proteccion" },
            { name: "Servicios", href: "/#servicios" },
            { name: "Contacto", href: "/#contacto" },
        ],
        cta: "Llamar Ahora",
        ctaMobile: "Solicitar Presupuesto",
        ctaHref: "/#contacto",
        openMenu: "Abrir menú",
    },
    ca: {
        links: [
            { name: "Inici", href: "/ca" },
            { name: "Nosaltres", href: "/ca#sobre-nosotros" },
            { name: "Certificacions", href: "/ca/testes-certificaciones" },
            { name: "Protecció", href: "/ca/proteccion" },
            { name: "Serveis", href: "/ca#servicios" },
            { name: "Contacte", href: "/ca#contacto" },
        ],
        cta: "Trucar Ara",
        ctaMobile: "Sol·licitar Pressupost",
        ctaHref: "/ca#contacto",
        openMenu: "Obrir menú",
    },
};

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const locale = getLocaleFromPath(pathname);
    const config = navConfig[locale];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const esPath = getAlternatePath(pathname, "es");
    const caPath = getAlternatePath(pathname, "ca");

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
        }`}>
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-center relative">
                <div className="hidden md:flex items-center gap-8">
                    {config.links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-bold text-base tracking-wide transition-colors hover:text-yellow-400 ${
                                scrolled ? "text-[#4d2a36]" : "text-white drop-shadow-md hover:text-yellow-300"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href={config.ctaHref}
                        className="bg-yellow-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-yellow-600 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <Phone className="w-4 h-4" />
                        {config.cta}
                    </Link>

                    {/* Language Switcher */}
                    <div className={`flex items-center gap-1 text-sm font-bold border rounded-full px-3 py-1.5 transition-colors ${
                        scrolled
                            ? "border-[#4d2a36]/30 text-[#4d2a36]"
                            : "border-white/30 text-white"
                    }`}>
                        <Globe className="w-3.5 h-3.5 mr-1 opacity-70" />
                        <Link
                            href={esPath}
                            className={`transition-opacity ${locale === "es" ? "opacity-100 underline underline-offset-2" : "opacity-50 hover:opacity-80"}`}
                            aria-label="Versión en Español"
                        >
                            ES
                        </Link>
                        <span className="opacity-30 mx-0.5">|</span>
                        <Link
                            href={caPath}
                            className={`transition-opacity ${locale === "ca" ? "opacity-100 underline underline-offset-2" : "opacity-50 hover:opacity-80"}`}
                            aria-label="Versió en Català"
                        >
                            CA
                        </Link>
                    </div>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden p-2 rounded-lg absolute left-4 ${
                        scrolled ? "text-[#4d2a36]" : "text-white"
                    }`}
                    aria-label={config.openMenu}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile language switcher */}
                <div className={`md:hidden absolute right-4 flex items-center gap-1 text-xs font-bold border rounded-full px-2 py-1 ${
                    scrolled ? "border-[#4d2a36]/30 text-[#4d2a36]" : "border-white/30 text-white"
                }`}>
                    <Link
                        href={esPath}
                        className={`transition-opacity ${locale === "es" ? "opacity-100" : "opacity-40"}`}
                        aria-label="Español"
                    >
                        ES
                    </Link>
                    <span className="opacity-30">|</span>
                    <Link
                        href={caPath}
                        className={`transition-opacity ${locale === "ca" ? "opacity-100" : "opacity-40"}`}
                        aria-label="Català"
                    >
                        CA
                    </Link>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {config.links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-700 font-medium hover:text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-50"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-100">
                                <Link
                                    href={config.ctaHref}
                                    onClick={() => setIsOpen(false)}
                                    className="bg-yellow-500 text-white w-full py-3 rounded-lg font-bold flex justify-center items-center gap-2 hover:bg-yellow-600 transition-colors"
                                >
                                    <Phone className="w-5 h-5" />
                                    {config.ctaMobile}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
