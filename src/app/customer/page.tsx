'use client'
import Image from 'next/image';
import logoDeliFood from '../../../public/logo.png';
import { UserLocationFilter } from '@/containers/user-location-filter';
import { CustomerListCustomFilters } from '@/containers/customer-list-custom-filters';
import paso from '../../../public/restaurant/paso.jpg';
import candy from '../../../public/candy.png';
import drink from '../../../public/drink.png';
import entrance from '../../../public/entrance.png';
import main from '../../../public/main.png';

import { Badge } from '@/components/ui/badge';
import { ClockIcon, HeartFilledIcon, ScissorsIcon } from '@radix-ui/react-icons';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Customer() {
    return (
        <main className="flex min-h-screen flex-col">
            <div className='px-0'>
                <nav className="w-full flex items-center gap-6 md:gap-8 relative justify-center py-4 md:py-2 px-2 md:px-8 flex-wrap md:border-b">
                    <div className='flex h-full w-full md:w-auto items-center justify-center md:justify-start md:border-r md:pr-6'>
                        <div className='flex items-center justify-center'>
                            <Image src={logoDeliFood} alt='Picture of the author' width={0}
                                height={20}
                            />
                        </div>
                    </div>
                    <div className='flex flex-row flex-1 h-full gap-2 md:gap-4 justify-center'>
                        <UserLocationFilter />
                        <CustomerListCustomFilters />
                    </div>
                </nav>
            </div>
            <div className='flex flex-col flex-1 px-4 gap-4 md:gap-6 md:px-[10%] py-2 md:py-12'>
                <div className='flex flex-row w-full'>
                    <h1 className='text-2xl font-semibold'>Cali, Pance, Comida Rapida</h1>
                    <div className='flex flex-1 justify-end'> <Badge className='bg-blue-500 shadow-lg text-sm font-normal'>
                        <HeartFilledIcon className='mr-1' /> Delifood
                    </Badge></div>
                </div>
                <div className='flex flex-col w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden'
                    style={{
                        backgroundImage: `url(${paso.src})`,
                        backgroundSize: 'cover'
                    }}
                >
                </div>
                <div className='flex flex-col md:flex-row md:gap-12 gap-6'>
                    <div className='flex flex-col flex-1 gap-6'>
                        <div>
                            <h2 className='text-xl font-semibold'>El Paso Hamburguesa</h2>
                            <p className='text-base'>Carrera 54a #5a - 52, Cali Colombia</p>
                        </div>
                        <Separator />
                        <div className='flex flex-col gap-4'>
                            <Label className='text-base'>Horarios de Servicio</Label>
                            <div className='grid gap-4 grid-cols-2 md:gap-6'>
                                <div>
                                    <Label className='font-semibold'>Lunes a Viernes</Label>
                                    <p className='text-muted-foreground'>12:00 PM - 10:00PM</p>
                                </div>
                                <div>
                                    <Label className='font-semibold'>Fines de Semana</Label>
                                    <p className='text-muted-foreground'>8:00 AM - 11:00PM</p>
                                </div>
                                <div>
                                    <Label className='font-semibold'>Festivos</Label>
                                    <p className='text-muted-foreground'>2:00 PM - 01:00AM</p>
                                </div>
                            </div>
                        </div>
                        <Separator />
                        <div className='flex flex-col gap-4'>
                            <Label className='text-base'>Informacion General</Label>
                            <div className='flex flex-col gap-6'>
                                <div className='flex flex-row gap-6'>
                                    <ClockIcon className='h-6 w-6' />
                                    <div>
                                        <Label className='font-semibold'>Tiempo Estimado de atencion</Label>
                                        <p className='text-muted-foreground'>De 20 a 30 Minutos</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-6'>
                                    <ScissorsIcon className='h-6 w-6' />
                                    <div>
                                        <Label className='font-semibold'>Precio Promedio por Persona</Label>
                                        <p className='text-muted-foreground'>Entre $30.000 - $50.000 Pesos COP</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Separator />
                        <div className='flex flex-col gap-4'>
                            <Label className='text-base'>Metodos de Pago</Label>
                            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
                                <div className='flex flex-row items-center gap-6'>
                                    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5c-.655 0-.66 1.01 0 1h22c.286 0 .5.214.5.5v13c0 .66 1 .66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2c-.654 0-.654 1 0 1h22c.286 0 .5.214.5.5v13c0 .665 1.01.66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2C.678 9 0 9.678 0 10.5v12c0 .822.678 1.5 1.5 1.5h22c.822 0 1.5-.678 1.5-1.5v-12c0-.822-.678-1.5-1.5-1.5h-22zm0 1h22c.286 0 .5.214.5.5v12c0 .286-.214.5-.5.5h-22c-.286 0-.5-.214-.5-.5v-12c0-.286.214-.5.5-.5zm1 1c-.276 0-.5.224-.5.5v2c0 .672 1 .656 1 0V12h1.5c.672 0 .656-1 0-1h-2zm10 0C9.468 11 7 13.468 7 16.5S9.468 22 12.5 22s5.5-2.468 5.5-5.5-2.468-5.5-5.5-5.5zm8 0c-.656 0-.672 1 0 1H22v1.5c0 .656 1 .672 1 0v-2c0-.276-.224-.5-.5-.5h-2zm-8 1c2.49 0 4.5 2.01 4.5 4.5S14.99 21 12.5 21 8 18.99 8 16.5s2.01-4.5 4.5-4.5zm0 1c-.277 0-.5.223-.5.5v.594c-.578.21-1 .76-1 1.406 0 .82.68 1.5 1.5 1.5.28 0 .5.212.5.5 0 .288-.22.5-.5.5h-1c-.338-.005-.5.248-.5.5s.162.505.5.5h.5v.5c0 .277.223.5.5.5s.5-.223.5-.5v-.594c.578-.21 1-.76 1-1.406 0-.82-.68-1.5-1.5-1.5-.28 0-.5-.212-.5-.5 0-.288.22-.5.5-.5h1c.338.005.5-.248.5-.5s-.162-.505-.5-.5H13v-.5c0-.277-.223-.5-.5-.5zm-10 6.002c-.25-.002-.5.162-.5.498v2c0 .276.224.5.5.5h2c.656 0 .672-1 0-1H3v-1.5c0-.328-.25-.496-.5-.498zm20 0c-.25.002-.5.17-.5.498V21h-1.5c-.672 0-.656 1 0 1h2c.276 0 .5-.224.5-.5v-2c0-.336-.25-.5-.5-.498z" /></svg>
                                    <p>Efectivo</p>
                                </div>
                                <div className='flex flex-row items-center gap-6'>
                                    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <title>credit-card-front</title>
                                        <path d="M28 5.25h-24c-1.518 0.002-2.748 1.232-2.75 2.75v16c0.002 1.518 1.232 2.748 2.75 2.75h24c1.518-0.002 2.748-1.232 2.75-2.75v-16c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM29.25 24c-0.001 0.69-0.56 1.249-1.25 1.25h-24c-0.69-0.001-1.249-0.56-1.25-1.25v-16c0.001-0.69 0.56-1.249 1.25-1.25h24c0.69 0.001 1.249 0.56 1.25 1.25v0zM10 21.25h-4c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h4c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM20 21.25h-6c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h6c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM24 17.25h-18c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h18c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM26 9.25h-6c-0.414 0-0.75 0.336-0.75 0.75v0 4c0 0.414 0.336 0.75 0.75 0.75h6c0.414-0 0.75-0.336 0.75-0.75v0-4c-0-0.414-0.336-0.75-0.75-0.75v0zM25.25 13.25h-4.5v-2.5h4.5z"></path>
                                    </svg>
                                    <p>Tarjeta Credito / Debito</p>
                                </div>

                            </div>
                        </div>
                        <Separator />
                        <div className='flex flex-col gap-4'>
                            <Label className='text-base'>Amenidades</Label>
                            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
                                <div className='flex flex-row items-center gap-6'>
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="style=linear">
                                            <g id="wifi-twowave">
                                                <path id="vector" d="M2 9.35998C8.06 4.67998 15.94 4.67998 22 9.35998" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path id="vector_2" d="M6.79004 13.49C9.94004 11.05 14.05 11.05 17.2 13.49" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path id="ellipse" d="M12 18H12.01" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
                                            </g>
                                        </g>
                                    </svg>
                                    <p>Wifi</p>
                                </div>
                                <div className='flex flex-row items-center gap-6'>
                                    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Parking_1">
                                            <g>
                                                <path d="M12,21.933A9.933,9.933,0,1,1,21.933,12,9.944,9.944,0,0,1,12,21.933ZM12,3.067A8.933,8.933,0,1,0,20.933,12,8.943,8.943,0,0,0,12,3.067Z" />
                                                <path d="M12.569,8.5h-1.75a.749.749,0,0,0-.75.75v5.74a.5.5,0,0,0,.5.5.5.5,0,0,0,.5-.5V13.5h1.5a2.5,2.5,0,0,0,0-5Zm0,4h-1.5v-3h1.5a1.5,1.5,0,0,1,0,3Z" />
                                            </g>
                                        </g>
                                    </svg>
                                    <p>Parqueadero</p>
                                </div>
                                <div className='flex flex-row items-center gap-6'>
                                    <svg fill="#000000" width="30px" height="30px" viewBox="0 -27.73 122.88 122.88" version="1.1" id="Layer_1">
                                        <g>
                                            <path d="M79.93,51.37c-0.53-0.51-0.32-1.2,0.48-1.54c0.8-0.34,1.87-0.2,2.41,0.3c3.78,3.6,1.96,6.52,0.21,9.32 c-1.32,2.12-2.59,4.15-0.25,6.19c0.57,0.5,0.4,1.19-0.37,1.55c-0.77,0.36-1.86,0.26-2.43-0.24c-3.47-3.03-1.86-5.62-0.17-8.32 C81.22,56.36,82.7,54,79.93,51.37L79.93,51.37z M14.57,28.11h73.65c0.96,0,1.74,0.78,1.74,1.74v12.26h24.13 c1.46,0,2.79-0.6,3.75-1.56c0.96-0.96,1.56-2.29,1.56-3.75V8.8c0-1.46-0.6-2.79-1.56-3.75c-0.96-0.96-2.29-1.56-3.75-1.56H8.8 c-1.46,0-2.79,0.6-3.75,1.56C4.08,6.01,3.48,7.34,3.48,8.8V36.8c0,1.46,0.6,2.79,1.56,3.75c0.96,0.96,2.29,1.56,3.75,1.56h4.03 V29.85C12.83,28.89,13.61,28.11,14.57,28.11L14.57,28.11z M86.48,31.59H16.31v10.09h70.17V31.59L86.48,31.59z M15.21,13.64 c-0.96,0-1.74-0.78-1.74-1.74c0-0.96,0.78-1.74,1.74-1.74h93.74c0.96,0,1.74,0.78,1.74,1.74c0,0.96-0.78,1.74-1.74,1.74H15.21 L15.21,13.64z M98.58,31.99c1.36,0,2.46,1.1,2.46,2.46s-1.1,2.46-2.46,2.46s-2.46-1.1-2.46-2.46S97.23,31.99,98.58,31.99 L98.58,31.99z M108.85,31.99c1.36,0,2.46,1.1,2.46,2.46s-1.1,2.46-2.46,2.46c-1.36,0-2.46-1.1-2.46-2.46S107.49,31.99,108.85,31.99 L108.85,31.99z M8.8,0h105.29c2.42,0,4.62,0.99,6.21,2.58c1.59,1.59,2.58,3.79,2.58,6.21V36.8c0,2.42-0.99,4.62-2.58,6.21 c-1.59,1.59-3.79,2.58-6.21,2.58H8.8c-2.42,0-4.62-0.99-6.21-2.58C0.99,41.42,0,39.22,0,36.8V8.8c0-2.42,0.99-4.62,2.58-6.21 C4.18,0.99,6.38,0,8.8,0L8.8,0z M15.21,21.76c-0.96,0-1.74-0.78-1.74-1.74c0-0.96,0.78-1.74,1.74-1.74h93.74 c0.96,0,1.74,0.78,1.74,1.74c0,0.96-0.78,1.74-1.74,1.74H15.21L15.21,21.76z M21.37,51.37c-0.53-0.51-0.32-1.2,0.48-1.54 c0.8-0.34,1.87-0.2,2.41,0.3c3.78,3.6,1.96,6.52,0.21,9.32c-1.32,2.12-2.59,4.15-0.25,6.19c0.57,0.5,0.4,1.19-0.37,1.55 c-0.77,0.36-1.86,0.26-2.43-0.24c-3.47-3.03-1.86-5.62-0.17-8.32C22.66,56.36,24.13,54,21.37,51.37L21.37,51.37z M36.01,51.37 c-0.53-0.51-0.32-1.2,0.48-1.54c0.8-0.34,1.87-0.2,2.41,0.3c3.78,3.6,1.96,6.52,0.21,9.32c-1.32,2.12-2.59,4.15-0.25,6.19 c0.57,0.5,0.4,1.19-0.37,1.55c-0.77,0.36-1.86,0.26-2.43-0.24c-3.47-3.03-1.86-5.62-0.17-8.32C37.3,56.36,38.77,54,36.01,51.37 L36.01,51.37z M50.65,51.37c-0.53-0.51-0.32-1.2,0.48-1.54c0.8-0.34,1.87-0.2,2.41,0.3c3.78,3.6,1.96,6.52,0.21,9.32 c-1.32,2.12-2.59,4.15-0.25,6.19c0.57,0.5,0.4,1.19-0.37,1.55c-0.77,0.36-1.86,0.26-2.43-0.24c-3.47-3.03-1.86-5.62-0.17-8.32 C51.94,56.36,53.42,54,50.65,51.37L50.65,51.37z M65.29,51.37c-0.53-0.51-0.32-1.2,0.48-1.54c0.8-0.34,1.87-0.2,2.41,0.3 c3.78,3.6,1.96,6.52,0.21,9.32c-1.32,2.12-2.59,4.15-0.25,6.19c0.57,0.5,0.4,1.19-0.37,1.55c-0.77,0.36-1.86,0.26-2.43-0.24 c-3.47-3.03-1.85-5.62-0.17-8.32C66.58,56.36,68.06,54,65.29,51.37L65.29,51.37z" />
                                        </g>
                                    </svg>
                                    <p>Aire Acondicionado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[380px] flex justify-center items-start flex-grow-0'>
                        <div className='shadow-lg rounded-xl border w-full h-[400px]'>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 mt-4 md:mt-8'>
                    <Label className='text-lg'>Promociones</Label>
                    <Carousel className="w-full">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex items-center justify-center p-6 h-[200px]">
                                                <span className="text-4xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='hidden md:flex'/>
                        <CarouselNext className='hidden md:flex'/>
                    </Carousel>
                </div>

                <div className='flex flex-col gap-4 mt-4 md:mt-8'>
                    <Label className='text-lg'>Delifood</Label>
                    <div className='w-full flex flex-col md:flex-row gap-6 md:gap-12'>
                        <div className='w-full md:min-w-[400px] h-[200px] shadow-lg border rounded-lg'>

                        </div>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-col gap-4'>
                                <Label className='text-base'>Mi Experiencia</Label>
                                <p>En El Paso, PRIMERA Hamburguesería Angus, tenemos como misión democratizar las hamburguesas Gourmet. Aquí puedes Armarla como quieras con nuestra carta de adiciones artesanales en 3 simples pasos. Ven ya por tu hamburguesa 100% Angus, 0% Tonterías</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Label className='text-base'>Recomendaciones</Label>
                                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 md:gap-6'>
                                    <div className='flex flex-row gap-6'>
                                        <Image
                                            src={entrance}
                                            className="h-6 w-6"
                                            alt='Picture cappuccino'
                                        />
                                        <div>
                                            <Label className='font-semibold'>Entradas</Label>
                                            <p className='text-muted-foreground'>Papas Bravas con Tocineta</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-6'>
                                        <Image
                                            src={main}
                                            className="h-6 w-6"
                                            alt='Picture cappuccino'
                                        />
                                        <div>
                                            <Label className='font-semibold'>Fuerte</Label>
                                            <p className='text-muted-foreground'>Hamburguesa Tricentenario</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-6'>
                                        <Image
                                            src={candy}
                                            className="h-6 w-6"
                                            alt='Picture cappuccino'
                                        />
                                        <div>
                                            <Label className='font-semibold'>Postres</Label>
                                            <p className='text-muted-foreground'>Helado de Tocino</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-6'>
                                        <Image
                                            src={drink}
                                            className="h-6 w-6"
                                            alt='Picture cappuccino'
                                        />
                                        <div>
                                            <Label className='font-semibold'>Bebidas</Label>
                                            <p className='text-muted-foreground'>Malteada de Milo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </main>
    );
}
