import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { type ReactNode } from "react";

const expo = [0.16, 1, 0.3, 1] as const;

// ── FadeUp ───────────────────────────────────────────────────────────────────
type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof motion;
} & HTMLMotionProps<"div">;

export function FadeUp({ children, delay = 0, className, ...rest }: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.62, ease: expo, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ── SlideIn ──────────────────────────────────────────────────────────────────
type SlideInProps = {
  children: ReactNode;
  from?: "left" | "right";
  delay?: number;
  className?: string;
};

export function SlideIn({ children, from = "left", delay = 0, className }: SlideInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from === "left" ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, ease: expo, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Stagger container + item ─────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: expo },
  },
};

type StaggerProps = { children: ReactNode; className?: string };

export function Stagger({ children, className }: StaggerProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerProps) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

// ── Hover-lift card wrapper ───────────────────────────────────────────────────
type HoverCardProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "li";
};

export function HoverCard({ children, className, as: Tag = "article" }: HoverCardProps) {
  const MotionTag = motion[Tag] as typeof motion.article;
  return (
    <MotionTag
      whileHover={{
        y: -5,
        transition: { type: "spring", stiffness: 320, damping: 22 },
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
