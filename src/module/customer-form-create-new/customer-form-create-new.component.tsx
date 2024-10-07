'use client'
import Image from 'next/image';
import { toast } from "sonner";
import { useLayoutEffect } from "react";
import { useSetAtom, useAtom } from "jotai";
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import type { TZodValidateFunctionReturn } from "@/core/types/zod";
import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { AnimationFadeIn } from '@/components/animation/animation-fade-in';
import { zoneFindManyCardinalPointIdAtom } from "@/hooks/infrastructure/zone/use-zone-find-by-cardinal-point";
import { cardinalPointFindManyCityIdAtom } from "@/hooks/infrastructure/cardinal-point/use-cardinal-point-find-by-city";
import { CustomerFormCreateServiceBudget, useCustomerFormCreateServiceBudget } from "./containers/customer-form-create-service-budget";
import { CustomerFormCreateHeadquarter } from "./containers/customer-form-create-headquarter";
import { CustomerFormNewStepperIndicator, CustomerFormNewStepper } from './components/customer-form-new-stepper';
import { CustomerFormCreateGeneralInfo, useCustomerFormCreateGeneralInfo } from "./containers/customer-form-create-general-info";
import { customerFormCreateNewStepAtom, defaultCustomerFormCreateNewStep } from "./customer-form-create-new.constant";
import { useCustomerFormCreateHeadquarter } from "./containers/customer-form-create-headquarter";
import logoDeliFood from '../../../public/logo.png';


export function CustomerFormCreateNew() {
    const [step, setStep] = useAtom(customerFormCreateNewStepAtom);

    const { validate: validateGeneralInfo } = useCustomerFormCreateGeneralInfo();
    const { validate: validateHeadquarter } = useCustomerFormCreateHeadquarter();
    const { validate: validateServiceBudget } = useCustomerFormCreateServiceBudget();

    const setZoneCardinalPointId = useSetAtom(zoneFindManyCardinalPointIdAtom);
    const setCardinalPointCityId = useSetAtom(cardinalPointFindManyCityIdAtom);

    useLayoutEffect(() => {
        setCardinalPointCityId('1');
        setZoneCardinalPointId('1');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const nextStep = () => setStep((prev) => Math.min(prev + 1, defaultCustomerFormCreateNewStep.length - 1));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));
    const handleNextButton = (cb: () => TZodValidateFunctionReturn) => () => {
        const value = cb();
        if (value.valid) {
            console.log('success')
            return nextStep();
        }
        toast("Upss! tenemos un problema", {
            description: "Los datos ingresados no son correctos o hay campos pendientes por completar.",
            action: {
                label: "Cerrar",
                onClick: () => console.log("Undo"),
            },
        })
    };

    return (
        <div className="flex flex-col md:flex-row w-full items-stretch">
            <CustomerFormNewStepperIndicator
                currentStep={step}
                steps={defaultCustomerFormCreateNewStep}
            >
                <div className='flex w-full flex-row md:mb-8'>
                    <div className='flex items-center justify-center'>
                        <Image
                            src={logoDeliFood}
                            alt='Picture of the author'
                            width={0}
                            height={40}
                        />
                    </div>
                </div>
            </CustomerFormNewStepperIndicator>
            <CustomerFormNewStepper currentStep={step}>
                <AnimationFadeIn className="flex flex-1 flex-col" code="animation-general-info">
                    <CardHeader>
                        <CardTitle>Informacion General</CardTitle>
                        <CardDescription>
                            Es la informacion que usaremos para identificarte
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1">
                        <CustomerFormCreateGeneralInfo />
                    </CardContent>
                    <CardFooter className='justify-end items-end'>
                        <Button variant="delifood" onClick={handleNextButton(validateGeneralInfo)}>Siguiente</Button>
                    </CardFooter>
                </AnimationFadeIn>
                <AnimationFadeIn className="flex flex-1 flex-col" code="animation-service-type">
                    <CardHeader>
                        <CardTitle>Tipos de servicios</CardTitle>
                        <CardDescription>
                            Son los servicios y precios promedios con los que te clasificaremos
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1">
                        <CustomerFormCreateServiceBudget />
                    </CardContent>
                    <CardFooter className='justify-between items-end'>
                        <Button variant="secondary" onClick={prevStep}>
                            <ArrowLeftIcon className='mr-2' />
                            Atras
                        </Button>
                        <Button variant="delifood" onClick={handleNextButton(validateServiceBudget)}>Siguiente</Button>
                    </CardFooter>
                </AnimationFadeIn>
                <AnimationFadeIn className="flex flex-1 flex-col" code="animation-headquarter">
                    <CardHeader>
                        <CardTitle>Sedes</CardTitle>
                        <CardDescription>
                            Permitenos saber donde estan tus establecimientos
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1">
                        <CustomerFormCreateHeadquarter />
                    </CardContent>
                    <CardFooter className='justify-between items-end'>
                        <Button variant="secondary" onClick={prevStep}>
                            <ArrowLeftIcon className='mr-2' />
                            Atras
                        </Button>
                        <Button variant="delifood" onClick={handleNextButton(validateHeadquarter)}>Siguiente</Button>
                    </CardFooter>
                </AnimationFadeIn>
            </CustomerFormNewStepper>
        </div>
    );
}
