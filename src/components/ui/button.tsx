import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6467FF] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#6467FF] to-[#43B2F9] text-white shadow-[0_10px_25px_rgba(100,103,255,0.25)] hover:shadow-[0_14px_35px_rgba(67,178,249,0.25)] hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]",
        primary:
          "bg-gradient-to-r from-[#6467FF] to-[#43B2F9] text-white shadow-[0_10px_25px_rgba(100,103,255,0.25)] hover:shadow-[0_14px_35px_rgba(67,178,249,0.25)] hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]",
        secondary:
          "bg-transparent border border-[rgba(67,178,249,0.5)] text-[#43B2F9] hover:border-[#43B2F9] hover:shadow-[0_0_20px_rgba(67,178,249,0.3)] hover:scale-[1.02] active:scale-[0.98]",
        destructive:
          "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:scale-[1.02]",
        outline:
          "border border-[rgba(100,103,255,0.3)] bg-transparent text-[#94A3B8] hover:bg-[rgba(100,103,255,0.1)] hover:border-[#6467FF] hover:text-white shadow-sm hover:shadow-md",
        ghost: "hover:bg-[rgba(100,103,255,0.1)] hover:text-white rounded-lg",
        link: "text-[#43B2F9] underline-offset-4 hover:underline rounded-none",
        glow: "relative overflow-hidden bg-gradient-to-r from-[#6467FF] to-[#43B2F9] text-white shadow-[0_10px_25px_rgba(100,103,255,0.25)] hover:shadow-[0_18px_45px_rgba(67,178,249,0.35)] hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/25 before:to-white/0 before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-11 w-11",
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
