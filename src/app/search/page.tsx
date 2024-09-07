import Image from 'next/image';
import { Button, buttonVariants } from "@/components/ui/button"
import logoDeliFood from '../../../public/logo.png';
import { InstagramLogoIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils';
import mainBackground from "../../../public/main-background.png";
import gardenLeft from "../../../public/garden-left.png";
import gardenRight from "../../../public/garden-right.png";
import burger from "../../../public/burger.png";
import hotdog from "../../../public/hotdog.png";
import popsicle from "../../../public/popsicle.png";
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative" style={{
      backgroundImage: `url(${mainBackground.src})`,
      width: "100%",
      height: "100%",

    }}>
      <div className='px-8'>
        <nav className="w-full flex items-center gap-8 relative justify-center py-4">
          <div className='flex flex-1 h-full items-center justify-center md:justify-start'>
            <div className='flex items-center justify-center'>
              <Image src={logoDeliFood} alt='Picture of the author' width={0}
                height={0}
                style={{ width: '70%', height: 'auto' }} />
            </div>
          </div>
          <div className='flex-row gap-14 h-full hidden sm:flex'>
            <div className='flex justify-center items-center'>
              <a href="/html/" className='text-md font-medium'>Inicio</a>
            </div>
            <div className='flex justify-center items-center'>
              <a href="/css/" className='text-md'>Lugares</a>
            </div>
            <div className='flex justify-center items-center'>
              <a href="/js/" className='text-md'>Aliados</a>
            </div>
            <div className='flex justify-center items-center'>
              <a href="/css/" >
                <span className={cn(buttonVariants({ variant: 'cartoon' }), 'rounded-full')}>
                  Contacta me
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className='flex flex-col px-0 md:px-[15%] gap-6 w-full py-8 md:py-0'>
        <div className='flex flex-1 flex-col'>
          <div className='flex flex-col flex-1 px-4 md:px-24 py-2 md:py-12 h-full items-center space-y-8 md:space-y-12'>
            <div className='flex flex-row bg-white px-2 py-2 rounded-full items-center gap-2 pr-4 shadow-xl w-auto relative'>
              <div className='text-xs px-2 py-1  bg-gradient-to-r from-[#FFCE9E] to-[#FD7A6E] hover:bg-[#FD7A6E]/80 text-white rounded-full'>Nuevo</div>
              <div className='flex flex-1 justify-start md:justify-end'>
                <p className='text-xs font-semibold hidden sm:block'>Hemos agregado Duquesa Restaurante a nuestros recomendados</p>
                <p className='text-xs font-semibold block md:hidden'>Se ha añadido Duquesa</p>
              </div>
            </div>
            <div className='space-y-4 md:space-y-8'>
              <h1 className='text-3xl md:text-5xl font-bold  text-center'>Encuentra ese lugar ideal que estas buscando</h1>
              <p className='text-center text-slate-700 text-sm md:text-base'>En esta plataforma puedes buscar cualquier lugar, por su nombre, ubicacion y otros datos.</p>
            </div>
            <div className='flex flex-row gap-8 w-full items-center justify-center'>
              <div className='flex flex-row bg-white w-full md:w-[80%] px-2 py-2 rounded-full shadow-xl'>
                <div className='flex flex-1 justify-start items-center'>
                  <MagnifyingGlassIcon className='w-4 h-4 ml-2 md:ml-4 mr-2' />
                  <Input placeholder='Busca por el nombre o tu ubicacion...' className='border-none focus-visible:ring-0'/>
               {/*    <p className='text-xs md:text-base text-slate-500 block md:hidden'>Nombre o tu ubicacion...</p> */}
                </div>
                <Button variant="cartoon" className='rounded-full text-xs md:text-base'>
                  <p className='hidden sm:block'>Buscar ahora</p>
                  <p className='block sm:hidden'>Buscar</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full items-center justify-center py-12 md:py-4 gap-2'>
          <div className='flex flex-row gap-2 w-full items-center justify-center '>
            <div className='p-2 rounded-full border-4 border-white bg-[#FD7A6E]'>
              <InstagramLogoIcon className='h-6 w-6' color="#FFF" />
            </div>
            <div className='p-2 rounded-full border-4 border-white bg-[#0098D9]'>
              <svg fill="#FFF" width="24px" height="24px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg"><path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" /></svg>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-semibold'>Mis redes sociales</p>
            <p className='text-slate-500 text-xs'>Somos mas de +100K amantes a la comida</p>
          </div>
        </div>
      </div>
      <div className='absolute top-[5%] md:top-[30%] right-[10%] rotate-12'>
        <Image
          src={burger}
          width={50}
          height={50}
          alt='Picture burger'
        />
      </div>
      <div className='absolute top-[70%] md:top-[80%] right-[10%] md:right-[20%] rotate-6 '>
        <Image
          src={hotdog}
          width={70}
          height={70}
          alt='Picture popsicle'
        />
      </div>
      <div className='absolute top-[55%] md:top-[60%] left-[10%] rotate-6 '>
        <Image
          src={popsicle}
          width={50}
          height={50}
          alt='Picture popsicle'
        />
      </div>
      <div className='absolute bottom-0 left-0'>
        <Image
          src={gardenLeft}
          width={0}
          height={0}
          alt='Picture gardenLeft'
          style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className='absolute bottom-0 right-0'>
        <Image
          src={gardenRight}
          width={0}
          height={0}
          alt='Picture gardenRight'
          style={{ width: '100%', height: 'auto' }} />
      </div>
    </main>
  );
}
