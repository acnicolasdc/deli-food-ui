import http from "@/lib/http";
import { useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";


export type TCity = {
    id: number;
    name: string;
}

export const queryKey = 'city';

export const cityFindManyAtom = atomWithQuery(() => ({
    queryKey: [queryKey],
    initialData: [],
    refetchOnWindowFocus: false,
    queryFn: async ({ queryKey: [url] }): Promise<TCity[]> => {
        const res = await http.get(url);
        return res.data
    },
}))

export default function useCityFindMany() {
    const [{ data, isPending, isError, isFetching }] = useAtom(cityFindManyAtom);
    return { data, isPending, isError, isFetching }
}

