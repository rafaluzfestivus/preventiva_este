"use client";

import { motion } from "framer-motion";
import {
  Shield, Clock, CheckCircle, Phone,
  Heart, ShieldAlert, Building2, Bird, Cat
} from "lucide-react";
import Link from "next/link";
import { ca } from "@/dictionaries/ca";

const d = ca.proteccion;

export default function CaProteccioContent() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Instal·lació de Xarxes de Protecció",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Preventiva Este"
    },
    "areaServed": {
      "@type": "City",
      "name": "Barcelona"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serveis de Protecció",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguretat Infantil" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Xarxes per a Gats" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Control d'Ocells" } }
      ]
    }
  };

  return (
    <main className="pt-20 min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#4d2a36] py-24 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-yellow-400 font-bold tracking-wider text-sm uppercase mb-3 block">
              {d.heroTag}
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-8">
              {d.heroTitle} <span className="text-yellow-400">{d.heroTitleHighlight}</span> per a la teva Llar
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-12">
              {d.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="https://wa.me/34637003793"
                target="_blank"
                className="bg-yellow-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-600 transition-all shadow-xl"
              >
                {d.heroCtaWhatsapp}
              </Link>
              <Link
                href="#ninos"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                {d.heroCtaSolutions}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-12 bg-gray-50 border-b border-gray-100 sticky top-20 z-10 backdrop-blur-md bg-white/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#ninos" className="px-6 py-2 rounded-full bg-slate-100 text-slate-700 font-bold hover:bg-yellow-500 hover:text-white transition-all text-sm">{d.navNinos}</Link>
            <Link href="#gatos" className="px-6 py-2 rounded-full bg-slate-100 text-slate-700 font-bold hover:bg-yellow-500 hover:text-white transition-all text-sm">{d.navGatos}</Link>
            <Link href="#aves" className="px-6 py-2 rounded-full bg-slate-100 text-slate-700 font-bold hover:bg-yellow-500 hover:text-white transition-all text-sm">{d.navAves}</Link>
          </div>
        </div>
      </section>

      {/* 1. SEGURETAT INFANTIL */}
      <section id="ninos" className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="bg-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-yellow-600 w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                {d.ninosTitle} <br />
                <span className="text-yellow-600 italic">{d.ninosSubtitle}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {d.ninosDescription}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-slate-900 mb-2">{d.ninosF1Title}</h4>
                  <p className="text-sm text-slate-600">{d.ninosF1Desc}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-slate-900 mb-2">{d.ninosF2Title}</h4>
                  <p className="text-sm text-slate-600">{d.ninosF2Desc}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-slate-900 mb-2">{d.ninosF3Title}</h4>
                  <p className="text-sm text-slate-600">{d.ninosF3Desc}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-slate-900 mb-2">{d.ninosF4Title}</h4>
                  <p className="text-sm text-slate-600">{d.ninosF4Desc}</p>
                </div>
              </div>
              <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl mb-8">
                <p className="text-red-700 italic font-bold text-lg">
                  &ldquo;{d.ninosQuote}&rdquo;
                </p>
              </div>
              <Link
                href="https://wa.me/34637003793"
                target="_blank"
                className="bg-[#4d2a36] text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:bg-slate-800 transition-all"
              >
                <Phone className="w-5 h-5" />
                {d.ninosCta}
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square relative">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542129596030-cf8d268d2a34?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4d2a36]/40 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
                  <p className="text-slate-900 font-bold mb-1 italic">&ldquo;{d.ninosOverlay}&rdquo;</p>
                  <span className="text-yellow-600 text-sm font-bold uppercase tracking-widest">{d.ninosBrand}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4"><hr className="border-gray-100" /></div>

      {/* 2. GATS */}
      <section id="gatos" className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <div className="bg-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Cat className="text-yellow-600 w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                {d.gatosTitle} <br />
                <span className="text-yellow-600 italic">{d.gatosSubtitle}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {d.gatosDescription}
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">{d.gatosF1Title}</h4>
                    <p className="text-sm text-slate-600">{d.gatosF1Desc}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">{d.gatosF2Title}</h4>
                    <p className="text-sm text-slate-600">{d.gatosF2Desc}</p>
                  </div>
                </li>
              </ul>
              <Link
                href="https://wa.me/34637003793"
                target="_blank"
                className="bg-yellow-500 text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:bg-yellow-600 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                {d.gatosCta}
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] relative">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2686&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4"><hr className="border-gray-100" /></div>

      {/* 3. OCELLS */}
      <section id="aves" className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="bg-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Bird className="text-yellow-600 w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                {d.avesTitle} <br />
                <span className="text-yellow-600 italic">{d.avesSubtitle}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {d.avesDescription}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex gap-4">
                  <div className="mt-1"><ShieldAlert className="text-yellow-600 w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{d.avesF1Title}</h4>
                    <p className="text-sm text-slate-600">{d.avesF1Desc}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Clock className="text-yellow-600 w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{d.avesF2Title}</h4>
                    <p className="text-sm text-slate-600">{d.avesF2Desc}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Heart className="text-yellow-600 w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{d.avesF3Title}</h4>
                    <p className="text-sm text-slate-600">{d.avesF3Desc}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><Building2 className="text-yellow-600 w-6 h-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{d.avesF4Title}</h4>
                    <p className="text-sm text-slate-600">{d.avesF4Desc}</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#4d2a36] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <p className="text-xl font-bold mb-4 relative z-10 italic">{d.avesCtaTitle}</p>
                <p className="text-slate-300 mb-6 relative z-10">{d.avesCtaDesc}</p>
                <Link
                  href="https://wa.me/34637003793"
                  target="_blank"
                  className="bg-yellow-500 text-white px-8 py-4 rounded-full font-bold inline-block hover:bg-yellow-600 transition-all relative z-10"
                >
                  {d.avesCta}
                </Link>
                <Bird className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 rotate-12" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square relative group">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1549608276-5786d7ff1f1d?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
            {d.finalTitle}
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            {d.finalDescription}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              href="https://wa.me/34637003793"
              target="_blank"
              className="bg-[#4d2a36] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl"
            >
              <Phone className="w-6 h-6" />
              637 003 793
            </Link>
            <Link
              href="/ca#contacto"
              className="bg-white text-[#4d2a36] border-2 border-[#4d2a36] px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center transition-all shadow-lg hover:bg-gray-50"
            >
              {d.finalCtaForm}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
