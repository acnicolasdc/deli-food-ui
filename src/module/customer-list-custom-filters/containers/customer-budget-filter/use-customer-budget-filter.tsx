'use client';
import useServiceTypeFindMany from '@/hooks/infrastructure/service-type/use-service-type-find-many';
export function useCustomerBudgetFilter() {
    const { isFetching, data } = useServiceTypeFindMany();
    const dataMapped = data.map(({ id, name }) => ({ value: id, name }));
    return { data: dataMapped, isFetching }
}
