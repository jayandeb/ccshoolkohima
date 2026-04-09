import { useEffect, useRef, useState } from "react";

type StoryStop = {
  title: string;
  routeLabel: string;
  description: string;
  cue: string;
  x: number;
  y: number;
};

const storyStops: StoryStop[] = [
  {
    title: "Razhu Point",
    routeLabel: "Step 01",
    description:
      "The route begins at Razhu Point, where the road bends upward and the climb toward the school starts to feel intentional.",
    cue: "Use the highlighted road as your visual guide.",
    x: 87,
    y: 79,
  },
  {
    title: "Kotrhuma Village Gate",
    routeLabel: "Step 02",
    description:
      "Move past Kotrhuma Village Gate and stay with the sweeping road as it carries you into the quieter residential stretch.",
    cue: "This landmark confirms you are on the correct road into campus.",
    x: 75,
    y: 60,
  },
  {
    title: "North Police Station",
    routeLabel: "Step 03",
    description:
      "North Police Station sits just below the route and anchors this part of the journey with a recognisable civic landmark.",
    cue: "Once you see the station below, the school is only a few minutes away.",
    x: 56,
    y: 66,
  },
  {
    title: "Ura Academy",
    routeLabel: "Step 04",
    description:
      "Continue along the main road past Ura Academy, where the map opens up and the final stretch becomes easier to follow.",
    cue: "The school crest on the left side is now within sight.",
    x: 43,
    y: 47,
  },
  {
    title: "CCS Montessori",
    routeLabel: "Step 05",
    description:
      "The journey ends at CCS Montessori, a calm campus set for exploration, courtesy, and focused early-years learning.",
    cue: "Arrive at the crest-marked campus and enter the prepared environment.",
    x: 14,
    y: 39,
  },
];

