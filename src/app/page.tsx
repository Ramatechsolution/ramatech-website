import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import AudienceSection from "@/components/sections/AudienceSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import MetricsSection from "@/components/sections/MetricsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProofSection from "@/components/sections/ProofSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <MetricsSection />
      <ServicesSection />
      <ProcessSection />
      <ProofSection />
      <AudienceSection />
      <AboutSection />
      <WhyChooseUsSection />
      <FAQSection />
      <CTASection />
      <footer className="mt-8 border-t border-white/10 py-10">
        <div className="section-shell text-center text-sm text-slate-400">
          Ramtech DevOps - Kubernetes and Cloud for fast-growing startups.
        </div>
      </footer>
    </main>
  );
}
