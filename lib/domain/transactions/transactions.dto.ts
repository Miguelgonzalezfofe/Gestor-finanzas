// src/core/transactions/transactions.dto.ts
export interface TransactionDO {
  id: string;
  monto: number;
  descripcion: string;
  tipo: 'ingreso' | 'gasto';
  metodoPago: string;
  fecha: string;
  categoria: {
    nombre: string;
    icono: string;
  } | null;
}