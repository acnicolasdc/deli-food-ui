import http from "@/lib/http";
import { useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";


export type TServiceType = {
    id: number;
    name: string;
}

export const queryKey = 'service-type';

export const serviceTypeFindManyAtom = atomWithQuery(() => ({
    queryKey: [queryKey],
    initialData: [],
    refetchOnWindowFocus: false,
    queryFn: async ({ queryKey: [url] }): Promise<TServiceType[]> => {
        const res = await http.get(url);
        return res.data
    },
}))

export default function useServiceTypeFindMany() {
    const [{ data, isPending, isError, isFetching }] = useAtom(serviceTypeFindManyAtom);
    return { data, isPending, isError, isFetching }
}

