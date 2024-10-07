import http from "@/lib/http";
import { useAtom } from "jotai";
import { atomWithMutation } from "jotai-tanstack-query"

export const queryKey = 'customer';
const userCreateAtom = atomWithMutation(() => ({
    mutationKey: [queryKey],
    mutationFn: async (formData: FormData) => {
        const res = await http.post(queryKey, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return res.data
    },
}));


export default function useCustomerCreate() {
    const [atomMutate] = useAtom(userCreateAtom);
    return atomMutate;
}