import { HeroNav } from "@/components/hero-nav";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#fbf6ed_0%,#f5ede1_100%)]"
      id="home"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-[#fbf6ed] via-[#fbf6ed]/82 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/72 to-transparent" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <HeroNav />

        <main className="relative flex flex-1 flex-col px-6 pb-0 sm:px-8 lg:px-8">
          {/* Text */}
          <div className="relative z-20 mx-auto w-full max-w-7xl pt-8 sm:pt-12 lg:pt-16">
            <div className="mx-auto max-w-4xl text-center">
              <p className="animate-fade-rise text-xs uppercase tracking-[0.32em] text-[#6f4a3f] sm:text-sm">
                Montessori in Kohima
              </p>
              <h1
                className="animate-fade-rise-delay mt-4 text-4xl font-medium leading-[0.92] tracking-[-0.02em] text-[#5b3a34] sm:text-5xl lg:text-[5.5rem]"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                A warm beginning for thoughtful children.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
                A calm early-years environment where independence, concentration,
                and joy are shaped through everyday work.
              </p>
            </div>
          </div>

          {/* Image — fills remaining space on mobile, overlaps text on desktop */}
          <div className="relative left-1/2 z-10 mt-6 flex flex-1 w-screen -translate-x-1/2 md:flex-none md:-mt-8 lg:-mt-32">
            {/* Mobile image */}
            <img
              alt="CCS Montessori hero"
              className="h-full w-full object-cover object-top md:hidden"
              src="/images/heroimagemobile.png"
            />
            {/* Desktop image */}
            <img
              alt="CCS Montessori hero"
              className="hidden h-auto w-full object-contain object-center md:block"
              src="/images/heroimage.png"
            />
          </div>
        </main>
      </div>
    </section>
  );
}
