import http from "@/lib/http";
import { useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";


export type TCategory = {
    id: number;
    name: string;
    icon: string;
}

export const queryKey = 'category';

export const categoryFindManyAtom = atomWithQuery(() => ({
    queryKey: [queryKey],
    initialData: [],
    refetchOnWindowFocus: false,
    queryFn: async ({ queryKey: [url] }): Promise<TCategory[]> => {
        const res = await http.get(url);
        return res.data
    },
}))

export default function useCategoryFindMany() {
    const [{ data, isPending, isError, isFetching }] = useAtom(categoryFindManyAtom);
    return { data, isPending, isError, isFetching }
}

