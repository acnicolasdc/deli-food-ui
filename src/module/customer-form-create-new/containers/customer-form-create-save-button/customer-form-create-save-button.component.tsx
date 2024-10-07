'use client'
import { Button } from "@/components/ui/button";
import { useAtomValue } from "jotai";
import useCustomerCreate from "@/hooks/infrastructure/customer/use-customer-create";
import { generalInformationAtom } from "../customer-form-create-general-info";
import { serviceBudgetsAtom } from "../customer-form-create-service-budget";
import { headquarterAtom } from "../customer-form-create-headquarter";

export function CustomerFormCreateSaveButton() {
    const headquarter = useAtomValue(headquarterAtom);
    const serviceBudgets = useAtomValue(serviceBudgetsAtom);
    const generalInformation = useAtomValue(generalInformationAtom);

    const { mutate, status } = useCustomerCreate();

    const handleCreateCustomer = async () => {
        const formData = new FormData();
        const headquartersImages = headquarter.map(({ image }) => (image.file?.[0]));
        const headquartersMapped = headquarter.map(({ id, image, categories, zoneId, openingHours, ...restValues }) => ({
            ...restValues,
            categories: categories.map(Number),
            zoneId: parseInt(zoneId),
            openingHours: openingHours.map(({ id, ...restValues }) => ({ ...restValues }))
        }));
        // Append regular fields
        formData.append('name', generalInformation.name);
        formData.append('waitingTime', `De ${generalInformation.waitingTime[0]} a ${generalInformation.waitingTime[1]} Minutos`);

        formData.append('serviceBudgets', JSON.stringify(serviceBudgets));
        // Append arrays as JSON strings
        formData.append('amenities', JSON.stringify(generalInformation.amenities.map(Number)));
        formData.append('paymentMethods', JSON.stringify(generalInformation.paymentMethods.map(Number)));
        formData.append('productTypes', JSON.stringify(generalInformation.productTypes.map(Number)));
        formData.append('headquarters', JSON.stringify(headquartersMapped));

        // Append files
        if (generalInformation.logo.file) {
            formData.append('logo', generalInformation.logo.file[0]);
        }

        headquartersImages.forEach((image) => {
            formData.append(`headquartersImages`, image as Blob); // Assuming you want to match the backend field name
        });
        mutate(formData);
    }
    return (
        <Button onClick={handleCreateCustomer}>Create</Button>
    );
}
