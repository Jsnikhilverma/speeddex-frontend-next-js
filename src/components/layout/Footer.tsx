import logo from "@/assets/logo.asset.json";
import footerfreight from "@/assets/footerfreight.asset.json";
import footership from "@/assets/footership.asset.json";
import { navLinks } from "@/data/construction-data";

export function Footer() {
  return (
    <footer
      className="bg-ink text-inverse pt-14 md:pt-20 px-6 md:px-12 pb-6 relative overflow-hidden"
      id="contact"
    >
      <img
        className="absolute bottom-[140px] left-0 w-[35%] opacity-[0.16] pointer-events-none"
        src={footerfreight.url}
        alt=""
        loading="lazy"
      />
      <img
        className="absolute bottom-[140px] right-0 w-[35%] opacity-[0.16] pointer-events-none"
        src={footership.url}
        alt=""
        loading="lazy"
      />
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1.5fr_1fr_1fr] gap-x-5 gap-y-8 md:gap-8 lg:gap-14 relative">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-inverse">India Headquarters</h3>
            <p className="text-muted-foreground text-[13px] md:text-base leading-[1.8] mb-3">
              Corporate Tower 4, Cyber City, Sector 29, V Power Infra Campus, Gurugram, Haryana
              122008
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-inverse">Global Branch</h3>
            <p className="text-muted-foreground text-[13px] md:text-base leading-[1.8] mb-3">
              100 N HOWARD ST STE R,
              <br />
              SPOKANE WA, 99201 USA
            </p>
            <p className="text-muted-foreground text-[13px] md:text-base leading-[1.8] mb-3">
              53 Frontage Rd, 1st Floor,
              <br />
              Hampton, New Jersey 08827
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-inverse">Company</h3>
            <ul className="space-y-3">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-muted-foreground hover:text-white text-[13px] md:text-base leading-[1.8] transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-inverse">Specializations</h3>
            <ul className="space-y-3">
              {[
                "Commercial High-Rises",
                "Turnkey EPC Contracts",
                "Civil Transportation & Bridges",
                "Pre-Engineered Warehouses",
                "BIM & Architectural Planning",
              ].map((text) => (
                <li key={text}>
                  <a
                    href="/services"
                    className="text-muted-foreground hover:text-white text-[13px] md:text-base leading-[1.8] transition-colors"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative py-12 md:py-[72px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-[60px] md:text-[72px] lg:text-[100px] font-black text-muted-foreground/30 leading-none select-none">
            Since. 2015
          </div>
          <div className="space-y-4">
            <a
              href="mailto:build@vpower-construction.com"
              className="block text-muted-foreground hover:text-accent transition-colors"
            >
              <small className="text-xs uppercase tracking-wider text-muted-foreground/70">
                EMAIL
              </small>
              <br />
              <span className="text-white font-medium">build@vpower-construction.com</span>
            </a>
            <a
              href="tel:+919310023990"
              className="block text-muted-foreground hover:text-accent transition-colors"
            >
              <small className="text-xs uppercase tracking-wider text-muted-foreground/70">
                CALL US
              </small>
              <br />
              <span className="text-white font-medium">(+91) 9310023990</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border/20 pt-6 flex flex-wrap md:flex-nowrap items-center justify-between gap-6 text-xs md:text-sm text-muted-foreground">
          <img
            className="w-[90px] md:w-[120px] bg-background p-2 rounded object-contain"
            src={logo.url}
            alt="V Power Construction Logo"
          />
          <span>© 2026 V Power Construction. All rights reserved.</span>
          <a href="/about" className="hover:text-white transition-colors">
            Privacy Policy &amp; Safety Compliance
          </a>
        </div>
      </div>
    </footer>
  );
}
