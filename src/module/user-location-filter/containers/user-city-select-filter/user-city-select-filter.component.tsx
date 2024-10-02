'use client';
import * as React from "react"
import { Label } from "@/components/ui/label"
import { TUserCitySelectAtom, useUserCitySelectFilter } from "./use-user-city-select-filter";
import { CitySelectFilter } from "@/containers/city-select-filter";

export function UserCitySelectFilter() {
    const { city, setCity } = useUserCitySelectFilter();
    return (
        <div className='space-y-4'>
            <Label>En que ciudad estas?</Label>
            <CitySelectFilter
                value={city?.value}
                onValueChange={(selectedCity) => {
                    setCity(selectedCity as TUserCitySelectAtom)
                }} />
        </div>
    )
}
