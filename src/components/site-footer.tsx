import { motion } from "framer-motion";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Programmes", href: "#programmes" },
  { label: "Journey", href: "#journey" },
  { label: "Parents", href: "#parents" },
  { label: "Admissions", href: "#admissions" },
];

const affiliations = [
  { abbr: "AMI", full: "Association Montessori Internationale" },
  { abbr: "NILSR", full: "Nagaland Institute of Language Studies & Research" },
];

const expo = [0.16, 1, 0.3, 1] as const;

const colVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const colItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: expo } },
};

export function SiteFooter() {
  return (
    <footer className="relative [contain:paint] bg-[#2c1e1a] px-6 pt-14 pb-0 lg:px-8 lg:pt-16">
      {/* Top rule */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7d4d42]/55 to-transparent" />

      {/* Decorative motifs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-[#7d4d42]/8 blur-3xl" />
        <div className="absolute right-0 bottom-20 h-52 w-52 rounded-full bg-[#6f7b56]/6 blur-3xl" />
        <div className="absolute left-[6%] top-[20%] h-20 w-20 rounded-full border border-[#d9c7b0]/8" />
        <div className="absolute right-[8%] top-[15%] h-32 w-32 rounded-full border border-dashed border-[#d9c7b0]/6" />
        <div className="absolute left-[48%] bottom-[18%] h-3 w-3 rotate-45 border border-[#c4a882]/15" />
        <svg className="absolute right-[3%] top-[8%] h-20 w-20 opacity-[0.06]" viewBox="0 0 80 80" fill="none">
          <path d="M 4 76 Q 40 4 76 40" stroke="#c4a882" strokeWidth="1" strokeDasharray="3 4" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-14"
          variants={colVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Col 1 — Brand */}
          <motion.div variants={colItem} className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-4">
              <img
                src="/images/ccs-logo.png"
                alt="CCS crest"
                className="h-12 w-12 object-contain brightness-[1.08]"
              />
              <div>
                <p className="text-lg leading-none text-white" style={{ fontFamily: "'Fraunces', serif" }}>
                  CCS Montessori
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/40">
                  Children's Christian School
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              A prepared environment for curious, capable, and courteous children — from preschool through class&nbsp;2.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/35">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                    <path d="M8 1a5 5 0 0 0-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 0 0-5-5Zm0 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-white/45">
                  Mission Road, Kohima<br />Nagaland, India — 797001
                </p>
              </div>

              <a href="tel:+918787781106" className="group flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/35 transition-colors group-hover:border-[#c4856a]/45 group-hover:text-[#c4856a]">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58L3.654 1.328Z" />
                  </svg>
                </div>
                <span className="text-sm text-white/45 transition-colors group-hover:text-[#c4856a]">
                  +91 8787781106
                </span>
              </a>
            </div>
          </motion.div>

          {/* Col 2 — Navigation */}
          <motion.div variants={colItem}>
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/30">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    <span className="h-px w-3 bg-white/18 transition-all duration-300 group-hover:w-5 group-hover:bg-[#c4856a]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Affiliations */}
          <motion.div variants={colItem}>
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/30">Affiliations</p>
            <ul className="mt-4 space-y-3">
              {affiliations.map((a) => (
                <li key={a.abbr} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex shrink-0 rounded bg-white/8 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#c4a882]">
                    {a.abbr}
                  </span>
                  <span className="text-sm leading-relaxed text-white/40">{a.full}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-white/7 bg-white/[0.03] px-5 py-5">
              <p className="text-base leading-snug text-white/60" style={{ fontFamily: "'Fraunces', serif" }}>
                "We are all born intelligent — we simply learn in different ways."
              </p>
              <p className="mt-2.5 text-[10px] uppercase tracking-[0.22em] text-white/25">
                CCS Montessori Prospectus
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="mt-12 h-px bg-white/7" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Children's Christian School, Kohima. All rights reserved.
          </p>
          <p
            className="text-xs tracking-[0.18em] text-white/18 uppercase"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Est. 1957 · For God and My Country
          </p>
        </div>
      </div>
    </footer>
  );
}
