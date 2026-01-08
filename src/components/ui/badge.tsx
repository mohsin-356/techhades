import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#6467FF] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#6467FF] text-white shadow hover:bg-[#43B2F9]",
        secondary:
          "border-transparent bg-[rgba(100,103,255,0.15)] text-[#94A3B8] hover:bg-[rgba(100,103,255,0.25)]",
        destructive:
          "border-transparent bg-red-500 text-white shadow hover:bg-red-600",
        outline: "text-[#94A3B8] border-[rgba(100,103,255,0.3)]",
        glow: "border-transparent bg-gradient-to-r from-[#6467FF] to-[#43B2F9] text-white shadow-lg shadow-[#6467FF]/25",
        glass: "border-[rgba(255,255,255,0.08)] bg-[rgba(11,21,38,0.6)] backdrop-blur-md text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
