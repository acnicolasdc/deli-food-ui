import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { MultiSelect } from "@/components/ui/multi-select";
import { usePaymentMethodSelectFilter } from "./use-payment-method-select-filter";
import { FieldCheckListItem } from "@/components/field/field-check-list-item";
import { AnimationCheckListLoadingIndicator } from "@/components/animation/animation-check-list-loading-indicator";


export enum EPaymentMethodSelectFilterMode {
    select = 'select',
    multiSelect = 'multi-select',
    checkList = 'checklist'
}

export interface IPaymentMethodSelectFilterProps {
    mode?: EPaymentMethodSelectFilterMode;
    value?: string[] | string;
    onValueChange: (value?: string[] | string) => void
}
export function PaymentMethodSelectFilter({ onValueChange, value: payments, mode = EPaymentMethodSelectFilterMode.checkList }: IPaymentMethodSelectFilterProps) {
    const { data, isFetching } = usePaymentMethodSelectFilter()
    const handleSetPaymentMethod = (id: string) => {
        if (Array.isArray(payments)) {
            const localValue = payments;
            const foundIndex = localValue.findIndex((payment) => payment === id);
            if (foundIndex < 0) return onValueChange([...localValue, id]);
            return onValueChange(localValue.filter((payment) => payment !== id));
        }
        return onValueChange(payments);
    }

    if (mode === EPaymentMethodSelectFilterMode.multiSelect) {
        return <MultiSelect onValueChange={onValueChange} options={data}  value={payments as string[]}/>
    }

    if (mode === EPaymentMethodSelectFilterMode.select) {
        return (
            <Select disabled={isFetching} onValueChange={onValueChange} value={payments as string}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccione el metodo de pago" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Metodos de Pago</SelectLabel>
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
            <div className='flex flex-col gap-4'>
                {data.map(({ value, name }) => {
                    const checked = !!((payments || []) as string[]).find((payment) => payment === value);
                    return (
                        <FieldCheckListItem
                            key={value}
                            name={name}
                            checked={checked}
                            value={String(value)}
                            onCheckedChange={handleSetPaymentMethod}
                        />
                    )
                })}
            </div>
        </AnimationCheckListLoadingIndicator>
    )
}
