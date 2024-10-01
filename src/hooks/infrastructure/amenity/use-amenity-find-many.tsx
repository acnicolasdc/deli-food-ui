import http from "@/lib/http";
import { useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";


export type TAmenity = {
    id: number;
    name: string;
    icon: string;
}

export const queryKey = 'amenity';

export const amenityFindManyAtom = atomWithQuery(() => ({
    queryKey: [queryKey],
    initialData: [],
    refetchOnWindowFocus: false,
    queryFn: async ({ queryKey: [url] }): Promise<TAmenity[]> => {
        const res = await http.get(url);
        return res.data
    },
}))

export default function useAmenityFindMany() {
    const [{ data, isPending, isError, isFetching }] = useAtom(amenityFindManyAtom);
    return { data, isPending, isError, isFetching }
}

