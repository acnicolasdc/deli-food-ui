import { TCustomerBudgetFilterAtom } from "./customer-budget-filter.component";

export function formatToCOP(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(value);
}

export function parseCOPToInt(copString: string) {
  let cleanString = copString.replace(/[^0-9]/g, "");
  return parseInt(cleanString, 10);
}

export function allFilterValuesAreFalse(obj: TCustomerBudgetFilterAtom) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && obj[key as keyof typeof obj]) {
      return false;
    }
  }
  return true;
}
