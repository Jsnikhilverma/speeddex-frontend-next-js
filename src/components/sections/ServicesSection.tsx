import { useState } from "react";
import { ArrowUpRight, Boxes, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/construction-data";

export function ServicesSection() {
  const [selected, setSelected] = useState(0);
  const item = services[selected] ?? services[0];
  if (!item) return null;

  return (
    <section id="services" className="py-14 md:pt-24 md:pb-16 px-4">
      <div id="shipment" />
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2]">
          V Power Engineering.
        </h2>
        <div className="h-1 md:h-1.5 w-20 mx-auto my-5 md:mt-6 md:mb-12 rounded-[3px] bg-accent" />
        <div
          className="flex justify-center gap-2.5 md:gap-4 mb-8 md:mb-14 flex-wrap"
          role="tablist"
          aria-label="Construction services"
        >
          {services.map(({ name, Icon }, i) => (
            <Button
              variant="freight"
              role="tab"
              aria-selected={selected === i}
              data-active={selected === i}
              key={name}
              onClick={() => setSelected(i)}
            >
              <Icon />
              {name}
            </Button>
          ))}
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-[54%_46%] bg-card min-h-0 md:min-h-[600px] relative overflow-hidden border-y-2 border-orange rounded-2xl md:rounded-none shadow-sm"
          role="tabpanel"
        >
          <div className="p-6 sm:p-8 md:p-14 lg:p-20 relative z-10">
            <Boxes size={44} className="text-primary" strokeWidth={1} />
            <h3 className="text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl font-extrabold my-5 md:mt-7.5 md:mb-5 leading-[1.2]">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-[1.6] max-w-[480px]">
              {item.description}
            </p>
            <ul className="my-8 md:mt-8 md:mb-10 grid gap-4 font-bold">
              {item.benefits.map((x) => (
                <li key={x} className="flex gap-3.5 items-center text-foreground">
                  <Check className="text-accent w-5 h-5 shrink-0" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button variant="nav" asChild size="lg">
                <a href="/contact">
                  Connect With Us <ArrowUpRight />
                </a>
              </Button>
              <Button variant="soft" asChild size="lg">
                <a href="/services">Detailed Capabilities →</a>
              </Button>
            </div>
          </div>
          <img
            className="w-full h-[300px] md:h-full object-cover [clip-path:none] md:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%,20%_50%)]"
            src={item.image}
            alt={item.name}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
