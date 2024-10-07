import * as React from "react"
import { atom, useAtom } from 'jotai';
import { Label } from "@/components/ui/label";
import { EFieldSlideSelectType } from "@/components/field/field-slide-select";
import { ZoneSelectFilter } from "@/containers/zone-select-filter";
import { useUserCardinalPointSelectFilter } from "../user-cardinal-point-select-filter";


export interface IUserZoneSlideSelectFilterProps {
    type: EFieldSlideSelectType;
}

export type TUserZoneSlideAtom = { name: string, value: string | number };

export const userZoneSlideAtom = atom<TUserZoneSlideAtom | undefined>(undefined);

export function UserZoneSlideSelectFilter({ type }: IUserZoneSlideSelectFilterProps) {
    const [zone, setZone] = useAtom(userZoneSlideAtom);
    const { cardinalPoint } = useUserCardinalPointSelectFilter();
    if (!cardinalPoint?.value) return false;
    return (
        <div className='space-y-4 w-full'>
            <Label>A que zona quieres ir?</Label>
            <ZoneSelectFilter type={type} onValueChange={(value) => setZone(value as TUserZoneSlideAtom)} value={zone?.value} />
        </div>
    )
}
