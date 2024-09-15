'use client'
import Image from 'next/image';
import { Toggle } from "@/components/ui/toggle";
import logoDeliFood from '../../../public/logo.png';
import cappuccino from '../../../public/cappuccino.png';
import cocktail from '../../../public/cocktail.png';
import cottage from '../../../public/cottage.png';

import egg from '../../../public/egg.png';
import beagle from '../../../public/beagle.png';
import burger from '../../../public/burger.png';
import river from '../../../public/river.png';
import vegetables from '../../../public/vegetables.png';
import spaghetti from '../../../public/spaghetti.png';
import cheers from '../../../public/cheers.png';
import { FieldSlideSelect } from '@/components/field/field-slide-select';

const MOCK_DATA = [
  {
      name: 'Tardeo',
      value: '1',
      image: cappuccino
  },
  {
      name: 'Coctelear',
      value: '2',
      image: cocktail
  },
  {
      name: 'Glamping',
      value: '3',
      image: cottage
  },
  {
      name: 'Desayunos',
      value: '4',
      image: egg
  },
  {
      name: 'Aire Libre',
      value: '4',
      image: river
  },
  {
      name: 'Pet Friendly',
      value: '5',
      image: beagle
  },
  {
      name: 'Cheat Meal',
      value: '6',
      image: burger
  },
  {
      name: 'Celebraciones',
      value: '7',
      image: cheers
  },
  {
      name: 'Saludable',
      value: '8',
      image: vegetables
  },
  {
      name: 'Almuerzos',
      value: '9',
      image: spaghetti
  }
];


export function CategorySlideSelectFilter() {
  return (
    <FieldSlideSelect data={MOCK_DATA} />
  );
}
