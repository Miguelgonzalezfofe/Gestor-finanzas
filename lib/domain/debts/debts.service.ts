// src/lib/domain/debts/debts.service.ts
import { DebtsMapper } from "./debts.dto";
import { DebtsRepository } from "./debts.repository";

export class DebtsService {
  static async getUserDebts(userId: string) {
    const rows = await DebtsRepository.findByUserId(userId);
    return DebtsMapper.toDomainList(rows);
  }
  static async create(data:any,userId:string){
    await DebtsRepository.create(data,userId)
  }
}