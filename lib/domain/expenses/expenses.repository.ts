import { getExpensesDB, setExpenseDb } from "./actions";

export class ExpensesRepository {
  static async findByUserId(userId: string): Promise<BaseTransactionDTO[]> {
    return getExpensesDB(userId)
  }
  static async SendData(datos: any) {
    return setExpenseDb(datos)
  }
}
