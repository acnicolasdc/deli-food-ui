import * as React from "react"
import { FieldSlideSelect } from "@/components/field/field-slide-select";

import collard from '../../../../../public/collard.png';
import international from '../../../../../public/international.png';
import ramen from '../../../../../public/ramen.png';
import sushi from '../../../../../public/sushi.png';
import burger from '../../../../../public/burger.png';
import { Label } from "@/components/ui/label";

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
        value: '4',
        image: burger
    },
];
export function CustomerFoodTypeSelectFilter() {
    return (
        <div className='flex flex-col gap-2'>
            <Label className='font-semibold text-md'>
                Tipo de producto
            </Label>
            <p className='text-xs mb-4 text-muted-foreground'>Selecciona que producto buscas</p>
            <FieldSlideSelect data={MOCK_DATA} variant="outline" />
        </div>
    )
}
