import { HeroNav } from "@/components/hero-nav";

export function BackupHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden" id="home">
      <video
        autoPlay
        className="absolute inset-0 z-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/images/hero-classroom.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-t from-white via-white/85 via-40% to-transparent" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <HeroNav />

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
  );
}
