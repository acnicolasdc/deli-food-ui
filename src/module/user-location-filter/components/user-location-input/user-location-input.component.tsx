import * as React from "react";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";


export function UserLocationInput({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-row bg-slate-100 px-1 py-2 rounded-full flex-1 ", className)} {...props}>
            <div className='flex flex-1 justify-start items-center text-left'>
                <MagnifyingGlassIcon className='w-6 h-6 ml-2 md:ml-4 mr-4' />
                <div>
                    <p className='text-sm font-medium'>A donde quieres ir ?</p>
                    <p className='text-xs text-muted-foreground'>San Antonio • Pance • Granada </p>
                </div>
            </div>
        </div>
    )
}
