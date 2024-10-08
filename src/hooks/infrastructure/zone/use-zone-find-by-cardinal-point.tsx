import http from "@/lib/http";
import { useQuery } from "@tanstack/react-query";
import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";


export type TZone = {
    id: number;
    name: string;
    icon: string;
}

export const queryKey = 'zone';
export const zoneFindManyCardinalPointIdAtom = atom<string | undefined>(undefined)
export const zoneFindManyAtom = atomWithQuery((get) => ({
    queryKey: [queryKey, get(zoneFindManyCardinalPointIdAtom)],
    initialData: [],
    refetchOnWindowFocus: false,
    queryFn: async ({ queryKey: [url, cardinalPointId] }): Promise<TZone[]> => {
        if (cardinalPointId === undefined) {
            return [];
        }
        const res = await http.get(`${url}?cardinalPointId=${cardinalPointId}`);
        return res.data
    },
}))

export default function useZoneFindByCardinalPoint(cardinalPointId?: string) {
    return useQuery({
        queryKey: [queryKey, cardinalPointId],
        initialData: [],
        refetchOnWindowFocus: false,
        enabled: !!cardinalPointId,
        queryFn: async ({ queryKey: [url, cardinalPointId] }): Promise<TZone[]> => {
            if (cardinalPointId === undefined) {
                return [];
            }
            const res = await http.get(`${url}?cardinalPointId=${cardinalPointId}`);
            return res.data
        },
    })
}

