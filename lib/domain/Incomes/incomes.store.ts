import { create } from "zustand";
import { IncomeDTO } from "./Incomes.dto";
import { IncomesService } from "./Incomes.service";

interface IncomesStore {
  incomes: IncomeDTO[]
  loading: boolean,
  uploadIncomes: (userId:string)=> Promise<void>
}
export const useIncomesStore = create<IncomesStore>((set,get)=>({
  incomes:[],
  loading:false,

  async uploadIncomes(userId:string){
    if(get().incomes.length > 0) return 

    set({loading:true})

    const data = await IncomesService.getUserIncomes(userId)

    set({
      incomes:data,
      loading:false
    })
  }
}))