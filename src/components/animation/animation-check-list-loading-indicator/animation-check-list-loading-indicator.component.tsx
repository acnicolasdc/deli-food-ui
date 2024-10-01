import { Skeleton } from "@/components/ui/skeleton";

export interface IAnimationCheckListLoadingIndicatorProps {
    children: React.ReactNode;
    isLoading?: boolean;
}

export function AnimationCheckListLoadingIndicator({ children, isLoading }: IAnimationCheckListLoadingIndicatorProps) {
    if (isLoading) {
        return (
            <div className="flex flex-col gap-2">
                <Skeleton className="w-full h-6" />
                <Skeleton className="w-full h-6" />
                <Skeleton className="w-full h-6" />
            </div>
        )
    }
    return (children)
}
