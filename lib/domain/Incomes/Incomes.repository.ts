import { createClient } from "@/lib/supabase/server";

export class IncomesRepository {
  static async findByUserId(userId: string):Promise<BaseTransactionDTO[]> {
    const supabase = await createClient();

    const { data } = await supabase
      .from("ingresos")
      .select("*")
      .eq("usuario_id", userId);
    return data ?? [];
  }
}
