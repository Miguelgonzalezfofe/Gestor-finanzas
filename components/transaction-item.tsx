import { cn } from "@/lib/utils"

interface TransactionItemProps {
  icon: string;
  title: string;
  date: string;
  amount: number;
  type: 'income' | 'expense';
}

export function TransactionItem ({ icon, title, date, amount, type }: TransactionItemProps) { 
  const total = Math.abs(amount).toLocaleString()
  return (
  <div className="flex items-center justify-between group">
    <div className="flex items-center">
      {/* Círculo del icono adaptado a Dark Mode */}
      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-lg shadow-sm">
        {icon}
      </div>
      <div className="ml-3">
        <p className="text-sm font-bold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{date}</p>
      </div>
    </div>
    <span className={`
      text-sm font-bold ${type === "income" ? "text-success" : "text-destructive"}`   
      }>
      {type === 'income' ? "+" : "-"}${amount}
    </span>
  </div>
)
}