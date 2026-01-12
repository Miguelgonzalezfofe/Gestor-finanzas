import { IncomeDTO } from "./Incomes.dto";

export class IncomesMapper {
  static toDTO(row: any): IncomeDTO {
    return {
      id: row.id,
      usuarioId: row.usuario_id,
      nombre: row.nombre,
      monto: row.monto,
      fecha: row.fecha ?? "",
    };
  }
  static toDTOList(rows: any[]): IncomeDTO[] {
    return rows.map((row) => IncomesMapper.toDTO(row));
  }
}
