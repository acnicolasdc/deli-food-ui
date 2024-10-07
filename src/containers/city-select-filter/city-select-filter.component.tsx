'use client';
import * as React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCitySelectFilter } from "./use-city-select-filter";
import { MultiSelect } from "@/components/ui/multi-select";


export enum ECitySelectFilterMode {
    select = 'select',
    multiSelect = 'multi-select',
}

export type TCitySelectFilterValue = { value: string, name: string };

export interface ICitySelectFilterProps {
    mode?: ECitySelectFilterMode;
    value?: string | string[];
    disabled?: boolean;
    onValueChange: (value?: TCitySelectFilterValue | string[]) => void
}

export function CitySelectFilter({ onValueChange, value, disabled, mode = ECitySelectFilterMode.select }: ICitySelectFilterProps) {
    const { data, isFetching } = useCitySelectFilter();
    const handleOnValueChange = (value: string | string[]) => {
        if (Array.isArray(value)) {
            return onValueChange(value)
        }
        const foundCity = data.find((city) => city.value === value);
        if (foundCity) {
            return onValueChange({ value, name: foundCity.name })
        }
    }

    if (mode === ECitySelectFilterMode.multiSelect) {
        return <MultiSelect onValueChange={onValueChange} options={data} defaultValue={value as string[]} disabled={disabled}/>
    }

    return (
        <Select
            value={value as string}
            disabled={isFetching || disabled}
            onValueChange={handleOnValueChange}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona tu ciudad" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {data.map(({ name, value }) => <SelectItem value={value} key={value}>{name}</SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
