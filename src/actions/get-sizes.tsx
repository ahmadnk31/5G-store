import { Size} from '@/types';

const URL=`${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export async function getSizes():Promise<Size[]>{
    const res = await fetch(URL);
    const data = await res.json();
    return data;
}