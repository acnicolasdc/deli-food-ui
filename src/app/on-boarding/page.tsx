'use client'

import { FieldImageInput } from "@/components/field/field-image-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AmenitySelectFilter, EAmenitySelectFilterMode } from "@/containers/amenity-select-filter";
import { CategorySelectFilter, ECategorySelectFilterMode } from "@/containers/category-select-filter";
import { CitySelectFilter } from "@/containers/city-select-filter";
import { EFoodTypeSelectFilterMode, FoodTypeSelectFilter } from "@/containers/food-type-select-filter";
import { PaymentMethodSelectFilter, EPaymentMethodSelectFilterMode } from "@/containers/payment-method-select-filter";
import { EServiceTypeSelectFilterMode, ServiceTypeSelectFilter } from "@/containers/service-type-select-filter";
import { TagToggleSelectFilter } from "@/containers/tag-toggle-select-filter";
import { ETagToggleSelectFilterMode } from "@/containers/tag-toggle-select-filter/tag-toggle-select-filter.component";
import { EZoneSelectFilterMode, ZoneSelectFilter } from "@/containers/zone-slide-select-filter/zone-slide-select-filter.component";
import { Cross1Icon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import mainBackground from "../../../public/main-background.png";
import { atom, useAtom } from "jotai";
import { formatToCOP, parseCOPToInt } from "@/lib/money";
import { TFieldImageInputValue } from "@/components/field/field-image-input/field-image-input.component";
import { Separator } from "@/components/ui/separator";

type TGeneralInformationAtom = {
  name: string,
  logo: TFieldImageInputValue,
  waitingTime: string[],
  tagId: string,
  amenities: string[],
  productTypes: string[],
  paymentMethods: string[]
}

type TServiceTypeAtom = {
  serviceTypeId: string | undefined,
  count: number;
}

export const generalInformationAtom = atom<TGeneralInformationAtom>({
  name: '',
  logo: {
    file: null,
    preview: '',
  },
  waitingTime: ['', ''],
  tagId: '',
  amenities: [],
  productTypes: [],
  paymentMethods: []
});

export const serviceTypeAtom = atom<TServiceTypeAtom[]>([
  { serviceTypeId: undefined, count: 0 }
]);
export default function OnBoarding() {
  const [generalInformation, setGeneralInformation] = useAtom(generalInformationAtom);
  const [serviceType, setServiceType] = useAtom(serviceTypeAtom);
console.log(serviceType, generalInformation)
  return (
    <main className="flex min-h-screen flex-col relative items-center py-12" style={{
      backgroundImage: `url(${mainBackground.src})`,
      width: "100%",
      height: "100%",

    }}>
      <Tabs defaultValue="general" className="w-1/2 h-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">Informacion General</TabsTrigger>
          <TabsTrigger value="service">Tipos de servicios</TabsTrigger>
          <TabsTrigger value="headquarter">Sedes</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Informacion General</CardTitle>
              <CardDescription>
                Es la informacion que usaremos para identificarte
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-row w-full gap-4">
                <div className="gap-2 flex flex-1 flex-col">
                  <Label>Nombre del establecimiento</Label>
                  <Input placeholder="Nombre"
                    value={generalInformation.name}
                    onChange={(event) => {
                      setGeneralInformation({ ...generalInformation, name: event.target.value })
                    }} />
                </div>
                <div className="gap-2 flex flex-1 flex-col">
                  <Label>Logo del establecimiento</Label>
                  <FieldImageInput
                    value={generalInformation.logo}
                    onValueChange={(file) => {
                      setGeneralInformation({ ...generalInformation, logo: file })
                    }} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Etiqueta</Label>
                <TagToggleSelectFilter
                  value={generalInformation.tagId}
                  onValueChange={(tag) => {
                    setGeneralInformation({ ...generalInformation, tagId: tag as string })
                  }}
                  mode={ETagToggleSelectFilterMode.select}
                />
              </div>
              <div className="space-y-2">
                <Label>Tiempo estimado de atencion</Label>
                <div className="flex flex-row w-full items-center gap-4 bg-neutral-50 border rounded-xl p-4">
                  <p>De</p>
                  <Input
                    className="w-[70px]"
                    placeholder="10"
                    value={generalInformation.waitingTime[0]}
                    onChange={(event) => {
                      const waitingTime = [...generalInformation.waitingTime];
                      waitingTime[0] = event.target.value;
                      setGeneralInformation({ ...generalInformation, waitingTime })
                    }} />
                  <p>a</p>
                  <Input
                    className="w-[70px]"
                    placeholder="20"
                    value={generalInformation.waitingTime[1]}
                    onChange={(event) => {
                      const waitingTime = [...generalInformation.waitingTime];
                      waitingTime[1] = event.target.value;
                      setGeneralInformation({ ...generalInformation, waitingTime })
                    }} />
                  <p>Minutos</p>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <Label>Tipo de producto que vendes</Label>
                  <p className="text-muted-foreground text-xs">Solo podras escoger maximo 2 tipos de productos</p>
                </div>
                <FoodTypeSelectFilter
                  value={generalInformation.productTypes}
                  onValueChange={(value) => {
                    if (Array.isArray(value) && generalInformation.productTypes.length < 2) {
                      setGeneralInformation({ ...generalInformation, productTypes: value })
                    }
                  }} mode={EFoodTypeSelectFilterMode.multiSelect} />
              </div>
              <div className="space-y-2">
                <Label>Metodos de Pago</Label>
                <PaymentMethodSelectFilter
                  value={generalInformation.paymentMethods}
                  onValueChange={(value) => {
                    if (Array.isArray(value)) {
                      setGeneralInformation({ ...generalInformation, paymentMethods: value })
                    }
                  }} mode={EPaymentMethodSelectFilterMode.multiSelect} />
              </div>
              <div className="space-y-2">
                <Label>Amenidades</Label>
                <AmenitySelectFilter
                  value={generalInformation.amenities}
                  onValueChange={(value) => {
                    if (Array.isArray(value)) {
                      setGeneralInformation({ ...generalInformation, amenities: value })
                    }
                  }} mode={EAmenitySelectFilterMode.multiSelect} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="service">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Tipos de servicios</CardTitle>
              <CardDescription>
                Son los servicios y precios promedios con los que te clasificaremos
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {serviceType.map(({ serviceTypeId, count }, index) => {
                return (
                  <div className="flex flex-row w-full gap-4" key={index}>
                    <div className="gap-2 flex flex-1 flex-col">
                      <Label>Servicio</Label>
                      <ServiceTypeSelectFilter
                        value={serviceTypeId}
                        onValueChange={(value) => {
                          const isNotThere = !serviceType.some((type) => type.serviceTypeId === value);
                          const localServiceType = [...serviceType];
                          localServiceType[index].serviceTypeId = isNotThere ? value as string : '';
                          setServiceType(localServiceType);
                        }}
                        mode={EServiceTypeSelectFilterMode.select}
                      />
                    </div>
                    <div className="gap-2 flex flex-1 flex-col">
                      <Label>Precio Promedio</Label>
                      <Input
                        placeholder="$30.000"
                        value={formatToCOP(count)}
                        onChange={(event) => {
                          const localServiceType = [...serviceType];
                          localServiceType[index].count = parseCOPToInt(event.target.value);
                          setServiceType(localServiceType);
                        }}
                      />
                    </div>
                    <div className="flex justify-center items-end">
                      <Button variant="destructive"
                        disabled={serviceType.length === 1}
                        onClick={() => {
                          const filteredServiceType = serviceType.filter((type, position) => (type.serviceTypeId !== serviceTypeId && position !== index));
                          setServiceType(filteredServiceType);
                        }}><Cross1Icon /></Button>
                    </div>
                  </div>
                )
              })}
              <Separator className="my-2"/>
              <Button
                disabled={!serviceType[serviceType.length - 1]?.serviceTypeId}
                variant="cartoon"
                onClick={() => {
                  setServiceType([...serviceType, { count: 0, serviceTypeId: undefined }]);
                }}>Agergar Servicio</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="headquarter">
          <Card>
            <CardHeader>
              <CardTitle>Sedes</CardTitle>
              <CardDescription>
                Permitenos saber donde estan tus establecimientos
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="space-y-4">
                <div className="flex flex-row w-full gap-4">
                  <div className="gap-2 flex flex-1 flex-col">
                    <Label>Nombre</Label>
                    <Input placeholder="Nombre" />
                  </div>
                  <div className="gap-2 flex flex-1 flex-col">
                    <Label>Direccion</Label>
                    <Input placeholder="Direccion" />
                  </div>
                  <div className="gap-2 flex flex-1 flex-col">
                    <Label>Imagen</Label>
                    <FieldImageInput onValueChange={() => { }} />
                  </div>
                </div>
                <div className="flex flex-row w-full gap-4">
                  <div className="gap-2 flex flex-1 flex-col">
                    <Label>Ciudad</Label>
                    <CitySelectFilter onValueChange={() => { }} />
                  </div>
                  <div className="gap-2 flex flex-1 flex-col">
                    <Label>Zona</Label>
                    <ZoneSelectFilter onValueChange={() => { }} mode={EZoneSelectFilterMode.select} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Categorias</Label>
                  <CategorySelectFilter onValueChange={() => { }} mode={ECategorySelectFilterMode.multiSelect} />
                </div>
              </div>


              <div className="flex flex-col gap-4 flex-1 border w-full p-6 rounded-xl bg-neutral-50">
                <div className="flex flex-row justify-between items-center">
                  <Label className="text-xl">Horarios de atencion</Label>
                  <Button size="sm">Nuevo Horario</Button>
                </div>
                <div className="flex flex-row w-full gap-4">
                  <div className="gap-2 flex flex-1 flex-col">
                    <Label>Dias</Label>
                    <Input placeholder="Lunes a Viernes" />
                  </div>
                  <div className="gap-2 flex flex-1 flex-col">
                    <Label>Horarios</Label>
                    <Input placeholder="12:00 PM - 12:00 AM" />
                  </div>
                  <div className="flex justify-center items-end">
                    <Button variant="destructive"><Cross1Icon /></Button>
                  </div>
                </div>
              </div>
              <Separator className="my-2"/>
              <Button variant="cartoon">Agergar Sede</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
