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
import { FieldSlideSelect, EFieldSlideSelectType, FieldSlideSelectLoadingIndicator, FieldSlideSelectEmptyIndicator } from "@/components/field/field-slide-select";
import { useZoneSelectFilter } from "./use-zone-select-filter";

export enum EZoneSelectFilterMode {
    select = 'select',
    slide = 'slide',
    multiSelect = 'multi-select',
}

export type TZoneSelectFilterValue = { value: string | number, name: string };

export interface IZoneSelectFilterProps {
    mode?: EZoneSelectFilterMode;
    type?: EFieldSlideSelectType;
    value?: string | null | number | string[];
    onValueChange: (value?: TZoneSelectFilterValue | string[]) => void;
    cardinalPointId?: string;
}

export function ZoneSelectFilter({ onValueChange, value, cardinalPointId, type, mode = EZoneSelectFilterMode.slide }: IZoneSelectFilterProps) {
    const { isFetching, data } = useZoneSelectFilter(cardinalPointId);

    if (mode === EZoneSelectFilterMode.multiSelect) {
        return <MultiSelect onValueChange={onValueChange} options={data} defaultValue={value as string[]} />
    }
    if (mode === EZoneSelectFilterMode.select) {
        return (
            <Select
                disabled={isFetching}
                value={value as string}
                onValueChange={(selected) => {
                    const foundZone = data.find(({ value }) => selected === value)
                    onValueChange(foundZone);
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
        <FieldSlideSelectLoadingIndicator type={type} isLoading={isFetching}>
            <FieldSlideSelectEmptyIndicator isEmpty={!data.length} label="No hay zonas disponibles">
                <FieldSlideSelect
                    data={data}
                    variant="outline"
                    type={type}
                    value={value as string}
                    onValueChange={onValueChange}
                />
            </FieldSlideSelectEmptyIndicator>
        </FieldSlideSelectLoadingIndicator>
    )
}
