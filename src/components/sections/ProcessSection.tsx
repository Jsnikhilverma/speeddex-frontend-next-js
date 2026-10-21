import { Check } from "lucide-react";
import { blueprintSteps } from "@/data/construction-data";

export function ProcessSection() {
  return (
    <section id="process" className="py-14 md:py-[108px] px-5 md:px-12 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block border border-border bg-secondary text-secondary-foreground rounded-[24px] text-xs font-bold px-4 py-3 mb-6 md:mb-8 uppercase tracking-wider">
            OUR EXECUTION BLUEPRINT
          </span>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2] mt-4">
            How We Engineer Absolute Trust.
          </h2>
          <div className="h-1 md:h-1.5 w-20 mx-auto my-5 md:mt-6 md:mb-12 rounded-[3px] bg-accent" />
          <p className="max-w-[640px] text-muted-foreground text-[17px] md:text-xl mx-auto mb-8 md:mb-14 leading-[1.6]">
            From initial geotechnical laser soil mapping to final turnkey key handover, every
            milestone is tracked with mathematical precision and zero margin for error.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 mt-14">
          {blueprintSteps.map(({ step, title, desc, badge }) => (
            <article
              key={step}
              className="bg-card border border-border rounded-[20px] p-6 sm:p-7 lg:p-10 relative flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl transition-all duration-200"
            >
              <div>
                <div className="text-[32px] font-black text-accent mb-5 leading-none">{step}</div>
                <h3 className="text-xl font-extrabold leading-[1.35] mb-3.5">{title}</h3>
                <p className="text-[15px] leading-[1.65] text-muted-foreground mb-6">{desc}</p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-primary bg-blue-surface px-3 py-1.5 rounded-full w-fit">
                <Check size={14} />
                <span>{badge}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
