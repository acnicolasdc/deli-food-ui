import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Image, { StaticImageData } from "next/image"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"
import { AnimationFadeIn } from "@/components/animation/animation-fade-in"

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
    "w-6 h-6",
    {
        variants: {
            variant: {
                default: "md:w-8 md:h-8",
                outline: "md:w-8 md:h-8",
                selected: "md:w-8 md:h-8",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const fieldSlideSelectGridVariants = cva(
    "w-full",
    {
        variants: {
            variant: {
                slide: "flex flex-row overflow-hidden overflow-x-auto space-x-4 no-scrollbar",
                grid: "grid grid-cols-3 md:grid-cols-4 gap-2",
            },
        },
        defaultVariants: {
            variant: "slide",
        },
    }
);

export enum EFieldSlideSelectType {
    slide = 'slide',
    grid = 'grid'
}

export type TFieldSlideSelectItem = {
    name: string;
    value: string | number;
    image: StaticImageData | string;
}

export interface IFieldSlideSelectProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldSlideSelectVariants> {
    data: TFieldSlideSelectItem[]
    type?: EFieldSlideSelectType;
    value?: string | null | number;
    onValueChange?: (value?: { name: string, value: string | number }) => void
}

export interface IFieldSlideSelectLoadingIndicatorProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldSlideSelectVariants> {
    isLoading?: boolean
    type?: EFieldSlideSelectType;
    children: React.ReactNode;
}

function FieldSlideSelectLoadingIndicator({ isLoading, className, type = EFieldSlideSelectType.slide, children }: IFieldSlideSelectLoadingIndicatorProps) {
    if (isLoading) {
        return (<div className={cn(fieldSlideSelectGridVariants({ variant: type }), className)}>
            <Skeleton className="h-20 min-w-24 md:h-20 md:min-w-24" />
            <Skeleton className="h-20 min-w-24 md:h-20 md:min-w-24" />
            <Skeleton className="h-20 min-w-24 md:h-20 md:min-w-24" />
            <Skeleton className="h-20 min-w-24 md:h-20 md:min-w-24" />
            <Skeleton className="h-20 min-w-24 md:h-20 md:min-w-24" />
            <Skeleton className="h-20 min-w-24 md:h-20 md:min-w-24" />
            <Skeleton className="h-20 min-w-24 md:h-20 md:min-w-24" />
            <Skeleton className="h-20 min-w-24 md:h-20 md:min-w-24" />
            <Skeleton className="h-20 min-w-24 md:h-20 md:min-w-24" />
            <Skeleton className="h-20 min-w-24 md:h-20 md:min-w-24" />
            <Skeleton className="h-20 min-w-24 md:h-20 md:min-w-24" />
            <Skeleton className="h-20 min-w-24 md:h-20 md:min-w-24" />
        </div>)
    }
    return children;
}

function FieldSlideSelect({ className, type = EFieldSlideSelectType.slide, variant, data, onValueChange, value: controlValue, ...props }: IFieldSlideSelectProps) {
    const handleOnClickItem = ({ name, value }: Omit<TFieldSlideSelectItem, 'image'>) => {
        const itemValue = controlValue === value ? undefined : { name, value };
        onValueChange?.(itemValue)
    }
    return (
        <AnimationFadeIn className={cn(fieldSlideSelectGridVariants({ variant: type }), className)} code={type}>
            {data.map(({ name, value, image }) => {
                const variantStyle = value === controlValue ? 'selected' : variant;
                return (
                    <div className={cn(fieldSlideSelectVariants({ variant: variantStyle }), className)} {...props} key={value} onClick={() => handleOnClickItem({ name, value })}>
                        <Image
                            src={image}
                            width={60}
                            height={60}
                            className={cn(fieldSlideSelectItemVariants({ variant }), className)}
                            alt={`'Picture ${name}`}
                        />
                        <Label className="text-xs">{name}</Label>
                    </div>)
            })}
        </AnimationFadeIn>
    )
}

export { FieldSlideSelect, fieldSlideSelectVariants, FieldSlideSelectLoadingIndicator }
