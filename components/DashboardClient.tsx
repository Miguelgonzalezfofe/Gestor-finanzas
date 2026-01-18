import BalanceCard from "./ui/BalanceCard";
// import SummaryCards from "./ui/SummaryCards";
// import ChartsSection from "./ui/ChartsSection";
// import TabsSection from "./ui/TabsSection";
import { ExpenseDTO } from "@/lib/domain/expenses/expenses.dto";
import { IncomeDTO } from "@/lib/domain/Incomes/Incomes.dto";
import { CreditDTO } from "@/lib/domain/credits/credits.dto";
import { InvestmentDTO } from "@/lib/domain/investments/investments.dto";

interface PageProps {
  expenses:ExpenseDTO[],
  incomes:IncomeDTO[],
  credits:CreditDTO[],
  investments:InvestmentDTO[],
  totalIncomes:number,
  totalExpenses:number,
  totalCredits:number,
  balance:number,
  totalInvestments:number,

}
interface Data {
  datos: PageProps
}
export default function DashboardClient({datos}:Data) {
const {balance,credits,expenses,incomes,investments,totalCredits,totalExpenses,totalIncomes,totalInvestments} = datos

  return (
    <div className="space-y-10 p-6">
      {/* Balance general */}
      {/* <BalanceCard balance={balance} /> */}

      {/* Cards de totales */}
      {/* <SummaryCards
        totalIncomes={totalIncomes}
        totalExpenses={totalExpenses}
        totalCredits={totalCredits}
        totalInvestments={totalInvestments}
      /> */}
      

    {/* <ChartsSection
        totalCredits={totalCredits}
        totalExpenses={totalExpenses}
        totalIncomes={totalIncomes}
        totalInvestments={totalInvestments}
      /> */}
      {/* Gráficos */}
      

        {/* <TabsSection
        expenses={expenses}
        incomes={incomes}
        credits={credits}
        investments={investments}
      /> */}
      
    </div>
  );
}




