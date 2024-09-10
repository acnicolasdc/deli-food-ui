import Image from 'next/image';
import { Toggle } from "@/components/ui/toggle";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator"
import logoDeliFood from '../../../public/logo.png';
import location from '../../../public/your-location.png';
import cappuccino from '../../../public/cappuccino.png';
import cocktail from '../../../public/cocktail.png';
import cottage from '../../../public/cottage.png';
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


import flora from '../../../public/places/flora.png';
import granada from '../../../public/places/granada.png';
import jardin from '../../../public/places/jardin.png';
import novena from '../../../public/places/novena.png';
import pance from '../../../public/places/pance.png';
import penon from '../../../public/places/penon.png';
import sanAntonio from '../../../public/places/san-antonio.png';
import sanFernando from '../../../public/places/san-fernando.png';

import dapa from '../../../public/places/dapa.png';
import bocha from '../../../public/places/bocha.png';
import ingenio from '../../../public/places/ingenio.png';
import jamundi from '../../../public/places/jamundi.png';
import afueras from '../../../public/places/afueras.png';
import km from '../../../public/places/km.png';

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
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { InstagramLogoIcon, HomeIcon, MagnifyingGlassIcon, RocketIcon, StarIcon, MixerHorizontalIcon, HeartIcon } from '@radix-ui/react-icons'
import { Alert, AlertTitle } from "@/components/ui/alert"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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
            <Drawer>
              <DrawerTrigger asChild>
                <div className='flex flex-row bg-slate-100 px-1 py-2 rounded-full flex-1'>
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
                          <Label className="text-xs md:text-sm">San Fernando</Label>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                          <Image
                            src={jardin}
                            className="w-10 h-10 md:w-12 md:h-12"
                            alt='Picture jardin'
                          />
                          <Label className="text-xs md:text-sm">Ciudad Jardin</Label>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                          <Image
                            src={flora}
                            className="w-10 h-10 md:w-12 md:h-12"
                            alt='Picture flora'
                          />
                          <Label className="text-xs md:text-sm">La Flora</Label>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                          <Image
                            src={granada}
                            className="w-10 h-10 md:w-12 md:h-12"
                            alt='Picture granada'
                          />
                          <Label className="text-xs md:text-sm">Granada</Label>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                          <Image
                            src={sanAntonio}
                            className="w-10 h-10 md:w-12 md:h-12"
                            alt='Picture san antonio'
                          />
                          <Label className="text-xs md:text-sm">San Antonio</Label>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                          <Image
                            src={penon}
                            className="w-10 h-10 md:w-12 md:h-12"
                            alt='Picture penon'
                          />
                          <Label className="text-xs md:text-sm">Peñon</Label>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-blue-100 border-2 border-blue-400 rounded-lg'>
                          <Image
                            src={novena}
                            className="w-10 h-10 md:w-12 md:h-12"
                            alt='Picture novena'
                          />
                          <Label className='text-blue-400'>La Novena</Label>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                          <Image
                            src={ingenio}
                            className="w-10 h-10 md:w-12 md:h-12"
                            alt='Picture ingenio'
                          />
                          <Label className="text-xs md:text-sm">Ingenio</Label>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                          <Image
                            src={bocha}
                            className="w-10 h-10 md:w-12 md:h-12"
                            alt='Picture bocha'
                          />
                          <Label className="text-xs md:text-sm">Bochalema</Label>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                          <Image
                            src={pance}
                            className="w-10 h-10 md:w-12 md:h-12"
                            alt='Picture pance'
                          />
                          <Label className="text-xs md:text-sm">Pance</Label>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                          <Image
                            src={jamundi}
                            className="w-10 h-10 md:w-12 md:h-12"
                            alt='Picture jamundi'
                          />
                          <Label className="text-xs md:text-sm">Jamundi</Label>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                          <Image
                            src={dapa}
                            className="w-10 h-10 md:w-12 md:h-12"
                            alt='Picture dapa'
                          />
                          <Label className="text-xs md:text-sm">Dapa</Label>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                          <Image
                            src={km}
                            className="w-10 h-10 md:w-12 md:h-12"
                            alt='Picture km'
                          />
                          <Label className="text-xs md:text-sm">KM 18</Label>
                        </div>
                        <div className='flex items-center justify-center flex-col space-y-4 h-24 min-w-24 md:h-28 md:min-w-28 bg-slate-100 rounded-lg'>
                          <Image
                            src={afueras}
                            className="w-10 h-10 md:w-12 md:h-12"
                            alt='Picture afueras'
                          />
                          <Label className="text-xs md:text-sm">A las Afueras</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
            <Dialog>
              <DialogTrigger>
                <Button variant="outline" className='rounded-full h-12' >
                  <MixerHorizontalIcon />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Filtros</DialogTitle>
                </DialogHeader>
                <div className='flex flex-col w-full px-2 gap-4 pb-4'>
                  <div className='gap-2'>
                    <Label className='font-semibold'>
                      Rango de precio
                    </Label>
                    <p className='text-xs mb-4 text-muted-foreground'>Selecciona el valor minimo y maximo a pagar</p>
                    <div className='flex flex-row items-center gap-4'>
                      <Input placeholder='Minimo' /><Separator className='w-5' /><Input placeholder='Maximo' />
                    </div>
                  </div>
                  <Separator />
                  <div className='gap-2'>
                    <Label className='font-semibold'>
                      Metodos de Pago
                    </Label>
                    <p className='text-xs mb-4 text-muted-foreground'>Selecciona el valor minimo y maximo a pagar</p>
                    <div className='flex flex-col gap-4'>
                      <div className="items-center flex space-x-2">
                        <div className="flex flex-1">
                          <Label
                            htmlFor="terms1"
                            className='font-normal'
                          >
                            Efectivo
                          </Label>
                        </div>
                        <Checkbox id="terms1" />
                      </div>
                      <div className="items-center flex space-x-2">
                        <div className="flex flex-1">
                          <Label
                            htmlFor="terms2"
                            className='font-normal'
                          >
                            Transferencia
                          </Label>
                        </div>
                        <Checkbox id="terms2" />
                      </div>
                      <div className="items-center flex space-x-2">
                        <div className="flex flex-1">
                          <Label
                            htmlFor="terms3"
                            className='font-normal'
                          >
                            Tarjetas credito / cebito
                          </Label>
                        </div>
                        <Checkbox id="terms3" />
                      </div>
                    </div>
                  </div>

                </div>
                <DialogFooter>
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
