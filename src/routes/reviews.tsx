import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ClientLogoStrip } from "@/components/sections/ClientLogoStrip";
import { QuoteSection } from "@/components/sections/QuoteSection";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews & Endorsements — Speeddex Construction" },
      {
        name: "description",
        content:
          "Verified client testimonials and project endorsements from institutional developers, managing directors, and architects.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="CLIENT REVIEWS & TESTIMONIALS"
          title="Endorsed by the Visionaries Who Shape Skylines"
          description="Institutional developers and master architects trust Speeddex Construction for our mathematical predictability, unyielding site safety, and craftsmanship that endures for generations."
          ctaText="Partner With Us"
          ctaLink="/contact"
        />

        <ClientLogoStrip />

        {/* Reputation Highlights Banner */}
        <section className="py-16 px-6 md:px-12 bg-background border-b border-border">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-black text-primary mb-2">100%</div>
                <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Repeat Client Rate on Multi-Phase Builds
                </div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-black text-primary mb-2">4.98 / 5.0</div>
                <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Institutional Developer Satisfaction Rating
                </div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-black text-primary mb-2">0 Disputes</div>
                <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Zero Legal or Arbitration Disputes Since 2015
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
