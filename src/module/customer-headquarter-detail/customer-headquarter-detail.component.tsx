'use client'
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ClockIcon, ScissorsIcon } from '@radix-ui/react-icons';
import { BadgeCustomerTag } from '@/components/badge/badge-customer-tag';
import { useCustomerHeadquarterDetail } from './use-customer-headquarter-detail';
import { CustomerHeadquarterDetailItemList } from './components/customer-headquarter-detail-item-list';
import _ from 'lodash';

export function CustomerHeadquarterDetail() {
    const { data } = useCustomerHeadquarterDetail();
    const amenities = _.get(data, 'amenities', []);
    const paymentMethods = _.get(data, 'paymentMethods', []);
    const tagName = _.get(data, 'customer.tag.name', '');
    const tagIcon = _.get(data, 'customer.tag.icon', '');
    return (
        <div className='flex flex-col flex-1 px-4 gap-4 md:gap-6 md:px-[10%] py-2 md:py-12'>
            <div className='flex flex-row w-full'>
                <h1 className='md:text-2xl font-semibold'>{data?.topLabel}</h1>
                {!!tagIcon ? <div className='flex flex-1 justify-end'> <BadgeCustomerTag icon={tagIcon} name={tagName} /></div> : false}
            </div>
            <div className='flex flex-col w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden'
                style={{
                    backgroundImage: `url(${data?.image})`,
                    backgroundSize: 'cover'
                }}
            >
            </div>
            <div className='flex flex-col md:flex-row md:gap-12 gap-6'>
                <div className='flex flex-col flex-1 gap-6'>
                    <div>
                        <h2 className='text-xl font-semibold'>{data?.fullName}</h2>
                        <p className='text-base'>{data?.address}</p>
                    </div>
                    <Separator />
                    <div className='flex flex-col gap-4'>
                        <Label className='text-base'>Informacion General</Label>
                        <div className='flex flex-col gap-6'>
                            <div className='flex flex-row gap-4'>
                                <ClockIcon className='h-6 w-6' />
                                <div>
                                    <Label className='font-semibold'>Tiempo Estimado de Atencion</Label>
                                    <p className='text-muted-foreground'>{data?.customer.waitingTime}</p>
                                </div>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <ScissorsIcon className='h-6 w-6' />
                                <div>
                                    <Label className='font-semibold'>Precio Promedio por Persona</Label>
                                    <p className='text-muted-foreground'>{data?.budget}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {!!paymentMethods.length ? (
                        <>
                            <Separator />
                            <div className='flex flex-col gap-4'>
                                <Label className='text-base'>Metodos de Pago</Label>
                                <CustomerHeadquarterDetailItemList data={paymentMethods} />
                            </div>
                        </>
                    ) : false}
                    {!!amenities.length ? (
                        <>
                            <Separator />
                            <div className='flex flex-col gap-4'>
                                <Label className='text-base'>Amenidades</Label>
                                <CustomerHeadquarterDetailItemList data={amenities} />
                            </div>
                        </>
                    ) : false}
                </div>
                <Separator className='md:hidden' />
                <div className='w-full md:w-[450px] flex justify-center items-start flex-grow-0 relative'>
                    <div className='flex flex-col shadow-lg rounded-xl border w-full md:sticky top-5 px-6 py-8 gap-6'>
                        <div className='flex flex-col gap-4'>
                            <Label className='text-base md:text-lg md:font-semibold'>Horarios de Servicio</Label>
                            <div className='grid gap-4 grid-cols-2 md:gap-4'>
                                {data?.openingHours.map(({ id, label, range }) => (
                                    <div key={id}>
                                        <Label className='font-semibold'>{label}</Label>
                                        <p className='text-muted-foreground'>{range}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Separator />
                        <div className='flex flex-col gap-4'>
                            <Label className='text-base md:text-lg md:font-semibold'>Sedes</Label>
                            <div className='grid gap-4 grid-cols-1'>
                                {data?.headquarters.map(({ id, address, name }) => (
                                    <div className='flex flex-row justify-between items-center' key={id}>
                                        <Label className='font-semibold'>{name}</Label>
                                        <p className='text-muted-foreground'>{address}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Button variant="cartoon">Reservar</Button>
                    </div>
                </div>
            </div>
            {/* <div className='flex flex-col gap-4 mt-4 md:mt-8'>
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
                    <CarouselPrevious className='hidden md:flex' />
                    <CarouselNext className='hidden md:flex' />
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
                                <div className='flex flex-row gap-4'>
                                    <Image
                                        src={entrance}
                                        className="h-8 w-8"
                                        alt='Picture cappuccino'
                                    />
                                    <div>
                                        <Label className='font-semibold'>Entradas</Label>
                                        <p className='text-muted-foreground text-sm md:text-base'>Papas Bravas con Tocineta</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-4'>
                                    <Image
                                        src={main}
                                        className="h-8 w-8"
                                        alt='Picture cappuccino'
                                    />
                                    <div>
                                        <Label className='font-semibold'>Fuerte</Label>
                                        <p className='text-muted-foreground text-sm md:text-base'>Hamburguesa Tricentenario</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-4'>
                                    <Image
                                        src={candy}
                                        className="h-8 w-8"
                                        alt='Picture cappuccino'
                                    />
                                    <div>
                                        <Label className='font-semibold'>Postres</Label>
                                        <p className='text-muted-foreground text-sm md:text-base'>Helado de Tocino</p>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-4'>
                                    <Image
                                        src={drink}
                                        className="h-8 w-8"
                                        alt='Picture cappuccino'
                                    />
                                    <div>
                                        <Label className='font-semibold'>Bebidas</Label>
                                        <p className='text-muted-foreground text-sm md:text-base'>Malteada de Milo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
