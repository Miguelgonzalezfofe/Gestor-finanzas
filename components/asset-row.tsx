import { cn } from "@/lib/utils"

interface AssetRowProps {
  icon: string;
  name: string;
  type: string;
  performance: number;
  iconBg: string;
}

export const AssetRow = ({ icon, name, type, performance, iconBg }: AssetRowProps) => {
  const isPositive = performance >= 0;
  return (
    <div className="py-3 flex items-center justify-between group">
      <div className="flex items-center">
        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-sm transition-transform group-hover:scale-110", iconBg)}>
          {icon}
        </div>
        <div className="ml-3">
          <p className="text-sm font-bold text-foreground">{name}</p>
          <p className="text-[10px] text-muted-foreground uppercase font-semibold">{type}</p>
        </div>
      </div>
      <span className={cn(
        "text-sm font-bold",
        isPositive ? "text-success" : "text-destructive"
      )}>
        {isPositive ? "+" : ""}{performance}%
      </span>
    </div>
  )
}