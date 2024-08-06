'use client'

import { Button } from "@/components/ui/Button"
import { Currency } from "@/components/ui/currency"
import { useCart } from "@/hooks/use-cart-store"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export function Summary(){
    const [loading,setLoading]=useState(false)
    
    const items=useCart((state)=>state.items)
    const total=items.reduce((acc,item)=>acc+Number(item.price),0)
    const removeAll=useCart((state)=>state.removeAll)
    const searchParams=useSearchParams()
    
    useEffect(()=>{
        if(searchParams.get("success")){
            toast.success("Order placed successfully")
            removeAll()
        }
        if(searchParams.get("canceled")){
            toast.error("Something went wrong")
        }
    },[searchParams,removeAll])
    async function onCheckout(){
        try{
            setLoading(true)
            const response=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
                productIds:items.map((item)=>item.id)
            })
            window.location.assign(response.data.url)
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }
    return(
        <div
        className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-4 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-t-gray-200 pt-4">
                    <div className="text-base text-gray-900 font-medium">
                        Order total
                    </div>
                    <Currency value={total} />
                </div>
            </div>
            <Button
            disabled={loading}
            onClick={onCheckout}
             className="rounded-full mt-6 w-fit lg:w-full">Checkout</Button>
        </div>
    )
}