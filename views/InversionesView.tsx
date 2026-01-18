"use client"
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { InvestmentDTO } from "@/lib/domain/investments/investments.dto";
import { cn } from "@/lib/utils";

interface InversionesViewProps {
  initialData: InvestmentDTO[];
}

export const InversionesView = ({ initialData }: InversionesViewProps) => {
  const patrimonioTotal = initialData.reduce((acc, curr) => acc + curr.valorActual, 0);
  const inversionTotal = initialData.reduce((acc, curr) => acc + curr.montoInvertido, 0);
  const gananciaTotal = patrimonioTotal - inversionTotal;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Resumen del Portafolio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 p-8 bg-primary text-primary-foreground rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-sm opacity-80 font-medium">Patrimonio en Activos</p>
              <h2 className="text-5xl font-bold tracking-tighter">${patrimonioTotal.toLocaleString()}</h2>
              <div className="flex gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl">
                  <p className="text-[10px] uppercase font-bold opacity-70">Rendimiento Total</p>
                  <p className={cn("text-lg font-bold", gananciaTotal >= 0 ? "text-green-300" : "text-red-300")}>
                    {gananciaTotal >= 0 ? "+" : ""}${gananciaTotal.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
            <Wallet className="absolute right-8 top-1/2 -translate-y-1/2 h-40 w-40 opacity-10" />
          </Card>

          <Card className="p-6 rounded-[2.5rem] border-border flex flex-col justify-center text-center">
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-2">Inversión Inicial</p>
            <p className="text-3xl font-bold">${inversionTotal.toLocaleString()}</p>
            <div className="mt-4 p-2 bg-muted/50 rounded-xl">
               <p className="text-[10px] text-muted-foreground italic">"El interés compuesto es la octava maravilla del mundo."</p>
            </div>
          </Card>
        </div>

        {/* Listado de Activos */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold px-2">Mis Activos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {initialData.map((inv) => (
              <Card key={inv.id} className="p-5 rounded-[2rem] border-border bg-card flex items-center justify-between group hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-muted rounded-2xl flex items-center justify-center text-2xl">
                    {inv.icono}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{inv.activo}</h4>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">{inv.simbolo} • {inv.tipo}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-lg">${inv.valorActual.toLocaleString()}</p>
                  <Badge className={cn(
                    "text-[10px] font-bold",
                    inv.esPositivo ? "bg-success/10 text-success hover:bg-success/20" : "bg-destructive/10 text-destructive hover:bg-destructive/20"
                  )}>
                    {inv.esPositivo ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                    {inv.roi}%
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};