import { useState, useEffect } from "react";
import { ShieldCheck, Cpu, Activity, Award } from "lucide-react";
import safetyInspection from "@/assets/safetyInspection.asset.json";

export function QualitySection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Movement Tracker for Hexagonal Vault Light
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const section = document.getElementById("quality-section");
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
      id="quality-section"
      className="relative overflow-hidden bg-[#030712] text-white py-16 sm:py-20 md:py-28 px-5 sm:px-8 md:px-12 border-y border-white/10"
      aria-label="Quality and Safety Assurance"
    >
      {/* ==================== HEXAGONAL VAULT BACKGROUND START ==================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        
        {/* SVG Hexagon Grid Pattern */}
        <svg
          className="absolute inset-0 h-full w-full opacity-15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hex-grid-quality"
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
          <rect width="100%" height="100%" fill="url(#hex-grid-quality)" />
        </svg>

        {/* Dynamic Cursor Light Spotlight */}
        <div
          className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-transparent blur-[110px] transition-transform duration-75 ease-out"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />

        {/* Ambient Corner Glows */}
        <div className="absolute top-10 -left-32 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute bottom-10 -right-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[130px]" />
      </div>
      {/* ==================== HEXAGONAL VAULT BACKGROUND END ==================== */}


      {/* Main Container Overlay */}
      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[72px] items-center">
        
        {/* Left Side: Clean Image Card (No overlay effect on image) */}
        <div className="relative h-[320px] sm:h-[420px] lg:h-[540px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl [clip-path:polygon(0_0,100%_0,100%_90%,85%_100%,0_100%)]">
          <img
            src={safetyInspection.url}
            alt="Construction Quality and Safety 3D LiDAR Audit"
            loading="lazy"
            className="w-full h-full object-cover"
          />

          {/* Badge Overlay */}
          <div className="absolute top-6 left-6 bg-slate-950/80 backdrop-blur-md border border-white/20 py-3 px-5 rounded-full flex items-center gap-2.5 text-[13px] font-bold text-white shadow-lg">
            <ShieldCheck size={18} className="text-amber-400" />
            <span>3D LiDAR &amp; ULTRASONIC LAB CERTIFIED</span>
          </div>
        </div>

        {/* Right Side: Content & Feature Cards */}
        <div>
          

          <h2 className="text-[32px] md:text-4xl lg:text-[46px] font-black leading-[1.15] my-4 text-white tracking-tight">
            Surgical Precision. <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Zero-Defect Tolerance.
            </span>
          </h2>

          <p className="text-base md:text-lg leading-[1.65] text-slate-300 mb-8 font-normal">
            We do not cut corners. Every structural component, concrete batch, and mechanical
            connection undergoes rigorous third-party ultrasonic inspections and continuous digital
            cloud verification.
          </p>

          <div className="grid gap-4 md:gap-5">
            {[
              {
                icon: <Cpu size={22} className="text-amber-400" />,
                title: "Sub-Millimeter 3D LiDAR Point-Cloud Verification",
                desc: "Weekly laser scans compare physical structural geometry against BIM CAD models to identify deviations before secondary stages commence.",
              },
              {
                icon: <Activity size={22} className="text-amber-400" />,
                title: "Ultrasonic Core & Weld Integrity Scans",
                desc: "Non-destructive testing on reinforced columns, shear walls, and structural steel connections to guarantee seismic resilience.",
              },
              {
                icon: <Award size={22} className="text-amber-400" />,
                title: "10-Year Comprehensive Structural Warranty",
                desc: "Backed by institutional warranties and certified engineering documentation delivered upon turnkey project completion.",
              },
            ].map(({ icon, title, desc }, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-4.5 rounded-2xl border border-white/10 bg-slate-950/60 p-5 md:py-5 md:px-6 backdrop-blur-md transition-all duration-300 hover:border-amber-500/40 hover:bg-slate-950/80 shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  {icon}
                </div>
                <div>
                  <h4 className="text-base font-extrabold mb-1 text-white group-hover:text-amber-300 transition-colors">
                    {title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-[1.6] m-0">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default QualitySection;