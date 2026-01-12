import { GastoDTO } from "../dtos/gasto.dto";

export class GastoMapper {
  static toDTO(raw: any): GastoDTO {
    return {
      id: raw.id,
      usuarioId: raw.usuario_id,
      nombre: raw.nombre,
      monto: raw.monto,
      fecha: raw.fecha ?? "",
    };
  }

  static toDTOList(rows: any[]): GastoDTO[] {
    return rows.map(GastoMapper.toDTO);
  }
}
