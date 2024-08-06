import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
    icon: React.ReactElement;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}


export function IconButton({ icon, className, onClick }: IconButtonProps) {
    return (
        <button className={cn('rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition',className)} onClick={onClick}>
            {icon}
        </button>
    );
}