import { createClient } from "@/lib/supabase/server";

export class ExpensesRepository {
  static async findByUserId(userId: string):Promise<BaseTransactionDTO[]> {
    const supabase = await createClient();

    const { data } = await supabase
      .from("gastos")
      .select("*")
      .eq("usuario_id", userId);
    return data ?? [];
  }
}
