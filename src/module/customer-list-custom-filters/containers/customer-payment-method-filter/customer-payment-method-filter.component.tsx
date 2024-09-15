import * as React from "react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function CustomerPaymentMethodFilter() {
    return (
        <div className='gap-2'>
            <Label className='font-semibold text-md'>
                Metodos de Pago
            </Label>
            <p className='text-xs mb-4 text-muted-foreground'>Selecciona el valor minimo y maximo a pagar</p>
            <div className='flex flex-col gap-4'>
                <div className="items-center flex space-x-2 justify-center">
                    <div className="flex flex-1 items-center">
                        <Label
                            htmlFor="terms1"
                            className='font-normal'
                        >
                            Efectivo
                        </Label>
                    </div>
                    <Checkbox className='w-5 h-5' id="terms1" />
                </div>
                <div className="items-center flex space-x-2 justify-center">
                    <div className="flex flex-1 items-center">
                        <Label
                            htmlFor="terms2"
                            className='font-normal'
                        >
                            Transferencia
                        </Label>
                    </div>
                    <Checkbox className='w-5 h-5' id="terms2" />
                </div>
                <div className="items-center flex space-x-2 justify-center">
                    <div className="flex flex-1 items-center">
                        <Label
                            htmlFor="terms3"
                            className='font-normal'
                        >
                            Tarjetas credito / cebito
                        </Label>
                    </div>
                    <Checkbox className='w-5 h-5' id="terms3" />
                </div>
            </div>
        </div>
    )
}
