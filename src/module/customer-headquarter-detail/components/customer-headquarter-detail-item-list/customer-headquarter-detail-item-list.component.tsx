
export interface ICustomerHeadquarterDetailItemProps {
    id?: string | number;
    name: string;
    icon: React.ReactNode;
}

export interface ICustomerHeadquarterDetailItemListProps {
    data: ICustomerHeadquarterDetailItemProps[];
}
export function CustomerHeadquarterDetailItem({ name, icon }: ICustomerHeadquarterDetailItemProps) {
    return (
        <div className='flex flex-row items-center gap-6'>
            {icon}
            <p>{name}</p>
        </div>
    );
}
export function CustomerHeadquarterDetailItemList({ data }: ICustomerHeadquarterDetailItemListProps) {
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
            {data.map(({ id, name, icon }) => <CustomerHeadquarterDetailItem key={id} name={name} icon={icon} />)}
        </div>
    );
}
