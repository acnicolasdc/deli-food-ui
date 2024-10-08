'use client';
import { atom, useAtom } from "jotai";

export type TUserCitySelectAtom = { name: string, value: string };
export const userCitySelectAtom = atom<TUserCitySelectAtom | undefined>(undefined);

export function useUserCitySelectFilter() {
    const [city, setCity] = useAtom(userCitySelectAtom);
    const handleSetCity = (city: TUserCitySelectAtom) => {
        setCity(city)
    }
    const resetCity = () => {
        setCity(undefined);
    }
    return { setCity: handleSetCity, city, resetCity }
}
