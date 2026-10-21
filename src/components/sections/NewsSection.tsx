import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stories } from "@/data/construction-data";

export function NewsSection() {
  return (
    <section id="news" className="bg-secondary py-14 md:py-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-left text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2]">
          News &amp; Insights.
        </h2>
        <p className="max-w-[640px] text-muted-foreground text-[17px] md:text-xl my-6 md:mt-6 md:mb-14 leading-[1.6]">
          We are more than builders; we are visionaries pioneering sustainable construction,
          advanced structural engineering, and smart city infrastructure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stories.map(({ title, date, category, image }) => (
            <article
              className="bg-background overflow-hidden rounded-lg shadow-sm border border-border flex flex-col justify-between"
              key={title}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-60 md:h-[280px] object-cover"
                loading="lazy"
              />
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div className="text-muted-foreground text-[13px] flex flex-wrap gap-3">
                  <span>{date}</span>
                  <span>•</span>
                  <span>{category}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold leading-[1.35] my-6">{title}</h3>
                <Button variant="link" asChild className="px-0 self-start">
                  <a href="/contact">
                    Read Case Study <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
