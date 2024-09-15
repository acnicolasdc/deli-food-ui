import * as React from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CustomerBudgetFilter() {
    return (

        <div className='space-y-4'>
            <div>
                <Label className='font-semibold text-md'>
                    Presupuesto
                </Label>
                <p className='text-xs mb-4 text-muted-foreground'>Selecciona el valor maximo a pagar</p>
                <div className='w-full'>
                    <Input placeholder='Ejemplo $150.000' className='w-full' />
                </div>
            </div>
            <div className='pl-2'>
                <Label className='font-medium'>
                    Para cuantas personas ?
                </Label>
                <p className='text-xs mb-4 text-muted-foreground'>Buscaremos un restaurante que se ajuste a tu presupuesto por la cantidad de personas</p>
                <div className='flex flex-row gap-6 items-center'>
                    <Button variant="outline" >
                        <MinusIcon className='h-2 w-2' />
                    </Button>
                    <p>2</p>
                    <Button variant="outline">
                        <PlusIcon className='h-2 w-2' />
                    </Button>
                </div>
            </div>
            <div className='pl-2'>
                <Label className='font-medium'>
                    Tipo de plan
                </Label>
                <p className='text-xs mb-4 text-muted-foreground'>Cuentanos que esperas conseguir con el presupuesto</p>
                <div >
                    <Select defaultValue='apple'>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecciona el plan" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="apple">Plato + Bebida</SelectItem>
                                <SelectItem value="banana">Plato + Bebida + Postre</SelectItem>
                                <SelectItem value="blueberry">Plato + Bebida + Postre + Entrada</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>

    )
}
