import { createClient } from "@/lib/supabase/server";
import DashboardClient from "./DashboardClient";
import { ExpensesService } from "@/lib/domain/expenses/expenses.service";
import { IncomesService } from "@/lib/domain/Incomes/Incomes.service";
import { CreditsService } from "@/lib/domain/credits/gastos.service";
import { InvestmentsService } from "@/lib/domain/investments/investments.service";

export default async function Dashboard() {
  const supabase = await createClient();

  const { data: claims } = await supabase.auth.getClaims();
  const sub = claims?.claims.sub;

  if(!sub) throw new Error("sin sub")
    const { data: id } = await supabase.from("usuarios").select("id").eq("usuarios_id", sub).maybeSingle();
    const expenses = await ExpensesService.getUserExpenses("")
    const incomes = await IncomesService.getUserIncomes("")
    const credits = await CreditsService.getUserCredits("")
    const investments = await InvestmentsService.getUserInvestments("")
    const totalExpenses = expenses.reduce((acc, x) => acc + x.monto, 0);
    const totalIncomes = incomes.reduce((acc, x) => acc + x.monto, 0);
    const totalCredits = credits.reduce((acc, x) => acc + x.monto, 0);
    const totalInvestments = investments.reduce((acc, x) => acc + x.montoInvertido, 0);
  
    const balance = totalIncomes - totalExpenses - totalCredits;
    const datos = {expenses,incomes,credits,investments,totalCredits, totalInvestments,totalIncomes,totalExpenses, balance}
  return (
    <DashboardClient datos={datos} />
  );
}
