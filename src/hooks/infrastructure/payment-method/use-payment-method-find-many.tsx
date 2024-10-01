import http from "@/lib/http";
import { useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";


export type TPaymentMethod = {
    id: number;
    name: string;
    icon: string;
}

export const queryKey = 'payment-method';

export const paymentMethodFindManyAtom = atomWithQuery(() => ({
    queryKey: [queryKey],
    initialData: [],
    refetchOnWindowFocus: false,
    queryFn: async ({ queryKey: [url] }): Promise<TPaymentMethod[]> => {
        const res = await http.get(url);
        return res.data
    },
}))

export default function usePaymentMethodFindMany() {
    const [{ data, isPending, isError, isFetching }] = useAtom(paymentMethodFindManyAtom);
    return { data, isPending, isError, isFetching }
}

