
import { createClient } from "@/lib/supabase/client";

export class UserRepository {
  
  static async findUser(){
    const supabase = createClient();
        const data = (await supabase.auth.getClaims()).data?.claims
        const profile = (await supabase.from("profiles").select("*").maybeSingle()).data
        const email = data?.email
        return {...profile,email}

  }
}
