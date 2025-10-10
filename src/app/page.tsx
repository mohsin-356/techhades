import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import TechGrid from "@/components/home/TechGrid";
import Testimonials from "@/components/home/Testimonials";
import Cta from "@/components/home/Cta";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <TechGrid />
      <Testimonials />
      <Cta />
    </div>
  );
}
