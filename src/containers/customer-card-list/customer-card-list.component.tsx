'use client'
import Link from 'next/link';
import { CardCustomerDetail } from '@/components/card/card-customer-detail';
import { CustomerCardListLoadingIndicator } from './components/customer-card-list-loading-indicator';
import { CustomerCardListEmptyIndicator } from './components/customer-card-list-empty-indicator';
import { useCustomerCardList } from './use-customer-card-list';
import { AnimationFadeIn } from '@/components/animation/animation-fade-in';

export function CustomerCardList() {
    const { data, isFetching } = useCustomerCardList();
    return (
        <CustomerCardListLoadingIndicator isLoading={isFetching}>
            <CustomerCardListEmptyIndicator isEmpty={!data.length}>
                <AnimationFadeIn className='grid grid-cols-1 md:grid-cols-4 gap-4 no-scrollbar px-4 md:px-8 gap-y-8' code="customers-card-list-animation">
                    {data.map(({ image, name, address, id, logo, tag }) => (
                        <Link href={`/customer/${id}`} key={id}>
                            <CardCustomerDetail
                                tag={tag}
                                name={name}
                                logo={logo}
                                image={image}
                                address={address}
                            />
                        </Link>
                    ))}
                </AnimationFadeIn>
            </CustomerCardListEmptyIndicator>
        </CustomerCardListLoadingIndicator>
    );
}
