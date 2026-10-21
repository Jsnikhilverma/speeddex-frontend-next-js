import { stats, certifications } from "@/data/construction-data";

export function StatsSection() {
  return (
    <section
      className="bg-ink text-inverse py-14 md:py-[100px] px-5 md:px-12 relative"
      aria-label="Operational Statistics & Accreditations"
    >
      <div className="max-w-[1440px] mx-auto">
        <span className="inline-block border border-white/20 bg-white/10 text-white rounded-[24px] text-xs font-bold px-4 py-3 mb-6 md:mb-8 uppercase tracking-wider">
          PROVEN TRACK RECORD
        </span>
        <h2 className="text-left text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2] mt-4 text-white">
          The Numbers of Uncompromising Trust.
        </h2>
        <div className="h-1 md:h-1.5 w-20 my-5 md:mt-6 md:mb-8 rounded-[3px] bg-accent ml-0" />
        <p className="text-muted-foreground text-[17px] md:text-xl max-w-3xl leading-[1.6]">
          Behind every high-rise and highway we construct stands over a decade of disciplined
          execution, verified institutional certifications, and an unblemished safety heritage.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-7 mt-12">
          {stats.map(({ number, label, desc }) => (
            <article
              key={label}
              className="bg-white/[0.04] border border-white/[0.12] border-t-4 border-t-accent rounded-2xl p-6 sm:p-7 lg:p-10 relative hover:-translate-y-1 hover:bg-white/[0.07] hover:border-t-orange transition-all duration-200"
            >
              <div className="text-[42px] md:text-[56px] font-black leading-[1.05] text-inverse mb-2 tracking-[-1px]">
                {number}
              </div>
              <div className="text-xs font-extrabold tracking-[2px] uppercase text-accent mb-2">
                {label}
              </div>
              <p className="text-sm leading-[1.6] text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-12 pt-12 border-t border-white/[0.14]">
          {certifications.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-[18px]"
            >
              <div className="w-11 h-11 rounded-[10px] bg-blue-surface text-primary grid place-items-center shrink-0">
                <Icon size={24} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-inverse mb-0.5">{title}</h4>
                <p className="text-xs text-muted-foreground m-0">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
