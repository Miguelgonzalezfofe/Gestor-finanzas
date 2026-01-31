// src/core/transactions/transactions.repository.ts

import { createTransactions, getAll, getTypeTransactions } from "./actions";

export class TransactionsRepository {
  static async findAll(userId: string) {
    return getAll(userId)
  }
  static async findByUserIdAndType(userId: string, type: 'ingreso' | 'gasto') {
    return getTypeTransactions(userId,type)
  }
  static async create(data: {
    user_id: string;
    amount: number;
    description: string;
    type: string;
    category_id?: string;
    payment_method?: string;
  },userId:string) {
    return createTransactions(data,userId)
  }
  
}