'use client'

import { FieldImageInput } from "@/components/field/field-image-input";
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

export default function OnBoarding() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <div className="container flex flex-col gap-6 flex-1 py-4 border w-[600px]">
        <div className="space-y-2">
          <Label>Nombre del establecimiento</Label>
          <Input placeholder="Nombre" />
        </div>
        <div className="space-y-2">
          <Label>Logo del establecimiento</Label>
          <FieldImageInput onValueChange={() => { }} />
        </div>
        <div className="space-y-2">
          <Label>Tipo de producto que vendes</Label>
          <FoodTypeSelectFilter value={undefined} onValueChange={() => { }} mode={EFoodTypeSelectFilterMode.select} />
        </div>
        <div className="space-y-2">
          <Label>Tiempo estimado de atencion</Label>
          <div className="flex flex-row w-full items-center gap-4">
            <p>De</p>
            <Input className="w-[70px]" placeholder="10" />
            <p>a</p>
            <Input className="w-[70px]" placeholder="20" />
            <p>Minutos</p>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Categorias</Label>
          <CategorySelectFilter onValueChange={() => { }} mode={ECategorySelectFilterMode.multiSelect} />
        </div>
        <div className="space-y-2">
          <Label>Etiqueta</Label>
          <TagToggleSelectFilter onValueChange={() => { }} mode={ETagToggleSelectFilterMode.select} />
        </div>
        <div className="space-y-2">
          <Label>Amenidades</Label>
          <AmenitySelectFilter onValueChange={() => { }} mode={EAmenitySelectFilterMode.multiSelect} />
        </div>
        <div className="space-y-2">
          <Label>Metodos de Pago</Label>
          <PaymentMethodSelectFilter onValueChange={() => { }} mode={EPaymentMethodSelectFilterMode.multiSelect} />
        </div>
        <div className="space-y-2">
          <Label>Tipos de servicios</Label>
          <ServiceTypeSelectFilter onValueChange={() => { }} mode={EServiceTypeSelectFilterMode.multiSelect} />
        </div>
        <div className="space-y-2">
          <Label>Seleccione la Ciudad</Label>
          <CitySelectFilter onValueChange={() => { }} />
        </div>
        <div className="space-y-2">
          <Label>Seleccione la Zona</Label>
          <ZoneSelectFilter onValueChange={() => { }} mode={EZoneSelectFilterMode.select} />
        </div>
      </div>
    </main>
  );
}
