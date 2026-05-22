"use client";

import { motion } from "framer-motion";
import { Shield, Sun, Weight, Flame, EyeOff, Anchor, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ca } from "@/dictionaries/ca";

const d = ca.certificaciones;

const specIcons = [
  <Sun key="sun" className="w-12 h-12 text-yellow-500" />,
  <Weight key="weight" className="w-12 h-12 text-yellow-500" />,
  <Flame key="flame" className="w-12 h-12 text-yellow-500" />,
  <EyeOff key="eye" className="w-12 h-12 text-yellow-500" />,
];

export default function CaCertificacionsContent() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      <section className="bg-[#4d2a36] py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {d.heroTitle} <br />
              <span className="text-yellow-400">{d.heroTitleHighlight}</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {d.heroDescription}
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500/5 -skew-x-12 translate-x-1/4" />
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{d.materialTitle}</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {d.materialDescription}
              </p>
              <div className="space-y-4 text-slate-800">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-500 w-6 h-6" />
                  <span className="font-medium">{d.materialF1}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-500 w-6 h-6" />
                  <span className="font-medium">{d.materialF2}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-500 w-6 h-6" />
                  <span className="font-medium">{d.materialF3}</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl aspect-video relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Shield className="w-32 h-32 opacity-20" />
              </div>
              <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/img-1.jpg')" }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all bg-white"
              >
                <div className="mb-6">{specIcons[index]}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{spec.title}</h3>
                <p className="text-slate-600 leading-relaxed">{spec.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <Anchor className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{d.fixingTitle}</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            {d.fixingDescription}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="bg-[#4d2a36] rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{d.ctaTitle}</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              {d.ctaDescription}
            </p>
            <Link
              href="/ca#contacto"
              className="inline-block bg-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 transition-all transform hover:scale-105"
            >
              {d.ctaButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
