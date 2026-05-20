import { NextRequest, NextResponse } from "next/server";

const BASE = "https://chat.preventivacentro.es";
const ACCOUNT = 2;
const INBOX = 7;
const TOKEN = "JBhhZJ61cgtyjf4RTR9SUoLe";

const headers = {
    "Content-Type": "application/json",
    "api_access_token": TOKEN,
};

export async function POST(req: NextRequest) {
    try {
        const { nombre, telefono, email, codigoPostal, servicio, mensaje } = await req.json();

        const contactRes = await fetch(`${BASE}/api/v1/accounts/${ACCOUNT}/contacts`, {
            method: "POST",
            headers,
            body: JSON.stringify({ name: nombre, email, phone_number: telefono }),
        });
        const contact = await contactRes.json();

        if (!contact.id) {
            console.error("Chatwoot contact error:", contact);
            return NextResponse.json({ error: "contact_failed" }, { status: 500 });
        }

        const convRes = await fetch(`${BASE}/api/v1/accounts/${ACCOUNT}/conversations`, {
            method: "POST",
            headers,
            body: JSON.stringify({ inbox_id: INBOX, contact_id: contact.id }),
        });
        const conv = await convRes.json();

        if (!conv.id) {
            console.error("Chatwoot conversation error:", conv);
            return NextResponse.json({ error: "conversation_failed" }, { status: 500 });
        }

        await fetch(`${BASE}/api/v1/accounts/${ACCOUNT}/conversations/${conv.id}/messages`, {
            method: "POST",
            headers,
            body: JSON.stringify({
                content: `📍 CP: ${codigoPostal} | 🔧 ${servicio}\n\n${mensaje}`,
                message_type: "incoming",
            }),
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Chatwoot route error:", err);
        return NextResponse.json({ error: "internal" }, { status: 500 });
    }
}
