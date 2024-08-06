import { Currency } from "@/components/ui/currency"
import { IconButton } from "@/components/ui/icon-button"
import { useCart } from "@/hooks/use-cart-store"
import { Product } from "@/types"
import { X } from "lucide-react"
import Image from "next/image"


interface CartItemProps {
    data:Product
}

export function CartItem({data}:CartItemProps){
    const cart=useCart();
    function handleRemove(){
        cart.removeItem(data.id)
    }
    return (
        <li className="flex py-6 border-b">
            <div className="size-24 relative rounded-md overflow-hidden sm:size-48">
                <Image
                    src={data.images[0].url}
                    alt={data.name}
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton
                    onClick={handleRemove}
                     icon={<X className="size-4"/>} className="text-neutral-500"/>
                </div>
                <div className="relative pr-9  sm:grid sm:grid-cols-2 sm:pr-0 sm:gap-x-6">
                    <div className="flex justify-between">
                        <p className="text-xl text-black font-bold">{data.name}</p>
                    </div>
                    <div className="text-sm flex mt-1">
                        <p className="text-gray-500">{data.color.name}</p>
                        <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size.name}</p>
                    </div>
                    <Currency value={data.price} />
                </div>
            </div>
        </li>
    )
}