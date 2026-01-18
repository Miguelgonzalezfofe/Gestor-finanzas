// src/lib/domain/investments/investments.service.ts
import { InvestmentsRepository } from "./investments.repository";
import { InvestmentsMapper } from "./investments.mapper";

export class InvestmentsService {
  static async getUserInvestments(userId: string) {
    const rows = await InvestmentsRepository.findByUserId(userId);
    return InvestmentsMapper.toDomainList(rows);
  }
  static async create(data:any,userId:string){
    await InvestmentsRepository.create(data,userId)
  }
}