import * as React from "react"
import { Label } from "@/components/ui/label"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { atom, useAtom } from "jotai";

export const MOCK_DATA = [
    { label: 'Wifi', id: '1' },
    { label: 'Parqueadero', id: '2' },
    { label: 'Zona VIP', id: '3' },
    { label: 'Aire acondicionado', id: '4' },
]

export const customerAmenityFilterAtom = atom<string[]>([]);
export function CustomerAmenityFilter() {
    const [amenities, setAmenities] = useAtom(customerAmenityFilterAtom);
    const handleSetAmenity = (selectedAmenities: string[]) => {
        return setAmenities(selectedAmenities);
    }
    return (
        <div className='gap-2'>
            <Label className='font-semibold text-md'>
                Amenidades
            </Label>
            <ToggleGroup
                className='flex flex-row flex-wrap gap-2 pt-4 justify-start'
                type="multiple"
                value={amenities}
                onValueChange={handleSetAmenity}
            >
                {MOCK_DATA.map(({ id, label }) => {
                    return (
                        <ToggleGroupItem
                            key={id}
                            size="sm"
                            variant="outline"
                            aria-label={`toggle_${id}}`}
                            className='rounded-full'
                            value={id}
                        >
                            {label}
                        </ToggleGroupItem>
                    )
                })}
            </ToggleGroup>
        </div>
    )
}
