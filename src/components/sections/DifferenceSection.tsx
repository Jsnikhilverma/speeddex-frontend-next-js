import { ArrowRight, Building2, Sprout, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ship from "@/assets/ship.asset.json";
import plane from "@/assets/plane.asset.json";

export function DifferenceSection() {
  const features = [
    {
      Icon: Building2,
      iconColor: "text-orange",
      bgClass: "bg-warm",
      title: (
        <>
          Precision Engineering &amp;
          <br /> Structural Mastery.
        </>
      ),
      desc: "From deep foundation piling to state-of-the-art superstructures, we engineer buildings that withstand the test of time and seismic forces.",
    },
    {
      Icon: Sprout,
      iconColor: "text-accent",
      bgClass: "bg-green-surface",
      title: (
        <>
          To Sustainability &amp;
          <br /> Net-Zero Commitment.
        </>
      ),
      desc: "Pioneering eco-friendly low-carbon concrete, LEED Platinum certified building practices, and energy-efficient lifecycle operations.",
    },
    {
      Icon: ShieldCheck,
      iconColor: "text-primary",
      bgClass: "bg-blue-surface",
      title: (
        <>
          Advanced 5D BIM &amp;
          <br /> Safety Standards.
        </>
      ),
      desc: "Leveraging digital twin modeling, drone aerial surveys, and strict zero-incident safety protocols across every construction site.",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[70px] items-center">
          <div>
            {/* <span className="inline-block border border-border bg-secondary text-secondary-foreground rounded-[24px] text-xs font-bold px-4 py-3 mb-6 md:mb-8 uppercase tracking-wider">
              ENGINEERING EXCELLENCE
            </span> */}
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] mb-8 md:mb-12 max-w-[600px]">
              We are dedicated to
              <br /> delivering comprehensive
              <br /> &amp; sustainable{" "}
              <span className="text-accent">
                construction
                <br /> solutions.
              </span>
            </h2>
            <Button variant="soft" asChild>
              <a href="/about">
                Why We're Different <ArrowRight />
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:gap-9 h-[320px] md:h-[510px]">
            <img
              src={ship.url}
              alt="Modern Architectural Facade"
              loading="lazy"
              className="w-full h-full object-cover [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%,0_10%)]"
            />
            <img
              src={plane.url}
              alt="Civil Engineers on Construction Site"
              loading="lazy"
              className="w-full h-[96%] object-cover mt-5 md:mt-9 [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%,0_10%)]"
            />
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 mt-15 md:mt-16 overflow-hidden rounded-2xl"
          id="different"
        >
          {features.map(({ Icon, iconColor, bgClass, title, desc }, i) => (
            <article className={`p-8 lg:p-12 ${bgClass}`} key={i}>
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-background grid place-items-center mb-6 md:mb-8 ${iconColor}`}
              >
                <Icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-[22px] md:text-2xl font-bold leading-[1.3] mb-6">{title}</h3>
              <p className="text-base md:text-lg leading-[1.65] text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
