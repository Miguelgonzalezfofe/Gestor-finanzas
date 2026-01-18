import { useCreditsStore } from "../credits/credits.store";
import { useExpensesStore } from "../expenses/expenses.store";
import { useIncomesStore } from "../Incomes/incomes.store";
import { useInvestmentsStore } from "../investments/investments.store";

export function useDashboard(userId: string) {
  const { expenses, uploadExpenses } = useExpensesStore();
  const { incomes, uploadIncomes } = useIncomesStore();
  const { credits, updateCredits } = useCreditsStore();
  const { investments, updateInvestments } = useInvestmentsStore();

  const totalExpenses = expenses.reduce((acc, x) => acc + x.monto, 0);
  const totalIncomes = incomes.reduce((acc, x) => acc + x.monto, 0);
  const totalCredits = credits.reduce((acc, x) => acc + x.monto, 0);
  const totalInvestments = investments.reduce((acc, x) => acc + x.montoInvertido, 0);

  const balance = totalIncomes - totalExpenses - totalCredits;
  const loadAll = async () => {
    await Promise.all([
      uploadExpenses(userId),
      uploadIncomes(userId),
      updateCredits(userId),
      updateInvestments(userId),
    ]);
  };

  return {
    expenses,
    incomes,
    credits,
    investments,
    balance,
    totalExpenses,
    totalIncomes,
    totalCredits,
    totalInvestments,
    loadAll,
  };
}
