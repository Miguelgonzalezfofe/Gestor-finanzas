import { createClient } from "@/lib/supabase/server";
import DashboardClient from "./DashboardClient";
import { IncomesService } from "@/lib/domain/Incomes/Incomes.service";
import { ExpensesService } from "@/lib/domain/expenses/expenses.service";
import { CreditsService } from "@/lib/domain/credits/gastos.service";
import { InvestmentsService } from "@/lib/domain/investments/investments.service";

export default async function Dashboard() {
  const supabase = await createClient();

  const { data: claims } = await supabase.auth.getClaims();
  const sub = claims?.claims.sub;

  const { data: userRecord } = await supabase
    .from("usuarios")
    .select("id")
    .eq("usuarios_id", sub)
    .maybeSingle();

  const userId = userRecord?.id;

  const expenses = await ExpensesService.getUserExpenses(userId)
  const incomes = await IncomesService.getUserIncomes(userId)
  const credits = await CreditsService.getUserCredits(userId)
  const investments = await InvestmentsService.getUserInvestments(userId)


  return (
    <DashboardClient
      expenses={expenses ?? []}
      incomes={incomes ?? []}
      credits={credits ?? []}
      investments={investments ?? []}
    />
  );
}
