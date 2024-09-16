import * as React from "react";
import { atom, useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { formatToCOP, parseCOPToInt } from "./customer-budget-filter.feature";

export const MAX_COUNT = 10;
export const MIN_COUNT = 0;
export const MAX_PRICE_BUDGET = 10000000;
export const MIN_PRICE_BUDGET = 30000;

export const defaultCustomerBudgetFilterAtomValue = {
    count: 0,
    price: '',
    type: undefined,
}

export type TCustomerBudgetFilterAtom = {
    price: string;
    count: number;
    type: string | undefined;
}

export const customerBudgetFilterAtom = atom<TCustomerBudgetFilterAtom>(defaultCustomerBudgetFilterAtomValue);
export function CustomerBudgetFilter() {
    const [budget, setBudget] = useAtom(customerBudgetFilterAtom);
    const handleSetPriceBudget = (event: React.ChangeEvent<HTMLInputElement>) => {
        const cleanString = parseCOPToInt(event.target.value);
        isNaN(cleanString)
        if (!isNaN(cleanString)) {
            const price = cleanString < MAX_PRICE_BUDGET ? formatToCOP(cleanString) : budget.price;
            setBudget({ ...budget, price });
        } else {
            setBudget({ ...budget, price: '' });
        }
    }
    const handleSetSumCountBudget = () => {
        if (budget.count === MAX_COUNT) return;
        setBudget((prevValue) => ({ ...prevValue, count: prevValue.count + 1 }));
    }
    const handleSetRestCountBudget = () => {
        if (budget.count <= MIN_COUNT) return;
        setBudget((prevValue) => ({ ...prevValue, count: prevValue.count - 1 }));
    }
    const handleSetTypeBudget = (type: string) => {
        setBudget({ ...budget, type });
    }

    const disableFormDependency = !budget.price || parseCOPToInt(budget.price) < MIN_PRICE_BUDGET;
    return (
        <div className='space-y-4'>
            <div>
                <Label className='font-semibold text-md'>
                    Presupuesto
                </Label>
                <p className='text-xs mb-4 text-muted-foreground'>Selecciona el valor maximo a pagar</p>
                <div className='w-full mb-2'>
                    <Input placeholder='Ejemplo $150.000' className='w-full' value={budget.price} onChange={handleSetPriceBudget} />
                </div>
                <p className='text-xs mb-4 text-muted-foreground'>{`Los valore minimo es de ${formatToCOP(MIN_PRICE_BUDGET)} y el maximo de ${formatToCOP(MAX_PRICE_BUDGET)}`}</p>
            </div>
            <div className='pl-2'>
                <Label className='font-medium'>
                    Para cuantas personas ?
                </Label>
                <p className='text-xs mb-4 text-muted-foreground'>Buscaremos un restaurante que se ajuste a tu presupuesto por la cantidad de personas</p>
                <div className='flex flex-row gap-6 items-center'>
                    <Button variant="outline" onClick={handleSetRestCountBudget} disabled={disableFormDependency}>
                        <MinusIcon className='h-2 w-2' />
                    </Button>
                    <p>{budget.count}</p>
                    <Button variant="outline" onClick={handleSetSumCountBudget} disabled={disableFormDependency}>
                        <PlusIcon className='h-2 w-2' />
                    </Button>
                </div>
            </div>
            <div className='pl-2'>
                <Label className='font-medium'>
                    Tipo de plan
                </Label>
                <p className='text-xs mb-4 text-muted-foreground'>Cuentanos que esperas conseguir con el presupuesto</p>
                <div>
                    <Select value={budget.type} onValueChange={handleSetTypeBudget} disabled={disableFormDependency}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecciona el plan" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="apple">Plato + Bebida</SelectItem>
                                <SelectItem value="banana">Plato + Bebida + Postre</SelectItem>
                                <SelectItem value="blueberry">Plato + Bebida + Postre + Entrada</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>

    )
}
