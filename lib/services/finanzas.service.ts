import { GastosRepository } from "../repositories/gastos.repository";
import { GastoMapper } from "../mappers/gasto.mapper";

export class FinanzasService {
  static async getGastosUsuario(userId: string) {
    const rows = await GastosRepository.findByUserId(userId);
    return GastoMapper.toDTOList(rows);
  }

  static calcularTotal(list: { monto: number }[]) {
    return list.reduce((acc, item) => acc + item.monto, 0);
  }
}
