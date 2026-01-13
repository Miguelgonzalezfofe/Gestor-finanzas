import { createClient } from "@/lib/supabase/server";

export class CreditsRepository {
  static async findByUserId(userId:string): Promise<BaseTransactionDTO[]>{
    const supabase = await createClient();

    const {data} = await supabase.from("deudas").select("*").eq("usuario_id", userId);
    return data ?? [];
  }
}