import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
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
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { CustomerFiltersApplyButton } from "./containers/customer-filters-apply-button"
import { CustomerFilterModalTrigger } from "./containers/customer-filter-modal-trigger/customer-filter-modal-trigger.component"
import { CustomerListFilters } from "./containers/customer-list-filters"
import { useCustomerListCustomFilters } from "./use-customer-list-custom-filters"

export function CustomerListCustomFilters() {
    const { open, setOpen } = useCustomerListCustomFilters();
    
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const handleCloseModal = () => setOpen(false);

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger>
                    <CustomerFilterModalTrigger />
                </DialogTrigger>
                <DialogContent className='flex flex-col max-h-[100%] md:max-h-[90%] px-0'>
                    <DialogHeader className='px-6'>
                        <DialogTitle className='text-lg'>Filtros</DialogTitle>
                    </DialogHeader>
                    <CustomerListFilters />
                    <DialogFooter className='px-6'>
                        <CustomerFiltersApplyButton onSuccess={handleCloseModal} />
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <CustomerFilterModalTrigger />
            </DrawerTrigger>
            <DrawerContent className='flex flex-col max-h-[95%] px-0'>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Filtros</DrawerTitle>
                </DrawerHeader>
                <CustomerListFilters />
                <DrawerFooter className="pt-2">
                    <CustomerFiltersApplyButton onSuccess={handleCloseModal} />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
