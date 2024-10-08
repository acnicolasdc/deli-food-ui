import http from "@/lib/http";
import { useMutation } from "@tanstack/react-query";
import { atomWithMutation } from "jotai-tanstack-query"

export const queryKey = 'customer';

export type TUseCustomerCreateParams = {
    onSuccess?: () => void;
}

export const useCustomerCreateAtom = atomWithMutation(() => ({
    mutationKey: [queryKey],
    mutationFn: async (formData: FormData) => {
        const res = await http.post(queryKey, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return res.data
    },
}))
export default function useCustomerCreate(params?: TUseCustomerCreateParams) {
    return useMutation({
        mutationKey: [queryKey],
        mutationFn: async (formData: FormData) => {
            const res = await http.post(queryKey, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return res.data
        },
        ...params,
    });
}