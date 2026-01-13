import { InvestmentsMapper } from "./investments.mapper";
import { InvestmentsRepository } from "./investments.repository";

export class InvestmentsService{
  static async getUserInvestments(userId:string){
    const rows = await InvestmentsRepository.findByUserId(userId)
    return InvestmentsMapper.toDoList(rows)
  }
}