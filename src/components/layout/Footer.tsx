import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#4d2a36] text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="inline-block relative">
                            <Image
                                src="/logo-preventiva-este.png"
                                alt="Preventiva Este Logo"
                                width={180}
                                height={50}
                                className="h-14 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Especialistas en la instalación de redes de protección de alta resistencia en Barcelona.
                            Seguridad certificada para balcones, ventanas, terrazas, niños y mascotas.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="hover:text-yellow-400 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/preventivacentro/" className="hover:text-rose-500 transition-colors" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Enlaces Rápidos</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-yellow-400 transition-colors">Inicio</Link></li>
                            <li><Link href="/testes-certificaciones" className="hover:text-yellow-400 transition-colors">Testes y Certificaciones</Link></li>
                            <li><Link href="/#servicios" className="hover:text-yellow-400 transition-colors">Nuestros Servicios</Link></li>
                            <li><Link href="/#galeria" className="hover:text-yellow-400 transition-colors">Galería</Link></li>
                            <li><Link href="/#contacto" className="hover:text-yellow-400 transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Protección Para</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/proteccion#ninos" className="hover:text-yellow-400 transition-colors">Seguridad Infantil</Link></li>
                            <li><Link href="/proteccion#gatos" className="hover:text-yellow-400 transition-colors">Redes para Gatos</Link></li>
                            <li><Link href="/proteccion#aves" className="hover:text-yellow-400 transition-colors">Control de Aves (Palomas)</Link></li>
                            <li><Link href="/#servicios" className="hover:text-yellow-400 transition-colors">Terrazas y Balcones</Link></li>
                            <li><Link href="/#servicios" className="hover:text-yellow-400 transition-colors">Ventanas y Escaleras</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Contacto</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-yellow-400 shrink-0 mt-1" />
                                <div>
                                    <span className="text-xs text-slate-400 font-bold uppercase block">Barcelona</span>
                                    <a href="tel:+34637003793" className="hover:text-white transition-colors">Móvil: 637 003 793</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
                                <span>contacto@preventivaeste.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-yellow-400 shrink-0" />
                                <span>Barcelona y Área Metropolitana.<br /><span className="text-slate-500">Servicio en toda Cataluña.</span></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Preventiva Este. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/politica-privacidad" className="hover:text-white transition-colors">Aviso Legal</Link>
                        <Link href="/politica-privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
                        <Link href="/politica-privacidad" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
