import { cn } from "@/lib/utils"
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button=React.forwardRef<HTMLButtonElement,ButtonProps>(({children,className,disabled,...props},ref)=>{
    return(
        <button
        disabled={disabled}
        className={cn('w-auto px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed border-transparent bg-black rounded-md text-white font-bold hover:opacity-75 transition',className)}
        {...props}
        ref={ref}
        >
            {children}
        </button>
    )
})