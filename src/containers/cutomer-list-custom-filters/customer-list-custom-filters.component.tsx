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
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { MixerHorizontalIcon } from '@radix-ui/react-icons';

import { CustomerCustomFiltersForm } from "./components/customer-custom-filters-form"

export function CustomerListCustomFilters() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog>
                <DialogTrigger>
                    <Button variant="outline" className='rounded-full h-12' >
                        <MixerHorizontalIcon />
                    </Button>
                </DialogTrigger>
                <DialogContent className='flex flex-col max-h-[100%] md:max-h-[90%] px-0'>
                    <DialogHeader className='px-6'>
                        <DialogTitle className='text-lg'>Filtros</DialogTitle>
                    </DialogHeader>
                    <CustomerCustomFiltersForm />
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
                <Button variant="outline" className='rounded-full h-12' >
                    <MixerHorizontalIcon />
                </Button>
            </DrawerTrigger>
            <DrawerContent className='flex flex-col max-h-[95%] px-0'>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Filtros</DrawerTitle>
                </DrawerHeader>
                <CustomerCustomFiltersForm />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancelar</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
