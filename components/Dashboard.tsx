import { createClient } from "@/lib/supabase/server";
import DashboardClient from "./DashboardClient";

export default async function Dashboard() {
  const supabase = await createClient();

  const { data: claims } = await supabase.auth.getClaims();
  const sub = claims?.claims.sub;

  const { data: userRecord } = await supabase
    .from("usuarios")
    .select("id")
    .eq("usuarios_id", sub)
    .maybeSingle();

  const userId = userRecord?.id;

  const { data: gastos } = await supabase
    .from("gastos")
    .select("*")
    .eq("usuario_id", userId);

  const { data: ingresos } = await supabase
    .from("ingresos")
    .select("*")
    .eq("usuario_id", userId);

  const { data: deudas } = await supabase
    .from("deudas")
    .select("*")
    .eq("usuario_id", userId);

  const { data: inversiones } = await supabase
    .from("inversiones")
    .select("*")
    .eq("usuario_id", userId);

  return (
    <DashboardClient
      gastos={gastos ?? []}
      ingresos={ingresos ?? []}
      deudas={deudas ?? []}
      inversiones={inversiones ?? []}
    />
  );
}
