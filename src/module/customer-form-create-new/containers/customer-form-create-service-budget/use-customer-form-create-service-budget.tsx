'use client'
import z from 'zod';
import { useEffect } from "react";
import { useServiceTypeSelectFilter } from "@/containers/service-type-select-filter";
import { atom, useAtom } from "jotai";
import type { TZodValidateFunctionReturn } from '@/core/types/zod';

export type TCustomerFormCreateServiceBudgetAtom = {
    serviceTypeId: string | undefined,
    count: number;
}

export const defaultServiceTypeAtomValue = { serviceTypeId: undefined, count: 0 }

export const serviceBudgetsAtom = atom<TCustomerFormCreateServiceBudgetAtom[]>([
    defaultServiceTypeAtomValue
]);

export const customerFormCreateServiceBudgetSchema = z.object({
    serviceTypeId: z.string().min(1),
    count: z.number(),
}).array().min(1).refine(
    (items) => items.some(item => item.count > 0)
);

export function useCustomerFormCreateServiceBudget() {
    const { data } = useServiceTypeSelectFilter();
    const [serviceBudget, setServiceBudget] = useAtom(serviceBudgetsAtom);
    useEffect(() => {
        if (!!data.length) {
            setServiceBudget(data.map(({ value }, index) => ({
                count: serviceBudget[index]?.count > 0 ? serviceBudget[index].count : 0,
                serviceTypeId: value
            })))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(data)])

    const handleValidateForm = (): TZodValidateFunctionReturn => {
        const result = customerFormCreateServiceBudgetSchema.safeParse(serviceBudget);
        if (result.success) {
            return { valid: true, error: null };
        } else {
            return { valid: false, error: result.error };
        }
    }
    return { serviceBudget, setServiceBudget, validate: handleValidateForm };
}