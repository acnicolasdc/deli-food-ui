import http from "@/lib/http";
import { atom, useAtom } from "jotai";
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

export default function useCardinalPointFindByCity() {
    const [{ data, isPending, isError, isFetching }] = useAtom(cardinalPointFindManyAtom);
    return { data, isPending, isError, isFetching }
}

