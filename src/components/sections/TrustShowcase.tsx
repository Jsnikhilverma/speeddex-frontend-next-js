import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import warehouse from "@/assets/warehouse.asset.json";
import heroShip from "@/assets/heroShip.asset.json";
import truck from "@/assets/truck.asset.json";
import residentialVilla from "@/assets/residentialVilla.asset.json";

export function TrustShowcase() {
  const [slide, setSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const projects = [
    { url: warehouse.url, title: "Industrial Logistics Hub", category: "Commercial" },
    { url: heroShip.url, title: "Maritime Infrastructure", category: "Heavy Civil" },
    { url: truck.url, title: "Fleet & Transport Terminal", category: "Logistics" },
    { url: residentialVilla.url, title: "Luxury Horizon Villa", category: "Residential" },
  ];

  // Mouse Movement Tracker for Hexagonal Vault Light
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const section = document.getElementById("projects");
      if (section) {
        const rect = section.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#030712] text-white my-10 md:my-0 border-y border-white/10"
    >
      {/* ==================== HEXAGONAL VAULT BACKGROUND START ==================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        {/* SVG Hexagon Grid */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hex-grid-trust"
              width="56"
              height="96"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z M28 48 L56 64 L56 96 L28 112 L0 96 L0 64 Z"
                fill="none"
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-grid-trust)" />
        </svg>

        {/* Dynamic Cursor Light Spotlight */}
        <div
          className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-transparent blur-[110px] transition-transform duration-75 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />

        {/* Ambient Radial Background Glows */}
        <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[130px]" />
        <div className="absolute bottom-10 -left-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
      </div>
      {/* ==================== HEXAGONAL VAULT BACKGROUND END ==================== */}


      {/* Main Content Overlay Container */}
      <div className="relative z-10">
        
        {/* Hero Slider Container */}
        <div className="relative h-[440px] md:h-[65svh] min-h-[400px] md:min-h-[520px] w-full overflow-hidden border-b border-white/10">
          
          {/* Active Image */}
          <img
            src={projects[slide].url}
            alt={projects[slide].title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 ease-in-out scale-100 hover:scale-105"
          />

          {/* Top Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-black/30 to-black/60" />

          {/* Image Tag / Project Caption Overlay */}
          {/* <div className="absolute top-6 left-6 md:top-10 md:left-12 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-slate-950/80 px-4 py-1.5 backdrop-blur-md">
              <Building2 className="h-4 w-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                {projects[slide].category}
              </span>
            </span>
          </div> */}

          {/* Image Title at Bottom Left */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-12 max-w-lg">
            <h3 className="text-xl md:text-3xl font-extrabold text-white drop-shadow-md">
              {projects[slide].title}
            </h3>
          </div>

          {/* Navigation Controls at Bottom Right */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 flex items-center gap-4 rounded-full border border-white/20 bg-slate-950/80 backdrop-blur-md py-2 px-4 shadow-2xl">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Previous project photo"
              onClick={() => setSlide((slide + projects.length - 1) % projects.length)}
              className="text-white hover:bg-white/20 hover:text-amber-400 rounded-full transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots / Page Counter */}
            <div className="flex items-center gap-2 px-2">
              <span className="text-xs font-black tracking-widest text-amber-400">
                0{slide + 1}
              </span>
              <span className="text-slate-600">/</span>
              <span className="text-xs font-bold text-slate-400">
                0{projects.length}
              </span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Next project photo"
              onClick={() => setSlide((slide + 1) % projects.length)}
              className="text-white hover:bg-white/20 hover:text-amber-400 rounded-full transition-colors cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Text Section Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[80px] py-16 px-6 md:py-[100px] md:px-[7.5%] items-center max-w-[1440px] mx-auto">
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            Your Vision,
            <br />
            Our
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Execution.
            </span>
          </h2>

          <div>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8 md:mb-10 font-normal">
              We understand that landmark construction is more than pouring concrete—it's about
              building trust, elevating communities, and delivering lifetime structural integrity on
              schedule.
            </p>

            <Button
              asChild
              className="h-13 px-8 font-extrabold text-sm sm:text-base rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/25 transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
            >
              <a href="/contact" className="flex items-center gap-2">
                <span>Request a Quote</span>
                <ArrowRight className="h-5 w-5 stroke-[2.5]" />
              </a>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default TrustShowcase;