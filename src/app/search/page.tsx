'use client'
import Image from 'next/image';
import { Toggle } from "@/components/ui/toggle";
import logoDeliFood from '../../../public/logo.png';
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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { InstagramLogoIcon, HomeIcon, RocketIcon, StarIcon, HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons'
import { Label } from '@/components/ui/label';
import { CustomerListCustomFilters } from '@/containers/customer-list-custom-filters';
import { UserLocationFilter } from '@/containers/user-location-filter';
import { Badge } from '@/components/ui/badge';
import { SelectLabel } from '@radix-ui/react-select';

export default function Search() {
  return (
    <main className="flex min-h-screen flex-col relative pb-12">
      <div className='px-0'>
        <nav className="w-full flex items-center gap-6 md:gap-8 relative justify-center py-4 md:py-2 px-4 md:px-8 flex-wrap md:border-b">
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
      <div className='space-y-6 md:space-y-12'>
        <div className='flex flex-col gap-2 md:gap-4 pt-2 md:pt-6 px-4 md:px-6'>
          <div className='flex flex-row overflow-hidden overflow-x-auto space-x-4 no-scrollbar w-full'>
            <div className='flex items-center justify-center flex-col space-y-2 h-24 min-w-24 md:h-26 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={cappuccino}
                className="w-8 h-8 md:w-10 md:h-10"
                alt='Picture cappuccino'
              />
              <Label className="text-xs">Tardeo</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-2 h-24 min-w-24 md:h-26 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={cocktail}
                className="w-8 h-8 md:w-10 md:h-10"
                alt='Picture cappuccino'
              />
              <Label className="text-xs">Coctelear</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-2 h-24 min-w-24 md:h-26 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={cottage}
                className="w-8 h-8 md:w-10 md:h-10"
                alt='Picture cappuccino'
              />
              <Label className="text-xs">Glamping</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-2 h-24 min-w-24 md:h-26 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={egg}
                className="w-8 h-8 md:w-10 md:h-10"
                alt='Picture cappuccino'
              />
              <Label className="text-xs">Desayunos</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-2 h-24 min-w-24 md:h-26 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={river}
                className="w-8 h-8 md:w-10 md:h-10"
                alt='Picture cappuccino'
              />
              <Label className="text-xs">Aire Libre</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-2 h-24 min-w-24 md:h-26 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={beagle}
                className="w-8 h-8 md:w-10 md:h-10"
                alt='Picture cappuccino'
              />
              <Label className="text-xs">Pet Friendly</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-2 h-24 min-w-24 md:h-26 md:min-w-28 bg-blue-100 border-2 border-blue-400 rounded-lg'>
              <Image
                src={burger}
                className="w-8 h-8 md:w-10 md:h-10"
                alt='Picture cappuccino'
              />
              <Label className='text-blue-400 text-xs'>Cheat Meal</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-2 h-24 min-w-24 md:h-26 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={cheers}
                className="w-8 h-8 md:w-10 md:h-10"
                alt='Picture cappuccino'
              />
              <Label className="text-xs">Celebraciones</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-2 h-24 min-w-24 md:h-26 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={vegetables}
                className="w-8 h-8 md:w-10 md:h-10"
                alt='Picture cappuccino'
              />
              <Label className="text-xs">Saludable</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-2 h-24 min-w-24 md:h-26 md:min-w-28 bg-slate-100 rounded-lg'>
              <Image
                src={spaghetti}
                className="w-8 h-8 md:w-10 md:h-10"
                alt='Picture cappuccino'
              />
              <Label className="text-xs">Almuerzos</Label>
            </div>
          </div>

          <div className='flex flex-row gap-2 w-full items-center pt-4'>
            <Label className='hidden md:block font-semibold'>Filtros rapidos: </Label>
            <div className='flex flex-row overflow-hidden overflow-x-auto gap-2 no-scrollbar flex-1'>
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
            <div className='hidden justify-end items-center gap-4 md:flex'>
              <Label className='hidden md:block font-semibold'>Ordenar por: </Label>
              <Select defaultValue='apple'>
                <SelectTrigger className="md:w-[180px] rounded-full">
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
        </div>
        <div className='flex flex-col gap-6 w-full'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 no-scrollbar px-4 md:px-8'>
            <div className='relative flex flex-col gap-2'>
              <Badge className='absolute left-2 top-2 md:left-5 md:top-5 bg-blue-500 shadow-lg text-sm font-normal'>
                <HeartFilledIcon className='mr-1' /> Delifood
              </Badge>
              <div className='w-full h-[150px] md:h-[250px] rounded-xl overflow-hidden'
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
            <div className='relative flex flex-col gap-2'>
              <div className='w-full h-[150px] md:h-[250px] rounded-xl overflow-hidden'
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
            <div className='relative flex flex-col gap-2'>
              <div className='w-full h-[150px] md:h-[250px] rounded-xl overflow-hidden'
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
            <div className='relative flex flex-col gap-2'>
              <div className='w-full h-[150px] md:h-[250px] rounded-xl overflow-hidden'
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
            <div className='relative flex flex-col gap-2'>
              <div className='w-full h-[150px] md:h-[250px] rounded-xl overflow-hidden'
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
            <div className='relative flex flex-col gap-2'>
              <div className='w-full h-[150px] md:h-[250px] rounded-xl overflow-hidden'
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
        <div className='flex flex-col gap-4 w-full px-4 md:px-8'>
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
