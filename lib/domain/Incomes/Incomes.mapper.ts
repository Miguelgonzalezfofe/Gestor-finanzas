import { IncomeDTO } from "./Incomes.dto";

export class IncomesMapper {
  static toDTO(row: BaseTransactionDTO): IncomeDTO {
    return {
      id: row.id,
      usuarioId: row.usuario_id,
      nombre: row.nombre,
      monto: row.monto,
      fecha: row.fecha ?? "",
    };
  }
  static toDTOList(rows: BaseTransactionDTO[]): IncomeDTO[] {
    return rows.map((row) => IncomesMapper.toDTO(row));
  }
}
