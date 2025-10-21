import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import TechGrid from "@/components/home/TechGrid";
import Testimonials from "@/components/home/Testimonials";
import Cta from "@/components/home/Cta";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <SectionDivider variant="wave" animated />
      <ServicesOverview />
      <SectionDivider variant="diagonal" animated />
      <TechGrid />
      <SectionDivider variant="curve" animated />
      <Testimonials />
      <SectionDivider variant="wave" animated />
      <Cta />
    </div>
  );
}
