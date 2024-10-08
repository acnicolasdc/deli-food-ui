import * as React from "react"
import { Label } from "@/components/ui/label";
import { CardinalPointSelectFilter } from "@/containers/cardinal-point-select-filter";
import { TUserCardinalPointSelectAtom, useUserCardinalPointSelectFilter } from "./use-user-cardinal-point-select-filter";
import { userCitySelectAtom } from "../user-city-select-filter/use-user-city-select-filter";
import { useAtomValue } from "jotai";

export function UserCardinalPointSelectFilter() {
    const city = useAtomValue(userCitySelectAtom);
    const { cardinalPoint, setCardinalPoint } = useUserCardinalPointSelectFilter();
    return (
        <div className='space-y-4 w-full'>
            <Label>A que sector quieres ir?</Label>
            <CardinalPointSelectFilter onValueChange={(value) => setCardinalPoint(value as TUserCardinalPointSelectAtom)} value={cardinalPoint?.value} cityId={city?.value}/>
        </div>
    )
}
