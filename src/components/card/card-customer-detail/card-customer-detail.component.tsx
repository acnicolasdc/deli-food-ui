import Image from 'next/image';
import { Label } from '@/components/ui/label';
import { BadgeCustomerTag } from '@/components/badge/badge-customer-tag';
import type { TTag } from '@/hooks/infrastructure/tag/use-tag-find-many';


export interface ICardCustomerDetailProps {
    tag?: TTag;
    name: string;
    address: string;
    image: string;
    logo: string;
}

export function CardCustomerDetail({ tag, name, address, image, logo }: ICardCustomerDetailProps) {
    return (
        <div className='relative flex flex-col gap-2 cursor-pointer'>
            {tag ? <BadgeCustomerTag className='absolute left-2 top-2 md:left-5 md:top-5 shadow-lg z-50' name={tag.name} icon={tag.icon} /> : false}
            <div className='w-full h-[150px] md:h-[250px] rounded-2xl overflow-hidden relative'>
                <Image
                    src={image}
                    alt="banner-image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                />
            </div>
            <div className='flex flex-row items-start px-2'>
                <Image
                    src={logo}
                    alt='Picture of the customer'
                    width={40}
                    height={40}
                    className='size-[35px] md:size-[40px] rounded-full'
                />
                <div className='px-2 flex flex-col max-w-[90%]'>
                    <Label className='text-sm md:text-base font-medium truncate'>{name}</Label>
                    <p className='text-xs md:text-sm text-muted-foreground'>{address}</p>
                </div>
            </div>
        </div>
    );
}
