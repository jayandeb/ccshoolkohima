import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ColorRevealText } from "@/components/color-reveal-text";
import { LoadingScreen } from "@/components/loading-screen";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import {
  FadeUp,
  SlideIn,
  Stagger,
  StaggerItem,
  HoverCard,
} from "@/components/ui/motion-primitives";
import { StoryMapSection } from "@/components/story-map-section";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Programmes", href: "#programmes" },
  { label: "Journey", href: "#journey" },
  { label: "Parents", href: "#parents" },
];

const pillars = [
  {
    title: "Grace & Courtesy",
    description:
      "Children learn to greet others warmly, care for shared materials, and build a classroom community shaped by respect and kindness.",
  },
  {
    title: "Prepared Environment",
    description:
      "Every classroom is carefully arranged to support concentration, independent work, and a deep sense of calm.",
  },
  {
    title: "Active Learning",
    description:
      "Hands-on materials, movement, conversation, and repetition allow each child to discover ideas through experience.",
  },
  {
    title: "Independence",
    description:
      "Practical life routines help children choose, tidy, carry, pour, serve, and care for themselves with growing confidence.",
  },
];

const programmes = [
  {
    title: "Preschool to Class 2",
    eyebrow: "Focused Early Years",
    body: "CCS Montessori is intentionally centered on the foundational years, when the love of learning, attention, coordination, and self-discipline are formed most deeply.",
  },
  {
    title: "3-6 Years",
    eyebrow: "The Absorbent Mind",
    body: "Language, mathematics, sensory development, practical life, and cultural studies are introduced through beautifully prepared materials and joyful repetition.",
  },
  {
    title: "6-8 Years",
    eyebrow: "The Reasoning Mind",
    body: "Children move into an integrated curriculum that strengthens research, communication, mathematics, science, and intellectual independence.",
  },
];

const parentGuidance = [
  "Prepare gradually and speak positively about school.",
  "Keep drop-off routines calm, short, and consistent.",
  "Model courtesy, language, and orderly habits at home.",
  "Let children work alongside you with real tasks and real tools.",
  "Protect concentration by limiting interruptions and screen time.",
  "Celebrate small successes and ask specific questions after school.",
];

