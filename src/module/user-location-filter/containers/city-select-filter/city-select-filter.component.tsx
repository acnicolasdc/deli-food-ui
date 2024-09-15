import * as React from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type TCityItem = {
    name: string;
    value: string;
}
export function CitySelectFilter() {
    const data: TCityItem[] = [{ name: 'Cali', value: '1' }];
    return (
        <div className='space-y-4'>
            <Label>En que ciudad estas?</Label>
            <Select defaultValue={data[0].value}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona tu ciudad" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {data.map(({ name, value }) => <SelectItem value={value} key={name}>{name}</SelectItem>)}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
