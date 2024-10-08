import http from "@/lib/http";
import { useAtom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";
import type { TCategory } from "../category/use-category-find-many";
import type { TZone } from "../zone/use-zone-find-by-cardinal-point";


export type THeadquarter = {
    id: number;
    name: string;
    address: string;
    image: string;
    customerId: number;
    zoneId: number;
    categories: TCategory[];
    customer: THeadquarterCustomer;
    openingHours: THeadquarterOpeningHour[];
    zone: TZone;
}

export type Zone = {
    id: number;
    name: string;
    icon: string;
    cardinalPointId: number;
}

export type THeadquarterCustomer = {
    id: number;
    name: string;
    logo: string;
    waitingTime: string;
    createdAt: Date;
    updatedAt: Date;
    tagId: number;
}

export type THeadquarterOpeningHour = {
    id: number;
    label: string;
    range: string;
    headquarterId: number;
}

export const queryKey = 'headquarter';

export const headquarterFindManyAtom = atomWithQuery(() => ({
    queryKey: [queryKey],
    initialData: [],
    refetchOnWindowFocus: false,
    queryFn: async ({ queryKey: [url] }): Promise<THeadquarter[]> => {
        const res = await http.get(url);
        return res.data
    },
}))

export default function useHeadquarterFindMany() {
    const [{ data, isPending, isError, isFetching }] = useAtom(headquarterFindManyAtom);
    return { data, isPending, isError, isFetching }
}

