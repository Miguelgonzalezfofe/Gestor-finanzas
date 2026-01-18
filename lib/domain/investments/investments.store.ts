import { create } from "zustand";
import { InvestmentDTO } from "./investments.dto";
import { InvestmentsService } from "./investments.service";

interface InvestmentsStore {
  investments: InvestmentDTO[];
  loading: boolean;
  updateInvestments: (userId: string) => void;
}
export const useInvestmentsStore = create<InvestmentsStore>((set, get) => ({
  investments: [],
  loading: false,
  updateInvestments: async (userId) => {
    if (get().investments.length > 0) return;

    set({ loading: true });

    const data = await InvestmentsService.getUserInvestments(userId);

    set({
      investments: data,
      loading: false,
    });
  },
}));
