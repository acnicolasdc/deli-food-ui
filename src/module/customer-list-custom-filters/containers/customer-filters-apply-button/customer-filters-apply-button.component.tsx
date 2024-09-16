import * as React from "react"
import { atom, useAtom } from "jotai";
import { Button } from "@/components/ui/button"
import { customerAmenityFilterAtom } from "../customer-amenity-filter";
import { allFilterValuesAreFalse, customerBudgetFilterAtom, defaultCustomerBudgetFilterAtomValue } from "../customer-budget-filter";
import { customerFoodTypeSelectAtom } from "../customer-food-type-select-filter";
import { customerPaymentMethodFilterAtom } from "../customer-payment-method-filter";

import type { TCustomerFoodTypeSelectAtom } from "../customer-food-type-select-filter";
import type { TCustomerBudgetFilterAtom } from "../customer-budget-filter";

const defaultUserLocationFilterValue = {
    amenities: [],
    budget: defaultCustomerBudgetFilterAtomValue,
    foodType: undefined,
    paymentMethods: [],
}

export interface ICustomerFiltersApplyButtonProps {
    onSuccess?: () => void
    onError?: () => void
}

export type TCustomerFiltersApplyButtonAtom = {
    budget: TCustomerBudgetFilterAtom,
    foodType: TCustomerFoodTypeSelectAtom | undefined,
    amenities: string[],
    paymentMethods: string[],
};

export const customerFiltersApplyButtonAtom = atom<TCustomerFiltersApplyButtonAtom>(defaultUserLocationFilterValue);
export function CustomerFiltersApplyButton({ onSuccess }: ICustomerFiltersApplyButtonProps) {
    const [_, serParams] = useAtom(customerFiltersApplyButtonAtom);
    const [amenities, setAmenities] = useAtom(customerAmenityFilterAtom);
    const [budget, setBudget] = useAtom(customerBudgetFilterAtom);
    const [foodType, setFoodType] = useAtom(customerFoodTypeSelectAtom);
    const [paymentMethods, setPaymentMethods] = useAtom(customerPaymentMethodFilterAtom);

    const shouldDisableButton = !amenities.length && allFilterValuesAreFalse(budget) && !foodType && !paymentMethods.length;

    const checkIfThereAreFilters = (callback: () => void) => {
        if (shouldDisableButton) return;
        callback();
    }
    const handleApplyParams = () => checkIfThereAreFilters(() => serParams({ amenities, budget, paymentMethods, foodType }));

    const handleClearParams = () => checkIfThereAreFilters(() => {
        serParams(defaultUserLocationFilterValue);
        setBudget(defaultCustomerBudgetFilterAtomValue);
        setAmenities([]);
        setFoodType(undefined);
        setPaymentMethods([])
        onSuccess?.();
    });

    const handleOnClickButton = () => {
        handleApplyParams();
        onSuccess?.();
    }

    return (
        <div className="flex flex-row justify-end gap-6">
            <Button
                variant="link"
                disabled={shouldDisableButton}
                onClick={handleClearParams}
            >
                Limpiar Filtros
            </Button>

            <Button
                variant="delifood"
                disabled={shouldDisableButton}
                onClick={handleOnClickButton}
            >
                Buscar
            </Button>
        </div>

    )
}
