import { Product } from '@/types';
import qs from 'query-string';
const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query{
    colorId?:string;
    sizeId?:string;
    categoryId?:string;
    isFeatured?:boolean;
}
export async function getProducts(query:Query):Promise<Product[]>{
    const url=qs.stringifyUrl({url:URL,query:{
        colorId:query.colorId,
        sizeId:query.sizeId,
        categoryId:query.categoryId,
        isFeatured:query.isFeatured
    }});
    const res = await fetch(url);
    const data = await res.json();
    return data;
}