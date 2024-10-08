import useHeadquarterFindById from '@/hooks/infrastructure/headquarter/use-headquarter-by-id';
import { useParams } from 'next/navigation';
import _ from 'lodash';
import { formatToCOP } from '@/lib/money';
import { paymentAmenityIconTypes, paymentMethodIconTypes } from '@/components/icon/icon-amenity-object';

export function useCustomerHeadquarterDetail() {
    const params = useParams();
    const headquarter = useHeadquarterFindById(_.get(params, 'headquarterId', undefined) as string);
    const data = headquarter.data ? {
        ...headquarter.data,
        topLabel: `${headquarter.data.zone.cardinalPoint.cities[0].name}, ${headquarter.data.zone.cardinalPoint.name}, ${headquarter.data.zone.name}, ${headquarter.data.categories.map(({ name }) => name).join(', ')}`,
        fullName: `${headquarter.data.customer.name} - ${headquarter.data.name}`,
        budget: `${formatToCOP(headquarter.data.customer.serviceBudgets.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.count;
        }, 0))} COP`,
        headquarters: headquarter.data?.customer.headquarters.filter((head) => head.id !== headquarter.data.id),
        amenities: headquarter.data.amenities.map(({ name, icon, id }) => ({
            id,
            name,
            icon: paymentAmenityIconTypes[icon as keyof typeof paymentAmenityIconTypes]
        })),
        paymentMethods: headquarter.data.customer.paymentMethods.map(({ name, icon, id }) => ({
            id,
            name,
            icon: paymentMethodIconTypes[icon as keyof typeof paymentMethodIconTypes]
        })),
    } : headquarter.data;
    return { ...headquarter, data }
}