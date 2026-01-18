"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { createClient } from "@/lib/supabase/client";
import toast from "react-hot-toast";

// SCHEMA ZOD
const formSchema = z.object({
  monto: z
    .string()
    .min(1, "El monto es obligatorio")
    .refine((value) => !isNaN(Number(value)), "Debe ser un número válido"),
  nombre: z.string().min(1, "La descripción es obligatoria"),
  fecha: z.string().min(1, "La fecha es obligatoria"),
});

type GastoForm = z.infer<typeof formSchema>;

export default function PageGasto() {
  const supabase = createClient();

  const form = useForm<GastoForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      monto: "",
      nombre: "",
      fecha: "",
    },
  });

  const onSubmit = async (values: GastoForm) => {
    try {
      const { data: claims } = await supabase.auth.getUser();
      const userId = claims?.user?.id;

      const { data: usuario } = await supabase
        .from("usuarios")
        .select("id")
        .eq("usuarios_id", userId)
        .maybeSingle();

      await supabase.from("gastos").insert({
        monto: Number(values.monto),
        nombre: values.nombre,
        fecha: values.fecha,
        usuario_id: usuario?.id,
      });

      toast.success("Gasto agregado");

      form.reset({
        monto: "",
        nombre: "",
        fecha: "",
      });
    } catch (err) {
      toast.error("Error al guardar el gasto");
    }
  };

  return (
    <div className="p-5 max-w-xl  mx-auto">
      <Card className="p-5 w-96">
        <CardHeader>
          <CardTitle className="text-2xl">Agregar Gasto</CardTitle>
        </CardHeader>
        <CardContent>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              {/* MONTO */}
              <FormField
                control={form.control}
                name="monto"
                render={({ field }) => (
                  <FormItem>
                    <Label>Monto</Label>
                    <FormControl>
                      <Input
                        type="number"
                        inputMode="decimal"
                        placeholder="0.00"
                        className="text-lg py-3"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* NOMBRE */}
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <Label>Descripción</Label>
                    <FormControl>
                      <Input
                        placeholder="Ej: Mercado, GTC..."
                        className="text-lg py-3"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* FECHA */}
              <FormField
                control={form.control}
                name="fecha"
                render={({ field }) => (
                  <FormItem>
                    <Label>Fecha</Label>
                    <FormControl>
                      <Input type="date" className="py-3" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full py-6 text-lg">
                Guardar gasto
              </Button>
            </form>
          </Form>
          
        </CardContent>
      </Card>
    </div>
  );
}
