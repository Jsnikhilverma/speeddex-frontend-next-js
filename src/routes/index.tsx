import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { ContactStrip } from "@/components/layout/ContactStrip";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientLogoStrip } from "@/components/sections/ClientLogoStrip";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TrustShowcase } from "@/components/sections/TrustShowcase";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { NewsSection } from "@/components/sections/NewsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "V Power Construction — Engineering & Infrastructure Solutions",
      },
      {
        name: "description",
        content:
          "V Power Construction delivers iconic commercial towers, civil infrastructure, industrial facilities, and luxury residential developments with zero-harm safety standards.",
      },
      {
        property: "og:title",
        content: "V Power Construction — Engineering & Infrastructure Solutions",
      },
      {
        property: "og:description",
        content:
          "Premier engineering & construction firm delivering turnkey EPC, commercial high-rises, and civil infrastructure backed by 450+ completed landmark projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ContactStrip />
        <ClientLogoStrip />
        <DifferenceSection />
        <StatsSection />
        <ProcessSection />
        <TrustShowcase />
        <ServicesSection />
        <QualitySection />
        <TestimonialsSection />
        <QuoteSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
