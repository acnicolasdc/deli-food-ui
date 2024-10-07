import * as React from "react"
import { useAtomValue } from "jotai";
import { UserLocationInput } from "../../components/user-location-input";
import { userLocationFilterAtom } from "../user-location-apply-button";

export interface IUserLocationInputTriggerProps extends React.HTMLAttributes<HTMLDivElement> { }
export function UserLocationInputTrigger({ className, ...props }: IUserLocationInputTriggerProps) {
    const { city, zone, cardinalPoint } = useAtomValue(userLocationFilterAtom);
    return (
        <UserLocationInput zone={zone?.name} city={city?.name} cardinalPoint={cardinalPoint?.name} className={className} {...props} />
    )
}
