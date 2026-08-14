import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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

        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
            return NextResponse.json({ ok: true, skipped: true });
        }

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.SUPABASE_SERVICE_ROLE_KEY,
        );

        // Save lead to the shared Supabase (company_id=2 = Preventiva Este)
        const whatsapp = toE164(telefono).replace(/\D/g, "");
        const { error } = await supabase.from("clients").upsert({
            name: nombre,
            whatsapp,
            email: email || null,
            postal_code: codigoPostal || null,
            service_requested: servicio || null,
            message: mensaje || null,
            source: "site",
            status: "lead",
            company_id: 2,
        }, { onConflict: "whatsapp" });

        if (error) {
            console.error("Supabase lead upsert error:", error);
            return NextResponse.json({ error: "supabase_failed" }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Lead route error:", err);
        return NextResponse.json({ error: "internal" }, { status: 500 });
    }
}
