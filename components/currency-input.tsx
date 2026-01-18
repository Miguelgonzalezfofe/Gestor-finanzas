import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

interface CurrencyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  symbol?: string
}

const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ className, label, symbol = "$", ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        <Label className="text-sm font-semibold ml-1">
          {label}
        </Label>
        <div className="relative group">
          {/* Símbolo de moneda fijo a la izquierda */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold transition-colors group-focus-within:text-primary">
            {symbol}
          </span>
          <input
            type="number"
            className={cn(
              // Estilos base de shadcn adaptados para finanzas
              "flex h-12 w-full rounded-xl border border-input bg-muted/30 px-9 py-2 text-sm ring-offset-background",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50 transition-all",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    )
  }
)

CurrencyInput.displayName = "CurrencyInput"

export { CurrencyInput }