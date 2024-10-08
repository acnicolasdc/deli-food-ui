import { atom } from "jotai";
import http from "@/lib/http";
import { useQuery } from "@tanstack/react-query";
import { atomWithQuery } from "jotai-tanstack-query";


export type TCardinalPoint = {
    id: number;
    name: string;
}

export const queryKey = 'cardinal-point';
export const cardinalPointFindManyCityIdAtom = atom<string | undefined>(undefined)
export const cardinalPointFindManyAtom = atomWithQuery((get) => ({
    queryKey: [queryKey, get(cardinalPointFindManyCityIdAtom)],
    initialData: [],
    refetchOnWindowFocus: false,
    queryFn: async ({ queryKey: [url, cityId] }): Promise<TCardinalPoint[]> => {
        if (cityId === undefined) {
            return [];
        }
        const res = await http.get(`${url}?cityId=${cityId}`);
        return res.data
    },
}))

export default function useCardinalPointFindByCity(cityId?: string) {
    return useQuery({
        queryKey: [queryKey, cityId],
        initialData: [],
        refetchOnWindowFocus: false,
        enabled: !!cityId,
        queryFn: async ({ queryKey: [url, cityId] }): Promise<TCardinalPoint[]> => {
            if (cityId === undefined) {
                return [];
            }
            const res = await http.get(`${url}?cityId=${cityId}`);
            return res.data
        },
    })
}

