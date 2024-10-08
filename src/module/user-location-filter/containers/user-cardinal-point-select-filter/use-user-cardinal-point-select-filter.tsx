'use client';
import { atom, useAtom } from "jotai";

export type TUserCardinalPointSelectAtom = { name: string, value: string };
export const userCardinalPointSelectAtom = atom<TUserCardinalPointSelectAtom | undefined>(undefined);

export function useUserCardinalPointSelectFilter() {
    const [cardinalPoint, setCardinalPoint] = useAtom(userCardinalPointSelectAtom);

    const handleSetCardinalPoint = (cardinalPoint: TUserCardinalPointSelectAtom) => {
        setCardinalPoint(cardinalPoint)
    }

    const resetCardinalPoint = () => {
        setCardinalPoint(undefined)
    }

    return { setCardinalPoint: handleSetCardinalPoint, cardinalPoint, resetCardinalPoint }
}
