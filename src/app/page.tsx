import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ValueSection from "@/components/ValueSection";
import WhyChooseLuma from "@/components/WhyChooseLuma"
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Link from "next/link";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <>
<Hero />
<HowItWorks />
<ValueSection/>
<Feature />
<WhyChooseLuma />
<Testimonials />
<Pricing />
<CTA/>
<Footer/>
    </>
  );
}
