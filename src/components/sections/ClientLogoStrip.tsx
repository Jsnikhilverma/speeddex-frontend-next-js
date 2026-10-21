import { CheckCircle2 } from "lucide-react";
import { partners } from "@/data/construction-data";

export function ClientLogoStrip() {
  return (
    <section
      className="bg-card border-y border-border py-6 md:py-8 px-5 md:px-12"
      aria-label="Trusted Enterprise Partners"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8 flex-wrap">
        <span className="text-[11px] font-extrabold tracking-[3px] text-muted-foreground uppercase">
          TRUSTED BY DEVELOPERS &amp; INSTITUTIONAL BUILDERS
        </span>
        <div className="flex items-center justify-center md:justify-start gap-6 md:gap-12 flex-wrap">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center gap-2 text-[15px] font-extrabold tracking-[1.5px] text-foreground opacity-70 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <CheckCircle2 size={16} className="text-primary" />
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
