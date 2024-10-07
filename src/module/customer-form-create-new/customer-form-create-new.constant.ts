import { atom } from "jotai";

export const defaultCustomerFormCreateNewStep = ['Informacion general', 'Tipos de servicio', 'Sedes'];

export const customerFormCreateNewStepAtom = atom<number>(0);