import { createClient } from "@/lib/supabase/client";

export class IncomesRepository {
  static async findByUserId(userId: string):Promise<BaseTransactionDTO[]> {
    const supabase = createClient();

    const { data } = await supabase
      .from("ingresos")
      .select("*")
      .eq("usuario_id", userId);
    return data ?? [];
  }
}
