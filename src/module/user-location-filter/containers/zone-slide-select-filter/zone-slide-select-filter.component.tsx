import * as React from "react"
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
        value: '4',
        image: sanAntonio
    },
    {
        name: 'Peñon',
        value: '5',
        image: penon
    },
    {
        name: 'Novena',
        value: '6',
        image: novena
    },
    {
        name: 'Ingenio',
        value: '7',
        image: ingenio
    },
    {
        name: 'Bochalema',
        value: '8',
        image: bocha
    },
    {
        name: 'Pance',
        value: '9',
        image: pance
    },
    {
        name: 'Jamundi',
        value: '10',
        image: jamundi
    },
    {
        name: 'Dapa',
        value: '11',
        image: dapa
    },
    {
        name: 'KM 18',
        value: '12',
        image: km
    },
    {
        name: 'Afueras',
        value: '13',
        image: afueras
    }
];

export interface IZoneSlideSelectFilterProps {
    type: EFieldSlideSelectType;
}

export function ZoneSlideSelectFilter({ type }: IZoneSlideSelectFilterProps) {
    return (
        <div className='space-y-4 w-full'>
            <Label>A que zona quieres ir?</Label>
            <FieldSlideSelect data={MOCK_DATA} variant="outline" type={type}/>
        </div>
    )
}
