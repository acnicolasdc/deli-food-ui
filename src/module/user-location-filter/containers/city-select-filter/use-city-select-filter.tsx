'use client';
import { atom, useAtom, useSetAtom } from "jotai";
import { zoneFindManyCityIdAtom } from "@/hooks/infrastructure/zone/use-zone-find-by-city";


export type TCitySelectAtom = { name: string, id: string };
export const citySelectAtom = atom<TCitySelectAtom | undefined>(undefined);

export function useCitySelectFilter() {
    const [city, setCity] = useAtom(citySelectAtom);
    const setCityParam = useSetAtom(zoneFindManyCityIdAtom);
    const handleSetCity = (city: TCitySelectAtom) => {
        setCity(city)
        setCityParam(city.id);
    }

    const resetCity = () => {
        setCity(undefined)
        setCityParam(undefined);
    }

    return { setCity: handleSetCity, city, resetCity }
}
