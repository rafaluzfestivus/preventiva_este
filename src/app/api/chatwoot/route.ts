import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const BASE = process.env.CHATWOOT_BASE_URL ?? "https://chat.preventivacentro.es";
const ACCOUNT = Number(process.env.CHATWOOT_ACCOUNT_ID ?? "2");
const INBOX = Number(process.env.CHATWOOT_INBOX_ID ?? "7");
const TOKEN = process.env.CHATWOOT_TOKEN ?? "";

const headers = {
    "Content-Type": "application/json",
    "api_access_token": TOKEN,
};

function toE164(phone: string): string {
    const digits = phone.replace(/\D/g, "");
    if (digits.startsWith("34")) return `+${digits}`;
    if (digits.startsWith("6") || digits.startsWith("7") || digits.startsWith("9")) {
        return `+34${digits}`;
    }
    return `+${digits}`;
}

export async function POST(req: NextRequest) {
    try {
        const { nombre, telefono, email, codigoPostal, servicio, mensaje } = await req.json();

        const phone = toE164(telefono);

        // Save lead to the shared Supabase (company_id=2 = Preventiva Este)
        if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
            const supabase = createClient(
                process.env.NEXT_PUBLIC_SUPABASE_URL,
                process.env.SUPABASE_SERVICE_ROLE_KEY,
            );
            const digits = phone.replace(/\D/g, "");
            await supabase.from("clients").upsert({
                name: nombre,
                whatsapp: digits,
                email: email || null,
                postal_code: codigoPostal || null,
                service_requested: servicio || null,
                message: mensaje || null,
                source: "site",
                status: "lead",
                company_id: 2,
            }, { onConflict: "whatsapp" });
        }

        // Create contact
        const contactRes = await fetch(`${BASE}/api/v1/accounts/${ACCOUNT}/contacts`, {
            method: "POST",
            headers,
            body: JSON.stringify({ name: nombre, email, phone_number: phone }),
        });
        const contactBody = await contactRes.json();
        console.log("Chatwoot contact response:", contactRes.status, JSON.stringify(contactBody));

        // If contact already exists, Chatwoot returns 422 with attributes at the root
        let contactId: number | undefined = contactBody.payload?.contact?.id;
        if (!contactId && contactBody.attributes) {
            // Try to find existing contact by phone
            const searchRes = await fetch(
                `${BASE}/api/v1/accounts/${ACCOUNT}/contacts/search?q=${encodeURIComponent(phone)}&include_contacts=true`,
                { headers }
            );
            const searchBody = await searchRes.json();
            console.log("Chatwoot search response:", searchRes.status, JSON.stringify(searchBody));
            contactId = searchBody.payload?.[0]?.id;
        }

        if (!contactId) {
            console.error("Could not get contact ID from Chatwoot");
            return NextResponse.json({ error: "contact_failed" }, { status: 500 });
        }

        // Create conversation
        const convRes = await fetch(`${BASE}/api/v1/accounts/${ACCOUNT}/conversations`, {
            method: "POST",
            headers,
            body: JSON.stringify({ inbox_id: INBOX, contact_id: contactId }),
        });
        const convBody = await convRes.json();
        console.log("Chatwoot conversation response:", convRes.status, JSON.stringify(convBody));

        if (!convBody.id) {
            console.error("Could not create conversation in Chatwoot");
            return NextResponse.json({ error: "conversation_failed" }, { status: 500 });
        }

        // Send message
        const msgRes = await fetch(`${BASE}/api/v1/accounts/${ACCOUNT}/conversations/${convBody.id}/messages`, {
            method: "POST",
            headers,
            body: JSON.stringify({
                content: `📍 CP: ${codigoPostal} | 🔧 ${servicio}\n\n${mensaje}`,
                message_type: "incoming",
            }),
        });
        const msgBody = await msgRes.json();
        console.log("Chatwoot message response:", msgRes.status, JSON.stringify(msgBody));

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Chatwoot route error:", err);
        return NextResponse.json({ error: "internal" }, { status: 500 });
    }
}
