import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Approach", href: "#philosophy" },
  { label: "Programmes", href: "#programmes" },
  { label: "Campus Journey", href: "#journey" },
  { label: "For Parents", href: "#parents" },
];

export function HeroNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#e7ded1] bg-white px-4 py-2 shadow-[0_16px_34px_rgba(61,53,32,0.08)] sm:px-5">
        <a className="flex items-center gap-3 text-foreground" href="#home">
          <img
            alt="Children's Christian School crest"
            className="h-10 w-10 object-contain"
            src="/images/ccs-logo.png"
          />
          <span
            className="hidden text-lg tracking-tight md:block"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            CCS Montessori
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              className="nav-link-desktop relative text-sm font-semibold text-foreground/75 transition-colors hover:text-foreground"
              href={link.href}
              key={link.label}
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          asChild
          className="hidden px-4 py-1.5 text-sm shadow-none lg:inline-flex"
          variant="solid"
        >
          <a href="#admissions">Apply Now</a>
        </Button>

        <button
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e7ded1] bg-[#f8f2e7] text-foreground lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          type="button"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-4 bg-current transition-transform duration-300 ${mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[6px] h-[1.5px] w-4 bg-current transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[12px] h-[1.5px] w-4 bg-current transition-transform duration-300 ${mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="absolute left-4 right-4 top-full z-30 mt-3 rounded-[1.75rem] border border-[#e7ded1] bg-white px-5 py-5 shadow-[0_18px_40px_rgba(61,53,32,0.1)] lg:hidden sm:left-6 sm:right-6"
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  className="rounded-2xl px-3 py-3 text-base font-semibold text-foreground/88 transition-colors hover:bg-[#f7efe3] hover:text-foreground"
                  href={link.href}
                  key={link.label}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="mt-1 rounded-2xl bg-primary px-3 py-3 text-base font-semibold text-primary-foreground"
                href="#admissions"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
