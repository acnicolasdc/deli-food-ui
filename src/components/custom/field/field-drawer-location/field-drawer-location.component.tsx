import Image from 'next/image';

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

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Label } from '@/components/ui/label';

export interface IFieldDrawerLocationProps {
    className?: string
}

export function FieldDrawerLocation({ className }: IFieldDrawerLocationProps) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <div className={`flex flex-row bg-slate-100 px-1 py-2 rounded-full flex-1 ${className}`}>
                    <div className='flex flex-1 justify-start items-center'>
                        <MagnifyingGlassIcon className='w-6 h-6 ml-2 md:ml-4 mr-4' />
                        <div>
                            <p className='text-sm font-medium'>A donde quieres ir ?</p>
                            <p className='text-xs text-muted-foreground'>San Antonio • Pance • Granada </p>
                        </div>
                    </div>
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full">
                    <DrawerHeader>
                        <DrawerTitle>A donde quieres ir?</DrawerTitle>
                        <DrawerDescription>Asi podemos recomendar un lugar que se ajuste a lo que buscas</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex flex-col p-4 pb-12 w-full gap-6">
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
                        <div className='space-y-4 w-full'>
                            <Label>A que zona quieres ir?</Label>
                            <div className='flex flex-row overflow-hidden overflow-x-auto space-x-4 no-scrollbar w-full'>
                                <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                                    <Image
                                        src={sanFernando}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        alt='Picture san fernando'
                                    />
                                    <Label className="text-xs">San Fernando</Label>
                                </div>
                                <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                                    <Image
                                        src={jardin}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        alt='Picture jardin'
                                    />
                                    <Label className="text-xs">Ciudad Jardin</Label>
                                </div>
                                <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                                    <Image
                                        src={flora}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        alt='Picture flora'
                                    />
                                    <Label className="text-xs">La Flora</Label>
                                </div>
                                <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                                    <Image
                                        src={granada}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        alt='Picture granada'
                                    />
                                    <Label className="text-xs">Granada</Label>
                                </div>
                                <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                                    <Image
                                        src={sanAntonio}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        alt='Picture san antonio'
                                    />
                                    <Label className="text-xs">San Antonio</Label>
                                </div>
                                <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                                    <Image
                                        src={penon}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        alt='Picture penon'
                                    />
                                    <Label className="text-xs">Peñon</Label>
                                </div>
                                <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-blue-100 border-2 border-blue-400 rounded-lg'>
                                    <Image
                                        src={novena}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        alt='Picture novena'
                                    />
                                    <Label className='text-blue-400 text-xs'>La Novena</Label>
                                </div>
                                <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                                    <Image
                                        src={ingenio}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        alt='Picture ingenio'
                                    />
                                    <Label className="text-xs">Ingenio</Label>
                                </div>
                                <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                                    <Image
                                        src={bocha}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        alt='Picture bocha'
                                    />
                                    <Label className="text-xs">Bochalema</Label>
                                </div>
                                <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                                    <Image
                                        src={pance}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        alt='Picture pance'
                                    />
                                    <Label className="text-xs">Pance</Label>
                                </div>
                                <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                                    <Image
                                        src={jamundi}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        alt='Picture jamundi'
                                    />
                                    <Label className="text-xs">Jamundi</Label>
                                </div>
                                <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                                    <Image
                                        src={dapa}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        alt='Picture dapa'
                                    />
                                    <Label className="text-xs">Dapa</Label>
                                </div>
                                <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                                    <Image
                                        src={km}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        alt='Picture km'
                                    />
                                    <Label className="text-xs">KM 18</Label>
                                </div>
                                <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                                    <Image
                                        src={afueras}
                                        className="w-10 h-10 md:w-12 md:h-12"
                                        alt='Picture afueras'
                                    />
                                    <Label className="text-xs">A las Afueras</Label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
