import * as React from "react"
import { atom, useAtom } from "jotai";
import { Label } from "@/components/ui/label";
import { AmenitySelectFilter } from "@/containers/amenity-select-filter";

export const customerAmenityFilterAtom = atom<string[]>([]);
export function CustomerAmenityFilter() {
    const [amenities, setAmenities] = useAtom(customerAmenityFilterAtom);
    return (
        <div className='gap-2'>
            <Label className='font-semibold text-md'>
                Amenidades
            </Label>
            <AmenitySelectFilter onValueChange={(value) => {
                if (Array.isArray(value)) setAmenities(value)
            }} value={amenities} />
        </div>
    )
}
