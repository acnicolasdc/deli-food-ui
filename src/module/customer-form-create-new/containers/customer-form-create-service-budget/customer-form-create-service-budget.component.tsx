'use client';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EServiceTypeSelectFilterMode, ServiceTypeSelectFilter } from "@/containers/service-type-select-filter";
import { formatToCOP, parseCOPToInt } from "@/lib/money";
import { Separator } from "@/components/ui/separator";
import { useCustomerFormCreateServiceBudget } from "./use-customer-form-create-service-budget";

export function CustomerFormCreateServiceBudget() {
    const { serviceBudget, setServiceBudget } = useCustomerFormCreateServiceBudget();
    const handleSetPriceBudget = (event: React.ChangeEvent<HTMLInputElement>) => {
        const cleanString = parseCOPToInt(event.target.value);
        return !isNaN(cleanString) ? cleanString : 0;
    }
    const totalCount = serviceBudget.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.count;
    }, 0);

    return (
        <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-row gap-4 bg-slate-50 py-4 px-4 rounded-lg">
                <div className="flex flex-1"><Label>Servicio</Label></div>
                <Separator orientation="vertical" />
                <div className="flex flex-1"><Label>Precio Promedio</Label></div>
            </div>
            {serviceBudget.map(({ serviceTypeId, count }, index) => {
                return (
                    <div className="flex flex-row w-full gap-4" key={index}>
                        <div className="gap-2 flex flex-1 flex-col">

                            <ServiceTypeSelectFilter
                                value={serviceTypeId}
                                disabled
                                onValueChange={(value) => {
                                    const isNotThere = !serviceBudget.some((type) => type.serviceTypeId === value);
                                    const localServiceType = [...serviceBudget];
                                    localServiceType[index].serviceTypeId = isNotThere ? value as string : '';
                                    setServiceBudget(localServiceType);
                                }}
                                mode={EServiceTypeSelectFilterMode.select}
                            />
                        </div>
                        <div className="gap-2 flex flex-1 flex-col">

                            <Input
                                placeholder="$30.000"
                                value={formatToCOP(count)}
                                onChange={(event) => {
                                    const localServiceType = [...serviceBudget];
                                    localServiceType[index].count = handleSetPriceBudget(event);
                                    setServiceBudget(localServiceType);
                                }}
                            />
                        </div>
                    </div>
                )
            })}
            <Separator />
            <div className="flex flex-col w-full items-center flex-1 justify-center bg-slate-50 rounded-lg gap-4 px-4 py-6">
                <Label className="text-base">Tu precio promedio por persona es:</Label>
                <p className="text-3xl font-medium text-[#786EEF]">{formatToCOP(totalCount)}</p>
            </div>
        </div>
    );
}
