import * as React from "react"
import { atom, useAtom, useAtomValue } from "jotai";
import { Button } from "@/components/ui/button"
import { citySelectAtom } from "../city-select-filter";
import { zoneSlideAtom } from "../zone-slide-select-filter";

import type { TCitySelectAtom } from "../city-select-filter";
import type { TSoneSlideAtom } from "../zone-slide-select-filter";

const defaultUserLocationFilterValue = { zone: undefined, city: undefined }

export interface IUserLocationApplyButtonProps {
    onSuccess?: () => void
    onError?: () => void
}

export type TUserLocationApplyButtonAtom = { zone: TSoneSlideAtom | undefined, city: TCitySelectAtom | undefined };

export const userLocationFilterAtom = atom<TUserLocationApplyButtonAtom>(defaultUserLocationFilterValue);
export function UserLocationApplyButton({ onSuccess }: IUserLocationApplyButtonProps) {
    const [_, serParams] = useAtom(userLocationFilterAtom);
    const [zone, setZone] = useAtom(zoneSlideAtom);
    const [city, setCity] = useAtom(citySelectAtom);
    const shouldDisableButton = !zone && !city;

    const checkIfThereAreFilters = (callback: () => void) => {
        if (shouldDisableButton) return;
        callback();
    }
    const handleApplyParams = () => checkIfThereAreFilters(() => serParams({ zone, city }));
    
    const handleClearParams = () => checkIfThereAreFilters(() => {
        serParams(defaultUserLocationFilterValue);
        setZone(undefined);
        setCity(undefined);
        onSuccess?.();
    });

    const handleOnClickButton = () => {
        handleApplyParams();
        onSuccess?.();
    }

    return (
        <div className="flex flex-row justify-end gap-6">
            <Button
                variant="link"
                disabled={shouldDisableButton}
                onClick={handleClearParams}
            >
                Limpiar Filtros
            </Button>

            <Button
                variant="delifood"
                disabled={shouldDisableButton}
                onClick={handleOnClickButton}
            >
                Buscar
            </Button>
        </div>

    )
}
