import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Shield, Target, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — V Power Construction" },
      {
        name: "description",
        content:
          "Learn about V Power Construction, our executive leadership, zero-harm safety culture, and eleven-year legacy of engineering excellence.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="WHO WE ARE"
          title="Master Builders of Tomorrow's Skylines"
          description="Founded in 2015, V Power Construction has evolved from a boutique civil engineering contractor into a nationally celebrated infrastructure and EPC powerhouse, delivering over 12.8 million square feet of landmark developments."
          ctaText="Explore Our Projects"
          ctaLink="/projects"
        />

        {/* Core Pillars */}
        <section className="py-20 px-6 md:px-12 bg-background">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-blue-surface text-primary grid place-items-center mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Our Core Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver structurally invincible, architecturally iconic, and environmentally
                  sustainable developments that shape skylines and elevate communities for
                  generations.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-green-surface text-accent grid place-items-center mb-6">
                  <Shield size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Zero-Harm Heritage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over 4.2 million safe work hours logged, safety is not a protocol at V
                  Power—it is an uncompromising culture built into every blueprint and site
                  inspection.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-warm text-orange grid place-items-center mb-6">
                  <Users size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Turnkey Certainty</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From geotechnical surveys and municipal clearances to architectural handover, our
                  end-to-end EPC methodology guarantees on-time milestone delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <DifferenceSection />
        <StatsSection />
        <QualitySection />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
