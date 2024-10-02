import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multi-select";
import { useServiceTypeSelectFilter } from "./use-service-type-select-filter";
import { AnimationCheckListLoadingIndicator } from "@/components/animation/animation-check-list-loading-indicator";
import { FieldCheckListItem } from "@/components/field/field-check-list-item";

export enum EServiceTypeSelectFilterMode {
    select = 'select',
    multiSelect = 'multi-select',
    checkList = 'checklist'
}

export interface IServiceTypeSelectFilterProps {
    mode?: EServiceTypeSelectFilterMode;
    value?: string[] | string;
    disabled?: boolean;
    onValueChange: (value?: string[] | string) => void
}
export function ServiceTypeSelectFilter({ onValueChange, value: services, disabled, mode = EServiceTypeSelectFilterMode.checkList }: IServiceTypeSelectFilterProps) {
    const { data, isFetching } = useServiceTypeSelectFilter();
    const handleSetPaymentMethod = (id: string) => {
        if (Array.isArray(services)) {
            const localValue = services;
            const foundIndex = localValue.findIndex((service) => service === id);
            if (foundIndex < 0) return onValueChange([...localValue, id]);
            return onValueChange(localValue.filter((service) => service !== id));
        }
        return onValueChange(services);
    }

    if (mode === EServiceTypeSelectFilterMode.multiSelect) {
        return <MultiSelect onValueChange={onValueChange} options={data} value={services as string[]}/>
    }

    if (mode === EServiceTypeSelectFilterMode.select) {
        return (
            <Select disabled={isFetching} onValueChange={onValueChange} value={services as string}>
                <SelectTrigger className="w-full" value={services}>
                    <SelectValue placeholder="Seleccione tipo de servicio" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Tipos de servicio</SelectLabel>
                        {data.map(({ name, value }) => {
                            return <SelectItem key={value} value={String(value)}>{name}</SelectItem>
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>
        )
    }


    return (
        <AnimationCheckListLoadingIndicator isLoading={isFetching}>
            <div className='grid grid-cols-2 gap-4 gap-x-8'>
                {data.map(({ value, name }) => {
                    const checked = !!((services || []) as string[]).find((service) => service === value);
                    return (
                        <FieldCheckListItem
                            key={value}
                            name={name}
                            checked={checked}
                            value={String(value)}
                            disabled={disabled}
                            onCheckedChange={handleSetPaymentMethod}
                        />
                    )
                })}
            </div>
        </AnimationCheckListLoadingIndicator>
    )
}
