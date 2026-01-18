
import { create } from "zustand";
import { ExpenseDTO } from "./expenses.dto";
import { ExpensesService } from "./expenses.service";

interface ExpensesStore {
  expenses: ExpenseDTO[];
  loading: boolean;
  uploadExpenses: (userId: string) => Promise<void>;
}

export const useExpensesStore = create<ExpensesStore>((set, get) => ({
  expenses: [],
  loading: false,

  async uploadExpenses(userId: string) {
    if (get().expenses.length > 0) return;

    set({ loading: true });

    const data = await ExpensesService.getUserExpenses(userId);

    set({ expenses: data, loading: false });
  },
}));
