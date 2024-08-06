'use client'

import { Button } from "@/components/ui/Button"
import { useCart } from "@/hooks/use-cart-store"
import { ShoppingBag } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

export function NavbarActions(){
    const router=useRouter()
    const cart=useCart()
    const [isMounted,setIsMounted]=React.useState(false)
    React.useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted){
        return null
    }
    return(
        <div className="ml-auto flex items-center gap-x-4">
            <Button
            onClick={()=>router.push('/cart')}
            className="flex items-center rounded-full bg-black px-4 py-2"
            >
                <ShoppingBag className="size-6"/>
                <span className="text-sm font-medium ml-2 text-white">
                    {cart.items.length}
                </span>
            </Button>

        </div>
    )
}