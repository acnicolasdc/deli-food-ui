'use client';
import useServiceTypeFindMany from '@/hooks/infrastructure/service-type/use-service-type-find-many';
export function useServiceTypeSelectFilter() {
    const { isFetching, data } = useServiceTypeFindMany();
    const dataMapped = data.map(({ id, name }) => ({ value: String(id), name }));
    return { data: dataMapped, isFetching }
}
