import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand text-white shadow hover:bg-brand-2 transition-all duration-300 hover:shadow-[0_0_24px_rgba(109,106,255,0.35)]",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600",
        outline:
          "border border-foreground/10 bg-foreground/5 shadow-sm hover:bg-foreground/10 hover:text-foreground",
        secondary:
          "bg-foreground/10 text-foreground shadow-sm hover:bg-foreground/15",
        ghost: "hover:bg-foreground/10 hover:text-foreground",
        link: "text-brand underline-offset-4 hover:underline",
        glow: "bg-gradient-to-r from-brand to-brand-2 text-white shadow-lg hover:shadow-[0_0_40px_rgba(109,106,255,0.5)] transition-all duration-300 hover:scale-105",
        glass: "glass border border-foreground/10 hover:bg-foreground/10 backdrop-blur-md",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
