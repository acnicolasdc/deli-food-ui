import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { UserLocationFilterForm } from "./components/user-location-filter-form";

export interface IUserLocationFilterProps {
    className?: string
}

export function UserLocationFilter({ className }: IUserLocationFilterProps) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog>
                <DialogTrigger className="w-full">
                    <div className={`flex flex-row bg-slate-100 px-1 py-2 rounded-full flex-1 ${className}`}>
                        <div className='flex flex-1 justify-start items-center text-left'>
                            <MagnifyingGlassIcon className='w-6 h-6 ml-2 md:ml-4 mr-4' />
                            <div>
                                <p className='text-sm font-medium'>A donde quieres ir ?</p>
                                <p className='text-xs text-muted-foreground'>San Antonio • Pance • Granada </p>
                            </div>
                        </div>
                    </div>
                </DialogTrigger>
                <DialogContent className='flex flex-col max-h-[100%] md:max-h-[95%] px-0'>
                    <DialogHeader className='px-6'>
                        <DialogTitle className='text-lg'>Filtros</DialogTitle>
                    </DialogHeader>
                    <div className="px-2 flex overflow-y-auto overflow-hidden no-scrollbar">
                        <UserLocationFilterForm className="pt-0"/>
                    </div>
                    <DialogFooter className='px-6'>
                        <Button variant="delifood">Aplicar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <div className={`flex flex-row bg-slate-100 px-1 py-2 rounded-full flex-1 ${className}`}>
                    <div className='flex flex-1 justify-start items-center'>
                        <MagnifyingGlassIcon className='w-6 h-6 ml-2 md:ml-4 mr-4' />
                        <div>
                            <p className='text-sm font-medium'>A donde quieres ir ?</p>
                            <p className='text-xs text-muted-foreground'>San Antonio • Pance • Granada </p>
                        </div>
                    </div>
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full">
                    <DrawerHeader>
                        <DrawerTitle>A donde quieres ir?</DrawerTitle>
                        <DrawerDescription>Asi podemos recomendar un lugar que se ajuste a lo que buscas</DrawerDescription>
                    </DrawerHeader>
                    <UserLocationFilterForm />
                </div>
            </DrawerContent>
        </Drawer>
    )
}
