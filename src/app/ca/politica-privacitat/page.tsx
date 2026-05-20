import type { Metadata } from "next";
import { ca } from "@/dictionaries/ca";

export const metadata: Metadata = {
  title: "Política de Privacitat | Preventiva Este",
  description: "Política de Privacitat i Protecció de Dades de Preventiva Este.",
  alternates: {
    canonical: "https://preventivaeste.com/ca/politica-privacitat",
    languages: {
      es: "https://preventivaeste.com/politica-privacidad",
      ca: "https://preventivaeste.com/ca/politica-privacitat",
    },
  },
};

const d = ca.privacyPolicy;

export default function CaPrivacitatPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">{d.title}</h1>

      <div className="prose prose-lg max-w-none text-slate-700">
        <p>{d.intro}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s1Title}</h2>
        <p dangerouslySetInnerHTML={{ __html: d.s1Content.replace(
          "contacto@preventivaeste.com",
          '<strong>Correu electrònic de contacte:</strong> contacto@preventivaeste.com'
        ).replace("637 003 793", '<strong>Telèfon:</strong> 637 003 793') }} />

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s2Title}</h2>
        <p>{d.s2Intro}</p>
        <ul className="list-disc pl-6 space-y-2">
          {d.s2Items.map((item, i) => (
            <li key={i}><strong>{item.split(":")[0]}:</strong>{item.substring(item.indexOf(":") + 1)}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s3Title}</h2>
        <p dangerouslySetInnerHTML={{ __html: d.s3Content
          .replace("consentiment explícit", "<strong>consentiment explícit</strong>")
          .replace("execució d'un contracte", "<strong>execució d'un contracte</strong>")
        }} />

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s4Title}</h2>
        <p>{d.s4Content}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s5Title}</h2>
        <p>{d.s5Intro}</p>
        <ul className="list-disc pl-6 space-y-2">
          {d.s5Items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          {d.s5Footer.replace("contacto@preventivaeste.com", "")}
          <strong>contacto@preventivaeste.com</strong>
          {" "}indicant el dret que voleu exercir.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s6Title}</h2>
        <p>{d.s6Content}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s7Title}</h2>
        <p>{d.s7Content}</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">{d.s8Title}</h2>
        <p>{d.s8Content}</p>

        <p className="text-sm text-slate-500 mt-12">
          {d.lastUpdated} {new Date().toLocaleDateString("ca-ES")}
        </p>
      </div>
    </div>
  );
}
