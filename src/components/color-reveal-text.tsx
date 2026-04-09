import { useEffect, useRef, useState } from "react";

type ColorRevealTextProps = {
  text: string;
  className?: string;
  revealColor?: string;
};

export function ColorRevealText({
  text,
  className,
  revealColor = "#8f5d4e",
}: ColorRevealTextProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      className={`inline-block bg-clip-text text-transparent transition-[background-size] duration-1000 ease-out ${className ?? ""}`}
      ref={ref}
      style={{
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        backgroundImage: `linear-gradient(90deg, ${revealColor} 0 0), linear-gradient(hsl(var(--foreground)) 0 0)`,
        backgroundPosition: "left top, left top",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: `${revealed ? "100%" : "0%"} 100%, 100% 100%`,
        color: "transparent",
      }}
    >
      {text}
    </span>
  );
}
