'use client'
import qs from 'query-string';
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface FilterProps {
    valueKey: string;
    name: string;
    data: (Size|Color)[];
}

export function Filter({valueKey, name, data}:FilterProps){
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    const params=useSearchParams();
    const router=useRouter();
    const selectedValue=params.get(valueKey);
    function onClick(id:string){
        const current=qs.parse(params.toString());
        const query={
            ...current,
            [valueKey]:id
        }
        if(current[valueKey]===id){
            query[valueKey]=null;
        }
        const url=qs.stringifyUrl({url:window.location.href,query},{skipNull:true});
        router.push(url);
    }
    if (!isMounted) {
        return null
    }
    return (
        <div className="mb-8">
            <h3 className='text-lg font-semibold'>{name}</h3>
            <hr className='my-4'/>
            <div className='flex flex-wrap gap-2'>
                {data.map((item)=>(
                    <div key={item.id} className='flex items-center'>
                        <Button
                        onClick={()=>onClick(item.id)}
                         className={cn('rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',selectedValue===item.id&&'bg-black text-white')}>
                            {item.name}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}