import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhyUs } from "@/components/sections/WhyUs";
import { AboutUs } from "@/components/sections/AboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Benefits />
      <WhyUs />
      <AboutUs />
      <Gallery />
      <Testimonials />
      <ContactSection />
    </>
  );
}
