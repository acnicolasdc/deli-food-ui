import * as React from "react"
import Image from 'next/image';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import collard from '../../../../../public/collard.png';
import international from '../../../../../public/international.png';
import ramen from '../../../../../public/ramen.png';
import sushi from '../../../../../public/sushi.png';
import burger from '../../../../../public/burger.png';
import { Toggle } from "@/components/ui/toggle";

export function CustomerCustomFiltersForm({ className }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col w-full gap-4 pb-4 overflow-hidden overflow-y-auto no-scrollbar px-6", className)}>
            <div className='flex flex-col gap-2'>
                <Label className='font-semibold text-md'>
                    Tipo de producto
                </Label>
                <p className='text-xs mb-4 text-muted-foreground'>Selecciona que producto buscas</p>
                <div className='flex flex-row overflow-hidden overflow-x-auto gap-4 no-scrollbar max-w-full'>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={international}
                            className="w-6 h-6 md:w-6 md:h-6"
                            alt='Picture international'
                        />
                        <Label className="text-xs">Internacional</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={burger}
                            className="w-6 h-6 md:w-6 md:h-6"
                            alt='Picture burger'
                        />
                        <Label className="text-xs">Rapida</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={sushi}
                            className="w-6 h-6 md:w-6 md:h-6"
                            alt='Picture sushi'
                        />
                        <Label className="text-xs">Asiatica</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={ramen}
                            className="w-6 h-6 md:w-6 md:h-6"
                            alt='Picture ramen'
                        />
                        <Label className="text-xs">Vietnamita</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={collard}
                            className="w-6 h-6 md:w-6 md:h-6"
                            alt='Picture collard'
                        />
                        <Label className="text-xs">Vegana</Label>
                    </div>

                </div>
            </div>
            <Separator />
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
            <Separator />
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
            <Separator />
            <div className='gap-2'>
                <Label className='font-semibold text-md'>
                    Amenidades
                </Label>
                <div className='flex flex-row flex-wrap gap-2 pt-4'>
                    <Toggle variant="outline" aria-label="Toggle italic" size="sm" className='rounded-full'>Wifi</Toggle>
                    <Toggle variant="outline" aria-label="Toggle italic" size="sm" className='rounded-full'>Parqueadero</Toggle>
                    <Toggle variant="outline" aria-label="Toggle italic" size="sm" className='rounded-full'>Zona VIP</Toggle>
                    <Toggle variant="outline" aria-label="Toggle italic" size="sm" className='rounded-full'>Aire acondicionado</Toggle>
                </div>
            </div>
        </div>
    )
}
