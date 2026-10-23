import React from "react";
import { stats, certifications } from "@/data/construction-data";

export function StatsSection() {
  return (
    <section
      className="relative overflow-hidden bg-slate-50 py-16 text-slate-900 sm:py-20 md:py-12 px-5 sm:px-8 md:px-12 border-y border-slate-200/80"
      aria-label="Operational Statistics & Accreditations"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        {/* Header Badge */}
      

        {/* Section Heading & Subtitle */}
        <div className=" mb-14 max-w-7xl text-center">
          <h2 className="text-center text-7xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-4xl lg:text-5xl leading-[1.15]">
            The Numbers of{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-500 bg-clip-text text-transparent">
              Uncompromising Trust.
            </span>
          </h2>

          {/* Accent Divider Line */}
        <div className="h-1 md:h-1.5 w-20 mx-auto my-5 md:mt-6 md:mb-12 rounded-[3px] bg-accent" />

          <p className="max-w-[640px] text-muted-foreground text-[17px] md:text-xl mx-auto mb-8 md:mb-14 leading-[1.6]">
            Behind every high-rise and highway we construct stands over a decade of disciplined
            execution, verified institutional certifications, and an unblemished safety heritage.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8">
          {stats.map(({ number, label, desc }, idx) => (
            <article
              key={label || idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Big Metric Number */}
                <div className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl group-hover:text-amber-600 transition-colors duration-300">
                  {number}
                </div>

                {/* Metric Label */}
                <div className="mt-3 text-xs font-extrabold tracking-[2px] uppercase text-amber-600">
                  {label}
                </div>
              </div>

              {/* Metric Description */}
              <p className="mt-4 text-sm leading-relaxed text-slate-500 group-hover:text-slate-700 transition-colors">
                {desc}
              </p>
            </article>
          ))}
        </div>

        
      </div>
    </section>
  );
}

export default StatsSection;