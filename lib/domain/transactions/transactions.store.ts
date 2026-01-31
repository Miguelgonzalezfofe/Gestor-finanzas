import { create } from "zustand";
import { TransactionDO } from "./transactions.dto";
import { InvestmentDTO } from "../investments/investments.dto";
import { DebtDO } from "../debts/debts.dto";
import { TransactionsService } from "./transactions.service";
import { InvestmentsService } from "../investments/investments.service";
import { DebtsService } from "../debts/debts.service";

interface TypeUseTransactions {
  transactions:TransactionDO[] | null,
  investments:InvestmentDTO[] | null,
  debts:DebtDO[] | null,
  loading:boolean,
  upload:(userId:string)=> void,
  uploadTransactions:(userId:string)=> void
  uploadInvestments:(userId:string)=> void
  uploadDebts:(userId:string)=> void


}
export const useTransactions = create<TypeUseTransactions>((set,get)=>({
transactions:null,
investments:null,
debts:null,
loading:false,

async uploadTransactions(userId){
  if(get().transactions) return 
    set({loading:true})
    const data = await TransactionsService.getHistory(userId)
    set({transactions:data,loading:false})
},
async uploadInvestments(userId){
  if(get().investments)return
    set({loading:true})
    const data = await InvestmentsService.getUserInvestments(userId)
    set({investments:data,loading:false})
},
async uploadDebts(userId){
  if(get().debts) return
    set({loading:true})
    const data = await DebtsService.getUserDebts(userId)
    set({debts:data,loading:false})
},

async upload(userId){
  await Promise.all([
    get().uploadTransactions(userId),
    get().uploadInvestments(userId),
    get().uploadDebts(userId)
  ])
}
}))
