import { Product } from '@/types';

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

export async function getProduct(id:string):Promise<Product>{
    const res = await fetch(`${URL}/${id}`);
    const data = await res.json();
    return data;
}