"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CurrencyInput } from '@/components/currency-input';
import { cn } from "@/lib/utils";
import { useState } from "react";
import { saveMovementAction } from "@/app/actions/transactions";

type TransactionType = 'ingreso' | 'gasto' /* | 'inversion' | 'deuda' */;

export const NewTransactionModal = ({ isOpen, onClose }: any) => {
  

  const [type, setType] = useState<TransactionType>('gasto');
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState(""); 
  const [category,setCategory] = useState("")
  

  
  const handleSave = () => {
    const formData = {
      type,
      amount: parseFloat(amount),
      description,
      category,
      date: new Date().toISOString()
    };
    saveMovementAction(formData)
    setType("gasto")
    setAmount("")
    setDescription("")
    setCategory("")
    onClose();

  }

  // Configuración de estilos por tipo
  const typeConfigs = {
    ingreso: { label: 'Ingreso', color: 'text-success', variant: 'success', icon: '💰' },
    gasto: { label: 'Gasto', color: 'text-destructive', variant: 'destructive', icon: '💸' },
   /*  inversion: { label: 'Inversión', color: 'text-blue-500', variant: 'default', icon: '📈' }, // Puedes crear variante 'info'
    deuda: { label: 'Deuda', color: 'text-orange-500', variant: 'secondary', icon: '💳' }, */
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px] rounded-[2rem] p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Nuevo Registro</DialogTitle>
          <DialogDescription>Clasifica tu movimiento correctamente.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {/* SELECTOR DE 4 TIPOS */}
          <div className="space-y-3">
            <Label className="text-sm font-bold uppercase text-muted-foreground ml-1">Tipo de Movimiento</Label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(typeConfigs) as TransactionType[]).map((t) => (
                <Button
                  key={t}
                  type="button"
                  variant={type === t ? (typeConfigs[t].variant as any) : "outline"}
                  className={cn(
                    "rounded-xl h-12 flex justify-start gap-2 border-2",
                    type === t ? "border-transparent" : "border-muted"
                  )}
                  onClick={() => setType(t)}
                >
                  <span>{typeConfigs[t].icon}</span>
                  {typeConfigs[t].label}
                </Button>
              ))}
            </div>
          </div>

          <CurrencyInput
            label="Monto"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={cn("text-xl font-bold", typeConfigs[type].color)}
          />

          <div className="space-y-2">
            <Label className="text-sm font-semibold">Descripción</Label>
            <Input 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ej. Pago de Freelance" 
              className="rounded-xl h-12 bg-muted/30" 
            />
          </div>
           {/* Campo de Categoría (podría ser un Select más adelante) */}
          <div className="space-y-2">
            <Label htmlFor="category" className="text-sm font-semibold">Categoría</Label>
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Ej. Comida, Transporte, Salario"
              className="rounded-xl h-12 bg-muted/30"
            />
          </div>
        </div>

        <DialogFooter className="sm:justify-between gap-2">
          <Button variant="ghost" onClick={onClose} className="rounded-xl">Cancelar</Button>
          <Button 
            onClick={handleSave} 
            className="rounded-xl px-8 shadow-lg transition-all"
            variant={typeConfigs[type].variant as any}
          >
            Guardar {typeConfigs[type].label}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};