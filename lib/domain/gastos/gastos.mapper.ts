import { GastoDTO } from "./gastos.dto";

export class GastoMapper {
  static toDTO(row: any): GastoDTO {
    return {
      id: row.id,
      usuarioId: row.usuario_id,
      nombre: row.nombre,
      monto: row.monto,
      fecha: row.fecha ?? "",
    };
  }

  static toDTOList(rows: any[]): GastoDTO[] {
    return rows.map((row) => GastoMapper.toDTO(row));
  }
}
