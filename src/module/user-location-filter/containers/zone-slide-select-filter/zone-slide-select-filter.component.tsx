import * as React from "react"
import { atom, useAtom } from 'jotai';
import { Label } from "@/components/ui/label";
import { FieldSlideSelect, EFieldSlideSelectType, FieldSlideSelectLoadingIndicator } from "@/components/field/field-slide-select";
import { useZoneSlideSelectFilter } from "./use-zone-slide-select-filter";
export interface IZoneSlideSelectFilterProps {
    type: EFieldSlideSelectType;
}

export type TZoneSlideAtom = { name: string, value: string | number };

export const zoneSlideAtom = atom<TZoneSlideAtom | undefined>(undefined);

export function ZoneSlideSelectFilter({ type }: IZoneSlideSelectFilterProps) {
    const [zone, setZone] = useAtom(zoneSlideAtom);
    const { isFetching, data } = useZoneSlideSelectFilter();
    if (!data.length) return undefined;
    return (
        <div className='space-y-4 w-full'>
            <Label>A que zona quieres ir?</Label>
            <FieldSlideSelectLoadingIndicator type={type} isLoading={isFetching}>
                <FieldSlideSelect
                    data={data}
                    variant="outline"
                    type={type}
                    value={zone?.value}
                    onValueChange={setZone}
                />
            </FieldSlideSelectLoadingIndicator>
        </div>
    )
}
