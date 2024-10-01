import http from "@/lib/http";
import { useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";


export type TTag = {
    id: number;
    name: string;
    icon: string;
}

export const queryKey = 'tag';

export const tagFindManyAtom = atomWithQuery(() => ({
    queryKey: [queryKey],
    initialData: [],
    refetchOnWindowFocus: false,
    queryFn: async ({ queryKey: [url] }): Promise<TTag[]> => {
        const res = await http.get(url);
        return res.data
    },
}))

export default function useTagFindMany() {
    const [{ data, isPending, isError, isFetching }] = useAtom(tagFindManyAtom);
    return { data, isPending, isError, isFetching }
}

