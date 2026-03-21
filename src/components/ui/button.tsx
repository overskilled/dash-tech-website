import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const ArrowRight = () => (
  <svg
    className="w-4 h-4 transition-transform duration-500 ease-out group-hover/btn:translate-x-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center hover:cursor-pointer gap-2.5 whitespace-nowrap font-medium transition-all duration-500 ease-out disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive uppercase tracking-[0.08em]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary/85 active:bg-primary/75 border border-primary hover:border-primary/85",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 active:bg-destructive/80",
        outline:
          "border border-white/25 bg-transparent text-white hover:bg-white/[0.04] hover:border-white/50 active:bg-white/[0.08]",
        secondary:
          "bg-white/[0.06] text-white border border-white/10 hover:bg-white/[0.1] hover:border-white/20 active:bg-white/[0.14]",
        ghost:
          "text-white/70 hover:text-white hover:bg-white/[0.04] active:bg-white/[0.08]",
        link: "text-primary underline-offset-4 hover:underline tracking-normal",
      },
      size: {
        default: "h-11 px-7 py-2.5 rounded-md text-[0.8125rem]",
        sm: "h-9 rounded-md gap-1.5 px-5 text-xs",
        lg: "h-[3.25rem] rounded-md px-9 py-3 text-sm",
        xl: "h-[3.75rem] rounded-md px-12 py-4 text-[0.9375rem]",
        icon: "size-11 rounded-md",
        "icon-sm": "size-9 rounded-md",
        "icon-lg": "size-12 rounded-md",
        "icon-xl": "size-14 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  showArrow = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    showArrow?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  // Auto-show arrow on lg and xl sizes for default/outline variants
  const shouldShowArrow =
    showArrow ||
    ((size === "lg" || size === "xl") &&
      (variant === "default" || variant === "outline" || variant === undefined))

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      {shouldShowArrow && !asChild && <ArrowRight />}
    </Comp>
  )
}

export { Button, buttonVariants }
