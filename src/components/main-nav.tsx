'use client'

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation"
import React from "react";

interface MainNavProps {
    data:Category[]
}

export function MainNav({data}:MainNavProps){
    const [mounted,setMounted]=React.useState(false);
    React.useEffect(()=>{
        setMounted(true)
    },[])
    
    
    const pathname=usePathname();
    const routes=data.map((route)=>({
        
            href:`/category/${route.id}`,
            label:route.name,
            active:pathname.includes(`/category/${route.id}`),
        })
    )
    if(!mounted){
        return null
    }
    return(
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {routes.map((route)=>(
                <Link key={route.href} href={route.href}
                className={cn('text-sm font-medium hover:text-black transition-colors',route.active?'text-black':'text-neutral-500')}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}