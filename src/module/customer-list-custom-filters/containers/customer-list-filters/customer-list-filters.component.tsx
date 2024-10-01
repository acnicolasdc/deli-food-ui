import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { CustomerBudgetFilter } from "../customer-budget-filter"
import { CustomerAmenityFilter } from "../customer-amenity-filter"
import { CustomerFoodTypeSelectFilter } from "../customer-food-type-select-filter"
import { CustomerPaymentMethodFilter } from "../customer-payment-method-filter"

export const CustomerListFilters = React.memo(function Filters() {
    return (
        <div className="flex flex-col w-full gap-6 pb-4 overflow-hidden overflow-y-auto no-scrollbar px-6">
            <CustomerFoodTypeSelectFilter />
            <Separator />
            <CustomerBudgetFilter />
            <Separator />
            <CustomerPaymentMethodFilter />
            <Separator />
            <CustomerAmenityFilter />
        </div>
    )
})
