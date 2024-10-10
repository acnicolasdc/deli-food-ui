import { Skeleton } from '@/components/ui/skeleton';

export interface ICustomerCardListLoadingIndicatorProps
    extends React.HTMLAttributes<HTMLDivElement> {
    isLoading?: boolean
    children: React.ReactNode;
}

export function CustomerCardListLoadingIndicator({ isLoading, children }: ICustomerCardListLoadingIndicatorProps) {
    if (isLoading) {
        return (
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 no-scrollbar px-4 md:px-8'>
                <Skeleton className='relative flex flex-col gap-2 cursor-pointer h-[150px] md:h-[250px] rounded-2xl' />
                <Skeleton className='relative flex flex-col gap-2 cursor-pointer h-[150px] md:h-[250px] rounded-2xl' />
                <Skeleton className='relative flex flex-col gap-2 cursor-pointer h-[150px] md:h-[250px] rounded-2xl' />
                <Skeleton className='relative flex flex-col gap-2 cursor-pointer h-[150px] md:h-[250px] rounded-2xl' />
                <Skeleton className='relative flex flex-col gap-2 cursor-pointer h-[150px] md:h-[250px] rounded-2xl' />
                <Skeleton className='relative flex flex-col gap-2 cursor-pointer h-[150px] md:h-[250px] rounded-2xl' />
                <Skeleton className='relative flex flex-col gap-2 cursor-pointer h-[150px] md:h-[250px] rounded-2xl' />
                <Skeleton className='relative flex flex-col gap-2 cursor-pointer h-[150px] md:h-[250px] rounded-2xl' />
            </div>
        );
    }
    return children
}
