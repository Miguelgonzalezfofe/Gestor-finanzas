import { cn } from "@/lib/utils";

interface TransactionRowProps {
  title: string;
  subtitle: string;
  amount: number;
  tipo: 'ingreso' | 'gasto'; // Añadimos el tipo como prop
  icon: string;
  tag?: string;
  iconBg?: string;
  isLast?: boolean;
}

export const TransactionRow = ({ title, subtitle, amount, tipo, icon, iconBg, isLast }: TransactionRowProps) => {
  const isIngreso = tipo === 'ingreso';

  return (
    <div className={cn(
      "flex items-center justify-between p-4 transition-colors hover:bg-muted/50",
      !isLast && "border-bottom border-border"
    )}>
      <div className="flex items-center gap-4">
        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", iconBg || "bg-muted")}>
          {icon}
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{title}</p>
          <p className="text-[10px] text-muted-foreground font-medium">{subtitle}</p>
        </div>
      </div>

      <div className="text-right">
        {/* Lógica de Signo y Color */}
        <p className={cn(
          "text-sm font-bold tracking-tight",
          isIngreso ? "text-success" : "text-foreground"
        )}>
          {isIngreso ? "+" : "-"}${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </p>
        <p className="text-[9px] font-bold uppercase text-muted-foreground tracking-widest">
          {tipo}
        </p>
      </div>
    </div>
  );
};