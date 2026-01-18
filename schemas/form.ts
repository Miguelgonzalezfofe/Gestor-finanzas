import { z } from "zod";

export const form = z.object({
  monto: z
    .string()
    .min(1, "El monto es obligatorio")
    .refine((value) => !isNaN(Number(value)), "Debe ser un número válido"),
  nombre: z.string().min(1, "La descripción es obligatoria"),
  fecha: z.string().min(1, "La fecha es obligatoria"),
});

export type GastoForm = z.infer<typeof form>;
