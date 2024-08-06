'use client'


import React from "react";
import { Container } from "@/components/ui/container";
import { useCart } from "@/hooks/use-cart-store";
import { CartItem } from "./_components/cart-item";
import { Summary } from "./_components/summary";
export default function CartPage() {

    // const [isMounted,setIsMounted]=React.useState(false)
    // React.useEffect(()=>{
    //     setIsMounted(true)
    // },[])
    // if(!isMounted){
    //     return null
    // }
    const cart=useCart()
    return(
        <div className="bg-white">
            <Container>
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-black">Shopping cart</h1>
                <div className="mt-12 lg:grid  lg:grid-cols-12 lg:items-start gap-x-12">
                    <div className="lg:col-span-8">
                        {cart.items.length===0 && <p className="text-neutral-500">No item added to the cart</p>}
                        <ul>
                            {cart.items.map((item)=>(
                                <CartItem
                                    key={item.id}
                                    data={item}
                                />
                            ))}
                        </ul>
                    </div>
                    {cart.items.length>0 && <Summary />}
                </div>
            </div>
            </Container>
        </div>
    )
}