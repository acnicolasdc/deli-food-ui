import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { MultiSelect } from "@/components/ui/multi-select";
import { useCardinalPointSelectFilter } from "./use-cardinal-point-select-filter";

export enum ECardinalPointSelectFilterMode {
    select = 'select',
    multiSelect = 'multi-select',
}

export type TCardinalPointSelectFilterValue = { value: string | number, name: string };

export interface ICardinalPointSelectFilterProps {
    mode?: ECardinalPointSelectFilterMode;
    value?: string | null | number | string[];
    onValueChange: (value?: TCardinalPointSelectFilterValue | string[]) => void;
    cityId?: string 
}

export function CardinalPointSelectFilter({ onValueChange, cityId, value, mode = ECardinalPointSelectFilterMode.select }: ICardinalPointSelectFilterProps) {
    const { isFetching, data } = useCardinalPointSelectFilter(cityId);

    if (mode === ECardinalPointSelectFilterMode.multiSelect) {
        return <MultiSelect onValueChange={onValueChange} options={data} defaultValue={value as string[]} />
    }

    return (
        <Select
            disabled={isFetching}
            value={value as string}
            onValueChange={(selected) => {
                const foundCardinalPoint = data.find(({ value }) => selected === value)
                onValueChange(foundCardinalPoint);
            }}
        >
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccione el sector" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Sectores</SelectLabel>
                    {data.map(({ name, value }) => {
                        return <SelectItem key={value} value={value}>{name}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )

}
