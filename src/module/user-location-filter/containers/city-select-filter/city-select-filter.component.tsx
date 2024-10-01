'use client';
import * as React from "react"
import { atom } from "jotai";
import { Label } from "@/components/ui/label"
import useCityFindMany from "@/hooks/infrastructure/city/use-city-find-many";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCitySelectFilter } from "./use-city-select-filter";


export type TCitySelectAtom = { name: string, id: string };
export const citySelectAtom = atom<TCitySelectAtom | undefined>(undefined);

export function CitySelectFilter() {
    const { city, setCity } = useCitySelectFilter();
    const { data, isFetching } = useCityFindMany();
    const handleOnValueChange = (value: string) => {
        const foundCity = data.find((city) => city.id === parseInt(value));
        if (foundCity) {
            setCity({ id: value, name: foundCity.name })
        }
    }
    return (
        <div className='space-y-4'>
            <Label>En que ciudad estas?</Label>
            <Select
                value={city?.id}
                disabled={isFetching}
                onValueChange={handleOnValueChange}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona tu ciudad" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {data.map(({ name, id }) => <SelectItem value={String(id)} key={id}>{name}</SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
