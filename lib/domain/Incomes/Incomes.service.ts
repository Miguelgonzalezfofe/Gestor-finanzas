import { IncomesMapper } from "./Incomes.mapper";
import { IncomesRepository } from "./Incomes.repository";


export class IncomesService{
  static async getUserIncomes(userId:string){
    const rows = await IncomesRepository.findByUserId(userId);
    return IncomesMapper.toDTOList(rows);
  }
}