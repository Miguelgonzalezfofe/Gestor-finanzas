import { ExpenseDTO } from "./expenses.dto";

export class ExpenseMapper {
  static toDTO(row:BaseTransactionDTO): ExpenseDTO{
    return {
      id: row.id,
      usuarioId: row.usuario_id,
      nombre: row.nombre,
      monto: row.monto,
      fecha: row.fecha,
    }
  }

  static toDTOList(rows: BaseTransactionDTO[]): ExpenseDTO[]{
    return rows.map((row)=> ExpenseMapper.toDTO(row))
  }
}