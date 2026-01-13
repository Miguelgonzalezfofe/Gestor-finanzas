import { InvestmentDTO } from "./investments.dto";

export class InvestmentsMapper {
  static toDO(row: BaseTransactionDTO): InvestmentDTO {
    return {
      id: row.id,
      nombre: row.nombre,
      monto: row.monto,
      usuarioId: row.usuario_id,
      fecha: row.fecha,
    };
  }
  static toDoList(rows: BaseTransactionDTO[]): InvestmentDTO[] {
    return rows.map((row) => InvestmentsMapper.toDO(row));
  }
}
