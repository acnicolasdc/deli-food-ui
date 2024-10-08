'use client'
import { Separator } from '@/components/ui/separator';
import _ from 'lodash';
import { Skeleton } from '@/components/ui/skeleton';

export function CustomerHeadquarterDetail() {

    return (
        <div className='flex flex-col flex-1 px-4 gap-4 md:gap-6 md:px-[10%] py-2 md:py-12'>
            <div className='flex flex-row w-full'>
                <Skeleton className='md:w-[200px]' />

            </div>
            <Skeleton className='flex flex-col w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden'>
            </Skeleton>
            <div className='flex flex-col md:flex-row md:gap-12 gap-6'>
                <div className='flex flex-col flex-1 gap-6'>
                    <div>
                        <Skeleton className='md:w-[200px]' />
                        <Skeleton className='md:w-[200px]' />
                    </div>
                    <Separator />
                    <Skeleton className='flex flex-col gap-4'>

                    </Skeleton>
                    <Separator />
                    <Skeleton className='flex flex-col gap-4'>

                    </Skeleton>
                    <Separator />
                    <Skeleton className='flex flex-col gap-4'>

                    </Skeleton>
                </div>
                <Separator className='md:hidden' />
                <Skeleton className='w-full h-[400px] md:w-[450px] md:h-[600px] flex justify-center items-start flex-grow-0 relative'>
                </Skeleton>
            </div>

        </div>
    );
}
