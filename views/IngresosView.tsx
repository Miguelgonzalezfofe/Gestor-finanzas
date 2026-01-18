"use client" // Lo mantenemos como client para que shadcn progress anime suavemente
import { Progress } from "@/components/ui/progress"
import { IncomeSourceCard } from "@/components/income-source-card"
import { DollarSign, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { TransactionDO } from "@/lib/domain/transactions/transactions.dto";

interface IngresosViewProps {
  initialData: TransactionDO[];
}

export const IngresosView = ({ initialData }: IngresosViewProps) => {
  // 1. Cálculos dinámicos
  const totalIngresos = initialData.reduce((acc, curr) => acc + curr.monto, 0);
  const metaMensual = 6000;
  const porcentajeMeta = Math.min(Math.round((totalIngresos / metaMensual) * 100), 100);
  const faltante = metaMensual - totalIngresos;

  // 2. Agrupar por fuente para la distribución (Lógica básica de ejemplo)
  // En un caso real, esto vendría categorizado desde el Service
  const distribucion = [
    { label: "Trabajo Fijo", percent: 60, color: "bg-success" },
    { label: "Freelance", percent: 30, color: "bg-blue-500" },
    { label: "Otros", percent: 10, color: "bg-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* DASHBOARD SUPERIOR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Principal de Balance */}
          <div className="md:col-span-2 bg-success rounded-[2.5rem] p-8 text-success-foreground shadow-xl shadow-success/20 flex justify-between items-center relative overflow-hidden">
            <div className="z-10">
              <p className="opacity-80 text-sm font-medium mb-1">Total Ingresado (Enero)</p>
              <h2 className="text-5xl font-bold tracking-tighter">${totalIngresos.toLocaleString()}</h2>
              <div className="mt-4 flex items-center">
                <span className="bg-white/20 backdrop-blur-md py-1 px-3 rounded-full text-[10px] font-bold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +12% vs dic
                </span>
              </div>
            </div>
            <DollarSign className="hidden sm:block h-32 w-32 opacity-10 absolute right-8" />
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* Meta Mensual */}
          <div className="bg-card rounded-[2.5rem] p-6 border border-border shadow-sm flex flex-col justify-center">
            <h4 className="text-muted-foreground text-[10px] font-bold mb-4 uppercase tracking-widest">Meta Mensual</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold py-1 px-2 rounded-lg bg-success/10 text-success uppercase">Progreso</span>
                <span className="text-sm font-bold text-success">{porcentajeMeta}%</span>
              </div>
              <Progress value={porcentajeMeta} className="h-3 bg-muted" /> 
              <p className="text-muted-foreground text-xs leading-relaxed">
                {faltante > 0 ? (
                  <>Faltan <span className="text-foreground font-bold">${faltante.toLocaleString()}</span> para tu objetivo de ${metaMensual.toLocaleString()}.</>
                ) : (
                  <span className="text-success font-bold">¡Meta superada! 🎉</span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* LISTADO Y DISTRIBUCIÓN */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-bold text-foreground text-xl mb-6">Fuentes de Ingreso</h3>
            
            <div className="space-y-3">
              {initialData.length > 0 ? (
                initialData.map((ingreso) => (
                  <IncomeSourceCard 
                    key={ingreso.id}
                    icon={ingreso.categoria?.icono || "💰"} 
                    title={ingreso.descripcion} 
                    source={ingreso.metodoPago} 
                    amount={ingreso.monto} 
                    date={`Recibido el ${new Date(ingreso.fecha).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}`}
                    iconBg="bg-success/10 text-success"
                  />
                ))
              ) : (
                <div className="p-10 border-2 border-dashed border-border rounded-[2rem] text-center text-muted-foreground">
                  No hay ingresos registrados aún.
                </div>
              )}
            </div>
          </div>

          {/* Distribución Sidebar */}
          <div className="bg-card p-6 rounded-[2.5rem] border border-border h-fit">
            <h4 className="font-bold text-foreground mb-8">Distribución</h4>
            <div className="space-y-8">
              {distribucion.map((item) => (
                <div key={item.label} className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground font-medium">{item.label}</span>
                    <span className="font-bold text-foreground">{item.percent}%</span>
                  </div>
                  <Progress value={item.percent} className="h-1.5 bg-muted" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}