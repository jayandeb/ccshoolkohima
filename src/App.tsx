import { useState } from "react";

import { Button } from "@/components/ui/button";
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
    body:
      "CCS Montessori is intentionally centered on the foundational years, when the love of learning, attention, coordination, and self-discipline are formed most deeply.",
  },
  {
    title: "3-6 Years",
    eyebrow: "The Absorbent Mind",
    body:
      "Language, mathematics, sensory development, practical life, and cultural studies are introduced through beautifully prepared materials and joyful repetition.",
  },
  {
    title: "6-8 Years",
    eyebrow: "The Reasoning Mind",
    body:
      "Children move into an integrated curriculum that strengthens research, communication, mathematics, science, and intellectual independence.",
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

  return (
    <div className="bg-background text-foreground">
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
        <div className="absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-white via-white/88 via-40% to-transparent" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="relative z-20 px-4 pt-4 sm:px-6 lg:px-8">
            <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#e7ded1] bg-white px-4 py-2 shadow-[0_16px_34px_rgba(61,53,32,0.08)] sm:px-5">
              <a className="flex items-center gap-3 text-foreground" href="#home">
                <img
                  alt="Children's Christian School crest"
                  className="h-12 w-12 object-contain sm:h-10 sm:w-10"
                  src="/images/ccs-logo.png"
                />
                <span
                  className="hidden text-lg tracking-tight md:block"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  CCS Montessori
                </span>
              </a>

              <div className="hidden items-center gap-6 md:flex">
                {navLinks.map((link) => (
                  <a
                    className="text-sm text-foreground/75 transition-colors hover:text-foreground"
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <Button
                asChild
                className="hidden px-4 py-1.5 text-sm shadow-none md:inline-flex sm:px-5"
                variant="solid"
              >
                <a href="#admissions">Apply Now</a>
              </Button>

              <button
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e7ded1] bg-[#f8f2e7] text-foreground md:hidden"
                onClick={() => {
                  setMobileMenuOpen((open) => !open);
                }}
                type="button"
              >
                <span className="relative block h-3.5 w-4">
                  <span
                    className={`absolute left-0 top-0 h-[1.5px] w-4 bg-current transition-transform duration-300 ${
                      mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[6px] h-[1.5px] w-4 bg-current transition-opacity duration-300 ${
                      mobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[12px] h-[1.5px] w-4 bg-current transition-transform duration-300 ${
                      mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </nav>

            {mobileMenuOpen ? (
              <div className="absolute left-4 right-4 top-full z-30 mt-3 rounded-[1.75rem] border border-[#e7ded1] bg-white px-5 py-5 shadow-[0_18px_40px_rgba(61,53,32,0.08)] md:hidden sm:left-6 sm:right-6">
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <a
                      className="rounded-2xl px-3 py-3 text-lg font-semibold text-foreground/88 transition-colors hover:bg-[#f7efe3] hover:text-foreground"
                      href={link.href}
                      key={link.label}
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    className="rounded-2xl bg-primary px-3 py-3 text-lg font-semibold text-primary-foreground"
                    href="#admissions"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ) : null}
          </header>

          <main className="flex flex-1 items-start px-6 pb-16 pt-20 text-center sm:px-8 lg:px-8 lg:pb-20 lg:pt-24">
            <div className="mx-auto w-full max-w-7xl">
              <div className="mx-auto max-w-5xl">
                <p className="animate-fade-rise text-sm uppercase tracking-[0.32em] text-[#6f4a3f] sm:text-[15px]">
                  Montessori in Kohima
                </p>
                <h1
                  className="animate-fade-rise-delay mt-4 text-5xl font-medium leading-[0.92] tracking-[-0.03em] text-[#5b3a34] drop-shadow-[0_10px_24px_rgba(255,248,240,0.35)] sm:text-6xl lg:text-[6rem]"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  A warm beginning for thoughtful children.
                </h1>
              </div>
            </div>
          </main>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:px-8" id="philosophy">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#efe5d5] px-4 py-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Philosophy
            </span>
            <h2
              className="mt-6 text-4xl leading-[0.95] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Montessori education shaped by <em className="not-italic text-[#8a5d4b]">respect, order, and joy.</em>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The prospectus repeatedly returns to the same promise: every child is capable, every
              child deserves dignity, and learning becomes deeper when it is active, peaceful, and
              self-directed.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => (
              <article className="paper-panel rounded-[1.8rem] px-6 py-7" key={pillar.title}>
                <p
                  className="text-2xl leading-none text-foreground"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {pillar.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:px-8" id="programmes">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div>
            <span className="inline-flex rounded-full bg-[#efe5d5] px-4 py-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Programmes
            </span>
            <h2
              className="mt-6 text-4xl leading-[0.95] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              The absorbent mind, then the <em className="not-italic text-[#8a5d4b]">reasoning mind.</em>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              CCS builds the early years deliberately: first through sensorial, practical, language,
              and mathematical foundations, then through research, communication, and increasingly
              independent thought.
            </p>
          </div>

          <div className="grid gap-5">
            {programmes.map((programme) => (
              <article className="paper-panel rounded-[1.8rem] px-6 py-7 sm:px-8 sm:py-8" key={programme.title}>
                <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{programme.eyebrow}</p>
                <h3
                  className="mt-3 text-3xl leading-none text-foreground sm:text-[2rem]"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {programme.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {programme.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StoryMapSection />

      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.2rem] bg-[#dde2cf] px-7 py-10 sm:px-10 sm:py-12 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
            <div>
              <span className="inline-flex rounded-full bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Research & Outcomes
              </span>
              <h2
                className="mt-6 text-4xl leading-[0.95] sm:text-5xl"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Evidence, observation, and a classroom built for deep work.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/72">
                The brochure highlights research reviews from 2023, individual observation, and
                mastery shown through practice rather than marks alone.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {researchPoints.map((point) => (
                <article className="rounded-[1.6rem] bg-white/65 px-6 py-7 shadow-[0_14px_35px_rgba(61,53,32,0.06)]" key={point.label}>
                  <p
                    className="text-4xl leading-none text-foreground sm:text-5xl"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {point.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{point.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:px-8" id="parents">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <span className="inline-flex rounded-full bg-[#efe5d5] px-4 py-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Parents
            </span>
            <h2
              className="mt-6 text-4xl leading-[0.95] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              School and home work best in <em className="not-italic text-[#8a5d4b]">partnership.</em>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The prospectus gives parents practical ways to support a healthy Montessori transition:
              routines, calm separation, real work at home, and a shared commitment to courtesy and order.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {parentGuidance.map((item) => (
              <article className="paper-panel rounded-[1.6rem] px-5 py-6 sm:px-6" key={item}>
                <p className="text-sm leading-relaxed text-foreground/76">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-12 sm:pb-28 lg:px-8" id="admissions">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] bg-[#7d4d42] px-7 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:px-14">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-white/12 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/70">
              Admissions
            </span>
            <h2
              className="mt-6 text-4xl leading-[0.95] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Begin your child&apos;s Montessori journey with CCS.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 sm:text-lg">
              Mission Road, Kohima, Nagaland 797001. The school welcomes enquiries and applications
              from families seeking a calm, respectful, high-quality early years environment.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 lg:mt-0">
            <Button asChild size="base" variant="hero">
              <a href="tel:+918787781106">+91 8787781106</a>
            </Button>
            <Button asChild className="bg-white text-[#7d4d42] hover:bg-white/90" size="base">
              <a href="#home">Back to Top</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
