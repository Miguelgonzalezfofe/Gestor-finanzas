import { DebtDO } from "../debts/debts.dto";
import { InvestmentDTO } from "../investments/investments.dto";
import { TransactionDO } from "../transactions/transactions.dto";

// src/lib/domain/dashboard/dashboard.service.ts
export class DashboardService {
  static calculateMetrics(transactions: TransactionDO[], investments: InvestmentDTO[], debts: DebtDO[]) {
    const totalIngresos = transactions
      .filter(t => t.tipo === 'ingreso')
      .reduce((acc, curr) => acc + curr.monto, 0);
    const totalGastos = transactions
      .filter(t => t.tipo === 'gasto')
      .reduce((acc, curr) => acc + curr.monto, 0);

    const totalInvertido = investments.reduce((acc, curr) => acc + curr.montoInvertido, 0);
    
    const deudaPendiente = debts.reduce((acc, curr) => acc + (curr.montoTotal - curr.montoPagado), 0);

    return {
      balance: totalIngresos - totalGastos,
      ingresos: totalIngresos,
      gastos: totalGastos,
      inversiones: totalInvertido,
      deudas: deudaPendiente,
      ahorroPorcentaje: totalIngresos > 0 ? Math.round(((totalIngresos - totalGastos) / totalIngresos) * 100) : 0
    };
  }
}