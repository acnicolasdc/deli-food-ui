import Image from "next/image";
import empty from '../../../../../public/empty-box.png';


export interface ICustomerCardListEmptyIndicatorProps
    extends React.HTMLAttributes<HTMLDivElement> {
    isEmpty?: boolean
    children: React.ReactNode;
}

export function CustomerCardListEmptyIndicator({ isEmpty, children }: ICustomerCardListEmptyIndicatorProps) {
    if (isEmpty) {
        return (
            <div className='w-full flex flex-col justify-center items-center h-[350px] gap-6 md:gap-10 px-12'>
                <Image
                    src={empty}
                    className="h-20 w-20 md:h-28 md:w-28"
                    alt="Picture empty"
                />
                <div className="flex flex-col items-center gap-1">
                    <h1 className="text-[#E9FB73] text-lg md:text-2xl font-medium">No encontramos nada</h1>
                    <p className="text-muted-foreground text-center text-xs md:text-base">La caracteristicas que buscas no estan disponibles en algun sitio</p>
                </div>
            </div>
        );
    }
    return children
}
