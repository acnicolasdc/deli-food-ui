'use client';
import * as React from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { atom, useAtom } from "jotai";

export type TCityItem = {
    name: string;
    value: string;
}
export type TCitySelectAtom = { label: string, id: string };

export const citySelectAtom = atom<TCitySelectAtom | undefined>(undefined);

const DATA_MOCK: TCityItem[] = [{ name: 'Santiago de Cali', value: '1' }];

export function CitySelectFilter() {
    const [city, setCity] = useAtom(citySelectAtom);
    return (
        <div className='space-y-4'>
            <Label>En que ciudad estas?</Label>
            <Select value={city?.id} onValueChange={(value) => {
                const foundCity = DATA_MOCK.find((city) => city.value === value);
                if (foundCity) setCity({ id: foundCity.value, label: foundCity.name })
            }}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona tu ciudad" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {DATA_MOCK.map(({ name, value }) => <SelectItem value={value} key={name}>{name}</SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
