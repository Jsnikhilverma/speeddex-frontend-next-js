import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import warehouse from "@/assets/warehouse.asset.json";
import heroShip from "@/assets/heroShip.asset.json";
import truck from "@/assets/truck.asset.json";
import residentialVilla from "@/assets/residentialVilla.asset.json";

export function TrustShowcase() {
  const [slide, setSlide] = useState(0);
  const slides = [warehouse.url, heroShip.url, truck.url, residentialVilla.url];

  return (
    <section id="projects" className="mt-10 md:mt-20 bg-ink text-inverse min-h-0 md:min-h-screen">
      <div className="relative h-[420px] md:h-[60svh] min-h-0 md:min-h-[460px] [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%,0_8%)]">
        <img
          src={slides[slide]}
          alt="V Power construction projects"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10 flex items-center gap-5 rounded-full bg-black/50 backdrop-blur-sm py-1.5 px-3 text-inverse text-sm">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Previous project photo"
            onClick={() => setSlide((slide + 3) % 4)}
            className="text-white hover:bg-white/20"
          >
            <ChevronLeft />
          </Button>
          <span className="font-semibold">{slide + 1} / 4</span>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Next project photo"
            onClick={() => setSlide((slide + 1) % 4)}
            className="text-white hover:bg-white/20"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-[70px] py-14 px-6 md:py-[100px] md:px-[7.5%] items-start">
        <h2 className="text-[40px] md:text-6xl lg:text-[72px] font-bold leading-[1.25]">
          Your Vision,
          <br />
          Our
          <br />
          <span className="text-muted-foreground">Execution.</span>
        </h2>
        <div>
          <p className="text-[17px] md:text-xl text-muted-foreground leading-[1.65] mb-7 md:mb-11">
            We understand that landmark construction is more than pouring concrete—it's about
            building trust, elevating communities, and delivering lifetime structural integrity on
            schedule.
          </p>
          <Button variant="blue" asChild>
            <a href="/contact">
              Request a Quote <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
