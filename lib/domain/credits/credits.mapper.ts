import { CreditDTO } from "./credits.dto";

export class CreditsMapper {
  static toDTO(row:BaseTransactionDTO): CreditDTO {
    return {
      id: row.id,
      usuarioId: row.usuario_id,
      nombre: row.nombre,
      monto: row.monto,
      fecha: row.fecha,
    }
  }
  static toDTOList(rows: BaseTransactionDTO[]){
    return rows.map((row)=> CreditsMapper.toDTO(row))
  }
}