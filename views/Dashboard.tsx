"use client"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUpCircle, ArrowDownCircle, Wallet, TrendingUp, AlertCircle } from "lucide-react"
import { TransactionRow } from "@/components/transaction-row"
import { ViewHeader } from "@/components/view-header"
import { useState } from "react"
import { NewTransactionModal } from "@/components/new-transaction-modal"

interface DashboardViewProps {
  metrics: {
    balance: number;
    ingresos: number;
    gastos: number;
    inversiones: number;
    deudas: number;
    ahorroPorcentaje: number;
  };
  recentTransactions: any[];
}


export const DashboardView = ({ metrics, recentTransactions }: DashboardViewProps) => {
const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="p-4 md:p-8 space-y-8 bg-background">
      <ViewHeader 
        title="Hola, John Doe 👋" 
        subtitle="Aquí tienes el resumen de tu dinero hoy."
        buttonText="Nuevo Registro"
        onButtonClick={() => setIsModalOpen(true)}

      />
      {/* SECCIÓN DE MÉTRICAS CLAVE */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Balance Total" 
          amount={metrics.balance} 
          icon={<Wallet className="text-primary" />} 
          description="Disponible actual"
        />
        <MetricCard 
          title="Ingresos" 
          amount={metrics.ingresos} 
          icon={<ArrowUpCircle className="text-success" />} 
          trend="+12%"
          isPositive
        />
        <MetricCard 
          title="Gastos" 
          amount={metrics.gastos} 
          icon={<ArrowDownCircle className="text-destructive" />} 
          trend="+5%"
          isPositive={false}
        />
        <MetricCard 
          title="Inversiones" 
          amount={metrics.inversiones} 
          icon={<TrendingUp className="text-blue-500" />} 
          description="Capital activo"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* COLUMNA IZQUIERDA: Transacciones Recientes */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold tracking-tight">Actividad Reciente</h3>
            <button className="text-sm text-primary font-medium hover:underline">Ver todo</button>
          </div>
          <div className="bg-card rounded-[2.5rem] border border-border overflow-hidden shadow-sm">
            {recentTransactions.map((t, i) => (
              <TransactionRow 
                key={t.id}
                icon={t.categoria?.icono || "📑"}
                title={t.descripcion}
                subtitle={new Date(t.fecha).toLocaleDateString()}
                amount={t.monto}
                tipo={t.tipo}
                isLast={i === recentTransactions.length - 1}
                iconBg={t.tipo === 'ingreso' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'}
              />
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA: Resumen de Salud Financiera */}
        <div className="space-y-6">
          <Card className="p-6 rounded-[2.5rem] border-border bg-card">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" /> Capacidad de Ahorro
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Ratio de ahorro</span>
                <span className="font-bold">{metrics.ahorroPorcentaje}%</span>
              </div>
              <Progress value={metrics.ahorroPorcentaje} className="h-2" />
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Estás ahorrando el <strong>{metrics.ahorroPorcentaje}%</strong> de tus ingresos mensuales. ¡Buen trabajo!
              </p>
            </div>
          </Card>

          <Card className="p-6 rounded-[2.5rem] border-destructive/20 bg-destructive/5">
            <h4 className="font-bold text-destructive mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> Deudas Pendientes
            </h4>
            <p className="text-2xl font-bold text-foreground">${metrics.deudas.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-1">Total acumulado por pagar</p>
          </Card>
        </div>
      </div>

      <NewTransactionModal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
      />
    </div>
  )
}

// Sub-componente interno para las tarjetas
const MetricCard = ({ title, amount, icon, description, trend, isPositive }: any) => (
  <Card className="p-6 rounded-[2.5rem] border-border shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 rounded-2xl bg-muted/50">{icon}</div>
      {trend && (
        <span className={`text-xs font-bold px-2 py-1 rounded-lg ${isPositive ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
          {trend}
        </span>
      )}
    </div>
    <div>
      <p className="text-sm text-muted-foreground font-medium">{title}</p>
      <h3 className="text-2xl font-bold tracking-tight">${amount.toLocaleString()}</h3>
      {description && <p className="text-[10px] text-muted-foreground mt-1 font-medium uppercase tracking-wider">{description}</p>}
    </div>
  </Card>
)