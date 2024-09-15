'use client'
import paso from '../../../public/restaurant/paso.jpg';
import { HeartFilledIcon } from '@radix-ui/react-icons'
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';


export interface ICardCustomerDetailProps {
    isFavorite?: boolean;
    name: string;
    address: string;
    image: string;
}

export function CardCustomerDetail({ isFavorite, name, address, image }: ICardCustomerDetailProps) {
    return (
        <div className='relative flex flex-col gap-2 cursor-pointer'>
            {isFavorite ? <Badge className='absolute left-2 top-2 md:left-5 md:top-5 bg-blue-500 shadow-lg text-sm font-normal'>
                <HeartFilledIcon className='mr-1' /> Delifood
            </Badge> : false}
            <div className='w-full h-[150px] md:h-[250px] rounded-xl overflow-hidden'
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover'
                }}
            />
            <div className='px-2'>
                <Label className='text-sm md:text-base font-medium'>{name}</Label>
                <p className='text-xs md:text-sm text-muted-foreground'>{address}</p>
            </div>
        </div>
    );
}
