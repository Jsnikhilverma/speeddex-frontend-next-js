import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Request A Quote — Speeddex Construction" },
      {
        name: "description",
        content:
          "Reach out to speeddex Construction engineering headquarters for turnkey project estimates, architectural consultations, and site inquiries.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="CONNECT WITH OUR ENGINEERS"
          title="Start Your Project With Complete Certainty"
          description="Schedule a technical consultation with our principal civil engineers and BIM architects to assess site feasibility, structural estimates, and turnkey milestone planning."
          ctaText="Submit Project Inquiry"
          ctaLink="#estimate"
        />

        {/* Global Offices & Directory */}
        <section className="py-20 px-6 md:px-12 bg-background">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-surface text-primary grid place-items-center mb-6">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">India Headquarters</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Corporate Tower 4, Cyber City, Sector 29, V Power Infra Campus, Gurugram, Haryana
                  122008
                </p>
                <div className="text-xs font-semibold text-primary">
                  Engineering Operations &amp; Central Lab
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-green-surface text-accent grid place-items-center mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Direct Phone &amp; Email</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Telephone: (+91) 9310023990
                  <br />
                  Consultation: build@vpower-construction.com
                </p>
                <div className="text-xs font-semibold text-emerald-600">
                  Direct Line To Senior Estimators
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-warm text-orange grid place-items-center mb-6">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Operational Hours</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Mon – Sat: 8:00 AM – 7:00 PM IST
                  <br />
                  Site Emergency Desk: 24/7 Monitored
                </p>
                <div className="text-xs font-semibold text-orange">Rapid 24-Hour Bid Response</div>
              </div>
            </div>
          </div>
        </section>

        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
