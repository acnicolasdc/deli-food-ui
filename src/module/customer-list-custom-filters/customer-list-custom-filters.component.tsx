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
import { CustomerFoodTypeSelectFilter } from "./containers/customer-food-type-select-filter"
import { CustomerBudgetFilter } from "./containers/customer-budget-filter"
import { CustomerPaymentMethodFilter } from "./containers/customer-payment-method-filter"
import { CustomerAmenityFilter } from "./containers/customer-amenity-filter"
import { Separator } from "@/components/ui/separator"


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
                    <DrawerClose asChild>
                        <Button variant="outline">Cancelar</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
