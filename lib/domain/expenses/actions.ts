"use server"

import { createClient } from "@/lib/supabase/server"
import { ExpenseDTO } from "./expenses.dto"


export async function getExpensesDB (userId:string):Promise<BaseTransactionDTO[]>{
  const supabase = await createClient()
  const {data,error} = await supabase.from("transactions").select("*").eq("user_id", userId)
  if(error) console.error(error.message)
  return data ?? []
}

export async function setExpenseDb(datos:any){
  const supabase = await createClient()
  return (await supabase.from("gastos").insert({ datos }).select("*")).data ?? []
}