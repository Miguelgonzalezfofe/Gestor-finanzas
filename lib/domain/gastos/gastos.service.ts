import { GastoRepository } from "./gastos.repository";
import { GastoMapper } from "./gastos.mapper";

export class GastoService {
  static async getUserExpenses(userId: string) {
    const rows = await GastoRepository.findByUserId(userId);
    return GastoMapper.toDTOList(rows);
  }
}
