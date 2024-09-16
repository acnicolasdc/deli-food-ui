import * as React from "react"
import { atom, useAtom } from 'jotai';
import { Label } from "@/components/ui/label";
import { FieldSlideSelect, EFieldSlideSelectType } from "@/components/field/field-slide-select";
import flora from '../../../../../public/places/flora.png';
import granada from '../../../../../public/places/granada.png';
import jardin from '../../../../../public/places/jardin.png';
import novena from '../../../../../public/places/novena.png';
import pance from '../../../../../public/places/pance.png';
import penon from '../../../../../public/places/penon.png';
import sanAntonio from '../../../../../public/places/san-antonio.png';
import sanFernando from '../../../../../public/places/san-fernando.png';
import dapa from '../../../../../public/places/dapa.png';
import bocha from '../../../../../public/places/bocha.png';
import ingenio from '../../../../../public/places/ingenio.png';
import jamundi from '../../../../../public/places/jamundi.png';
import afueras from '../../../../../public/places/afueras.png';
import km from '../../../../../public/places/km.png';

const MOCK_DATA = [
    {
        name: 'San Fernando',
        value: '1',
        image: sanFernando
    },
    {
        name: 'Ciudad Jardin',
        value: '2',
        image: jardin
    },
    {
        name: 'La Flora',
        value: '3',
        image: flora
    },
    {
        name: 'Granada',
        value: '4',
        image: granada
    },
    {
        name: 'San Antonio',
        value: '5',
        image: sanAntonio
    },
    {
        name: 'Peñon',
        value: '6',
        image: penon
    },
    {
        name: 'Novena',
        value: '7',
        image: novena
    },
    {
        name: 'Ingenio',
        value: '8',
        image: ingenio
    },
    {
        name: 'Bochalema',
        value: '9',
        image: bocha
    },
    {
        name: 'Pance',
        value: '10',
        image: pance
    },
    {
        name: 'Jamundi',
        value: '11',
        image: jamundi
    },
    {
        name: 'Dapa',
        value: '12',
        image: dapa
    },
    {
        name: 'KM 18',
        value: '13',
        image: km
    },
    {
        name: 'Afueras',
        value: '14',
        image: afueras
    }
];

export interface IZoneSlideSelectFilterProps {
    type: EFieldSlideSelectType;
}

export type TSoneSlideAtom = { label: string, id: string };

export const zoneSlideAtom = atom<TSoneSlideAtom | undefined>(undefined);

export function ZoneSlideSelectFilter({ type }: IZoneSlideSelectFilterProps) {
    const [zone, setZone] = useAtom(zoneSlideAtom);
    return (
        <div className='space-y-4 w-full'>
            <Label>A que zona quieres ir?</Label>
            <FieldSlideSelect
                data={MOCK_DATA}
                variant="outline"
                type={type}
                value={zone?.id}
                onValueChange={setZone}
            />
        </div>
    )
}
