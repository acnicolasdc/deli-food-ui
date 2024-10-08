'use client';
import useZoneFindByCardinalPoint from '@/hooks/infrastructure/zone/use-zone-find-by-cardinal-point';
export function useZoneSelectFilter(cardinalPointId?: string) {
    const { isFetching, data } = useZoneFindByCardinalPoint(cardinalPointId);
    const dataMapped = data.map(({ icon, id, name }) => ({ image: icon, value: String(id), name }));
    return { data: dataMapped, isFetching }
}
