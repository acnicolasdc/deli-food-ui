'use client'
import { atom } from "jotai";
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from '@/components/ui/label';
import { HomeIcon, RocketIcon, StarIcon, HeartIcon } from '@radix-ui/react-icons'
import { TagToggleListSelectLoadingIndicator } from "./components/tag-toggle-list-select-loading-indicator";
import { AnimationFadeIn } from "@/components/animation/animation-fade-in";
import { MultiSelect } from "@/components/ui/multi-select";
import { useTagToggleSelectFilter } from "./use-tag-toggle-select-filter";


export const tagToggleSelectFilterIcon = {
    'icon-deli': HeartIcon,
    'icon-new': StarIcon,
    'icon-promo': RocketIcon,
};

export enum ETagToggleSelectFilterMode {
    select = 'select',
    multiSelect = 'multi-select',
    toggle = 'toggle'
}

export type TTagToggleSelectAtom = { name: string, value: string | number };

export interface ITagToggleSelectFilterProps {
    mode?: ETagToggleSelectFilterMode;
    value?: string | string[];
    disabled?: boolean;
    onValueChange: (value?: string | string[]) => void
}


export const tagToggleSelectFilterAtom = atom<string | undefined>(undefined);

export function TagToggleSelectFilter({ onValueChange, value, disabled, mode = ETagToggleSelectFilterMode.toggle }: ITagToggleSelectFilterProps) {
    const { data, isFetching } = useTagToggleSelectFilter();
    if (mode === ETagToggleSelectFilterMode.multiSelect) {
        return <MultiSelect onValueChange={onValueChange} options={data} defaultValue={value as string[]} disabled={disabled}/>
    }

    if (mode === ETagToggleSelectFilterMode.select) {
        return (
            <Select disabled={isFetching || disabled} onValueChange={onValueChange} value={value as string}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccione Etiqueta" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Tipos de Etiqueta</SelectLabel>
                        {data.map(({ name, value }) => {
                            return <SelectItem key={value} value={value}>{name}</SelectItem>
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>
        )
    }
    return (
        <TagToggleListSelectLoadingIndicator isLoading={isFetching}>
            <AnimationFadeIn className='flex flex-row gap-2 items-center' code="quick-filters-tag">
                    <ToggleGroup type="single" onValueChange={onValueChange} value={value as string} className="gap-2">
                        {data.map(({ value, name, image }) => {
                            const Icon = tagToggleSelectFilterIcon[image as keyof typeof tagToggleSelectFilterIcon] || HomeIcon;
                            return (
                                <ToggleGroupItem
                                    value={value}
                                    aria-label={`Toggle ${value}`}
                                    key={value}
                                    size="sm"
                                    variant="outline"
                                >
                                    <Icon className="mr-2" /> {name}
                                </ToggleGroupItem>
                            )
                        })}
                    </ToggleGroup>
         
            </AnimationFadeIn>
        </TagToggleListSelectLoadingIndicator>
    );
}
