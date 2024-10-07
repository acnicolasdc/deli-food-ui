import { atom, useAtom } from "jotai"
import useCityFindMany from "@/hooks/infrastructure/city/use-city-find-many";
import useZoneFindByCardinalPoint from "@/hooks/infrastructure/zone/use-zone-find-by-cardinal-point";

export const userLocationFilterStatusAtom = atom<boolean>(false);

export function useUserLocationFilter() {
    useCityFindMany();
    useZoneFindByCardinalPoint();
    const [open, setOpen] = useAtom(userLocationFilterStatusAtom);

    return { open, setOpen }
}