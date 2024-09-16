import * as React from "react"
import { EFieldSlideSelectType, FieldSlideSelect } from "@/components/field/field-slide-select";

import collard from '../../../../../public/collard.png';
import international from '../../../../../public/international.png';
import ramen from '../../../../../public/ramen.png';
import sushi from '../../../../../public/sushi.png';
import burger from '../../../../../public/burger.png';
import { Label } from "@/components/ui/label";
import { atom, useAtom } from "jotai";

const MOCK_DATA = [
    {
        name: 'Vegana',
        value: '1',
        image: collard
    },
    {
        name: 'Internacional',
        value: '2',
        image: international
    },
    {
        name: 'Vietnamita',
        value: '3',
        image: ramen
    },
    {
        name: 'Asiatica',
        value: '4',
        image: sushi
    },
    {
        name: 'Rapida',
        value: '5',
        image: burger
    },
];

export interface ICustomerFoodTypeSelectFilterProps {
    type: EFieldSlideSelectType;
}

export type TCustomerFoodTypeSelectAtom = { label: string, id: string };

export const customerFoodTypeSelectAtom = atom<TCustomerFoodTypeSelectAtom | undefined>(undefined);
export function CustomerFoodTypeSelectFilter() {
    const [foodType, setFoodType] = useAtom(customerFoodTypeSelectAtom);
    return (
        <div className='flex flex-col gap-2'>
            <Label className='font-semibold text-md'>
                Tipo de producto
            </Label>
            <p className='text-xs mb-4 text-muted-foreground'>Selecciona que producto buscas</p>
            <FieldSlideSelect data={MOCK_DATA} variant="outline"
                value={foodType?.id}
                onValueChange={setFoodType}
            />
        </div>
    )
}
