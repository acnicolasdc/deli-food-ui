import * as React from "react"
import { atom, useAtom, useAtomValue } from "jotai";
import { useMediaQuery } from "@/hooks/use-media-query"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { UserLocationInput } from "./components/user-location-input";
import { CitySelectFilter } from "./containers/city-select-filter";
import { ZoneSlideSelectFilter } from "./containers/zone-slide-select-filter";
import { EFieldSlideSelectType } from "@/components/field/field-slide-select";
import { UserLocationApplyButton, userLocationFilterAtom } from "./containers/user-location-apply-button";

export interface IUserLocationFilterProps {
    className?: string
}

export const userLocationFilterStatusAtom = atom<boolean>(false);
export function UserLocationFilter({ className }: IUserLocationFilterProps) {
    const [open, setOpen] = useAtom(userLocationFilterStatusAtom);
    const { city, zone } = useAtomValue(userLocationFilterAtom);
    
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const handleCloseModal = () => setOpen(false);

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className="w-full">
                    <UserLocationInput zone={zone?.label} city={city?.label} className={className} />
                </DialogTrigger>
                <DialogContent className='flex flex-col max-h-[100%] md:max-h-[95%] px-0'>
                    <DialogHeader className='px-6'>
                        <DialogTitle className='text-lg'>Filtros</DialogTitle>
                    </DialogHeader>
                    <div className="px-2 flex overflow-y-auto overflow-hidden no-scrollbar">
                        <div className="flex flex-col p-4 pb-12 w-full gap-6 pt-0">
                            <CitySelectFilter />
                            <ZoneSlideSelectFilter type={EFieldSlideSelectType.grid} />
                        </div>
                    </div>
                    <DialogFooter className='px-6'>
                        <UserLocationApplyButton onSuccess={handleCloseModal} />
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <UserLocationInput zone={zone?.label} city={city?.label} className={className} />
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full">
                    <DrawerHeader>
                        <DrawerTitle>A donde quieres ir?</DrawerTitle>
                        <DrawerDescription>Asi podemos recomendar un lugar que se ajuste a lo que buscas</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex flex-col p-4 pb-12 w-full gap-6">
                        <CitySelectFilter />
                        <ZoneSlideSelectFilter type={EFieldSlideSelectType.slide} />
                    </div>
                </div>
                <DrawerFooter>
                    <UserLocationApplyButton onSuccess={handleCloseModal} />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
