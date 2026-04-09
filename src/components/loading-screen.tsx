import { motion } from "framer-motion";
import { useEffect } from "react";

const RING_C = 352;

type Props = { onComplete: () => void };

export function LoadingScreen({ onComplete }: Props) {
  useEffect(() => {
    const t = setTimeout(onComplete, 2400);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#2c1e1a]"
      exit={{
        y: "-100%",
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      {/* Grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Watermark */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
        <p
          className="text-[28vw] font-medium leading-none tracking-tighter text-white/[0.025]"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          CCS
        </p>
      </div>

      {/* Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7d4d42]/10 blur-[100px]" />
      </div>

      {/* Centre composition */}
      <div className="relative flex flex-col items-center px-6">

        {/* Crest + ring */}
        <div className="relative flex h-36 w-36 items-center justify-center">
          <svg className="absolute inset-0" viewBox="0 0 128 128" fill="none">
            <circle cx="64" cy="64" r="56" stroke="#c4a882" strokeWidth="0.5" opacity="0.15" />
            <circle
              cx="64" cy="64" r="56"
              stroke="#c4a882"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeDasharray={RING_C}
              strokeDashoffset={RING_C}
              style={{
                animation: "loader-ring 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
                transformOrigin: "center",
                transform: "rotate(-90deg)",
              }}
            />
            <line x1="64" y1="6" x2="64" y2="12" stroke="#c4a882" strokeWidth="0.8" opacity="0.4" />
          </svg>
          <img
            src="/images/ccs-logo.png"
            alt="CCS"
            className="relative h-16 w-16 object-contain"
            style={{ animation: "loader-crest-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both" }}
          />
        </div>

        {/* Name */}
        <div className="mt-8 overflow-hidden" style={{ animation: "loader-fade-in 0.01s 0.7s both" }}>
          <p
            className="text-center text-[1.9rem] leading-none tracking-[-0.02em] text-white sm:text-[2.2rem]"
            style={{
              fontFamily: "'Fraunces', serif",
              animation: "loader-text-rise 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both",
            }}
          >
            CCS Montessori
          </p>
        </div>

        {/* Subtitle */}
        <div className="mt-2.5 overflow-hidden" style={{ animation: "loader-fade-in 0.01s 1.05s both" }}>
          <p
            className="text-[11px] uppercase tracking-[0.32em] text-white/35"
            style={{ animation: "loader-text-rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.05s both" }}
          >
            Children's Christian School
          </p>
        </div>

        {/* Rule */}
        <div
          className="mt-9 h-px origin-left bg-white/10"
          style={{
            width: "120px",
            animation: "loader-ring 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.3s both",
          }}
        />

        {/* Motto */}
        <div className="mt-4 overflow-hidden" style={{ animation: "loader-fade-in 0.01s 1.5s both" }}>
          <p
            className="text-[10px] uppercase tracking-[0.38em] text-white/20"
            style={{
              fontFamily: "'Fraunces', serif",
              animation: "loader-text-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.5s both",
            }}
          >
            Est. 1957 · For God and My Country
          </p>
        </div>
      </div>

      {/* Corner captions */}
      <div
        className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.24em] text-white/15 sm:bottom-8 sm:left-8"
        style={{ animation: "loader-fade-in 0.6s ease 1.6s both" }}
      >
        Kohima, Nagaland
      </div>
      <div
        className="absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.24em] text-white/15 sm:bottom-8 sm:right-8"
        style={{ animation: "loader-fade-in 0.6s ease 1.6s both" }}
      >
        Montessori · AMI
      </div>
    </motion.div>
  );
}
