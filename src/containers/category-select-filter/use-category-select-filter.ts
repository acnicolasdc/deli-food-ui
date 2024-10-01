'use client';
import useCategoryFindMany from '@/hooks/infrastructure/category/use-category-find-many';


export function useCategorySelectFilter() {
    const { isFetching, data } = useCategoryFindMany();
    const dataMapped = data.map(({ icon, id, name }) => ({ image: icon, value: String(id), name }));
    return { data: dataMapped, isFetching }
}
