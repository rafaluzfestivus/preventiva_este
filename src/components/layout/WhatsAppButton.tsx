"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const phoneNumber = "34637003793";
    const message = "Hola, quisiera más información sobre las redes de protección.";

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-6 right-6 z-50">
                    <motion.a
                        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full shadow-lg hover:shadow-green-500/30 hover:bg-green-600 transition-all relative"
                        aria-label="Contactar por WhatsApp"
                    >
                        <MessageCircle className="w-8 h-8 text-white fill-white" />
                        <span className="absolute right-0 top-0 flex h-4 w-4 -mt-1 -mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                        </span>
                    </motion.a>
                </div>
            )}
        </AnimatePresence>
    );
}
