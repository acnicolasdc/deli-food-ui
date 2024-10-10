'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldImageInput } from "@/components/field/field-image-input";
import { EFoodTypeSelectFilterMode, FoodTypeSelectFilter } from "@/containers/food-type-select-filter";
import { PaymentMethodSelectFilter, EPaymentMethodSelectFilterMode } from "@/containers/payment-method-select-filter";
import { useCustomerFormCreateGeneralInfo } from './use-customer-form-create-general-info';

export function CustomerFormCreateGeneralInfo() {
    const { generalInformation, setGeneralInformation } = useCustomerFormCreateGeneralInfo();
    return (
        <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col md:flex-row w-full gap-4">
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
                <div>
                    <Label>Tiempo estimado de atencion</Label>
                    <p className="text-sm text-muted-foreground">Es el tiempo que toma en entregar la orden al cliente.</p>
                </div>
                <div className="flex flex-row w-full items-center gap-4 bg-slate-50 rounded-xl p-4">
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
                    <p className="text-muted-foreground text-xs">Solo podras escoger maximo 3 tipos de productos</p>
                </div>
                <FoodTypeSelectFilter
                    value={generalInformation.productTypes}
                    onValueChange={(value) => {
                        if (Array.isArray(value)) {
                            setGeneralInformation({ ...generalInformation, productTypes: value })
                        }
                    }}
                    maxSelect={3}
                    mode={EFoodTypeSelectFilterMode.multiSelect} />
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
        </div>
    );
}
