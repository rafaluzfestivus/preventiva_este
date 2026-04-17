"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Nosotros", href: "/#sobre-nosotros" },
        { name: "Certificaciones", href: "/testes-certificaciones" },
        { name: "Protección", href: "/proteccion" },
        { name: "Servicios", href: "/#servicios" },
        { name: "Contacto", href: "/#contacto" },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
        }`}>
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-center relative">
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
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
                        href="#contacto"
                        className="bg-yellow-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-yellow-600 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <Phone className="w-4 h-4" />
                        Llamar Ahora
                    </Link>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden p-2 rounded-lg absolute left-4 ${
                        scrolled ? "text-[#4d2a36]" : "text-white"
                    }`}
                    aria-label="Abrir menú"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
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
                            {navLinks.map((link) => (
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
                                    href="#contacto"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-yellow-500 text-white w-full py-3 rounded-lg font-bold flex justify-center items-center gap-2 hover:bg-yellow-600 transition-colors"
                                >
                                    <Phone className="w-5 h-5" />
                                    Solicitar Presupuesto
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
