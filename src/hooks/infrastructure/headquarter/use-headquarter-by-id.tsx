import { atom } from "jotai";
import http from "@/lib/http";
import { useQuery } from "@tanstack/react-query";
import { atomWithQuery } from "jotai-tanstack-query";
import type { TCategory } from "../category/use-category-find-many";
import type { TZone } from "../zone/use-zone-find-by-cardinal-point";
import type { TTag } from "../tag/use-tag-find-many";
import type { TCity } from "../city/use-city-find-many";
import type { TServiceType } from "../service-type/use-service-type-find-many";
import type { TAmenity } from "../amenity/use-amenity-find-many";
import type { TPaymentMethod } from "../payment-method/use-payment-method-find-many";

export type THeadquarter = {
    id: number;
    name: string;
    address: string;
    image: string;
    customerId: number;
    zoneId: number;
    categories: TCategory[];
    amenities: TAmenity[];
    customer: THeadquarterCustomer & {
        serviceBudgets: {
            id: number,
            count: number,
            serviceTypeId: number,
            serviceType: TServiceType
        }[],
        headquarters: {
            id: number;
            name: string;
            address: string;
        }[],
        paymentMethods: TPaymentMethod[]
    };
    openingHours: THeadquarterOpeningHour[];
    zone: TZone & {
        cardinalPoint: {
            id: number,
            name: string,
            cities: TCity[]
        }
    };
}

export type THeadquarterCustomer = {
    id: number;
    name: string;
    logo: string;
    waitingTime: string;
    createdAt: Date;
    updatedAt: Date;
    tagId: number;
    tag: TTag;
}

export type THeadquarterOpeningHour = {
    id: number;
    label: string;
    range: string;
    headquarterId: number;
}

export const queryKey = 'headquarter';
export const headquarterFindByHeadquarterIdAtom = atom<string | undefined>(undefined);

export const headquarterFindByIdFetcher = async ({ queryKey: [url, headquarterId] }: { queryKey: (string | undefined)[] }): Promise<THeadquarter> => {
    const res = await http.get(`${url}/${headquarterId}`);
    return res.data
}
export const headquarterFindByIdAtom = atomWithQuery((get) => ({
    queryKey: [queryKey, get(headquarterFindByHeadquarterIdAtom)],
    refetchOnWindowFocus: false,
    enabled: !!get(headquarterFindByHeadquarterIdAtom),
    queryFn: headquarterFindByIdFetcher,
}))

export default function useHeadquarterFindById(headquarterId?: string) {
    return useQuery({
        queryKey: [queryKey, headquarterId],
        refetchOnWindowFocus: false,
        enabled: !!headquarterId,
        queryFn: headquarterFindByIdFetcher,
    })
}

