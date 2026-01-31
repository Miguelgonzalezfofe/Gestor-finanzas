import { create } from "zustand";
import { UserService } from "./user.service";
import { JwtPayload } from "@supabase/supabase-js";
import Loading from "@/app/dashboard/loading";
import { UserDTO } from "./user.dto";

interface User {
  email:string,
  full_name:string
}
interface UserStore {
  user: UserDTO | null
  loading:boolean
  getUser: () => Promise<void>
}

export const useUser = create<UserStore>((set,get)=> ({
  user: null,
  loading:false,

async getUser(){
  if(get().user) return 
  set({loading:true})
  const data = await UserService.getUser()
  set({user:data, loading:false})
}
}

)
)