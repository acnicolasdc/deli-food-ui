import { Skeleton } from "@/components/ui/skeleton";

export interface ITagToggleListSelectLoadingIndicatorProps {
    children: React.ReactNode;
    isLoading?: boolean;
}

export function TagToggleListSelectLoadingIndicator({ children, isLoading }: ITagToggleListSelectLoadingIndicatorProps) {
    if (isLoading) {
        return (
            <div className="flex flex-row gap-2">
                <Skeleton className="w-16 h-8" />
                <Skeleton className="w-16 h-8" />
                <Skeleton className="w-16 h-8" />
                <Skeleton className="w-16 h-8" />
                <Skeleton className="w-16 h-8" />
            </div>
        )
    }
    return (children)
}
