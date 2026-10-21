import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/construction-data";

export function QuoteSection() {
  const [tracking, setTracking] = useState(false);
  const [service, setService] = useState(0);
  const [trackingMessage, setTrackingMessage] = useState<string | null>(null);

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      "Service: " + (services[service]?.name ?? "Commercial Towers"),
      ...Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`),
    ].join("\n");
    window.location.href = `mailto:build@vpower-construction.com?subject=${encodeURIComponent(
      "Construction Project Consultation Request",
    )}&body=${encodeURIComponent(body)}`;
  }

  function submitTracking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const id = form.get("trackingNumber") || "VP-2026";
    setTrackingMessage(
      `Project #${id}: Phase 3 Superstructure & MEP Installations currently in progress. 0 Safety Incidents. On track for scheduled milestone inspection.`,
    );
  }

  return (
    <section
      id="industries"
      className="bg-ink min-h-[760px] md:min-h-screen text-inverse py-10 px-4 md:px-6"
    >
      <div id="estimate" />
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
        Assured<span className="text-accent">.</span> Precision
        <span className="text-accent">.</span> Built to Last
        <span className="text-accent">.</span>
      </h2>
      <div className="h-1 md:h-1.5 w-20 mx-auto my-5 md:mt-6 md:mb-10 rounded-[3px] bg-accent" />
      <div className="max-w-[850px] mx-auto mt-10 bg-secondary text-secondary-foreground rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
        <div
          className="grid grid-cols-2 p-1 gap-1 bg-muted/40"
          role="tablist"
          aria-label="Project enquiry"
        >
          <Button
            variant="quoteTab"
            role="tab"
            aria-selected={!tracking}
            data-active={!tracking}
            onClick={() => setTracking(false)}
          >
            Request A Quote
          </Button>
          <Button
            variant="quoteTab"
            role="tab"
            aria-selected={tracking}
            data-active={tracking}
            onClick={() => setTracking(true)}
          >
            Project Tracking
          </Button>
        </div>
        {tracking ? (
          <form className="p-5 sm:p-6 md:p-10" onSubmit={submitTracking}>
            <label
              htmlFor="tracking-number"
              className="text-sm sm:text-base font-semibold block mb-3 text-foreground"
            >
              Project ID / Permit Number
            </label>
            <input
              id="tracking-number"
              name="trackingNumber"
              placeholder="Enter Project ID (e.g. VP-2026-DELHI)"
              required
              className="w-full min-w-0 border border-orange bg-card p-3 md:p-4 text-xs md:text-sm rounded-[10px] outline-accent text-foreground placeholder:text-muted-foreground"
            />
            {trackingMessage && (
              <div className="mt-4 p-4 rounded-lg bg-background text-foreground border border-primary/20 text-sm leading-relaxed">
                {trackingMessage}
              </div>
            )}
            <Button
              type="submit"
              className="h-[50px] md:h-14 px-6 md:px-10 font-bold shadow-button rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all mt-6"
            >
              Track Milestone Status <ArrowUpRight />
            </Button>
          </form>
        ) : (
          <form className="p-5 sm:p-6 md:p-10" onSubmit={submitQuote}>
            <label className="text-sm sm:text-base font-semibold block mb-3 text-foreground">
              Select Project Category*
            </label>
            <div className="flex gap-2 md:gap-4 mb-8 flex-wrap">
              {services.slice(0, 3).map(({ name, Icon }, i) => (
                <Button
                  type="button"
                  variant="service"
                  data-active={service === i}
                  aria-pressed={service === i}
                  key={name}
                  onClick={() => setService(i)}
                >
                  <Icon />
                  {name.toUpperCase()}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-6">
              {[
                { label: "Full Name", type: "text", required: true },
                {
                  label: "Corporate Email",
                  type: "email",
                  required: true,
                },
                {
                  label: "Phone Number",
                  type: "tel",
                  required: true,
                },
                {
                  label: "Project Location (City)",
                  type: "text",
                  required: false,
                },
                {
                  label: "Plot / Built-up Area (Sq Ft)",
                  type: "text",
                  required: false,
                },
                {
                  label: "Estimated Budget & Timeline",
                  type: "text",
                  required: false,
                },
              ].map(({ label, type, required }) => (
                <input
                  name={label}
                  aria-label={label}
                  placeholder={label}
                  type={type}
                  required={required}
                  key={label}
                  className="w-full min-w-0 border border-orange bg-card p-3 md:p-4 text-xs md:text-sm rounded-[10px] outline-accent text-foreground placeholder:text-muted-foreground"
                />
              ))}
            </div>
            <p className="text-nav-ink text-[11px] md:text-sm leading-[1.6] my-6 md:mt-8 md:mb-5">
              By providing your contact information to "V Power Construction", you agree to receive
              project consultations, architectural feasibility insights, and milestone reports.
              Message and data rates may apply. You may opt out at any time by replying "STOP". For
              more information, please review our privacy policy.
            </p>
            <Button
              type="submit"
              className="h-[50px] md:h-14 px-6 md:px-10 font-bold shadow-button rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Request Consultation +
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
