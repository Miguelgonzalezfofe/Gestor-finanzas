"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import toast from "react-hot-toast";

export default function PageGasto() {
  const [monto, setMonto] = useState("");
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0]);

  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!monto || !nombre) {
      return toast.error( "Completa todos los campos");
    }

    const { data: claims } = await supabase.auth.getUser();
    const userId = claims?.user?.id;

    // obtener id local en tu tabla usuarios
    const { data: usuario } = await supabase
      .from("usuarios")
      .select("id")
      .eq("usuarios_id", userId)
      .maybeSingle();

    await supabase.from("gastos").insert({
      monto: Number(monto),
      nombre,
      fecha,
      usuario_id: usuario?.id,
    });

    toast.success( "Gasto agregado" );
    // router.push("/protected");

    setMonto("")
    setNombre("")
    setFecha(new Date().toISOString().split("T")[0])
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      <Card className="p-5">
        <CardHeader>
          <CardTitle className="text-2xl">Agregar Gasto</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>

            <div>
              <Label>Monto</Label>
              <Input
                type="number"
                inputMode="decimal"
                placeholder="0.00"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
                className="text-lg py-3"
              />
            </div>

            <div>
              <Label>Descripción</Label>
              <Input
                placeholder="Ej: Mercado, GTC..."
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="text-lg py-3"
              />
            </div>

            <div>
              <Label>Fecha</Label>
              <Input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                className="py-3"
              />
            </div>

            <Button type="submit" className="w-full py-6 text-lg">
              Guardar gasto
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
