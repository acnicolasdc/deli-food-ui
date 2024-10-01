import { atom, useAtom } from "jotai"
import useProductTypeFindMany from "@/hooks/infrastructure/product-type/use-product-type-find-many";
import usePaymentMethodFindMany from "@/hooks/infrastructure/payment-method/use-payment-method-find-many";
import useServiceTypeFindMany from "@/hooks/infrastructure/service-type/use-service-type-find-many";

export const customerListCustomFiltersStatusAtom = atom<boolean>(false);

export function useCustomerListCustomFilters() {
  useProductTypeFindMany();
  useServiceTypeFindMany();
  usePaymentMethodFindMany();
  const [open, setOpen] = useAtom(customerListCustomFiltersStatusAtom);

  return { open, setOpen }
}