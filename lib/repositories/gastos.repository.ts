import { createClient } from "@/lib/supabase/server";

export class GastosRepository {
  static async findByUserId(userId: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("gastos")
      .select("*")
      .eq("usuario_id", userId);

    if (error) throw new Error(error.message);

    return data ?? [];
  }
}
