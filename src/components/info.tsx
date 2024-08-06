'use client'
import { Product } from "@/types";
import { Currency } from "./ui/currency";
import { Button } from "./ui/Button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart-store";

interface InfoProps {
    data:Product
}

export function Info({data}:InfoProps){
    const cart=useCart()
    function handleAddToCart(){
        cart.addItem(data)
    }
    return(
        <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
           <div className="mt-3 flex items-end justify-between">
            <p className="text-2xl text-gray-900">
                <Currency value={data.price}/>
            </p>
           </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Size:</h3>
                <div>{data?.size?.name}</div>
            </div>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Color:</h3>
                <div>{data?.color?.name}</div>
                <div style={{backgroundColor:data?.color?.value}} className="size-4 rounded-full border shadow"></div>
            </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button
                onClick={handleAddToCart}
                 className="flex items-center rounded-full">Add to cart <ShoppingCart className="size-6 ml-2"/></Button>
            </div>
        </div>
    )
}