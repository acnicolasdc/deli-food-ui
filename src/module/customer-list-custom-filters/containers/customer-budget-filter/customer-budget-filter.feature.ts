import { TCustomerBudgetFilterAtom } from "./customer-budget-filter.component";

export function allFilterValuesAreFalse(obj: TCustomerBudgetFilterAtom) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && obj[key as keyof typeof obj]) {
      const item = obj[key as keyof typeof obj];
      if(Array.isArray(item) && !item.length) return true
      return false;
    }
  }
  return true;
}
