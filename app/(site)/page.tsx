import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Job";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Scope Computer Job Consultancy Services",

  // other metadata
  description: "This is Home for Scope Computer"
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <About />
      <FunFact />
      <FAQ />
      <CTA />
    </main>
  );
}
