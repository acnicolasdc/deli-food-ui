import http from "@/lib/http";
import { atom, useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";


export type TZone = {
    id: number;
    name: string;
    icon: string;
}

export const queryKey = 'zone';
export const zoneFindManyCityIdAtom = atom<string | undefined>(undefined)
export const zoneFindManyAtom = atomWithQuery((get) => ({
    queryKey: [queryKey, get(zoneFindManyCityIdAtom)],
    initialData: [],
    refetchOnWindowFocus: false,
    queryFn: async ({ queryKey: [url, cityId] }): Promise<TZone[]> => {
        if (cityId === undefined) {
            return [];
        }
        const res = await http.get(`${url}?cityId=${cityId}`);
        return res.data
    },
}))

export default function useZoneFindByCity() {
    const [{ data, isPending, isError, isFetching }] = useAtom(zoneFindManyAtom);
    return { data, isPending, isError, isFetching }
}

