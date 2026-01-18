import { create } from "zustand";
import { CreditDTO } from "./credits.dto";
import { CreditsService } from "./gastos.service";

interface CreditsStore {
  credits: CreditDTO[];
  loading: boolean;
  updateCredits: (userId: string) => void;
}

export const useCreditsStore = create<CreditsStore>((set, get) => ({
  credits: [],
  loading: false,
  updateCredits: async (userId: string) => {
    if (get().credits.length > 0) return;

    set({ loading: true });

    const data = await CreditsService.getUserCredits(userId);

    set({ credits: data, loading: false });
  },
}));
