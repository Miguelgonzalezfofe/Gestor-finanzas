// src/core/transactions/transactions.mapper.ts
import { TransactionDO } from "./transactions.dto";

export class TransactionsMapper {
  static toDomain(row: any): TransactionDO {
    return {
      id: row.id,
      monto: Math.abs(Number(row.amount)), 
      descripcion: row.description,
      tipo: row.type,
      metodoPago: row.payment_method,
      fecha: row.created_at,
      categoria: row.categories ? {
        nombre: row.categories.name,
        icono: row.categories.icon
      } : null
    };
  }

  static toDomainList(rows: any[]): TransactionDO[] {
    return rows.map(row => this.toDomain(row));
  }
}