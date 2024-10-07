'use client';
import { atom, useAtom, useSetAtom } from "jotai";
import { zoneFindManyCardinalPointIdAtom } from "@/hooks/infrastructure/zone/use-zone-find-by-cardinal-point";


export type TUserCardinalPointSelectAtom = { name: string, value: string };
export const userCardinalPointSelectAtom = atom<TUserCardinalPointSelectAtom | undefined>(undefined);

export function useUserCardinalPointSelectFilter() {
    const [cardinalPoint, setCardinalPoint] = useAtom(userCardinalPointSelectAtom);
    const setCardinalPointParam = useSetAtom(zoneFindManyCardinalPointIdAtom);
    const handleSetCardinalPoint = (cardinalPoint: TUserCardinalPointSelectAtom) => {
        setCardinalPoint(cardinalPoint)
        setCardinalPointParam(cardinalPoint.value);
    }

    const resetCardinalPoint = () => {
        setCardinalPoint(undefined)
        setCardinalPointParam(undefined);
    }

    return { setCardinalPoint: handleSetCardinalPoint, cardinalPoint, resetCardinalPoint }
}
