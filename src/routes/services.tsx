import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { services } from "@/data/construction-data";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Construction & Engineering Services — V Power Construction" },
      {
        name: "description",
        content:
          "Explore our turnkey commercial towers, pre-engineered industrial warehouses, heavy civil infrastructure, and bespoke luxury residential construction services.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="OUR SPECIALIZATIONS"
          title="Turnkey Engineering & Construction Services"
          description="We deliver end-to-end EPC contracts across commercial skylines, automated industrial logistics parks, critical transportation bridges, and signature luxury architectural villas."
          ctaText="Request Service Consultation"
          ctaLink="/contact"
        />

        <ServicesSection />

        {/* Detailed Services Deep Dive */}
        <section className="py-24 px-6 md:px-12 bg-background">
          <div className="max-w-[1440px] mx-auto space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-sm font-bold tracking-wider text-primary mb-4">
                    <service.Icon size={18} />
                    <span>{service.name.toUpperCase()}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border text-sm font-medium"
                      >
                        <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="blue" asChild>
                    <a href="/contact">
                      Request Consultation for {service.name} <ArrowRight />
                    </a>
                  </Button>
                </div>

                <div
                  className={`relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-border ${index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex items-end p-8">
                    <span className="text-white font-bold text-lg">{service.tagline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Equipment Fleet Metrics */}
        <section className="py-20 px-6 md:px-12 bg-ink text-inverse">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block border border-white/20 bg-white/10 text-white rounded-[24px] text-xs font-bold px-4 py-3 mb-6 md:mb-8 uppercase tracking-wider">
                CAPITAL MACHINERY FLEET
              </span>
              <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2] text-white mt-4">
                Heavy Machinery &amp; Plant Fleet.
              </h2>
              <div className="h-1 md:h-1.5 w-20 mx-auto my-5 md:mt-6 md:mb-12 rounded-[3px] bg-accent" />
              <p className="text-muted-foreground text-lg">
                We own and operate one of the region's largest fleets of Tier-1 heavy construction
                equipment, ensuring zero subcontractor dependency.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { count: "85+", title: "Tower & Crawler Cranes" },
                { count: "14", title: "Automated Batching Plants" },
                { count: "120+", title: "Hydraulic Piling & Earth Rigs" },
                { count: "100%", title: "In-House Scaffolding & Formwork" },
              ].map(({ count, title }) => (
                <div key={title} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">{count}</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-accent">
                    {title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
