import { Category } from '@/types';

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategories():Promise<Category[]>{
    const res = await fetch(URL,{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
        }
    });
    console.log(res);
    if(!res.ok){
        throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
}