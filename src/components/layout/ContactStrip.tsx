import { Mail, Phone } from "lucide-react";

export function ContactStrip() {
  return (
    <div className="min-h-[56px] flex flex-col md:flex-row items-stretch md:items-center justify-between bg-background text-xs md:text-xl font-medium">
      <div className="bg-accent text-inverse py-2.5 md:py-[15px] px-3 md:pr-8 md:pl-6 lg:pl-[100px] w-full md:w-[54%] text-center md:text-right text-sm md:text-[17px] lg:text-xl font-semibold [clip-path:none] md:[clip-path:polygon(0_0,100%_0,94%_100%,0_100%)]">
        Constructing excellence from foundation to skyline.
      </div>
      <div className="flex items-center justify-center md:justify-end gap-4 lg:gap-7 px-2 md:pr-10 py-3 md:py-0 text-[11px] md:text-sm lg:text-lg">
        <a
          href="mailto:build@vpower-construction.com"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Mail className="text-primary w-3 h-3 md:w-4 md:h-4 shrink-0" />
          <span>build@vpower-construction.com</span>
        </a>
        <a
          href="tel:+919310023990"
          className="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Phone className="text-primary w-3 h-3 md:w-4 md:h-4 shrink-0" />
          <strong>(+91) 9310023990</strong>
        </a>
      </div>
    </div>
  );
}
