"use client"

import { useTransactions } from "@/lib/domain/transactions/transactions.store"
import { useUser } from "@/lib/domain/user/user.store"
import { useEffect } from "react"

function page() {
  const {getUser,user} = useUser()
  const {transactions,uploadTransactions} = useTransactions()

  useEffect(()=>{
    getUser()
  },[])
  useEffect(()=>{
    if(user){
      uploadTransactions(user.id)
    }
  },[user])
  console.log("user",user)
  console.log("transacciones",transactions)
  return (
    <div>page</div>
  )
}

export default page