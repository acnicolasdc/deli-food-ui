import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query"
import {
    Dialog,
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
import { UserCitySelectFilter } from "./containers/user-city-select-filter";
import { UserZoneSlideSelectFilter } from "./containers/user-zone-slide-select-filter";
import { EFieldSlideSelectType } from "@/components/field/field-slide-select";
import { UserLocationApplyButton } from "./containers/user-location-apply-button";
import { useUserLocationFilter } from "./use-user-location-filter";
import { UserLocationInputTrigger } from "./containers/user-location-input-trigger";
import { UserCardinalPointSelectFilter } from "./containers/user-cardinal-point-select-filter";

export interface IUserLocationFilterProps {
    className?: string
}
export function UserLocationFilter({ className }: IUserLocationFilterProps) {
    const { open, setOpen } = useUserLocationFilter();
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const handleCloseModal = () => setOpen(false);

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className="w-full">
                    <UserLocationInputTrigger className={className} />
                </DialogTrigger>
                <DialogContent className='flex flex-col max-h-[100%] md:max-h-[95%] px-0'>
                    <DialogHeader className='px-6'>
                        <DialogTitle className='text-lg'>Filtros</DialogTitle>
                    </DialogHeader>
                    <div className="px-2 flex overflow-y-auto overflow-hidden no-scrollbar">
                        <div className="flex flex-col p-4 pb-12 w-full gap-6 pt-0">
                            <UserCitySelectFilter />
                            <UserCardinalPointSelectFilter />
                            <UserZoneSlideSelectFilter type={EFieldSlideSelectType.grid} />
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
                <UserLocationInputTrigger className={className} />
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full">
                    <DrawerHeader>
                        <DrawerTitle>A donde quieres ir?</DrawerTitle>
                        <DrawerDescription>Asi podemos recomendar un lugar que se ajuste a lo que buscas</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex flex-col p-4 pb-12 w-full gap-6">
                        <UserCitySelectFilter />
                        <UserCardinalPointSelectFilter />
                        <UserZoneSlideSelectFilter type={EFieldSlideSelectType.slide} />
                    </div>
                </div>
                <DrawerFooter>
                    <UserLocationApplyButton onSuccess={handleCloseModal} />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
