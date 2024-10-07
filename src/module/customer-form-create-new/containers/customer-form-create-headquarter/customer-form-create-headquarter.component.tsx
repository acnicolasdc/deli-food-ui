'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldImageInput } from "@/components/field/field-image-input";
import { CategorySelectFilter, ECategorySelectFilterMode } from "@/containers/category-select-filter";
import { EZoneSelectFilterMode, ZoneSelectFilter } from "@/containers/zone-select-filter";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useSetAtom } from "jotai";
import { Separator } from "@/components/ui/separator";
import { zoneFindManyCardinalPointIdAtom } from "@/hooks/infrastructure/zone/use-zone-find-by-cardinal-point";
import { CardinalPointSelectFilter } from "@/containers/cardinal-point-select-filter";
import type { TCardinalPointSelectFilterValue } from "@/containers/cardinal-point-select-filter/zone-cardinal-point-select-filter.component";
import { defaultHeadquarterAtomValue, defaultHeadquarterOpeningHour, useCustomerFormCreateHeadquarter } from "./use-customer-form-create-headquarter";

export function CustomerFormCreateHeadquarter() {
    const { headquarter, setHeadquarter } = useCustomerFormCreateHeadquarter();
    const setZoneCardinalPointId = useSetAtom(zoneFindManyCardinalPointIdAtom);

    const handleHeadquarterValues = (index: number, key: string, value: any) => {
        let localHeadquarters = [...headquarter];
        const localHead = { ...localHeadquarters[index] };
        localHead[key as keyof typeof localHead] = value;
        localHeadquarters[index] = localHead
        setHeadquarter(localHeadquarters);
    }
    return (

        <div className="flex flex-col gap-12">
            {headquarter.map((head, headIndex) => {
                return (
                    <div className="flex flex-row gap-4 w-full" key={head.id}>
                        <div className="w-8 h-8 rounded-full bg-[#786EEF] text-white hidden md:flex items-center justify-center">
                            <p>{headIndex + 1}</p>
                        </div>
                        <div className="flex flex-col gap-4 flex-1">
                            <div className="space-y-4">
                                <div className="flex flex-col md:flex-row w-full gap-4">
                                    <div className="gap-2 flex flex-1 flex-col">
                                        <Label>Nombre de la sede</Label>
                                        <Input placeholder="Ej: El Ingenio" value={head.name}
                                            onChange={(event) => {
                                                handleHeadquarterValues(headIndex, 'name', event.target.value)
                                            }} />
                                    </div>
                                    <div className="gap-2 flex flex-1 flex-col">
                                        <Label>Imagen</Label>
                                        <FieldImageInput
                                            onValueChange={(file) => {
                                                handleHeadquarterValues(headIndex, 'image', file);
                                            }}
                                            value={head.image}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row w-full gap-4">
                                    <div className="gap-2 flex flex-1 flex-col">
                                        <Label>Direccion</Label>
                                        <Input placeholder="Direccion"
                                            value={head.address}
                                            onChange={(event) => {
                                                handleHeadquarterValues(headIndex, 'address', event.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="gap-2 flex flex-1 flex-col">
                                        <Label>Sector</Label>
                                        <CardinalPointSelectFilter
                                            onValueChange={(cardinalPoint) => {
                                                const { value } = cardinalPoint as TCardinalPointSelectFilterValue;
                                                handleHeadquarterValues(headIndex, 'cardinalPointId', value);
                                                setZoneCardinalPointId(value as string);
                                            }}
                                            value={head.cardinalPointId}
                                        />
                                    </div>
                                    <div className="gap-2 flex flex-1 flex-col">
                                        <Label>Zona</Label>
                                        <ZoneSelectFilter
                                            onValueChange={(zone) => {
                                                const { value } = zone as TCardinalPointSelectFilterValue;
                                                handleHeadquarterValues(headIndex, 'zoneId', value);
                                            }}
                                            mode={EZoneSelectFilterMode.select}
                                            value={head.zoneId}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Categorias</Label>
                                    <CategorySelectFilter
                                        onValueChange={(categories) => {
                                            handleHeadquarterValues(headIndex, 'categories', categories);
                                        }}
                                        value={head.categories}
                                        maxSelect={3}
                                        mode={ECategorySelectFilterMode.multiSelect}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 flex-1 border w-full p-6 rounded-xl bg-neutral-50">
                                <div className="flex flex-row justify-between items-center">
                                    <Label className="text-xl">Horarios de atencion</Label>
                                    <Button
                                        size="sm"
                                        variant="cartoon"
                                        onClick={() => {
                                            handleHeadquarterValues(headIndex, 'openingHours', [...head.openingHours, { ...defaultHeadquarterOpeningHour, id: String(parseInt(head.openingHours[head.openingHours.length - 1].id) + 1) }]);
                                        }}>
                                        Añadir
                                    </Button>
                                </div>
                                {head.openingHours.map((value, index) => {
                                    return (
                                        <div className="flex flex-col md:flex-row w-full gap-4" key={value.id}>
                                            <div className="gap-2 flex flex-1 flex-col">
                                                <Label>Dias</Label>
                                                <Input
                                                    placeholder="Lunes a Viernes"
                                                    value={value.label}
                                                    onChange={(event) => {
                                                        const openingHoursArray = [...head.openingHours];
                                                        const openingCopied = { ...value };
                                                        openingCopied.label = event.target.value;
                                                        openingHoursArray[index] = openingCopied;
                                                        handleHeadquarterValues(headIndex, 'openingHours', openingHoursArray);
                                                    }}
                                                />
                                            </div>
                                            <div className="gap-2 flex flex-1 flex-col">
                                                <Label>Horarios</Label>
                                                <Input
                                                    placeholder="12:00 PM - 12:00 AM"
                                                    value={value.range}
                                                    onChange={(event) => {
                                                        const openingHoursArray = [...head.openingHours];
                                                        const openingCopied = { ...value };
                                                        openingCopied.range = event.target.value;
                                                        openingHoursArray[index] = openingCopied;
                                                        handleHeadquarterValues(headIndex, 'openingHours', openingHoursArray);
                                                    }}
                                                />
                                            </div>
                                            <div className="flex justify-center items-end">
                                                <Button 
                                                className="w-full md:w-auto"
                                                variant="destructive"
                                                    onClick={() => {
                                                        if (head.openingHours.length === 1) return;
                                                        const filtered = head.openingHours.filter((hour) => hour.id !== value.id)
                                                        handleHeadquarterValues(headIndex, 'openingHours', filtered);
                                                    }}
                                                ><Cross1Icon /> <p className="block ml-2 md:hidden md:ml-0">Eliminar</p></Button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="flex flex-col gap-4">
                <Separator />
                <Button
                    variant="cartoon"
                    onClick={() => {
                        setHeadquarter([...headquarter, { ...defaultHeadquarterAtomValue, id: String(parseInt(headquarter[headquarter.length - 1].id) + 1) }]);
                    }}
                >Agergar Sede</Button>
            </div>
        </div>
    );
}
