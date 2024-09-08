import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input';
import { Toggle } from "@/components/ui/toggle"
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









import { InstagramLogoIcon, HomeIcon, MagnifyingGlassIcon, MixerHorizontalIcon, RocketIcon, StarIcon } from '@radix-ui/react-icons'
import { Alert, AlertTitle } from "@/components/ui/alert"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Label } from '@/components/ui/label';

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
          <div className='flex flex-row flex-1 h-full gap-2 md:gap-4 items-center'>
            <div className='flex flex-row bg-slate-100 px-1 py-1 rounded-full flex-1'>
              <div className='flex flex-1 justify-start items-center'>
                <MagnifyingGlassIcon className='w-4 h-4 ml-2 md:ml-4 mr-2' />
                <Input placeholder='Buscar lugar...' className='border-none focus-visible:ring-0 focus-visible:outline-none bg-slate-100 ring-slate-100 ring-offset-slate-100 focus-visible:ring-offset-0' />
              </div>
              <Button variant="cartoon" className='rounded-full text-xs md:text-base'>
                <p className='text-sm'>Buscar</p>
              </Button>
            </div>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline"><MixerHorizontalIcon /></Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Move Goal</DrawerTitle>
                    <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">

                    <div className="mt-3 h-[120px]">

                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
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
      <div className='space-y-6 md:space-y-12'>
        <div className='flex flex-col gap-4 w-full  px-2 md:px-8'>
          <Label className='font-semibold text-xl md:text-2xl'>Categorias</Label>
          <div className='grid grid-cols-3 md:grid-cols-10 gap-2 md:gap-4'>
            <div className='flex items-center justify-center flex-col space-y-4 max-h-[120px] bg-slate-100 max-w-[120px] rounded-lg'>
              <Image
                src={cappuccino}
                width={60}
                height={60}
                alt='Picture cappuccino'
              />
              <Label>Tardeo</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-[120px] w-[120px] bg-slate-100 rounded-lg'>
              <Image
                src={cocktail}
                width={60}
                height={60}
                alt='Picture cappuccino'
              />
              <Label>Coctelear</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-[120px] w-[120px] bg-slate-100 rounded-lg'>
              <Image
                src={cottage}
                width={60}
                height={60}
                alt='Picture cappuccino'
              />
              <Label>Glamping</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-[120px] w-[120px] bg-slate-100 rounded-lg'>
              <Image
                src={egg}
                width={60}
                height={60}
                alt='Picture cappuccino'
              />
              <Label>Desayunos</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-[120px] w-[120px] bg-slate-100 rounded-lg'>
              <Image
                src={river}
                width={60}
                height={60}
                alt='Picture cappuccino'
              />
              <Label>Aire Libre</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-[120px] w-[120px] bg-slate-100 rounded-lg'>
              <Image
                src={beagle}
                width={60}
                height={60}
                alt='Picture cappuccino'
              />
              <Label>Pet Friendly</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-[120px] w-[120px] bg-blue-100 border-2 border-blue-400 rounded-lg'>
              <Image
                src={burger}
                width={60}
                height={60}
                alt='Picture cappuccino'
              />
              <Label className='text-blue-400'>Cheat Meal</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-[120px] w-[120px] bg-slate-100 rounded-lg'>
              <Image
                src={cheers}
                width={60}
                height={60}
                alt='Picture cappuccino'
              />
              <Label>Celebraciones</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-[120px] w-[120px] bg-slate-100 rounded-lg'>
              <Image
                src={vegetables}
                width={60}
                height={60}
                alt='Picture cappuccino'
              />
              <Label>Saludable</Label>
            </div>
            <div className='flex items-center justify-center flex-col space-y-4 h-[120px] w-[120px] bg-slate-100 rounded-lg'>
              <Image
                src={spaghetti}
                width={60}
                height={60}
                alt='Picture cappuccino'
              />
              <Label>Almuerzos</Label>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-6 w-full'>
          <div className='bg-slate-100 py-6 px-2 md:px-8'>
            <Label className='font-semibold text-xl md:text-2xl'>{`Resultados Top para "Cheat Meal"`}</Label>
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
                <Label className='text-md font-semibold'>El Paso Hamburguesas</Label>
                <p className='text-muted-foreground'>Carrera 54# 5a 52</p>
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
                <Label className='text-md font-semibold'>Chef Burgers</Label>
                <p className='text-muted-foreground'>Carrera 54# 5a 52</p>
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
                <Label className='text-md font-semibold'>Tierra de Todos</Label>
                <p className='text-muted-foreground'>Carrera 54# 5a 52</p>
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
                <Label className='text-md font-semibold'>El Faro Bar</Label>
                <p className='text-muted-foreground'>Carrera 54# 5a 52</p>
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
                <Label className='text-md font-semibold'>NK Hamburguesas</Label>
                <p className='text-muted-foreground'>Carrera 54# 5a 52</p>
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
                <Label className='text-md font-semibold'>El Gringo</Label>
                <p className='text-muted-foreground'>Carrera 54# 5a 52</p>
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
