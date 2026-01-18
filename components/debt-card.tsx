import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DebtCardProps {
  nombre: string;
  total: number;
  pagado: number;
  tasa: string;
  vencimiento: string;
  color: string;
}

export const DebtCard = ({ nombre, total, pagado, tasa, vencimiento, color }: DebtCardProps) => {
  const porcentaje = Math.round((pagado / total) * 100);
  const restante = total - pagado;

  return (
    <div className="bg-card p-6 rounded-[2rem] border border-border shadow-sm hover:shadow-md transition-all group">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h5 className="font-bold text-foreground text-lg">{nombre}</h5>
          <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
            Tasa: {tasa} EA
          </p>
        </div>
        <span className="bg-muted px-3 py-1 rounded-lg text-[10px] font-bold text-muted-foreground">
          Vence: {vencimiento}
        </span>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground font-medium">Progreso de pago</span>
          <span className="font-bold text-foreground">{porcentaje}%</span>
        </div>
        <Progress value={porcentaje} className={cn("h-2 bg-muted", color)} />
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-border">
        <div>
          <p className="text-[10px] text-muted-foreground font-bold uppercase">Restante</p>
          <p className="text-xl font-bold text-foreground">${restante.toLocaleString()}</p>
        </div>
        <Button variant="link" className="text-primary font-bold text-xs p-0 h-auto">
          Ver detalles
        </Button>
      </div>
    </div>
  )
}