import * as React from "react"
import { cn } from "@/lib/utils"

// Este es un componente envoltorio que usa las variables de shadcn
// pero fuerza un diseño más "App Financiera" (más padding y bordes más suaves)

interface FinanceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const FinanceCard = React.forwardRef<HTMLDivElement, FinanceCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // bg-card y text-card-foreground vienen de tu tailwind config
          "rounded-[2rem] border border-border bg-card text-card-foreground shadow-sm",
          "p-6 transition-all hover:shadow-md",
          "dark:bg-card/50 dark:backdrop-blur-sm", // Toque elegante en Dark Mode
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

FinanceCard.displayName = "FinanceCard"