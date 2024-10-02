import * as React from "react"
import { atom, useAtom, useSetAtom } from "jotai";
import { Button } from "@/components/ui/button"
import { useUserCitySelectFilter } from "../user-city-select-filter";
import { userZoneSlideAtom } from "../user-zone-slide-select-filter";

import type { TUserCitySelectAtom } from "../user-city-select-filter/use-user-city-select-filter";
import type { TUserZoneSlideAtom } from "../user-zone-slide-select-filter";

const defaultUserLocationFilterValue = { zone: undefined, city: undefined }

export interface IUserLocationApplyButtonProps {
    onSuccess?: () => void
    onError?: () => void
}

export type TUserLocationApplyButtonAtom = { zone: TUserZoneSlideAtom | undefined, city: TUserCitySelectAtom | undefined };

export const userLocationFilterAtom = atom<TUserLocationApplyButtonAtom>(defaultUserLocationFilterValue);
export function UserLocationApplyButton({ onSuccess }: IUserLocationApplyButtonProps) {
    const setParams = useSetAtom(userLocationFilterAtom);
    const [zone, setZone] = useAtom(userZoneSlideAtom);
    const { city, resetCity } = useUserCitySelectFilter();
    const shouldDisableButton = !zone && !city;

    const checkIfThereAreFilters = (callback: () => void) => {
        if (shouldDisableButton) return;
        callback();
    }
    const handleApplyParams = () => checkIfThereAreFilters(() => setParams({ zone, city }));

    const handleClearParams = () => checkIfThereAreFilters(() => {
        setParams(defaultUserLocationFilterValue);
        setZone(undefined);
        resetCity();
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
