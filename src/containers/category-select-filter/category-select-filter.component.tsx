'use client'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { EFieldSlideSelectType, FieldSlideSelect, FieldSlideSelectLoadingIndicator } from '@/components/field/field-slide-select';
import { useCategorySelectFilter } from './use-category-select-filter';
import { MultiSelect } from "@/components/ui/multi-select";

export enum ECategorySelectFilterMode {
    select = 'select',
    multiSelect = 'multi-select',
    slide = 'slide'
}

export type TCategorySelectFilterAtom = { name: string, value: string | number };

export interface ICategorySelectFilterProps {
    type?: EFieldSlideSelectType;
    mode?: ECategorySelectFilterMode;
    value?: string | null | number | string[];
    onValueChange: (value?: { name: string, value: string | number } | string[]) => void
}
export function CategorySelectFilter({ onValueChange, value, type, mode = ECategorySelectFilterMode.slide }: ICategorySelectFilterProps) {
    const { isFetching, data } = useCategorySelectFilter();

    if (mode === ECategorySelectFilterMode.multiSelect) {
        return <MultiSelect onValueChange={onValueChange} options={data} />
    }
    if (mode === ECategorySelectFilterMode.select) {
        return (
            <Select disabled={isFetching}
                onValueChange={(selected) => {
                    const foundCategory = data.find(({ value }) => selected === value)
                    onValueChange(foundCategory);
                }}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccione la categoria" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Categorias</SelectLabel>
                        {data.map(({ name, value }) => {
                            return <SelectItem key={value} value={value}>{name}</SelectItem>
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>
        )
    }
    return (
        <FieldSlideSelectLoadingIndicator isLoading={isFetching}>
            <FieldSlideSelect
                data={data}
                variant="outline"
                value={value as string}
                type={type}
                onValueChange={onValueChange}
            />
        </FieldSlideSelectLoadingIndicator>
    );
}
