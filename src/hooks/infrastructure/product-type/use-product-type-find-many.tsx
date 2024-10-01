import http from "@/lib/http";
import { useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";


export type TProductType = {
    id: number;
    name: string;
    icon: string;
}

export const queryKey = 'product-type';

export const productTypeFindManyAtom = atomWithQuery(() => ({
    queryKey: [queryKey],
    initialData: [],
    refetchOnWindowFocus: false,
    queryFn: async ({ queryKey: [url] }): Promise<TProductType[]> => {
        const res = await http.get(url);
        return res.data
    },
}))

export default function useProductTypeFindMany() {
    const [{ data, isPending, isError, isFetching }] = useAtom(productTypeFindManyAtom);
    return { data, isPending, isError, isFetching }
}

