import http from "@/lib/http";
import { useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";
import { THeadquarter } from "./use-headquarter-by-id";


export const queryKey = 'headquarter';

export const headquarterFindManyAtom = atomWithQuery(() => ({
    queryKey: [queryKey],
    initialData: [],
    refetchOnWindowFocus: false,
    queryFn: async ({ queryKey: [url] }): Promise<THeadquarter[]> => {
        const res = await http.get(url);
        return res.data
    },
}))

export default function useHeadquarterFindMany() {
    const [{ data, isPending, isError, isFetching }] = useAtom(headquarterFindManyAtom);
    return { data, isPending, isError, isFetching }
}

