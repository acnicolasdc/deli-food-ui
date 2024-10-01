'use client';
import useTagFindMany from '@/hooks/infrastructure/tag/use-tag-find-many';


export function useTagToggleSelectFilter() {
    const { isFetching, data } = useTagFindMany();
    const dataMapped = data.map(({ icon, id, name }) => ({ image: icon, value: String(id), name }));
    return { data: dataMapped, isFetching }
}
