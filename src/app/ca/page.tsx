import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhyUs } from "@/components/sections/WhyUs";
import { AboutUs } from "@/components/sections/AboutUs";
import { ca } from "@/dictionaries/ca";

export const metadata: Metadata = {
  title: "Instal·lació de Xarxes de Protecció a Barcelona | Preventiva Este",
  description:
    "Especialistes en instal·lació de xarxes de protecció per a balcons, finestres i terrasses a Barcelona i voltants. Resistència de 150kg/m² i 3 anys de garantia.",
  alternates: {
    canonical: "https://preventivaeste.com/ca",
    languages: {
      es: "https://preventivaeste.com",
      ca: "https://preventivaeste.com/ca",
    },
  },
  openGraph: {
    url: "https://preventivaeste.com/ca",
    title: "Preventiva Este | Xarxes de Protecció a Barcelona",
    description:
      "Instal·lació professional de xarxes de protecció i malles de seguretat a Barcelona.",
    images: [{ url: "https://preventivaeste.com/logo-preventiva-este.png", alt: "Preventiva Este" }],
  },
};

export default function CaHome() {
  return (
    <>
      <Hero dict={ca.hero} basePath="/ca" />
      <TrustBar dict={ca.trustBar} />
      <Services dict={ca.services} />
      <Benefits dict={ca.benefits} />
      <WhyUs dict={ca.whyUs} />
      <AboutUs dict={ca.aboutUs} />
      <Gallery dict={ca.gallery} />
      <Testimonials dict={ca.testimonials} />
      <ContactSection dict={ca.contact} />
    </>
  );
}
