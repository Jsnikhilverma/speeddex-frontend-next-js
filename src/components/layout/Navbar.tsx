import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.asset.json";
import { navLinks } from "@/data/construction-data";

export function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="fixed z-50 top-4 left-4 right-4 md:left-10 md:right-10">
      <div className="h-[68px] md:h-[84px] px-[18px] md:px-6 lg:px-10 py-2.5 md:py-4 bg-background rounded-[24px] md:rounded-[32px] shadow-nav flex items-center justify-between gap-3 md:gap-6">
        <a href="/" aria-label="V Power Constructions home">
          <img
            className="w-[92px] h-[44px] md:w-[116px] md:h-[53px] object-contain"
            src={logo.url}
            alt="V Power Constructions"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10" aria-label="Main navigation">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="text-nav-ink hover:text-foreground text-[11px] font-bold tracking-[2px] lg:tracking-[4px] transition-colors"
            >
              {name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="nav" asChild className="hidden md:inline-flex">
            <a href="/projects">
              PORTAL <ArrowUpRight />
            </a>
          </Button>
          <Button variant="nav" asChild>
            <a href="/contact">
              REQUEST A QUOTE <ArrowUpRight />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="inline-flex md:hidden"
            aria-label={menu ? "Close menu" : "Open menu"}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {menu && (
        <nav
          className="absolute top-20 left-0 right-0 bg-background rounded-2xl grid p-6 gap-6 text-foreground shadow-nav md:hidden border border-border"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ name, href }) => (
            <a
              href={href}
              key={name}
              onClick={() => setMenu(false)}
              className="text-sm font-semibold tracking-wider hover:text-primary transition-colors"
            >
              {name}
            </a>
          ))}
          <a href="/contact" onClick={() => setMenu(false)} className="font-bold text-primary">
            REQUEST A QUOTE ↗
          </a>
        </nav>
      )}
    </header>
  );
}
