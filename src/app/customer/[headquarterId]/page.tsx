'use client'
import Image from 'next/image';
import logoDeliFood from '../../../../public/logo.png';
import { UserLocationFilter } from '@/module/user-location-filter';
import { CustomerListCustomFilters } from '@/module/customer-list-custom-filters';
import useHeadquarterFindById from '@/hooks/infrastructure/headquarter/use-headquarter-by-id';
import { CustomerHeadquarterDetail } from '@/module/customer-headquarter-detail';
import { redirect } from 'next/navigation';

export default function Customer({ params }: { params: { headquarterId: string } }) {
    if (
        !process.env.NEXT_PUBLIC_DEV_MODE
    ) {
        redirect('/on-boarding');
    }
    const dd = useHeadquarterFindById(params.headquarterId);
    console.log(dd.data)
    return (
        <main className="flex min-h-screen flex-col pb-12">
            <div className='px-0'>
                <nav className="w-full flex items-center gap-6 md:gap-8 relative justify-center py-4 md:py-2 px-2 md:px-8 flex-wrap md:border-b">
                    <div className='flex h-full w-full md:w-auto items-center justify-center md:justify-start md:border-r md:pr-6'>
                        <div className='flex items-center justify-center'>
                            <Image src={logoDeliFood} alt='Picture of the author' width={0}
                                height={30}
                            />
                        </div>
                    </div>
                    <div className='flex flex-row flex-1 h-full gap-2 md:gap-4 justify-center'>
                        <UserLocationFilter />
                        <CustomerListCustomFilters />
                    </div>
                </nav>
            </div>
            <CustomerHeadquarterDetail />
        </main>
    );
}
