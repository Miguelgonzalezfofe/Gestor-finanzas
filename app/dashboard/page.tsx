"use client"
import DashboardLayout from "@/components/dashboard-layout";
import { DashboardService } from "@/lib/domain/dashboard/dashboard.service";
import { useTransactions } from "@/lib/domain/transactions/transactions.store";
import { useUser } from "@/lib/domain/user/user.store";

import { DashboardView } from "@/views/Dashboard";
import { DeudasView } from "@/views/DeudasView";
import { GastosView } from "@/views/GastosView";
import { IngresosView } from "@/views/IngresosView";
import { InversionesView } from "@/views/InversionesView";
import { useEffect } from "react";

// src/app/dashboard/page.tsx
export default function Page() {
  const {getUser,user} = useUser()
  const {upload,uploadDebts, uploadInvestments, uploadTransactions,transactions,investments,debts} = useTransactions()
  useEffect(()=>{
    getUser()
  },[])
  useEffect(()=>{
    if(user){
      uploadTransactions(user.id)
      uploadDebts(user.id)
      uploadInvestments(user.id)
      upload(user.id)
    }
  },[user])
  console.log("user",user)
  console.log("transactions",transactions)

  if (!user || !transactions || !investments || !debts) {
    return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="h-12 w-12 bg-primary/20 rounded-full" />
        <p className="text-sm font-medium text-muted-foreground">Cargando tu billetera...</p>
      </div>
    </div>
    )
  }
  return (
    <DashboardLayout 
      views={{
        dashboard: <DashboardView metrics={DashboardService.calculateMetrics(transactions, investments, debts)} recentTransactions={transactions.slice(0, 5)} />,
        gastos: <GastosView initialData={transactions.filter(t => t.tipo === "gasto")} />,
        ingresos: <IngresosView initialData={transactions.filter(t => t.tipo === "ingreso")} />,
        inversiones: <InversionesView initialData={investments} />,
        deudas: <DeudasView initialData={debts} />
      }} 
    />
  );
}