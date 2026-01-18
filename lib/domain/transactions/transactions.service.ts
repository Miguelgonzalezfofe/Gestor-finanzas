// src/core/transactions/transactions.service.ts
import { ReactJsxRuntime } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints";
import { TransactionsMapper } from "./transactions.mapper";
import { TransactionsRepository } from "./transactions.repository";

export class TransactionsService {
  static async getHistory(userId: string) {
    const rows = await TransactionsRepository.findAll(userId);
    return TransactionsMapper.toDomainList(rows);
  }
  static async getIncomeHistory(userId: string) {
    const rows = await TransactionsRepository.findByUserIdAndType(userId, 'ingreso');
    return TransactionsMapper.toDomainList(rows);
  }
  static async create(data:any,userId:string){
    return await TransactionsRepository.create(data,userId)
  }
}