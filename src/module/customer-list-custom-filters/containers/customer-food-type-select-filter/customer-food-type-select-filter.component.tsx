import * as React from "react"
import { atom, useAtom } from "jotai";
import { Label } from "@/components/ui/label";
import { FoodTypeSelectFilter } from "@/containers/food-type-select-filter";


export type TCustomerFoodTypeSelectAtom = { name: string, value: string | number };

export const customerFoodTypeSelectAtom = atom<TCustomerFoodTypeSelectAtom | undefined>(undefined);
export function CustomerFoodTypeSelectFilter() {
    const [foodType, setFoodType] = useAtom(customerFoodTypeSelectAtom);
    return (
        <div className='flex flex-col gap-2'>
            <Label className='font-semibold text-md'>
                Tipo de producto
            </Label>
            <p className='text-xs mb-4 text-muted-foreground'>Selecciona que producto buscas</p>
            <FoodTypeSelectFilter
                value={foodType?.value}
                onValueChange={(value) => {
                    setFoodType(value as TCustomerFoodTypeSelectAtom)
                }} />
        </div>
    )
}
