"use client"
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, AlertTriangle, CreditCard } from "lucide-react";
import { DebtDO } from "@/lib/domain/debts/debts.dto";

interface DeudasViewProps {
  initialData: DebtDO[];
}

export const DeudasView = ({ initialData }: DeudasViewProps) => {
  const totalDeuda = initialData.reduce((acc, curr) => acc + curr.montoPendiente, 0);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header con Resumen */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Mis Deudas</h2>
            <p className="text-muted-foreground">Gestiona tus compromisos financieros y plazos de pago.</p>
          </div>
          <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-2xl">
            <p className="text-[10px] uppercase font-bold text-destructive tracking-widest">Deuda Total Pendiente</p>
            <p className="text-2xl font-bold text-destructive">${totalDeuda.toLocaleString()}</p>
          </div>
        </div>

        {/* Grid de Deudas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initialData.map((deuda) => (
            <Card key={deuda.id} className="p-6 rounded-[2.5rem] border-border bg-card hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center text-xl">
                    <CreditCard className="text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{deuda.nombre}</h4>
                    <p className="text-xs text-muted-foreground">{deuda.acreedor}</p>
                  </div>
                </div>
                {deuda.esUrgente && (
                  <Badge variant="destructive" className="animate-pulse">
                    <AlertTriangle className="w-3 h-3 mr-1" /> Urgente
                  </Badge>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground font-medium">Progreso de pago</span>
                  <span className="font-bold">{deuda.progreso}%</span>
                </div>
                <Progress value={deuda.progreso} className="h-2" />
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-muted/30 p-3 rounded-xl">
                    <p className="text-[10px] uppercase text-muted-foreground font-bold">Pagado</p>
                    <p className="text-sm font-bold text-success">${deuda.montoPagado.toLocaleString()}</p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded-xl">
                    <p className="text-[10px] uppercase text-muted-foreground font-bold">Pendiente</p>
                    <p className="text-sm font-bold text-foreground">${deuda.montoPendiente.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                  <Calendar className="w-3 h-3" />
                  Vence el {new Date(deuda.fechaVencimiento).toLocaleDateString()}
                  <span className="ml-auto font-bold text-primary">{deuda.tasaInteres}% Int.</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {initialData.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-border rounded-[2.5rem]">
            <p className="text-muted-foreground font-medium">No tienes deudas registradas. ¡Excelente salud financiera! 🎉</p>
          </div>
        )}
      </div>
    </div>
  );
};