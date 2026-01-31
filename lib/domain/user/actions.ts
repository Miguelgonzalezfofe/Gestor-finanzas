"use server"

import { createClient } from "@/lib/supabase/server";

export async function getUser(){
  const supabase = await createClient();
    const data = (await supabase.auth.getClaims()).data?.claims
    const profile = (await supabase.from("profiles").select("*").maybeSingle()).data
    const email = data?.email
    return {...profile,email}
}