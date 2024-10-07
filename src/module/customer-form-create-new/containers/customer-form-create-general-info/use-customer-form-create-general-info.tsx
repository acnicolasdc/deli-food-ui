'use client'
import z from 'zod';
import { atom, useAtom } from "jotai";
import type { TFieldImageInputValue } from "@/components/field/field-image-input/field-image-input.component";
import type { TZodValidateFunctionReturn } from '@/core/types/zod';

export type TCustomerFormCreateGeneralInfoAtom = {
    name: string;
    tagId: number;
    amenities: string[];
    waitingTime: string[];
    productTypes: string[];
    paymentMethods: string[];
    logo: TFieldImageInputValue;
}

export const generalInformationAtom = atom<TCustomerFormCreateGeneralInfoAtom>({
    name: '',
    logo: {
        file: null,
        preview: '',
    },
    waitingTime: ['', ''],
    tagId: 3,
    amenities: [],
    productTypes: [],
    paymentMethods: []
});

export const customerFormCreateGeneralInfoSchema = z.object({
    name: z.string().min(1),
    logo: z.object({
        file: z.unknown().nullable(),
        preview: z.string().min(1),
    }),
    waitingTime: z.array(z.string()).length(2, "Waiting time must be an array of two strings"),
    tagId: z.number(),
    amenities: z.array(z.string()).nonempty("Amenities cannot be empty"),
    productTypes: z.array(z.string()).nonempty("Product types cannot be empty"),
    paymentMethods: z.array(z.string()).nonempty("Payment methods cannot be empty"),
});

export function useCustomerFormCreateGeneralInfo() {
    const [generalInformation, setGeneralInformation] = useAtom(generalInformationAtom);

    const handleValidateForm = (): TZodValidateFunctionReturn => {
        const result = customerFormCreateGeneralInfoSchema.safeParse(generalInformation);
        if (result.success) {
            return { valid: true, error: null };
        } else {
            return { valid: false, error: result.error };
        }
    }
    return { generalInformation, setGeneralInformation, validate: handleValidateForm };
}