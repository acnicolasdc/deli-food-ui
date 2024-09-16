import * as React from "react"
import { useAtomValue } from "jotai"
import { Button } from "@/components/ui/button"
import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { customerFiltersApplyButtonAtom } from "../customer-filters-apply-button";
import { allFilterValuesAreFalse } from "../customer-budget-filter";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface ICustomerFilterModalTriggerProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
export function CustomerFilterModalTrigger({ className, ...props }: ICustomerFilterModalTriggerProps) {
    const { amenities, budget, foodType, paymentMethods } = useAtomValue(customerFiltersApplyButtonAtom);
    const countFilterBadge = () => {
        let countFilter = 0;
        if (!!foodType) countFilter = countFilter + 1;
        if (!!amenities.length) countFilter = countFilter + 1;
        if (!!paymentMethods.length) countFilter = countFilter + 1;
        if (!allFilterValuesAreFalse(budget)) countFilter = countFilter + 1;
        return countFilter;
    }
    const shouldDisableButton = !amenities.length && allFilterValuesAreFalse(budget) && !foodType && !paymentMethods.length;
    const addClassName = `${className || ''}${shouldDisableButton ? '' : 'border-2 !border-blue-400'}`;
    return (
        <Button
            variant="outline"
            className={cn('rounded-full h-12 relative', addClassName)}
            {...props}
        >
            {shouldDisableButton ? false : <Badge className="absolute -top-1 -right-1 px-2 bg-blue-400">{countFilterBadge()}</Badge>}
            <MixerHorizontalIcon />
        </Button>
    )
}
