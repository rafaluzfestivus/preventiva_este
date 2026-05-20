"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();
    const isCA = pathname.startsWith("/ca");

    const dict = isCA
        ? {
              text: "Utilitzem galetes pròpies i de tercers per millorar la seva experiència i els nostres serveis, analitzant la navegació al nostre lloc web. Si continua navegant, considerem que accepta el seu ús. Podeu obtenir més informació a la nostra",
              linkText: "Política de Privacitat",
              linkHref: "/ca/politica-privacitat",
              accept: "Acceptar",
              close: "Tancar",
          }
        : {
              text: "Utilizamos cookies propias y de terceros para mejorar su experiencia y nuestros servicios, analizando la navegación en nuestro sitio web. Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra",
              linkText: "Política de Privacidad",
              linkHref: "/politica-privacidad",
              accept: "Aceptar",
              close: "Cerrar",
          };

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) setIsVisible(true);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#4d2a36] text-white p-4 z-50 shadow-lg border-t border-[#4d2a36]/50">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-300">
                    <p>
                        {dict.text}{" "}
                        <Link href={dict.linkHref} className="text-yellow-400 hover:text-yellow-300 underline">
                            {dict.linkText}
                        </Link>.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold rounded-full transition-colors whitespace-nowrap"
                    >
                        {dict.accept}
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors"
                        aria-label={dict.close}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
