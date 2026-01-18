import DashboardLayout from "@/components/dashboard-layout";
import { DashboardService } from "@/lib/domain/dashboard/dashboard.service";
import { DebtsService } from "@/lib/domain/debts/debts.service";
import { InvestmentsService } from "@/lib/domain/investments/investments.service";
import { TransactionsService } from "@/lib/domain/transactions/transactions.service";
import { createClient } from "@/lib/supabase/server";
import { DashboardView } from "@/views/Dashboard";
import { DeudasView } from "@/views/DeudasView";
import { GastosView } from "@/views/GastosView";
import { IngresosView } from "@/views/IngresosView";
import { InversionesView } from "@/views/InversionesView";

// src/app/dashboard/page.tsx
export default async function Page() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userId = user?.id || "";

  // Ejecutamos todo en paralelo para máxima velocidad
  const [transacciones, inversiones, deudas] = await Promise.all([
    TransactionsService.getHistory(userId),
    InvestmentsService.getUserInvestments(userId), // Implementado similar a los otros
    DebtsService.getUserDebts(userId)              // El que acabamos de crear
  ]);
  return (
    <DashboardLayout 
      views={{
        dashboard: <DashboardView metrics={DashboardService.calculateMetrics(transacciones, inversiones, deudas)} recentTransactions={transacciones.slice(0, 5)} />,
        gastos: <GastosView initialData={transacciones.filter(t => t.tipo === 'gasto')} />,
        ingresos: <IngresosView initialData={transacciones.filter(t => t.tipo === 'ingreso')} />,
        inversiones: <InversionesView initialData={inversiones} />,
        deudas: <DeudasView initialData={deudas} />
      }} 
    />
  );
}