const researchPoints = [
  { value: "2023", label: "Recent research reviews cited in the prospectus" },
  { value: "3-Year", label: "Age-span classrooms that support peer learning" },
  { value: "1:1", label: "Observation-led assessment between guide and child" },
  { value: "AMI", label: "Montessori leadership connected to AMI practice" },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appReady, setAppReady] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <AnimatePresence>
        {!appReady && (
          <LoadingScreen key="loader" onComplete={() => setAppReady(true)} />
        )}
      </AnimatePresence>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative isolate min-h-screen overflow-hidden" id="home">
        <video
          autoPlay
          className="absolute inset-0 z-0 h-full w-full object-cover"
          loop
          muted
          preload="auto"
          playsInline
        >
          <source src="/images/hero-classroom.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-t from-white via-white/85 via-40% to-transparent" />

        <div className="relative z-10 flex min-h-screen flex-col">
          {/* Nav */}
          <header className="relative z-20 px-4 pt-4 sm:px-6 lg:px-8">
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

              <div className="hidden items-center gap-5 md:flex">
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
                className="hidden px-4 py-1.5 text-sm shadow-none md:inline-flex"
                variant="solid"
              >
                <a href="#admissions">Apply Now</a>
              </Button>

              <button
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e7ded1] bg-[#f8f2e7] text-foreground md:hidden"
                onClick={() => setMobileMenuOpen((o) => !o)}
                type="button"
              >
                <span className="relative block h-3.5 w-4">
                  <span className={`absolute left-0 top-0 h-[1.5px] w-4 bg-current transition-transform duration-300 ${mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
                  <span className={`absolute left-0 top-[6px] h-[1.5px] w-4 bg-current transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                  <span className={`absolute left-0 top-[12px] h-[1.5px] w-4 bg-current transition-transform duration-300 ${mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
                </span>
              </button>
            </nav>

            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-4 right-4 top-full z-30 mt-3 rounded-[1.75rem] border border-[#e7ded1] bg-white px-5 py-5 shadow-[0_18px_40px_rgba(61,53,32,0.1)] md:hidden sm:left-6 sm:right-6"
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

          {/* Hero text */}
          <main className="flex flex-1 items-start px-6 pb-12 pt-16 sm:px-8 sm:pt-20 lg:pb-16 lg:pt-24">
            <div className="mx-auto w-full max-w-7xl">
              <div className="mx-auto max-w-4xl text-center">
                <p className="animate-fade-rise text-xs uppercase tracking-[0.32em] text-[#6f4a3f] sm:text-sm">
                  Montessori in Kohima
                </p>
                <h1
                  className="animate-fade-rise-delay mt-4 text-4xl font-medium leading-[0.92] tracking-[-0.02em] text-[#5b3a34] drop-shadow-[0_10px_24px_rgba(255,248,240,0.35)] sm:text-5xl lg:text-[5.5rem]"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  A warm beginning for thoughtful children.
                </h1>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* ── Philosophy ────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24" id="philosophy">
        <div className="mx-auto max-w-7xl">
          <FadeUp className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#efe5d5] px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Philosophy
            </span>
            <h2
              className="mt-5 text-3xl leading-[0.95] sm:text-4xl lg:text-5xl xl:text-6xl"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Montessori education shaped by{" "}
              <em className="not-italic">
                <ColorRevealText revealColor="#8f5d4e" text="respect, order, and joy." />
              </em>
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
              The prospectus repeatedly returns to the same promise: every child is capable, every
              child deserves dignity, and learning becomes deeper when it is active, peaceful, and
              self-directed.
            </p>
          </FadeUp>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <HoverCard className="paper-panel h-full rounded-[1.5rem] px-5 py-6 sm:px-6 sm:py-7" as="article">
                  <p
                    className="text-xl leading-none text-foreground sm:text-2xl"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {pillar.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </HoverCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Programmes ────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24" id="programmes">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
          <SlideIn from="left">
            <span className="inline-flex rounded-full bg-[#efe5d5] px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Programmes
            </span>
            <h2
              className="mt-5 text-3xl leading-[0.95] sm:text-4xl lg:text-5xl xl:text-6xl"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              The absorbent mind, then the{" "}
              <em className="not-italic">
                <ColorRevealText revealColor="#8f5d4e" text="reasoning mind." />
              </em>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
              CCS builds the early years deliberately: first through sensorial, practical, language,
              and mathematical foundations, then through research, communication, and increasingly
              independent thought.
            </p>
          </SlideIn>

          <Stagger className="grid gap-4">
            {programmes.map((programme) => (
              <StaggerItem key={programme.title}>
                <HoverCard className="paper-panel rounded-[1.5rem] px-5 py-6 sm:px-7 sm:py-7" as="article">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    {programme.eyebrow}
                  </p>
                  <h3
                    className="mt-2.5 text-2xl leading-none text-foreground sm:text-3xl"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {programme.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {programme.body}
                  </p>
                </HoverCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Story Map ─────────────────────────────────────────────────────── */}
      <StoryMapSection />

      {/* ── Research & Outcomes ───────────────────────────────────────────── */}
      <section className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <FadeUp>
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#dde2cf] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-12">
              <div>
                <span className="inline-flex rounded-full bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Research &amp; Outcomes
                </span>
                <h2
                  className="mt-5 text-3xl leading-[0.95] sm:text-4xl lg:text-5xl"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  Evidence, observation, and a classroom built for deep work.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/70 sm:text-base">
                  The brochure highlights research reviews from 2023, individual observation, and
                  mastery shown through practice rather than marks alone.
                </p>
              </div>

              <Stagger className="grid gap-3 sm:grid-cols-2">
                {researchPoints.map((point) => (
                  <StaggerItem key={point.label}>
                    <HoverCard
                      className="rounded-[1.4rem] bg-white/65 px-5 py-6 shadow-[0_14px_35px_rgba(61,53,32,0.06)]"
                      as="article"
                    >
                      <p
                        className="text-4xl leading-none text-foreground sm:text-5xl"
                        style={{ fontFamily: "'Fraunces', serif" }}
                      >
                        {point.value}
                      </p>
                      <p className="mt-2.5 text-xs leading-relaxed text-foreground/65 sm:text-sm">
                        {point.label}
                      </p>
                    </HoverCard>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── Parents ───────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24" id="parents">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
          <SlideIn from="left">
            <span className="inline-flex rounded-full bg-[#efe5d5] px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Parents
            </span>
            <h2
              className="mt-5 text-3xl leading-[0.95] sm:text-4xl lg:text-5xl xl:text-6xl"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              School and home work best in{" "}
              <em className="not-italic">
                <ColorRevealText revealColor="#8f5d4e" text="partnership." />
              </em>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
              The prospectus gives parents practical ways to support a healthy Montessori
              transition: routines, calm separation, real work at home, and a shared commitment to
              courtesy and order.
            </p>
          </SlideIn>

          <Stagger className="grid gap-3 sm:grid-cols-2">
            {parentGuidance.map((item) => (
              <StaggerItem key={item}>
                <HoverCard className="paper-panel h-full rounded-[1.4rem] px-5 py-5 sm:px-6 sm:py-6" as="article">
                  <p className="text-sm leading-relaxed text-foreground/75">{item}</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── Admissions ────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24" id="admissions">
        <FadeUp>
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#7d4d42] px-6 py-8 text-white sm:px-10 sm:py-10 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:px-12 lg:py-12">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-white/12 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-white/70">
                Admissions
              </span>
              <h2
                className="mt-5 text-3xl leading-[0.95] sm:text-4xl lg:text-5xl xl:text-6xl"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Begin your child&apos;s Montessori journey with CCS.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base lg:text-lg">
                Mission Road, Kohima, Nagaland 797001. The school welcomes enquiries and
                applications from families seeking a calm, respectful, high-quality early years
                environment.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button asChild size="base" variant="hero">
                  <a href="tel:+918787781106">+91 8787781106</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button asChild className="bg-white text-[#7d4d42] hover:bg-white/90" size="base">
                  <a href="#home">Back to Top</a>
                </Button>
              </motion.div>
            </div>
          </div>
        </FadeUp>
      </section>

      <SiteFooter />
    </div>
  );
}

export default App;