export function StoryMapSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const updateActiveFromScroll = () => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const scrollable = Math.max(rect.height - window.innerHeight, 1);
        const progress = (-rect.top + window.innerHeight * 0.18) / scrollable;
        const clamped = Math.min(Math.max(progress, 0), 0.9999);
        const nextStep = Math.min(storyStops.length - 1, Math.floor(clamped * storyStops.length));

        setActiveStep(nextStep);
      };

      updateActiveFromScroll();
      window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
      window.addEventListener("resize", updateActiveFromScroll);

      return () => {
        window.removeEventListener("scroll", updateActiveFromScroll);
        window.removeEventListener("resize", updateActiveFromScroll);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveStep(Number(visibleEntries[0].target.getAttribute("data-step") ?? 0));
        }
      },
      {
        threshold: [0.35, 0.6, 0.85],
        rootMargin: "-18% 0px -28% 0px",
      },
    );

    const refs = stepRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="relative bg-background px-6 py-24 sm:py-28 lg:px-8 lg:py-32"
      id="journey"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-[#efe5d5] px-4 py-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Story Map
          </span>
          <h2
            className="mt-6 text-4xl leading-[0.92] text-foreground sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Follow the road into <em className="not-italic text-[#8a5d4b]">CCS Montessori.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The map stays fixed so the full route remains readable, while each landmark card on the left
            guides the journey step by step and the active hotspot updates on the illustration.
          </p>
        </div>

        <div className="mt-16 lg:min-h-[340vh]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(420px,1.12fr)] lg:gap-14">
            <div>
              <div className="space-y-6 lg:hidden">
                {storyStops.map((stop, index) => {
                  const isActive = activeStep === index;

                  return (
                    <div
                      className="flex min-h-[48vh] items-center"
                      data-step={index}
                      key={stop.title}
                      ref={(element) => {
                        stepRefs.current[index] = element;
                      }}
                    >
                      <article
                        className={`rounded-[2rem] px-6 py-8 transition-all duration-500 sm:px-8 sm:py-10 ${
                          isActive
                            ? "paper-panel border border-[#d9c7b0] shadow-[0_24px_60px_rgba(61,53,32,0.12)]"
                            : "bg-white/40 border border-[#e5dccd] opacity-70"
                        }`}
                      >
                        <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                          {stop.routeLabel}
                        </p>
                        <h3
                          className="mt-4 text-3xl leading-none text-foreground sm:text-4xl"
                          style={{ fontFamily: "'Fraunces', serif" }}
                        >
                          {stop.title}
                        </h3>
                        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                          {stop.description}
                        </p>
                        <p className="mt-6 border-t border-foreground/10 pt-5 text-sm uppercase tracking-[0.18em] text-foreground/65">
                          {stop.cue}
                        </p>
                      </article>
                    </div>
                  );
                })}
              </div>

              <div className="hidden lg:sticky lg:top-24 lg:block">
                <div className="relative h-[420px] [perspective:1800px]">
                  {storyStops.map((stop, index) => {
                    const offset = index - activeStep;
                    const isActive = offset === 0;
                    const passed = offset < 0;
                    const translateY = passed ? -26 : offset * 18;
                    const rotateX = passed ? -72 : 0;
                    const scale = passed ? 0.94 : 1 - Math.min(offset * 0.03, 0.12);
                    const opacity = passed ? 0 : Math.max(1 - offset * 0.18, 0.35);

                    return (
                      <article
                        className={`absolute inset-0 rounded-[2rem] px-7 py-8 sm:px-8 sm:py-10 ${
                          isActive
                            ? "paper-panel border border-[#d9c7b0] shadow-[0_24px_60px_rgba(61,53,32,0.12)]"
                            : "bg-white/70 border border-[#e5dccd]"
                        }`}
                        key={stop.title}
                        style={{
                          opacity,
                          transform: `translate3d(0, ${translateY}px, 0) rotateX(${rotateX}deg) scale(${scale})`,
                          transformOrigin: "top center",
                          transition:
                            "transform 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 420ms ease, box-shadow 420ms ease",
                          zIndex: storyStops.length - index,
                        }}
                      >
                        <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                          {stop.routeLabel}
                        </p>
                        <h3
                          className="mt-4 text-3xl leading-none text-foreground sm:text-4xl"
                          style={{ fontFamily: "'Fraunces', serif" }}
                        >
                          {stop.title}
                        </h3>
                        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                          {stop.description}
                        </p>
                        <p className="mt-6 border-t border-foreground/10 pt-5 text-sm uppercase tracking-[0.18em] text-foreground/65">
                          {stop.cue}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="liquid-glass rounded-[2rem] border border-[#d9d1c1] p-3 shadow-[0_30px_80px_rgba(61,53,32,0.12)]">
                <div className="relative overflow-hidden rounded-[1.6rem] bg-[#f6f0df] p-3 sm:p-4">
                  <div className="absolute bottom-4 left-4 z-10 hidden rounded-full bg-white/82 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#7d4d42] shadow-[0_14px_40px_rgba(61,53,32,0.12)] backdrop-blur-xl sm:inline-flex sm:bottom-6 sm:left-6">
                    {activeStep + 1} / {storyStops.length} landmarks
                  </div>

                  <div className="relative mx-auto w-full max-w-[1494px] aspect-[1494/1040]">
                    <img
                      alt="Illustrated route map to CCS Montessori"
                      className="absolute inset-0 h-full w-full rounded-[1.35rem] object-contain"
                      src="/images/ccs-map.png"
                    />

                    {storyStops.map((stop, index) => {
                      const isActive = index === activeStep;
                      const isPassed = index < activeStep;

                      return (
                        <div
                          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
                          key={stop.title}
                          style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
                        >
                          <div
                            className={`absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                              isActive ? "animate-map-pulse" : ""
                            }`}
                            style={{
                              background: isActive ? "rgba(125, 77, 66, 0.18)" : "transparent",
                            }}
                          />
                          <div
                            className={`relative h-4 w-4 rounded-full border-2 border-white ${
                              isActive
                                ? "bg-[#7d4d42] shadow-[0_0_18px_rgba(125,77,66,0.42)]"
                                : isPassed
                                  ? "bg-[#d9bb8e]"
                                  : "bg-[#6f7b56]"
                            }`}
                          />
                          {isActive ? (
                            <div className="mt-3 whitespace-nowrap rounded-full bg-[#7d4d42] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white shadow-[0_14px_40px_rgba(125,77,66,0.2)] transition-all duration-500">
                              {stop.title}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
