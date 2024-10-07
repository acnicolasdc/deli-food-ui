import * as React from "react"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useAmenitySelectFilter } from "./use-amenity-select-filter";
import { MultiSelect } from "@/components/ui/multi-select";

export enum EAmenitySelectFilterMode {
    select = 'select',
    multiSelect = 'multi-select',
    toggle = 'toggle'
}

export type TAmenitySelectFilterAtom = { name: string, value: string | number };

export interface IAmenitySelectFilterProps {
    mode?: EAmenitySelectFilterMode;
    value?: string[] | string;
    onValueChange: (value: string[] | string) => void
}
export function AmenitySelectFilter({ onValueChange, value, mode = EAmenitySelectFilterMode.toggle }: IAmenitySelectFilterProps) {
    const { data, isFetching } = useAmenitySelectFilter();
    if (mode === EAmenitySelectFilterMode.multiSelect) {
        return <MultiSelect onValueChange={onValueChange} options={data} defaultValue={value as string[]}/>
    }
    if (mode === EAmenitySelectFilterMode.select) {
        return (
            <Select
                disabled={isFetching}
                value={value as string}
                onValueChange={onValueChange}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccione la amenidad" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Amenidad</SelectLabel>
                        {data.map(({ name, value }) => {
                            return <SelectItem key={value} value={value}>{name}</SelectItem>
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>
        )
    }
    return (
        <ToggleGroup
            className='flex flex-row flex-wrap gap-2 pt-4 justify-start'
            type="multiple"
            value={value as string[]}
            onValueChange={onValueChange}
        >
            {data.map(({ value, name }) => {
                return (
                    <ToggleGroupItem
                        key={value}
                        size="sm"
                        variant="outline"
                        aria-label={`toggle_${value}}`}
                        className='rounded-full text-xs px-4'
                        value={value}
                    >
                        {name}
                    </ToggleGroupItem>
                )
            })}
        </ToggleGroup>
    )
}
