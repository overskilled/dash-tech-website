import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center hover:cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden group hover:shadow-lg hover:scale-[1.02]",
  {
    variants: {
      variant: {
        default: 
          "bg-primary text-primary-foreground border border-primary/20",
        destructive:
          "bg-destructive text-white border border-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border-2 bg-background shadow-xs dark:bg-input/30 dark:border-input hover:text-accent-foreground hover:scale-100 hover:shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground border border-secondary/20",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 border border-transparent hover:border-accent/20 hover:scale-100",
        link: "text-primary underline-offset-4 hover:underline border border-transparent hover:scale-100",
      },
      size: {
        default: "h-10 px-5 py-2.5 has-[>svg]:px-4",
        sm: "h-8 rounded-full gap-1.5 px-3.5 has-[>svg]:px-3",
        lg: "h-11 rounded-full px-6 py-4 text-base has-[>svg]:px-5",
        xl: "h-12 rounded-full px-7 py-5 text-lg has-[>svg]:px-6",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-11",
        "icon-xl": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Hover animation overlay component
const ButtonHoverEffect = ({ variant }: { variant?: string }) => {
  if (variant === "link" || variant === "ghost") return null;
  
  const getBackgroundColor = () => {
    switch (variant) {
      case "destructive":
        return "bg-destructive/20"
      case "secondary":
        return "bg-secondary/20"
      case "outline":
        return "bg-accent"
      default:
        return "bg-accent"
    }
  }

  return (
    <>
      {/* Main fill effect */}
      <span 
        className={`absolute inset-0 ${getBackgroundColor()} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-full z-0`}
      />
      
      {/* Shine overlay */}
      <span 
        className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out rounded-full z-0"
        style={{ transitionDelay: '100ms' }}
      />
    </>
  )
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {/* Hover animation background */}
      <ButtonHoverEffect variant={variant as any} />
      
      {/* Content with higher z-index */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Comp>
  )
}

export { Button, buttonVariants }