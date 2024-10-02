import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { EFieldSlideSelectType, FieldSlideSelect, FieldSlideSelectLoadingIndicator } from "@/components/field/field-slide-select";
import { useCategoryFoodTypeSelectFilter } from "./use-food-type-select-filter";
import { MultiSelect } from "@/components/ui/multi-select";


export enum EFoodTypeSelectFilterMode {
    select = 'select',
    multiSelect = 'multi-select',
    slide = 'slide'
}

export type TFoodTypeSelectAtom = { name: string, value: string | number };

export interface IFoodTypeSelectFilterProps {
    type?: EFieldSlideSelectType;
    mode?: EFoodTypeSelectFilterMode;
    value?: string | null | number | string[];
    onValueChange: (value?: { name: string, value: string | number } | string[]) => void
}
export function FoodTypeSelectFilter({ onValueChange, value, type, mode = EFoodTypeSelectFilterMode.slide }: IFoodTypeSelectFilterProps) {
    const { data, isFetching } = useCategoryFoodTypeSelectFilter();

    if (mode === EFoodTypeSelectFilterMode.multiSelect) {
        return <MultiSelect onValueChange={onValueChange} options={data} value={value as string[]}/>
    }

    if (mode === EFoodTypeSelectFilterMode.select) {
        return (
            <Select
                disabled={isFetching}
                value={value as string}
                onValueChange={(selected) => {
                    const foundFoodType = data.find(({ value }) => selected === value)
                    onValueChange(foundFoodType);
                }}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccione el tipo de producto" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Tipos de Productos</SelectLabel>
                        {data.map(({ name, value }) => {
                            return <SelectItem key={value} value={String(value)}>{name}</SelectItem>
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
    )
}
