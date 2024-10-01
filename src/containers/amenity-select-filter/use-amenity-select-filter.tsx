'use client';
import useAmenityFindMany from '@/hooks/infrastructure/amenity/use-amenity-find-many';
export function useAmenitySelectFilter() {
    const { isFetching, data } = useAmenityFindMany();
    const dataMapped = data.map(({ id, name }) => ({ value: String(id), name}));
    return { data: dataMapped, isFetching }
}
