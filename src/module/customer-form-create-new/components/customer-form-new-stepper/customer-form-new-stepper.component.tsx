import React from "react";
import { AnimationEnter } from "@/components/animation/animation-enter";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useMediaQuery } from "@/hooks/use-media-query";

export interface ICustomerFormNewStepperProps {
    currentStep: number;
    children: React.ReactNode;
}

interface StepIndicatorProps {
    steps: string[];
    currentStep: number;
    children: React.ReactNode;
}
export function CustomerFormNewStepperIndicator({ steps, currentStep, children }: StepIndicatorProps) {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    if (!isDesktop) {
        const label = steps[currentStep];
        return <div className="flex flex-col md:h-full bg-neutral-100 w-full md:w-[400px] px-8 py-8 gap-6">
            {children}
            <div className={cn("flex flex-row gap-2 py-2 px-2 rounded-lg w-full bg-[#786EEF] font-medium text-white",
            )}>
                <Badge className="bg-[#E9FB73] text-black size-6 flex justify-center items-center">{currentStep + 1}</Badge>
                <p>Paso: {label}</p>
            </div>
        </div>
    }
    return (
        <div className="flex flex-col md:h-full bg-neutral-100  w-full md:w-[400px] px-8 py-8 gap-6">
            {children}
            {steps.map((step, index) => {
                const isSelected = currentStep === index;
                const displayAnimation = isSelected && index !== 0;
                return (
                    <div key={index} className="flex items-center">
                        {displayAnimation ? (
                            <AnimationEnter
                                code={`animation-${index}`}
                                className={cn("flex flex-row gap-2 py-2 px-2 rounded-lg w-full",
                                    isSelected ? "bg-[#786EEF] font-medium text-white" : "bg-none"
                                )}>
                                <Badge className="bg-[#E9FB73] text-black size-6 flex justify-center items-center">{index + 1}</Badge>
                                <p>{step}</p>
                                <div className={cn("flex-1 justify-end items-center",
                                    isSelected ? "flex" : "hidden"
                                )}>
                                    <ArrowRightIcon color="#FFFF" className="size-4" />
                                </div>
                            </AnimationEnter>
                        ) : (
                            <div
                                className={cn("flex flex-row gap-2 py-2 px-2 rounded-lg w-full",
                                    isSelected ? "bg-[#786EEF] font-medium text-white" : "bg-none"
                                )}>
                                <Badge className="bg-[#E9FB73] text-black size-6 flex justify-center items-center">{index + 1}</Badge>
                                <p>{step}</p>
                                <div className={cn("flex-1 justify-end items-center",
                                    isSelected ? "flex" : "hidden"
                                )}>
                                    <ArrowRightIcon color="#FFFF" className="size-4" />
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    );
};
export function CustomerFormNewStepper({ currentStep, children }: ICustomerFormNewStepperProps) {
    const stepsArray = React.Children.toArray(children);
    return (
        <div className='flex flex-row items-stretch w-full flex-1'>
            {stepsArray[currentStep]}
        </div>
    );
};
