'use client';
import useCityFindMany from '@/hooks/infrastructure/city/use-city-find-many';


export function useCitySelectFilter() {
    const { isFetching, data } = useCityFindMany();
    const dataMapped = data.map(({ id, name }) => ({ image: null, value: String(id), name }));
    return { data: dataMapped, isFetching }
}
