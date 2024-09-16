import * as React from "react"
import { atom, useAtom } from "jotai"
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
import { CustomerFoodTypeSelectFilter } from "./containers/customer-food-type-select-filter"
import { CustomerBudgetFilter } from "./containers/customer-budget-filter"
import { CustomerPaymentMethodFilter } from "./containers/customer-payment-method-filter"
import { CustomerAmenityFilter } from "./containers/customer-amenity-filter"
import { Separator } from "@/components/ui/separator"
import { CustomerFiltersApplyButton } from "./containers/customer-filters-apply-button"
import { CustomerFilterModalTrigger } from "./containers/customer-filter-modal-trigger/customer-filter-modal-trigger.component"

export const customerListCustomFiltersStatusAtom = atom<boolean>(false);
export function CustomerListCustomFilters() {
    const [open, setOpen] = useAtom(customerListCustomFiltersStatusAtom);
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
                    <div className="flex flex-col w-full gap-6 pb-4 overflow-hidden overflow-y-auto no-scrollbar px-6">
                        <CustomerFoodTypeSelectFilter />
                        <Separator />
                        <CustomerBudgetFilter />
                        <Separator />
                        <CustomerPaymentMethodFilter />
                        <Separator />
                        <CustomerAmenityFilter />
                    </div>
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
                <div className="flex flex-col w-full gap-6 pb-4 overflow-hidden overflow-y-auto no-scrollbar px-6">
                    <CustomerFoodTypeSelectFilter />
                    <Separator />
                    <CustomerBudgetFilter />
                    <Separator />
                    <CustomerPaymentMethodFilter />
                    <Separator />
                    <CustomerAmenityFilter />
                </div>
                <DrawerFooter className="pt-2">
                    <CustomerFiltersApplyButton onSuccess={handleCloseModal} />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
