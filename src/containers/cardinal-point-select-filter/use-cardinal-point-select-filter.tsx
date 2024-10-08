'use client';
import useCardinalPointFindByCardinalPoint from '@/hooks/infrastructure/cardinal-point/use-cardinal-point-find-by-city';
export function useCardinalPointSelectFilter(cityId?: string) {
    const { isFetching, data } = useCardinalPointFindByCardinalPoint(cityId);
    const dataMapped = data.map(({ id, name }) => ({ value: String(id), name }));
    return { data: dataMapped, isFetching }
}
