import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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

const expo = [0.16, 1, 0.3, 1] as const;

// Shared map image + hotspots
function MapImage({ activeStep }: { activeStep: number }) {
  return (
    <div className="relative overflow-hidden rounded-[1.4rem]">
      <div className="absolute bottom-3 left-3 z-10 inline-flex rounded-full bg-white/88 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[#7d4d42] shadow-[0_10px_30px_rgba(61,53,32,0.1)] backdrop-blur-xl sm:bottom-4 sm:left-4">
        {activeStep + 1} / {storyStops.length} landmarks
      </div>
      <div className="relative mx-auto aspect-[1494/1040] w-full">
        <img
          alt="Illustrated route map to CCS Montessori"
          className="absolute inset-0 h-full w-full rounded-[1.2rem] object-contain"
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
                style={{ background: isActive ? "rgba(125,77,66,0.18)" : "transparent" }}
              />
              <div
                className={`relative h-4 w-4 rounded-full border-2 border-white transition-colors duration-300 ${
                  isActive
                    ? "bg-[#7d4d42] shadow-[0_0_18px_rgba(125,77,66,0.42)]"
                    : isPassed
                      ? "bg-[#d9bb8e]"
                      : "bg-[#6f7b56]"
                }`}
              />
              {isActive && (
                <div className="mt-2 whitespace-nowrap rounded-full bg-[#7d4d42] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(125,77,66,0.2)] transition-all duration-500">
                  {stop.title}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Shared flip card stack
function CardStack({
  activeStep,
  stickyTop,
  sentinelRefs,
}: {
  activeStep: number;
  stickyTop: number | string;
  sentinelRefs: React.MutableRefObject<Array<HTMLDivElement | null>>;
}) {
  return (
    <div>
      <div
        className="sticky h-[300px] [perspective:1800px] sm:h-[340px]"
        style={{ top: stickyTop }}
      >
        <div className="relative h-full">
          {storyStops.map((stop, index) => {
            const offset = index - activeStep;
            const isActive = offset === 0;
            const passed = offset < 0;
            const translateY = passed ? -26 : offset * 16;
            const rotateX = passed ? -72 : 0;
            const scale = passed ? 0.94 : 1 - Math.min(offset * 0.03, 0.12);
            const opacity = passed ? 0 : Math.max(1 - offset * 0.18, 0.35);
            return (
              <article
                className={`absolute inset-0 overflow-hidden rounded-[1.8rem] px-5 py-5 sm:px-6 sm:py-6 ${
                  isActive
                    ? "border border-[#d9c7b0] bg-white shadow-[0_24px_60px_rgba(61,53,32,0.12)]"
                    : "border border-[#ddd4c4] bg-[#faf6ef]"
                }`}
                key={stop.title}
                style={{
                  opacity,
                  backfaceVisibility: "hidden",
                  transform: `translate3d(0,${translateY}px,0) rotateX(${rotateX}deg) scale(${scale})`,
                  transformOrigin: "top center",
                  transition:
                    "transform 650ms cubic-bezier(0.16,1,0.3,1), opacity 420ms ease",
                  zIndex: storyStops.length - index,
                }}
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  {stop.routeLabel}
                </p>
                <h3
                  className="mt-2 text-[1.6rem] leading-none text-foreground sm:text-[1.85rem]"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {stop.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground sm:text-[14px]">
                  {stop.description}
                </p>
                <p className="mt-3 border-t border-foreground/10 pt-3 text-[11px] uppercase tracking-[0.18em] text-foreground/50">
                  {stop.cue}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      {/* Scroll sentinels */}
      <div aria-hidden="true" className="pointer-events-none">
        {storyStops.map((stop, index) => (
          <div
            className="h-[50vh]"
            key={stop.title}
            ref={(el) => {
              sentinelRefs.current[index] = el;
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function StoryMapSection() {
  const [activeStep, setActiveStep] = useState(0);
  const mobileSentinelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const desktopSentinelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapHeight, setMapHeight] = useState(0);

  // Measure map height so card stack sticky top clears the map on mobile
  useEffect(() => {
    const measure = () => {
      if (mapRef.current) setMapHeight(mapRef.current.offsetHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (mapRef.current) ro.observe(mapRef.current);
    return () => ro.disconnect();
  }, []);

  // Scroll tracker — uses the correct ref set based on breakpoint
  useEffect(() => {
    const updateActiveStep = () => {
      const isDesktop = window.innerWidth >= 1024;
      const refs = (
        isDesktop ? desktopSentinelRefs : mobileSentinelRefs
      ).current.filter((r): r is HTMLDivElement => r !== null && r.getBoundingClientRect().height > 0);

      if (!refs.length) return;

      const anchorY = window.innerHeight * 0.6;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      refs.forEach((ref, index) => {
        const rect = ref.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - anchorY);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveStep(closestIndex);
    };

    updateActiveStep();
    window.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);
    return () => {
      window.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, []);

  return (
    <section
      className="relative [contain:paint] bg-background px-6 py-16 sm:py-20 lg:px-8 lg:py-28"
      id="journey"
    >
      {/* ── Decorative layer ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-24 h-56 w-56 rounded-full bg-[#efe5d5]/25 blur-3xl" />
        <div className="absolute right-10 top-36 h-40 w-40 rounded-full bg-[#dde2cf]/20 blur-3xl" />
        <div className="absolute bottom-20 left-[8%] h-44 w-44 rounded-full bg-[#f3e7cf]/18 blur-3xl" />
        <div className="absolute right-[5%] top-[55%] h-52 w-52 rounded-full bg-[#dde2cf]/15 blur-3xl" />
        <div className="absolute left-[6%] top-[18%] h-28 w-28 rounded-full border border-[#d9c7b0]/25" />
        <div className="absolute right-[12%] top-[18%] h-32 w-32 rounded-full border border-dashed border-[#d9c7b0]/22" />
        <div className="absolute left-[18%] top-[42%] h-40 w-24 rotate-[-18deg] rounded-[55%_45%_60%_40%] border border-[#d9d1c1]/25" />
        <div className="absolute left-[34%] top-[73%] h-28 w-28 rounded-full border border-[#dde2cf]/30" />
        <div className="absolute left-[55%] top-[6%] h-3 w-3 rotate-45 border border-[#c4b49a]/28" />
        <div className="absolute right-[26%] top-[48%] h-4 w-4 rotate-45 border border-[#c4b49a]/22" />
        <svg className="absolute left-[38%] top-[0%] h-24 w-24 opacity-[0.10]" viewBox="0 0 96 96" fill="none">
          <path d="M 8 88 Q 48 8 88 48" stroke="#b09070" strokeWidth="1.2" strokeDasharray="4 4" />
        </svg>
        <svg className="absolute left-[44%] bottom-[5%] h-14 w-14 opacity-[0.08]" viewBox="0 0 56 56" fill="none">
          <path d="M 28 28 m -10 0 a 10 10 0 1 1 20 0 a 14 14 0 1 1 -28 0 a 18 18 0 1 1 36 0" stroke="#b09070" strokeWidth="1" />
        </svg>
      </div>

      {/* ── Section header ── */}
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.62, ease: expo }}
        >
          <span className="inline-flex rounded-full bg-[#efe5d5] px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Story Map
          </span>
          <h2
            className="mt-5 text-3xl leading-[0.92] text-foreground sm:text-4xl lg:text-5xl xl:text-6xl"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Follow the road into{" "}
            <em className="not-italic text-[#8a5d4b]">CCS Montessori.</em>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            Each card guides a step of the journey. The map stays in view and the active hotspot
            updates as you scroll through each landmark.
          </p>
        </motion.div>

        {/* ── Mobile layout: map sticky on top, card stack below ── */}
        <div className="mt-8 lg:hidden">
          {/* Map — sticky at top of section while scrolling */}
          <div ref={mapRef} className="sticky top-4 z-10">
            <MapImage activeStep={activeStep} />
          </div>

          {/* Card flip stack — sticky just below the map */}
          <div className="mt-10">
            <CardStack
              activeStep={activeStep}
              stickyTop={mapHeight + 40}
              sentinelRefs={mobileSentinelRefs}
            />
          </div>
        </div>

        {/* ── Desktop layout: cards left, map right ── */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-[minmax(300px,0.62fr)_minmax(480px,1.38fr)] lg:gap-10">
          {/* Left: card flip stack */}
          <div className="relative">
            <CardStack
              activeStep={activeStep}
              stickyTop="14rem"
              sentinelRefs={desktopSentinelRefs}
            />
          </div>

          {/* Right: map */}
          <div className="sticky top-[14rem] self-start">
            <MapImage activeStep={activeStep} />
          </div>
        </div>
      </div>
    </section>
  );
}
