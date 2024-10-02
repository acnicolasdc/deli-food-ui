'use client';
import useZoneFindByCity from '@/hooks/infrastructure/zone/use-zone-find-by-city';
export function useZoneSlideSelectFilter() {
    const { isFetching, data } = useZoneFindByCity();
    const dataMapped = data.map(({ icon, id, name }) => ({ image: icon, value: String(id), name }));
    return { data: dataMapped, isFetching }
}
