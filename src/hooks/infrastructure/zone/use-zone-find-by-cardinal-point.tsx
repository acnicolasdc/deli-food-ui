import http from "@/lib/http";
import { atom, useAtom } from "jotai";
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

export default function useZoneFindByCardinalPoint() {
    const [{ data, isPending, isError, isFetching }] = useAtom(zoneFindManyAtom);
    return { data, isPending, isError, isFetching }
}

