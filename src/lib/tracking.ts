const ADS_ACCOUNT = "AW-16676255191";

export const CONVERSION_FORM = `${ADS_ACCOUNT}/UrlACP6WjOUZENfr7Y8-`;
export const CONVERSION_WHATSAPP = `${ADS_ACCOUNT}/UDTSCIGXjOUZENfr7Y8-`;

type GtagWindow = Window & {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
};

function push(event: string, params: Record<string, unknown> = {}) {
    if (typeof window === "undefined") return;
    const w = window as GtagWindow;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event, ...params });
}

function adsConversion(sendTo: string) {
    if (typeof window === "undefined") return;
    (window as GtagWindow).gtag?.("event", "conversion", { send_to: sendTo });
}

export function trackFormSubmit() {
    adsConversion(CONVERSION_FORM);
    push("generate_lead", { form_name: "contact_form" });
}

export function trackWhatsAppClick() {
    adsConversion(CONVERSION_WHATSAPP);
    push("whatsapp_click", { page_path: window.location.pathname });
}

export function trackPhoneClick(number: string) {
    push("phone_click", { phone_number: number, page_path: window.location.pathname });
}

export function trackEmailClick(address: string) {
    push("email_click", { email: address, page_path: window.location.pathname });
}
