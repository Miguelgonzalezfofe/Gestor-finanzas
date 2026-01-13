import { createClient } from "@/lib/supabase/server";
import { promises } from "dns";

export class InvestmentsRepository {
  static async findByUserId(userId: string):Promise<BaseTransactionDTO[]>{
    const supabase = await createClient();

    const { data } = await supabase
      .from("inversiones")
      .select("*")
      .eq("usuario_id", userId);

    return data ?? [];
  }
}
