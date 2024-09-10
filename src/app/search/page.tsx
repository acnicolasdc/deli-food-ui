import Image from 'next/image';
import { Toggle } from "@/components/ui/toggle";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator"
import logoDeliFood from '../../../public/logo.png';
import location from '../../../public/your-location.png';
import cappuccino from '../../../public/cappuccino.png';
import cocktail from '../../../public/cocktail.png';
import cottage from '../../../public/cottage.png';

import collard from '../../../public/collard.png';
import international from '../../../public/international.png';
import ramen from '../../../public/ramen.png';
import sushi from '../../../public/sushi.png';


import egg from '../../../public/egg.png';
import beagle from '../../../public/beagle.png';
import burger from '../../../public/burger.png';
import river from '../../../public/river.png';
import vegetables from '../../../public/vegetables.png';
import spaghetti from '../../../public/spaghetti.png';
import cheers from '../../../public/cheers.png';
import bread from '../../../public/last-reviews/bread.png';
import how from '../../../public/last-reviews/how.png';
import cream from '../../../public/last-reviews/cream.png';
import glamping from '../../../public/last-reviews/glamping.png';
import me from '../../../public/last-reviews/me.png';
import paso from '../../../public/restaurant/paso.jpg';
import chef from '../../../public/restaurant/chef.webp';
import faro from '../../../public/restaurant/faro.jpg';
import gringo from '../../../public/restaurant/gringo.jpg';
import nk from '../../../public/restaurant/nk.png';
import tdt from '../../../public/restaurant/tdt.jpg';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { InstagramLogoIcon, HomeIcon, RocketIcon, StarIcon, MixerHorizontalIcon, HeartIcon, PlusIcon, MinusIcon } from '@radix-ui/react-icons'
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FieldDrawerLocation } from '@/components/custom/field/field-drawer-location';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative pb-12">
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
            <FieldDrawerLocation />
            <Dialog>
              <DialogTrigger>
                <Button variant="outline" className='rounded-full h-12' >
                  <MixerHorizontalIcon />
                </Button>
              </DialogTrigger>
              <DialogContent className='flex flex-col max-h-[90%] px-0'>
                <DialogHeader>
                  <DialogTitle className='text-lg'>Filtros</DialogTitle>
                </DialogHeader>
                <div className='flex flex-col w-full gap-4 pb-4 overflow-hidden overflow-y-auto no-scrollbar  px-6'>
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

                </div>
                <DialogFooter className='px-6'>
                  <Button variant="delifood">Aplicar</Button>
                </DialogFooter>
              </DialogContent>

            </Dialog>
          </div>
        </nav>
      </div>
      <div className='flex flex-col gap-6 w-full'>
        <Alert className='border-none bg-blue-600 rounded-none px-8 flex flex-row justify-center items-center gap-2'>
          <Image
            src={location}
            width={30}
            height={30}
            alt='Picture burger'
          />
          <AlertTitle className='md:text-md text-white font-semibold text-left mb-0'> El filtro de ubicacion incia por defecto en <b>Cali</b>.</AlertTitle>
        </Alert>
      </div>
      <div className='flex flex-row gap-2 w-full items-center py-4 px-2 md:px-8'>
        <Label className='hidden md:block font-semibold'>Filtros rapidos: </Label>
        <div className='flex flex-row overflow-hidden overflow-x-auto space-x-2 no-scrollbar flex-1'>
          <Toggle variant="outline" aria-label="Toggle italic" size="sm">
            <HeartIcon className='mr-2' /> Delifood
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic" size="sm">
            <RocketIcon className='mr-2' />Promos
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic" size="sm">
            <HomeIcon className='mr-2' />Nuevos
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic" size="sm">
            <StarIcon className='mr-2' /> Recomendados
          </Toggle>
        </div>
      </div>
      <div className='space-y-6 md:space-y-12'>
        <div className='flex flex-col gap-4 w-full px-2 md:px-8'>
          <Label className='font-semibold text-xl md:text-2xl'>Categorias</Label>
          <div className='flex flex-row overflow-hidden overflow-x-auto space-x-4 no-scrollbar w-full'>
            <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={cappuccino}
                className="w-10 h-10 md:w-12 md:h-12"
                alt='Picture cappuccino'
              />
              <Label>Tardeo</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={cocktail}
                className="w-10 h-10 md:w-12 md:h-12"
                alt='Picture cappuccino'
              />
              <Label>Coctelear</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={cottage}
                className="w-10 h-10 md:w-12 md:h-12"
                alt='Picture cappuccino'
              />
              <Label>Glamping</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={egg}
                className="w-10 h-10 md:w-12 md:h-12"
                alt='Picture cappuccino'
              />
              <Label>Desayunos</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={river}
                className="w-10 h-10 md:w-12 md:h-12"
                alt='Picture cappuccino'
              />
              <Label>Aire Libre</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={beagle}
                className="w-10 h-10 md:w-12 md:h-12"
                alt='Picture cappuccino'
              />
              <Label>Pet Friendly</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-blue-100 border-2 border-blue-400 rounded-lg'>
              <Image
                src={burger}
                className="w-10 h-10 md:w-12 md:h-12"
                alt='Picture cappuccino'
              />
              <Label className='text-blue-400'>Cheat Meal</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={cheers}
                className="w-10 h-10 md:w-12 md:h-12"
                alt='Picture cappuccino'
              />
              <Label>Celebraciones</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={vegetables}
                className="w-10 h-10 md:w-12 md:h-12"
                alt='Picture cappuccino'
              />
              <Label>Saludable</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={spaghetti}
                className="w-10 h-10 md:w-12 md:h-12"
                alt='Picture cappuccino'
              />
              <Label>Almuerzos</Label>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-6 w-full'>
          <div className='bg-slate-100 py-4 md:py-6 px-2 md:px-8 flex flex-row items-center'>
            <Label className='font-semibold text-md md:text-lg md:block hidden'>{`Resultados Top para "Cheat Meal"`}</Label>
            <Label className='font-semibold text-lg block md:hidden'>Resultados Top</Label>
            <div className='flex flex-1 justify-end items-center gap-4'>
              <Label className='hidden md:block font-semibold'>Ordenar por: </Label>
              <Select defaultValue='apple'>
                <SelectTrigger className="w-[180px] rounded-full">
                  <SelectValue placeholder="Selecciona tu ciudad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Menor precio</SelectItem>
                    <SelectItem value="banana">Mayor precio</SelectItem>
                    <SelectItem value="blueberry">Recien agregado</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 no-scrollbar px-2 md:px-8'>
            <div className=' space-y-2'>
              <div className='w-full h-[150px] rounded-lg overflow-hidden'
                style={{
                  backgroundImage: `url(${paso.src})`,
                  backgroundSize: 'cover'
                }}
              >
              </div>
              <div className='px-2'>
                <Label className='text-sm md:text-md font-semibold'>El Paso Hamburguesas</Label>
                <p className='text-xs md:text-sm text-muted-foreground'>Carrera 54# 5a 52</p>
              </div>
            </div>
            <div className=' space-y-2'>
              <div className='w-full h-[150px] rounded-lg overflow-hidden'
                style={{
                  backgroundImage: `url(${chef.src})`,
                  backgroundSize: 'cover'
                }}
              >
              </div>
              <div className='px-2'>
                <Label className='text-sm md:text-md font-semibold'>Chef Burgers</Label>
                <p className='text-xs md:text-sm text-muted-foreground'>Carrera 54# 5a 52</p>
              </div>
            </div>
            <div className=' space-y-2'>
              <div className='w-full h-[150px] rounded-lg overflow-hidden'
                style={{
                  backgroundImage: `url(${tdt.src})`,
                  backgroundSize: 'cover'
                }}
              >
              </div>
              <div className='px-2'>
                <Label className='text-sm md:text-md font-semibold'>Tierra de Todos</Label>
                <p className='text-xs md:text-sm text-muted-foreground'>Carrera 54# 5a 52</p>
              </div>
            </div>
            <div className=' space-y-2'>
              <div className='w-full h-[150px] rounded-lg overflow-hidden'
                style={{
                  backgroundImage: `url(${faro.src})`,
                  backgroundSize: 'cover'
                }}
              >
              </div>
              <div className='px-2'>
                <Label className='text-sm md:text-md font-semibold'>El Faro Bar</Label>
                <p className='text-xs md:text-sm text-muted-foreground'>Carrera 54# 5a 52</p>
              </div>
            </div>
            <div className=' space-y-2'>
              <div className='w-full h-[150px] rounded-lg overflow-hidden'
                style={{
                  backgroundImage: `url(${nk.src})`,
                  backgroundSize: 'cover'
                }}
              >
              </div>
              <div className='px-2'>
                <Label className='text-sm md:text-md font-semibold'>NK Hamburguesas</Label>
                <p className='text-xs md:text-sm text-muted-foreground'>Carrera 54# 5a 52</p>
              </div>
            </div>
            <div className=' space-y-2'>
              <div className='w-full h-[150px] rounded-lg overflow-hidden'
                style={{
                  backgroundImage: `url(${gringo.src})`,
                  backgroundSize: 'cover'
                }}
              >
              </div>
              <div className='px-2'>
                <Label className='text-sm md:text-md font-semibold'>El Gringo</Label>
                <p className='text-xs md:text-sm text-muted-foreground'>Carrera 54# 5a 52</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 w-full  px-2 md:px-8'>
          <Label className='font-semibold text-xl md:text-2xl'>Ultimos Videos</Label>
          <div className='flex flex-row overflow-hidden overflow-x-auto space-x-4 no-scrollbar'>
            <div className='h-[150px] md:h-[160px] min-w-[250px] md:min-w-[300px] rounded-lg relative overflow-hidden'
              style={{
                backgroundImage: `url(${bread.src})`,
                backgroundSize: 'cover'
              }}
            >
              <div className='absolute left-0 py-2 bg-white top-[60%] w-[65%] rounded-e-full pl-2 pr-6 flex flex-row items-center gap-2'>
                <div className="bg-[#FD7A6E] p-1 rounded-full">

                  <InstagramLogoIcon color='#FFF' />
                </div>

                <Label className='text-blue-400 font-semibold'>Pastel Pizza</Label>
              </div>
            </div>
            <div className='h-[150px] md:h-[160px] min-w-[250px] md:min-w-[300px] rounded-lg relative overflow-hidden'
              style={{
                backgroundImage: `url(${me.src})`,
                backgroundSize: 'cover'
              }}
            >
              <div className='absolute left-0 py-2 bg-white top-[60%] w-[65%] rounded-e-full pl-2 pr-6 flex flex-row items-center gap-2'>
                <div className="bg-[#FD7A6E] p-1 rounded-full">

                  <InstagramLogoIcon color='#FFF' />
                </div>

                <Label className='text-blue-400 font-semibold'>El Mercado</Label>
              </div>
            </div>
            <div className='h-[150px] md:h-[160px] min-w-[250px] md:min-w-[300px] rounded-lg relative overflow-hidden'
              style={{
                backgroundImage: `url(${glamping.src})`,
                backgroundSize: 'cover'
              }}
            >
              <div className='absolute left-0 py-2 bg-white top-[60%] w-[65%] rounded-e-full pl-2 pr-6 flex flex-row items-center gap-2'>
                <div className="bg-[#FD7A6E] p-1 rounded-full">

                  <InstagramLogoIcon color='#FFF' />
                </div>

                <Label className='text-blue-400 font-semibold'>En la montaña</Label>
              </div>
            </div>
            <div className='h-[150px] md:h-[160px] min-w-[250px] md:min-w-[300px] rounded-lg relative overflow-hidden'
              style={{
                backgroundImage: `url(${cream.src})`,
                backgroundSize: 'cover'
              }}
            >
              <div className='absolute left-0 py-2 bg-white top-[60%] w-[65%] rounded-e-full pl-2 pr-6 flex flex-row items-center gap-2'>
                <div className="bg-[#FD7A6E] p-1 rounded-full">
                  <InstagramLogoIcon color='#FFF' />
                </div>

                <Label className='text-blue-400 font-semibold'>Fresas con crema</Label>
              </div>
            </div>
            <div className='h-[150px] md:h-[160px] min-w-[250px] md:min-w-[300px] rounded-lg relative overflow-hidden'
              style={{
                backgroundImage: `url(${how.src})`,
                backgroundSize: 'cover'
              }}
            >
              <div className='absolute left-0 py-2 bg-white top-[60%] w-[65%] rounded-e-full pl-2 pr-6 flex flex-row items-center gap-2'>
                <div className="bg-[#FD7A6E] p-1 rounded-full">
                  <InstagramLogoIcon color='#FFF' />
                </div>
                <Label className='text-blue-400 font-semibold'>La Receta</Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
