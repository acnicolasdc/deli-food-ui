'use client';
import useProductTypeFindMany from '@/hooks/infrastructure/product-type/use-product-type-find-many';


export function useCategoryFoodTypeSelectFilter() {
    const { isFetching, data } = useProductTypeFindMany();
    const dataMapped = data.map(({ icon, id, name }) => ({ image: icon, value: String(id), name }));
    return { data: dataMapped, isFetching }
}
