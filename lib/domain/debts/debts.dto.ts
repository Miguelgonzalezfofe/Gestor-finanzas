// src/lib/domain/debts/debts.dto.ts
export interface DebtDO {
  id: string;
  nombre: string;
  acreedor: string;
  montoTotal: number;
  montoPagado: number;
  montoPendiente: number;
  progreso: number;
  fechaVencimiento: string;
  tasaInteres: number;
  esUrgente: boolean;
}

// src/lib/domain/debts/debts.mapper.ts
export class DebtsMapper {
  static toDomain(raw: any): DebtDO {
    const montoPendiente = raw.total_amount - raw.paid_amount;
    const progreso = Math.round((raw.paid_amount / raw.total_amount) * 100);
    
    // Es urgente si vence en menos de 7 días y no está pagada
    const diasParaVencer = Math.ceil((new Date(raw.due_date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

    return {
      id: raw.id,
      nombre: raw.title,
      acreedor: raw.creditor,
      montoTotal: raw.total_amount,
      montoPagado: raw.paid_amount,
      montoPendiente: montoPendiente,
      progreso: progreso,
      fechaVencimiento: raw.due_date,
      tasaInteres: raw.interest_rate,
      esUrgente: diasParaVencer <= 7 && montoPendiente > 0
    };
  }

  static toDomainList(rows: any[]): DebtDO[] {
    return rows.map(this.toDomain);
  }
}