'use client'

import { Product } from "@/types";
import Image from "next/image";
import { IconButton } from "@/components/ui/icon-button";
import { ExpandIcon, ShoppingCart } from "lucide-react";
import { Currency } from "@/components/ui/currency";
import { MouseEventHandler, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePreviewModal } from "@/hooks/use-preview-modal";
import { useCart } from "@/hooks/use-cart-store";

interface ProductCardProps{
    data:Product;
}

export function ProductCard({data}:ProductCardProps){
    const previewModal=usePreviewModal()
    const cart=useCart()
    const router=useRouter()
    function onClick(){
        router.push(`/product/${data?.id}`)
    }
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null
    }
    
    const onPreview:MouseEventHandler<HTMLButtonElement>=(e)=>{
        e.stopPropagation()
        previewModal.onOpen(data)
    }
    const onAddToCart:MouseEventHandler<HTMLButtonElement>=(e)=>{
        e.stopPropagation()
        cart.addItem(data)
    }


    return(
        <div onClick={onClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* images and actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                src={data?.images[0]?.url}
                alt={data.name}
                fill
                className="object-contain"
                />
                <div className="opacity-0 group-hover:opacity-100 absolute w-full px-6 bottom-5 transition">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                        icon={<ExpandIcon className="size-4 text-gray-600"/>}
                        onClick={onPreview}
                        />
                        <IconButton
                        icon={<ShoppingCart className="size-4 text-gray-600"/>}
                        onClick={onAddToCart}
                        />
                    </div>
                </div>
            </div>
            {/* description */}
            <div>
                <p className="font-semibold text-lg">{data.name}</p>
                <p className="text-gray-500 text-sm">{data?.category.name}</p>
            </div>
            {/* currency */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price}/>
            </div>
        </div>
    )
}