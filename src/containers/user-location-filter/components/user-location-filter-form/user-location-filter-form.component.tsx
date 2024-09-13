import * as React from "react"
import Image from 'next/image';
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import flora from '../../../../../public/places/flora.png';
import granada from '../../../../../public/places/granada.png';
import jardin from '../../../../../public/places/jardin.png';
import novena from '../../../../../public/places/novena.png';
import pance from '../../../../../public/places/pance.png';
import penon from '../../../../../public/places/penon.png';
import sanAntonio from '../../../../../public/places/san-antonio.png';
import sanFernando from '../../../../../public/places/san-fernando.png';
import dapa from '../../../../../public/places/dapa.png';
import bocha from '../../../../../public/places/bocha.png';
import ingenio from '../../../../../public/places/ingenio.png';
import jamundi from '../../../../../public/places/jamundi.png';
import afueras from '../../../../../public/places/afueras.png';
import km from '../../../../../public/places/km.png';
import { Separator } from "@/components/ui/separator";


export function UserLocationFilterForm({ className }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col p-4 pb-12 w-full gap-6", className)}>
            <div className='space-y-4'>
                <Label>En que ciudad estas?</Label>
                <Select defaultValue='apple'>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona tu ciudad" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="apple">Cali</SelectItem>
                            <SelectItem value="banana">Medellin</SelectItem>
                            <SelectItem value="blueberry">Bogota</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <Separator />
            <div className='space-y-4 w-full'>
                <Label>A que zona quieres ir?</Label>
                <div className='flex flex-row overflow-hidden overflow-x-auto space-x-4 no-scrollbar w-full md:grid md:grid-cols-4 md:gap-2 md:space-x-0'>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={sanFernando}
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt='Picture san fernando'
                        />
                        <Label className="text-xs">San Fernando</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={jardin}
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt='Picture jardin'
                        />
                        <Label className="text-xs">Ciudad Jardin</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={flora}
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt='Picture flora'
                        />
                        <Label className="text-xs">La Flora</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={granada}
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt='Picture granada'
                        />
                        <Label className="text-xs">Granada</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={sanAntonio}
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt='Picture san antonio'
                        />
                        <Label className="text-xs">San Antonio</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={penon}
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt='Picture penon'
                        />
                        <Label className="text-xs">Peñon</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 bg-blue-100 border-2 border-blue-400 rounded-lg'>
                        <Image
                            src={novena}
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt='Picture novena'
                        />
                        <Label className='text-blue-400 text-xs'>La Novena</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={ingenio}
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt='Picture ingenio'
                        />
                        <Label className="text-xs">Ingenio</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={bocha}
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt='Picture bocha'
                        />
                        <Label className="text-xs">Bochalema</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={pance}
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt='Picture pance'
                        />
                        <Label className="text-xs">Pance</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={jamundi}
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt='Picture jamundi'
                        />
                        <Label className="text-xs">Jamundi</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={dapa}
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt='Picture dapa'
                        />
                        <Label className="text-xs">Dapa</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={km}
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt='Picture km'
                        />
                        <Label className="text-xs">KM 18</Label>
                    </div>
                    <div className='flex items-center justify-center flex-col space-y-2 h-20 min-w-24 md:h-20 md:min-w-24 border border-slate-100 rounded-lg'>
                        <Image
                            src={afueras}
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt='Picture afueras'
                        />
                        <Label className="text-xs">A las Afueras</Label>
                    </div>
                </div>
            </div>
        </div>
    )
}
