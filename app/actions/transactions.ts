"use server"; // Crucial: Esto indica que todo aquí corre en el servidor

import { TransactionsService } from "@/lib/domain/transactions/transactions.service";
import { InvestmentsService } from "@/lib/domain/investments/investments.service";
import { revalidatePath } from "next/cache";
import { DebtsService } from "@/lib/domain/debts/debts.service";
import { createClient } from "@/lib/supabase/server";

export async function saveMovementAction(formData: any) {
  const supabase = await createClient()
  const userId = (await supabase.auth.getUser()).data.user?.id!
  const { type, ...data } = formData;

  try {
    switch (type) {
      case "ingreso":
      case "gasto":
        await TransactionsService.create(formData,userId);
        break;
      case "inversion":
        await InvestmentsService.create(data,userId);
        break;
      case "deuda":
        await DebtsService.create(data,userId);
        break;
      default:
        console.error("Tipo no reconocido");
    }
    revalidatePath("/dashboard");
    
    return { success: true };
  } catch (error) {
    return { success: false, error: "Error al guardar el movimiento" };
  }
}
