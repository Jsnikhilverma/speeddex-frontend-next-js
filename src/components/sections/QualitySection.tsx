import { ShieldCheck, Cpu, Activity, Award } from "lucide-react";
import safetyInspection from "@/assets/safetyInspection.asset.json";

export function QualitySection() {
  return (
    <section
      className="bg-ink text-inverse py-14 md:py-[100px] px-5 md:px-12 overflow-hidden"
      aria-label="Quality and Safety Assurance"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[72px] items-center">
        <div className="relative h-[320px] sm:h-[420px] lg:h-[540px] rounded-3xl overflow-hidden [clip-path:polygon(0_0,100%_0,100%_90%,85%_100%,0_100%)]">
          <img
            src={safetyInspection.url}
            alt="Construction Quality and Safety 3D LiDAR Audit"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md border border-white/20 py-3 px-5 rounded-full flex items-center gap-2.5 text-[13px] font-bold text-white">
            <ShieldCheck size={18} className="text-primary" />
            <span>3D LiDAR &amp; ULTRASONIC LAB CERTIFIED</span>
          </div>
        </div>

        <div>
          <span className="inline-block border border-white/20 bg-white/10 text-white rounded-[24px] text-xs font-bold px-4 py-3 mb-6 md:mb-8 uppercase tracking-wider">
            ZERO-HARM QUALITY ASSURANCE
          </span>
          <h2 className="text-[32px] md:text-4xl lg:text-[46px] font-extrabold leading-[1.2] my-5 md:mt-5 md:mb-6 text-white">
            Surgical Precision. Zero-Defect Tolerance.
          </h2>
          <p className="text-base md:text-lg leading-[1.65] text-muted-foreground mb-9">
            We do not cut corners. Every structural component, concrete batch, and mechanical
            connection undergoes rigorous third-party ultrasonic inspections and continuous digital
            cloud verification.
          </p>

          <div className="grid gap-5">
            <div className="flex items-start gap-4.5 bg-white/[0.04] border border-white/10 p-5 md:py-5 md:px-6 rounded-2xl">
              <div className="w-11 h-11 rounded-[10px] bg-primary text-primary-foreground grid place-items-center shrink-0">
                <Cpu size={22} />
              </div>
              <div>
                <h4 className="text-base font-extrabold mb-1 text-white">
                  Sub-Millimeter 3D LiDAR Point-Cloud Verification
                </h4>
                <p className="text-sm text-muted-foreground leading-[1.5] m-0">
                  Weekly laser scans compare physical structural geometry against BIM CAD models to
                  identify deviations before secondary stages commence.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4.5 bg-white/[0.04] border border-white/10 p-5 md:py-5 md:px-6 rounded-2xl">
              <div className="w-11 h-11 rounded-[10px] bg-primary text-primary-foreground grid place-items-center shrink-0">
                <Activity size={22} />
              </div>
              <div>
                <h4 className="text-base font-extrabold mb-1 text-white">
                  Ultrasonic Core &amp; Weld Integrity Scans
                </h4>
                <p className="text-sm text-muted-foreground leading-[1.5] m-0">
                  Non-destructive testing on reinforced columns, shear walls, and structural steel
                  connections to guarantee seismic resilience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4.5 bg-white/[0.04] border border-white/10 p-5 md:py-5 md:px-6 rounded-2xl">
              <div className="w-11 h-11 rounded-[10px] bg-primary text-primary-foreground grid place-items-center shrink-0">
                <Award size={22} />
              </div>
              <div>
                <h4 className="text-base font-extrabold mb-1 text-white">
                  10-Year Comprehensive Structural Warranty
                </h4>
                <p className="text-sm text-muted-foreground leading-[1.5] m-0">
                  Backed by institutional warranties and certified engineering documentation
                  delivered upon turnkey project completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
