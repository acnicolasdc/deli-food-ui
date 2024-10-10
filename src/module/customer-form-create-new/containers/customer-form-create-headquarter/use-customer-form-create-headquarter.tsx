'use client'
import z from 'zod';
import _ from 'lodash';
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
    menuUrl: string;
    address: string;
    image: TFieldImageInputValue;
    cityId: string;
    cardinalPointId: string;
    zoneId: string;
    categories: string[];
    amenities: string[];
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
    menuUrl: '',
    address: '',
    image: {
        file: null,
        preview: '',
    },
    cityId: '1',
    cardinalPointId: '1',
    zoneId: '',
    categories: [],
    amenities: [],
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
    menuUrl: z.string().url().optional(),
    address: z.string().min(1),
    image: z.object({
        file: z.unknown().nullable(),
        preview: z.string().min(1),
    }),
    cityId: z.string().min(1),
    cardinalPointId: z.string().min(1),
    zoneId: z.string().min(1),
    amenities: z.array(z.string()),
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


    const modifyHeadquarter = (id: string, property: keyof TCustomerFormCreateHeadquarterAtom,
        newValue: any) => {
        const index = _.findIndex(headquarter, { id });
        if (index === -1) return headquarter;
        const updatedHeadquarters = _.cloneDeep(headquarter);
        updatedHeadquarters[index][property] = newValue;
        if(property === 'cardinalPointId') {
            updatedHeadquarters[index].zoneId = ''; 
        }
        setHeadquarter(updatedHeadquarters);
    };

    const modifyOpeningHour = ( 
        headquarterId: string, 
        hourId: string, 
        property: keyof TCustomerFormCreateHeadquarterOpeningHours, 
        newValue: string) => {
        const headquarterIndex = _.findIndex(headquarter, { id: headquarterId });
        if (headquarterIndex === -1) return headquarter;
        const hourIndex = _.findIndex(headquarter[headquarterIndex].openingHours, { id: hourId });
        if (hourIndex === -1) return headquarter;
        const updatedHeadquarters = _.cloneDeep(headquarter);
        updatedHeadquarters[headquarterIndex].openingHours[hourIndex][property] = newValue;
        setHeadquarter(updatedHeadquarters);
    };

    const addOpeningHours = (headquarterId: string, ) => {
        const headquarterIndex = _.findIndex(headquarter, { id: headquarterId });
        if (headquarterIndex === -1) return headquarter;
        const updatedHeadquarters = _.cloneDeep(headquarter);
        const updatedHeadquartersOpeningHours = updatedHeadquarters[headquarterIndex].openingHours;
        updatedHeadquarters[headquarterIndex].openingHours = [...updatedHeadquartersOpeningHours, { ...defaultHeadquarterOpeningHour, id: String(parseInt(updatedHeadquartersOpeningHours[updatedHeadquartersOpeningHours.length - 1].id) + 1) }]
        setHeadquarter(updatedHeadquarters);
    }

    const removeOpeningHours = (headquarterId: string, openingHourId: string) => {
        const headquarterIndex = _.findIndex(headquarter, { id: headquarterId });
        if (headquarterIndex === -1) return headquarter;
        const updatedHeadquarters = _.cloneDeep(headquarter);
        updatedHeadquarters[headquarterIndex].openingHours = updatedHeadquarters[headquarterIndex].openingHours.filter((hour) => hour.id !== openingHourId)
        setHeadquarter(updatedHeadquarters);
    }

    const removeHeadquarter = (headquarterId: string) => {
        const headquarterIndex = _.findIndex(headquarter, { id: headquarterId });
        if (headquarterIndex === -1) return headquarter;
        const updatedHeadquarters = _.cloneDeep(headquarter).filter((headquarter) => headquarter.id !== headquarterId)
        setHeadquarter(updatedHeadquarters);
    }

    const addHeadquarter = () => {
        const updatedHeadquarters = _.concat(headquarter, { ...defaultHeadquarterAtomValue, id: String(parseInt(headquarter[headquarter.length - 1].id) + 1) });
        setHeadquarter(updatedHeadquarters);
    }

    return { headquarter, setHeadquarter, validate: handleValidateForm, modifyHeadquarter, modifyOpeningHour, addOpeningHours, removeOpeningHours, removeHeadquarter, addHeadquarter };
}