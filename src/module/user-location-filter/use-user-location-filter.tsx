import { atom, useAtom } from "jotai"
import useCityFindMany from "@/hooks/infrastructure/city/use-city-find-many";
import useZoneFindByCity from "@/hooks/infrastructure/zone/use-zone-find-by-city";

export const userLocationFilterStatusAtom = atom<boolean>(false);

export function useUserLocationFilter() {
    useCityFindMany();
    useZoneFindByCity();
    const [open, setOpen] = useAtom(userLocationFilterStatusAtom);

    return { open, setOpen }
}