"use server"
import { createClient } from "@/lib/supabase/server";

export async function getAll(userId:string){
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("transactions").select(`*,categories (name,icon)`)
    .eq("user_id", userId).order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
  return data || [];
}

export async function getTypeTransactions(userId:string, type:'ingreso' | 'gasto'){
  const supabase = await createClient()
    const { data, error } = await supabase.from("transactions")
      .select(`*, categories (name,icon)`).eq("user_id", userId)
      .eq("type", type).order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data || [];
}

export async function createTransactions (data: 
  {user_id: string;amount: number;description: string;type: string;category_id?: string;payment_method?: string;},
  userId:string){
  const supabase = await createClient();
  const { data: insertedData, error } = await supabase.from("transactions").insert([
      {
        user_id: userId,
        amount: data.amount,
        description: data.description,
        type: data.type,
        payment_method: data.payment_method || "Efectivo",
        category_id: data.category_id
      }
    ]).select().single();

    if (error) throw new Error(error.message);
    return insertedData;
}