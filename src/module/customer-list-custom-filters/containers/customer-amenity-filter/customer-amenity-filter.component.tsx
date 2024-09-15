import * as React from "react"
import { Label } from "@/components/ui/label"
import { Toggle } from "@/components/ui/toggle";

export function CustomerAmenityFilter() {
    return (
        <div className='gap-2'>
            <Label className='font-semibold text-md'>
                Amenidades
            </Label>
            <div className='flex flex-row flex-wrap gap-2 pt-4'>
                <Toggle variant="outline" aria-label="Toggle italic" size="sm" className='rounded-full'>Wifi</Toggle>
                <Toggle variant="outline" aria-label="Toggle italic" size="sm" className='rounded-full'>Parqueadero</Toggle>
                <Toggle variant="outline" aria-label="Toggle italic" size="sm" className='rounded-full'>Zona VIP</Toggle>
                <Toggle variant="outline" aria-label="Toggle italic" size="sm" className='rounded-full'>Aire acondicionado</Toggle>
            </div>
        </div>
    )
}
