import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        hero: "liquid-glass text-foreground hover:scale-[1.03] hover:bg-white/70",
        solid:
          "bg-primary text-primary-foreground shadow-[0_18px_35px_rgba(117,62,53,0.18)] hover:scale-[1.03] hover:bg-primary/90",
        ghost:
          "border border-foreground/10 bg-white/60 text-foreground hover:scale-[1.03] hover:bg-white/85",
      },
      size: {
        nav: "px-6 py-2.5 text-sm",
        hero: "px-14 py-5 text-base",
        base: "px-6 py-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "nav",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
