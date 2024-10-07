'use client'
import z from 'zod';
import { atom, useAtom } from "jotai";
import type { TZodValidateFunctionReturn } from '@/core/types/zod';
import type { TFieldImageInputValue } from '@/components/field/field-image-input/field-image-input.component';

export type TCustomerFormCreateHeadquarterOpeningHours = {
    id: string;
    label: string;
    range: string;
}

export type TCustomerFormCreateHeadquarterAtom = {
    id: string;
    name: string;
    address: string;
    image: TFieldImageInputValue;
    cityId: string;
    cardinalPointId: string;
    zoneId: string;
    categories: string[];
    openingHours: TCustomerFormCreateHeadquarterOpeningHours[];
}

export const defaultHeadquarterOpeningHour = {
    id: '1',
    range: '',
    label: '',
}
export const defaultHeadquarterAtomValue = {
    id: '1',
    name: '',
    address: '',
    image: {
        file: null,
        preview: '',
    },
    cityId: '1',
    cardinalPointId: '1',
    zoneId: '',
    categories: [],
    openingHours: [defaultHeadquarterOpeningHour],
}

export const customerFormCreateHeadquarterOpeningHourSchema = z.object({
    id: z.string().min(1),
    range: z.string().min(1),
    label: z.string().min(1),
});

export const customerFormCreateHeadquarterSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    address: z.string().min(1),
    image: z.object({
        file: z.unknown().nullable(),
        preview: z.string().min(1),
    }),
    cityId: z.string().min(1),
    cardinalPointId: z.string().min(1),
    zoneId: z.string().min(1),
    categories: z.array(z.string().min(1)).min(1),
    openingHours: z
        .array(customerFormCreateHeadquarterOpeningHourSchema)
        .min(1)
}).array().min(1);


export const headquarterAtom = atom<TCustomerFormCreateHeadquarterAtom[]>([defaultHeadquarterAtomValue]);

export function useCustomerFormCreateHeadquarter() {
    const [headquarter, setHeadquarter] = useAtom(headquarterAtom);

    const handleValidateForm = (): TZodValidateFunctionReturn => {
        const result = customerFormCreateHeadquarterSchema.safeParse(headquarter);
        if (result.success) {
            return { valid: true, error: null };
        } else {
            return { valid: false, error: result.error };
        }
    }
    return { headquarter, setHeadquarter, validate: handleValidateForm };
}