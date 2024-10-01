import * as React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export interface IFieldCheckListItemProps {
    value: string;
    name: string;
    checked?: boolean;
    disabled?: boolean;
    onCheckedChange: (value: string) => void
}

export function FieldCheckListItem({ value, name, checked = false, disabled = false, onCheckedChange }: IFieldCheckListItemProps) {
    return (
        <div className="items-center flex space-x-2 justify-center" key={value}>
            <div className="flex flex-1 items-center">
                <Label
                    htmlFor={`method_${value}`}
                    className='font-normal'
                >
                    {name}
                </Label>
            </div>
            <Checkbox
                className='w-5 h-5'
                disabled={disabled}
                id={`method_${value}`}
                checked={checked}
                onCheckedChange={() => onCheckedChange(String(value))}
            />
        </div>
    )


}
