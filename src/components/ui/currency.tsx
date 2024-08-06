'use client'
import { formatPrice } from "@/lib/format-price";
import { useEffect, useState } from "react";

export function Currency({ value }: { value: number }) {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return(
        <div>
            <span className="font-semibold text-lg">
                {formatPrice(value)}
            </span>
        </div>
    )
}