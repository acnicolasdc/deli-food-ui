'use client';
import usePaymentMethodFindMany from '@/hooks/infrastructure/payment-method/use-payment-method-find-many';
export function usePaymentMethodSelectFilter() {
    const { isFetching, data } = usePaymentMethodFindMany();
    const dataMapped = data.map(({ id, name }) => ({ value: String(id), name }));
    return { data: dataMapped, isFetching }
}
