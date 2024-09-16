import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"
import { Label } from "@/components/ui/label"

const fieldSlideSelectVariants = cva(
    "flex items-center justify-center flex-col space-y-2 rounded-lg cursor-pointer h-20 min-w-24 md:h-20 md:min-w-24",
    {
        variants: {
            variant: {
                default: "bg-slate-50 hover:bg-slate-100",
                outline: "border border-slate-200 hover:bg-slate-50",
                selected: "border border-blue-400 border-2 bg-blue-50 hover:bg-blue-100 font-medium text-blue-400"
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
                default: "w-6 h-6 md:w-8 md:h-8",
                outline: "w-6 h-6 md:w-8 md:h-8",
                selected: "w-6 h-6 md:w-8 md:h-8",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export enum EFieldSlideSelectType {
    slide = 'slide',
    grid = 'grid'
}

export type TFieldSlideSelectItem = {
    name: string;
    value: string;
    image: StaticImageData;
}

export interface FieldSlideSelectProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldSlideSelectVariants> {
    data: TFieldSlideSelectItem[]
    type?: EFieldSlideSelectType;
    value?: string | null;
    onValueChange?: (value?: { label: string, id: string }) => void
}

function FieldSlideSelect({ className, type = EFieldSlideSelectType.slide, variant, data, onValueChange, value: controlValue, ...props }: FieldSlideSelectProps) {
    const style = type === EFieldSlideSelectType.slide ? 'flex flex-row overflow-hidden overflow-x-auto space-x-4 no-scrollbar w-full' : 'w-full grid grid-cols-3 md:grid-cols-4 gap-2';
    const handleOnClickItem = ({ name, value }: Omit<TFieldSlideSelectItem, 'image'>) => {
        const itemValue = controlValue === value ? undefined : { label: name, id: value };
        onValueChange?.(itemValue)
    }
    return (
        <div className={style}>
            {data.map(({ name, value, image }) => {
                const variantStyle = value === controlValue ? fieldSlideSelectVariants({ variant: 'selected' }) : fieldSlideSelectVariants({ variant });
                return (
                    <div className={cn(variantStyle, className)} {...props} key={value} onClick={() => handleOnClickItem({ name, value })}>
                        <Image
                            src={image}
                            className={cn(fieldSlideSelectItemVariants({ variant }), className)}
                            alt={`'Picture ${name}`}
                        />
                        <Label className="text-xs">{name}</Label>
                    </div>)
            })}
        </div>
    )
}

export { FieldSlideSelect, fieldSlideSelectVariants }
