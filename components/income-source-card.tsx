import { cn } from "@/lib/utils";

interface IncomeSourceCardProps {
  icon: string;
  title: string;
  source: string;
  amount: number;
  date: string;
  iconBg: string;
}

export const IncomeSourceCard = ({ icon, title, source, amount, date, iconBg }: IncomeSourceCardProps) => (
  <div className="bg-card p-5 rounded-[2rem] border border-border shadow-sm flex items-center justify-between group hover:shadow-md transition-all">
    <div className="flex items-center gap-4">
      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-inner", iconBg)}>
        {icon}
      </div>
      <div>
        <h5 className="font-bold text-foreground text-sm leading-tight">{title}</h5>
        <p className="text-[11px] text-muted-foreground font-medium">{source}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-lg font-bold text-foreground tracking-tight">${amount.toLocaleString()}</p>
      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">{date}</p>
    </div>
  </div>
);