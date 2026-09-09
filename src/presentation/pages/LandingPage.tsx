import { Header } from "@/presentation/components/layout/Header";
import { Footer } from "@/presentation/components/layout/Footer";
import { HeroSection } from "@/presentation/components/hero/HeroSection";
import { StatsSection } from "@/presentation/components/stats/StatsSection";
import { ServicesSection } from "@/presentation/components/services/ServicesSection";
import { ProjectsSection } from "@/presentation/components/projects/ProjectsSection";
import { MethodologySection } from "@/presentation/components/methodology/MethodologySection";
import { AboutSection } from "@/presentation/components/about/AboutSection";
import { ContactSection } from "@/presentation/components/contact/ContactSection";
import { WhatsAppFloatingButton } from "@/presentation/components/shared/WhatsAppFloatingButton";

export function LandingPage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <MethodologySection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
