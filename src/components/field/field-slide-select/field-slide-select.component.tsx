import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"
import { Label } from "@/components/ui/label"

const fieldSlideSelectVariants = cva(
    "flex items-center justify-center flex-col space-y-2 rounded-lg cursor-pointer",
    {
        variants: {
            variant: {
                default: "h-24 min-w-24 md:h-26 md:min-w-28 bg-slate-50 hover:bg-slate-100",
                outline: "h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 hover:bg-slate-50",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

const fieldSlideSelectItemVariants = cva(
    "",
    {
        variants: {
            variant: {
                default: "w-8 h-8 md:w-10 md:h-10",
                outline: "w-6 h-6 md:w-8 md:h-8",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export type TFieldSlideSelectItem = {
    name: string;
    value: string;
    image: StaticImageData;
}

export interface FieldSlideSelectProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldSlideSelectVariants> {
    data: TFieldSlideSelectItem[]
}

function FieldSlideSelect({ className, variant, data, ...props }: FieldSlideSelectProps) {
    return (
        <div className="flex flex-row overflow-hidden overflow-x-auto space-x-4 no-scrollbar w-full">
            {data.map(({ name, value, image }) => (
                <div className={cn(fieldSlideSelectVariants({ variant }), className)} {...props} key={value}>
                    <Image
                        src={image}
                        className={cn(fieldSlideSelectItemVariants({ variant }), className)}
                        alt={`'Picture ${name}`}
                    />
                    <Label className="text-xs">{name}</Label>
                </div>))}
        </div>
    )
}

export { FieldSlideSelect, fieldSlideSelectVariants }
