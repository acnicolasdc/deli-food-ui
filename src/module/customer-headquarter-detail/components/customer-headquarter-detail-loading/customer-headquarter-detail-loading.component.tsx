'use client'
import _ from 'lodash';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export interface ICustomerHeadquarterDetailLoadingProps {
    children: React.ReactNode;
    isLoading?: boolean;
}

export function CustomerHeadquarterDetailLoading({ children, isLoading }: ICustomerHeadquarterDetailLoadingProps) {
    if (isLoading) {
        return (
            <div className='flex flex-col flex-1 px-4 gap-4 md:gap-6 md:px-[10%] py-2 md:py-12'>
                <div className='flex flex-row w-full'>
                    <Skeleton className='w-[200px] md:w-[400px] h-5 rounded-2xl' />
                </div>
                <Skeleton className='flex flex-col w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden '>
                </Skeleton>
                <div className='flex flex-col md:flex-row md:gap-12 gap-6'>
                    <div className='flex flex-col flex-1 gap-6'>
                        <div className='space-y-2'>
                            <Skeleton className='md:w-[300px] h-5 rounded-2xl' />
                            <Skeleton className='md:w-[200px] h-4 rounded-2xl' />
                        </div>
                        <Separator />
                        <Skeleton className='flex flex-col gap-4 h-[200px] rounded-2xl'>
                        </Skeleton>
                        <Separator />
                        <Skeleton className='flex flex-col gap-4 h-[200px] rounded-2xl'>
                        </Skeleton>
                    </div>
                    <Separator className='md:hidden' />
                    <Skeleton className='w-full h-[400px] md:w-[450px] md:h-[600px] flex justify-center items-start flex-grow-0 relative rounded-2xl'>
                    </Skeleton>
                </div>
            </div>
        );
    }
    return children
}
