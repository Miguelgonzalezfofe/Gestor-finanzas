import { ExpenseMapper } from "./expenses.mapper";
import { ExpensesRepository } from "./expenses.repository";

export class ExpensesService {
  static async getUserExpenses(userId: string) {
    const rows = await ExpensesRepository.findByUserId(userId);
    return ExpenseMapper.toDTOList(rows);
  }
  static async SetInsert(data:any){
    const rows = await ExpensesRepository.SendData(data)
    
  }
}
