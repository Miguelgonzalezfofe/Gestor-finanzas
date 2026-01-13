import { CreditsMapper } from "./credits.mapper";
import { CreditsRepository } from "./gastos.repository";

export class CreditsService {
  static async getUserCredits(userId:string){
    const rows = await CreditsRepository.findByUserId(userId);
    return CreditsMapper.toDTOList(rows);
  }
}