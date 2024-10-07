'use client';
import { atom, useAtom, useSetAtom } from "jotai";
import { cardinalPointFindManyCityIdAtom } from "@/hooks/infrastructure/cardinal-point/use-cardinal-point-find-by-city";


export type TUserCitySelectAtom = { name: string, value: string };
export const userCitySelectAtom = atom<TUserCitySelectAtom | undefined>(undefined);

export function useUserCitySelectFilter() {
    const [city, setCity] = useAtom(userCitySelectAtom);
    const setCityParam = useSetAtom(cardinalPointFindManyCityIdAtom);
    const handleSetCity = (city: TUserCitySelectAtom) => {
        setCity(city)
        setCityParam(city.value);
    }

    const resetCity = () => {
        setCity(undefined)
        setCityParam(undefined);
    }

    return { setCity: handleSetCity, city, resetCity }
}
