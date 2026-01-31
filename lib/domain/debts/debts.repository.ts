// src/lib/domain/debts/debts.repository.ts
import { createClient } from "@/lib/supabase/client";

export class DebtsRepository {
  static async findByUserId(userId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("debts")
      .select("*")
      .eq("user_id", userId)
      .order("due_date", { ascending: true });

    if (error) throw new Error(error.message);
    return data || [];
  }
  static async create(
    data: {
      title: string;
      creditor: string;
      total_amount: number;
      paid_amount?: number;
      due_date?: string;
      interest_rate?: number;
    },
    user_id: string
  ) {
    const supabase = createClient();

    const { data: insertedData, error } = await supabase
      .from("debts")
      .insert([
        {
          user_id: user_id,
          title: data.title,
          creditor: data.creditor,
          total_amount: data.total_amount,
          paid_amount: data.paid_amount || 0,
          due_date:
            data.due_date ||
            new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // +30 días por defecto
          interest_rate: data.interest_rate || 0,
        },
      ])
      .select()
      .single();

    if (error) throw new Error(error.message);
    return insertedData;
  }
}
