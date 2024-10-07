import * as React from "react"
import { atom, useAtom, useSetAtom } from "jotai";
import { Button } from "@/components/ui/button"
import { useUserCitySelectFilter } from "../user-city-select-filter";
import { userZoneSlideAtom } from "../user-zone-slide-select-filter";

import type { TUserCitySelectAtom } from "../user-city-select-filter/use-user-city-select-filter";
import type { TUserCardinalPointSelectAtom } from "../user-cardinal-point-select-filter/use-user-cardinal-point-select-filter";

import type { TUserZoneSlideAtom } from "../user-zone-slide-select-filter";
import { useUserCardinalPointSelectFilter } from "../user-cardinal-point-select-filter";

const defaultUserLocationFilterValue = { zone: undefined, city: undefined, cardinalPoint: undefined }

export interface IUserLocationApplyButtonProps {
    onSuccess?: () => void
    onError?: () => void
}

export type TUserLocationApplyButtonAtom = { zone: TUserZoneSlideAtom | undefined, city: TUserCitySelectAtom | undefined, cardinalPoint: TUserCardinalPointSelectAtom | undefined };

export const userLocationFilterAtom = atom<TUserLocationApplyButtonAtom>(defaultUserLocationFilterValue);
export function UserLocationApplyButton({ onSuccess }: IUserLocationApplyButtonProps) {
    const setParams = useSetAtom(userLocationFilterAtom);
    const [zone, setZone] = useAtom(userZoneSlideAtom);
    const { city, resetCity } = useUserCitySelectFilter();
    const { cardinalPoint, resetCardinalPoint } = useUserCardinalPointSelectFilter();
    const shouldDisableButton = !zone && !city && !cardinalPoint;

    const checkIfThereAreFilters = (callback: () => void) => {
        if (shouldDisableButton) return;
        callback();
    }
    const handleApplyParams = () => checkIfThereAreFilters(() => setParams({ zone, city, cardinalPoint }));

    const handleClearParams = () => checkIfThereAreFilters(() => {
        setParams(defaultUserLocationFilterValue);
        setZone(undefined);
        resetCardinalPoint()
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
