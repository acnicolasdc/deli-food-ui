'use client'
import { atom, useAtom } from 'jotai';
import { CategorySelectFilter } from '@/containers/category-select-filter';


export type TCustomerCategorySelectFilterAtom = { name: string, value: string | number };
export const customerCategorySelectFilterAtom = atom<TCustomerCategorySelectFilterAtom | undefined>(undefined);
export function CustomerCategorySelectFilter() {
    const [category, setCategory] = useAtom(customerCategorySelectFilterAtom);
    return (
        <CategorySelectFilter
            value={category?.value}
            onValueChange={(value) => {
                setCategory(value as TCustomerCategorySelectFilterAtom);
            }} />
    );
}
