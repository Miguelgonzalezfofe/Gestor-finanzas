import { createClient } from "@/lib/supabase/server";

export class GastoRepository {
  
  static async findByUserId(userId: string) {
    const supabase = await createClient();

    const { data } = await supabase
      .from("gastos")
      .select("*")
      .eq("usuario_id", userId);

    return data ?? [];
  }
}
