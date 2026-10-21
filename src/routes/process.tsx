import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Compass, FileCheck2, Scan } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Execution Blueprint & Technology — V Power Construction" },
      {
        name: "description",
        content:
          "Discover our 4-stage engineering blueprint, 5D BIM digital twin simulations, drone LiDAR audits, and non-destructive ultrasonic testing.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="EXECUTION BLUEPRINT"
          title="Mathematical Precision. Zero Margin For Error."
          description="We replace construction guesswork with digital twins, multi-dimensional clash detection, robotic laser screeds, and continuous third-party laboratory audits."
          ctaText="Consult On Your Project"
          ctaLink="/contact"
        />

        <ProcessSection />

        {/* Digital Construction Technology Stack */}
        <section className="py-20 px-6 md:px-12 bg-secondary">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block border border-border bg-background text-foreground rounded-[24px] text-xs font-bold px-4 py-3 mb-6 md:mb-8 uppercase tracking-wider">
                DIGITAL CONSTRUCTION TECH
              </span>
              <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2] mt-4">
                Cutting-Edge Construction Technology.
              </h2>
              <div className="h-1 md:h-1.5 w-20 mx-auto my-5 md:mt-6 md:mb-12 rounded-[3px] bg-accent" />
              <p className="text-muted-foreground text-lg">
                We combine traditional structural engineering mastery with Silicon Valley digital
                twin innovations to de-risk investments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-border shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-blue-surface text-primary grid place-items-center mb-6">
                  <Compass size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">5D BIM Virtual Clashing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Before a single cubic meter of concrete is poured, our engineers model structural,
                  architectural, MEP, and HVAC disciplines in full 5D virtual space, pre-empting
                  100% of site collisions.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-green-surface text-accent grid place-items-center mb-6">
                  <Scan size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Drone LiDAR Site Clouds</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Weekly autonomous drone flights capture high-density millimeter point-clouds,
                  comparing physical progress against CAD schedule baselines to prevent milestone
                  drift.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border shadow-sm">
                <div className="w-14 h-14 rounded-xl bg-warm text-orange grid place-items-center mb-6">
                  <FileCheck2 size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">RFID Batch Traceability</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every structural steel rebar heat number, batching plant delivery, and
                  post-tensioning anchor is digitally cataloged with cryptographically verified test
                  certificates.
                </p>
              </div>
            </div>
          </div>
        </section>

        <QualitySection />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
