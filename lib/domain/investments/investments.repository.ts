// src/lib/domain/investments/investments.repository.ts
import { createClient } from "@/lib/supabase/client";

export class InvestmentsRepository {
  static async findByUserId(userId: string) {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("investments")
      .select("*")
      .eq("user_id", userId)
      .order("current_value", { ascending: false });

    if (error) throw new Error(error.message);
    return data || [];
  }
  
  static async create(data: {
    asset_name: string;
    symbol: string;
    amount_invested: number;
    current_value: number;
    asset_type: string;
    icon?: string;
  },user_id: string) {
    const supabase = createClient();

    const { data: insertedData, error } = await supabase
      .from("investments")
      .insert([
        {
          user_id: user_id,
          asset_name: data.asset_name,
          symbol: data.symbol || "INV",
          amount_invested: data.amount_invested,
          current_value: data.current_value || data.amount_invested, // Al inicio el valor es lo invertido
          asset_type: data.asset_type,
          icon: data.icon || "📈"
        }
      ])
      .select()
      .single();

    if (error) throw new Error(error.message);
    return insertedData;
  }
}