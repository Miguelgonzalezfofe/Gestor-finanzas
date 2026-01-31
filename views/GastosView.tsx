import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TransactionRow } from "@/components/transaction-row"
import { Search } from "lucide-react"
import { TransactionDO } from "@/lib/domain/transactions/transactions.dto"

interface GastosViewProps {
  initialData: TransactionDO[];
}
export const GastosView = ({initialData}:GastosViewProps) => {  
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER DE VISTA */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Mis Gastos</h2>
            <p className="text-muted-foreground">
              Has realizado <span className="font-bold text-primary">42 transacciones</span> este mes.
            </p>
          </div>
          
          <Tabs defaultValue="mes" className="w-[300px]">
            <TabsList className="grid w-full grid-cols-3 rounded-xl">
              <TabsTrigger value="semana">Semana</TabsTrigger>
              <TabsTrigger value="mes">Mes</TabsTrigger>
              <TabsTrigger value="año">Año</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* FILTROS */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input 
              placeholder="Buscar gasto..." 
              className="pl-10 h-12 rounded-2xl bg-card border-none shadow-sm focus-visible:ring-2" 
            />
          </div>
          
          <Select defaultValue="todas">
            <SelectTrigger className="w-full md:w-[220px] h-12 rounded-2xl bg-card border-none shadow-sm">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="todas">Todas las categorías</SelectItem>
              <SelectItem value="comida">🍔 Comida</SelectItem>
              <SelectItem value="transporte">🚗 Transporte</SelectItem>
              <SelectItem value="hogar">🏠 Hogar</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* LISTADO POR GRUPOS */}
        <div className="space-y-8">
          {/* GRUPO HOY */}
          <div>
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center">
              Hoy <span className="ml-4 flex-1 h-[1px] bg-border"></span>
            </h4>
            {initialData.map(gasto => (
          <TransactionRow 
            key={gasto.id}
            icon={gasto.categoria?.icono || "💸"} 
            title={gasto.descripcion}
            amount={gasto.monto}
            subtitle=""
            tipo="gasto"
            iconBg=""
          />
          ))}
          </div>

          {/* GRUPO AYER */}
          <div>
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center">
              Ayer <span className="ml-4 flex-1 h-[1px] bg-border"></span>
            </h4>
            <div className="bg-card rounded-[2.5rem] shadow-sm overflow-hidden border border-border">
              <TransactionRow 
                icon="🎬" title="Suscripción Netflix" subtitle="Vencimiento mensual" 
                amount={15.99}  tipo="gasto" tag="Recurrente" iconBg="bg-purple-100 text-purple-600 dark:bg-purple-900/30"
              />
              <TransactionRow 
                icon="🛒" title="Supermercado Central" subtitle="Compras semanales" 
                amount={142.30} tipo="gasto"  tag="Tarjeta Visa" iconBg="bg-green-100 text-green-600 dark:bg-green-900/30"
                isLast
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}