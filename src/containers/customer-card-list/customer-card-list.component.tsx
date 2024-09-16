'use client'
import paso from '../../../public/restaurant/paso.jpg';
import chef from '../../../public/restaurant/chef.webp';
import faro from '../../../public/restaurant/faro.jpg';
import gringo from '../../../public/restaurant/gringo.jpg';
import nk from '../../../public/restaurant/nk.png';
import tdt from '../../../public/restaurant/tdt.jpg';
import { CardCustomerDetail } from '@/components/card/card-customer-detail';
import Link from 'next/link';
import { CustomerCardListLoadingIndicator } from './components/customer-card-list-loading-indicator';
import { CustomerCardListEmptyIndicator } from './components/customer-card-list-empty-indicator';

const MOCK_DATA = [
    {
        name: 'El Paso Hamburguesa',
        id: '1',
        address: 'Carrera 54a #5a - 52',
        image: paso.src,
        isFavorite: true,
    },
    {
        name: 'Chef Burger',
        id: '2',
        address: 'Avenida 45 #23 - 12',
        image: chef.src,
        isFavorite: false,
    },
    {
        name: 'El Faro',
        id: '3',
        address: 'Calle 56 #3c - 2',
        image: faro.src,
        isFavorite: false,
    },
    {
        name: 'El Gringo',
        id: '4',
        address: 'Via Comercial 370',
        image: gringo.src,
        isFavorite: false,
    },
    {
        name: 'Aire Libre',
        id: '5',
        address: 'Diagonal 2, Calle 74',
        image: nk.src,
        isFavorite: false,
    },
    {
        name: 'Tierra de Todos',
        id: '6',
        address: 'Calle 56 #43 - 22',
        image: tdt.src,
        isFavorite: false,
    },
];


export function CustomerCardList() {
    return (
        <CustomerCardListLoadingIndicator>
            <CustomerCardListEmptyIndicator>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 no-scrollbar px-4 md:px-8'>
                    {MOCK_DATA.map(({ image, isFavorite, name, address, id }) => (
                        <Link href="/customer" key={id}>
                            <CardCustomerDetail
                                name={name}
                                image={image}
                                address={address}
                                isFavorite={isFavorite}
                            />
                        </Link>
                    ))}
                </div>
            </CustomerCardListEmptyIndicator>
        </CustomerCardListLoadingIndicator>
    );
}
