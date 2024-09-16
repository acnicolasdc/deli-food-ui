import * as React from "react";
import { atom, useAtom } from "jotai";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const MOCK_DATA = [
    { label: 'Efectivo', id: '1' },
    { label: 'Transferencia', id: '2' },
    { label: 'Tarjetas credito / cebito', id: '3' },
]

export const customerPaymentMethodFilterAtom = atom<string[]>([]);
export function CustomerPaymentMethodFilter() {
    const [payments, setPayments] = useAtom(customerPaymentMethodFilterAtom);
    const handleSetPaymentMethod = (id: string) => {
        const foundIndex = payments.findIndex((payment) => payment === id);
        if (foundIndex < 0) return setPayments([...payments, id]);
        return setPayments(payments.filter((payment) => payment !== id));
    }

    return (
        <div className='gap-2'>
            <Label className='font-semibold text-md'>
                Metodos de Pago
            </Label>
            <p className='text-xs mb-4 text-muted-foreground'>Selecciona el valor minimo y maximo a pagar</p>
            <div className='flex flex-col gap-4'>
                {MOCK_DATA.map(({ id, label }) => {
                    const checked = !!payments.find((payment) => payment === id);
                    return (
                        <div className="items-center flex space-x-2 justify-center" key={id}>
                            <div className="flex flex-1 items-center">
                                <Label
                                    htmlFor={`method_${id}`}
                                    className='font-normal'
                                >
                                    {label}
                                </Label>
                            </div>
                            <Checkbox
                                className='w-5 h-5'
                                id={`method_${id}`}
                                checked={checked}
                                onCheckedChange={() => handleSetPaymentMethod(id)}
                            />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
