import {create} from 'zustand';
import {persist,createJSONStorage} from 'zustand/middleware';
import {Product} from '../types';
import {toast} from 'sonner'
interface CartStore{
    items:Product[];
    addItem:(data:Product)=>void;
    removeItem:(id:string)=>void;
    removeAll:()=>void;

}


export const useCart=create(
    persist<CartStore>((set,get)=>({
        items:[],
        addItem:(data:Product)=>{
            const currentItems=get().items;
            const existingItem=currentItems.find((item)=>item.id===data.id);
            if(existingItem){
                toast.error('Item already in cart')
            }
            else{
                set({items:[...currentItems,data]})
                toast.success('Item added to cart')
            }
        },
        removeItem:(id:string)=>{
            const currentItems=get().items;
            const newItems=currentItems.filter((item)=>item.id!==id);
            set({items:newItems})
            toast.success('Item removed from cart')
        },
        removeAll:()=>{
            set({items:[]})
            toast.success('Cart cleared')
        }
    }),{
        name:'cart-storage',
        storage:createJSONStorage(()=>localStorage)
    })
)