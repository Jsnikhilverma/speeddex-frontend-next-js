import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  ctaText = "Consult Our Engineers",
  ctaLink = "/contact",
}: PageHeaderProps) {
  return (
    <div className="bg-ink text-inverse pt-36 md:pt-44 pb-16 md:pb-20 px-6 md:px-12 relative overflow-hidden border-b border-border/20">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--primary)_0%,_transparent_70%)]" />
      <div className="max-w-[1440px] mx-auto relative z-10">
        <span className="inline-block border border-white/20 bg-white/10 text-white rounded-[24px] text-xs font-bold px-4 py-3 mb-6 md:mb-8 uppercase tracking-wider">
          {eyebrow}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-4 max-w-4xl leading-[1.15]">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl leading-relaxed">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="blue" asChild>
            <a href={ctaLink}>
              {ctaText} <ArrowRight />
            </a>
          </Button>
          <Button variant="soft" asChild>
            <a href="/projects">View Completed Portfolio</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
