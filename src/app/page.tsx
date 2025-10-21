import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import TechGrid from "@/components/home/TechGrid";
import Testimonials from "@/components/home/Testimonials";
import Cta from "@/components/home/Cta";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Home() {
  return (
    <div className="relative gpu-accelerated">
      <div className="smooth-rendering">
        <Hero />
      </div>
      
      <div>
        <SectionDivider variant="wave" animated />
      </div>
      
      <div className="smooth-rendering">
        <ServicesOverview />
      </div>
      
      <div>
        <SectionDivider variant="diagonal" animated />
      </div>
      
      <div className="smooth-rendering">
        <TechGrid />
      </div>
      
      <div>
        <SectionDivider variant="curve" animated />
      </div>
      
      <div className="smooth-rendering">
        <Testimonials />
      </div>
      
      <div>
        <SectionDivider variant="wave" animated />
      </div>
      
      <div className="smooth-rendering">
        <Cta />
      </div>
    </div>
  );
}
