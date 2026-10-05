"use client";

import { useEffect } from "react";
import { trackEmailClick, trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

// Single delegated listener: covers every wa.me / tel: / mailto: link on the site.
export function ClickTracking() {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const link = (e.target as Element | null)?.closest?.("a");
            const href = link?.getAttribute("href");
            if (!href) return;

            if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) {
                trackWhatsAppClick();
            } else if (href.startsWith("tel:")) {
                trackPhoneClick(href.slice(4));
            } else if (href.startsWith("mailto:")) {
                trackEmailClick(href.slice(7));
            }
        };
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    return null;
}
