import { useState, useEffect, type FormEvent } from "react";
import { ArrowUpRight, ShieldCheck, Clock, CheckCircle2, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/construction-data";

export function QuoteSection() {
  const [selectedService, setSelectedService] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse movement tracker for Hexagonal Vault Light
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const section = document.getElementById("estimate");
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

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      "Service: " + (services[selectedService]?.name ?? "Commercial Towers"),
      ...Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`),
    ].join("\n");

    window.location.href = `mailto:build@vpower-construction.com?subject=${encodeURIComponent(
      "Construction Project Consultation Request"
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section
      id="estimate"
      className="relative overflow-hidden bg-[#030712] py-24 sm:py-28 md:py-36 px-4 sm:px-6 lg:px-8 text-white min-h-screen flex items-center justify-center"
    >
      {/* ==================== HEXAGONAL VAULT BACKGROUND START ==================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        
        {/* SVG Hexagon Pattern Overlay */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hex-grid"
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
          <rect width="100%" height="100%" fill="url(#hex-grid)" />
        </svg>

        {/* Dynamic Cursor Light Spotlight (Soft Gold/Amber Glow Following Mouse) */}
        <div
          className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-500/25 via-orange-500/15 to-transparent blur-[110px] transition-transform duration-75 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />

        {/* Additional Ambient Background Glows */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[130px]" />
      </div>
      {/* ==================== HEXAGONAL VAULT BACKGROUND END ==================== */}

      {/* Content Container Overlay */}
      <div className="relative z-10 mx-auto max-w-5xl w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto -mt-20">
          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-none">
            Contact us
          </h2>

          <div className="mx-auto my-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-md shadow-amber-500/40" />

          <p className="text-base text-slate-300 sm:text-lg leading-relaxed">
            Submit your site parameters for a structural audit, detailed BOQ calculation, and feasibility timeline report.
          </p>
        </div>

        {/* Main Glassmorphic Dark Form Card */}
        <div className="mt-10 rounded-3xl border border-white/15 bg-slate-950/70 p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          <form onSubmit={submitQuote} className="space-y-8">
            
            {/* Step 1: Category Selector */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-white">
                  Step 01 / Select Project Category
                </span>
                {/* <span className="text-xs text-slate-400">* Required</span> */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {services.slice(0, 3).map(({ name, Icon }, i) => {
                  const isActive = selectedService === i;
                  return (
                    <button
                      type="button"
                      key={name}
                      onClick={() => setSelectedService(i)}
                      className={`group relative flex items-center justify-between rounded-2xl p-4 transition-all duration-300 border text-left cursor-pointer ${
                        isActive
                          ? "border-amber-500 bg-amber-500/20 text-white ring-2 ring-amber-500/40 shadow-lg shadow-amber-500/10"
                          : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all ${
                          isActive 
                            ? "bg-amber-500 text-slate-950 font-bold" 
                            : "bg-white/5 text-slate-400 group-hover:bg-amber-500/20 group-hover:text-amber-400"
                        }`}>
                          {Icon && <Icon className="h-5 w-5" />}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wide">
                          {name}
                        </span>
                      </div>
                      
                      {isActive && <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Form Inputs Grid */}
            <div>
              <div className="mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-white">
                  Step 02 / Project Specifications
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {[
                  { label: "Full Name", name: "Full Name", type: "text", required: true, placeholder: "e.g. Vikramaditya Singh" },
                  { label: "Email", name: "Corporate Email", type: "email", required: true, placeholder: "vikram@company.com" },
                  { label: "Phone Number", name: "Phone Number", type: "tel", required: true, placeholder: "+91 98765 43210" },
                  { label: "Project Location", name: "Project Location", type: "text", required: false, placeholder: "e.g. Noida, Sector 132" },
                  { label: "Built-up Area (Sq Ft)", name: "Plot Area", type: "text", required: false, placeholder: "e.g. 75,000 Sq Ft" },
                  { label: "Expected Timeline", name: "Timeline", type: "text", required: false, placeholder: "e.g. Q4 2026 / 24 Months" },
                ].map(({ label, name, type, required, placeholder }) => (
                  <div key={label} className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      {label} {required && <span className="text-amber-400">*</span>}
                    </label>
                    <input
                      name={name}
                      aria-label={label}
                      placeholder={placeholder}
                      type={type}
                      required={required}
                      className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-amber-400" />
                  <span>NDA Protection</span>
                </div>
                <span className="text-slate-700">•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-amber-400" />
                  <span>24-Hour Turnaround</span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto h-13 px-9 font-extrabold text-sm sm:text-base rounded-xl bg-blue-600 text-white hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                <span className="text-white">Request Consultation</span>
                <ArrowUpRight className="h-5 w-5 stroke-[2.5] text-white" />
              </Button>

            </div>

          </form>
        </div>

      </div>
    </section>
  );
}

export default QuoteSection;