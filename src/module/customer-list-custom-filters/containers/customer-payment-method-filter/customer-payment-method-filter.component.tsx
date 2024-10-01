import * as React from "react";
import { atom, useAtom } from "jotai";
import { Label } from "@/components/ui/label";
import { PaymentMethodSelectFilter } from "@/containers/payment-method-select-filter";


export const customerPaymentMethodFilterAtom = atom<string[]>([]);
export function CustomerPaymentMethodFilter() {
    const [payments, setPayments] = useAtom(customerPaymentMethodFilterAtom);

    return (
        <div className='gap-2'>
            <Label className='font-semibold text-md'>
                Metodos de Pago
            </Label>
            <p className='text-xs mb-4 text-muted-foreground'>Selecciona los metodos de pago de tu preferencia</p>
            <PaymentMethodSelectFilter
                onValueChange={(values) => {
                    if (Array.isArray(values)) setPayments(values)
                }} value={payments} />
        </div>
    )
}
