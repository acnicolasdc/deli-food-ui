'use client'
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import useCustomerCreate from "@/hooks/infrastructure/customer/use-customer-create";
import { generalInformationAtom } from "../customer-form-create-general-info";
import { serviceBudgetsAtom } from "../customer-form-create-service-budget";
import { headquarterAtom } from "../customer-form-create-headquarter";
import { AnimationSpinner } from "@/components/animation/animation-spinner";


export const customerFormCreateSaveButtonDialogStatusAtom = atom<boolean>(false)
export const customerFormCreateSaveButtonProcessSuccessAtom = atom<boolean>(false);
export function CustomerFormCreateSaveButton() {
    const [openCustomerDialog, setCustomerDialog] = useAtom(customerFormCreateSaveButtonDialogStatusAtom);
    const setProcessSuccess = useSetAtom(customerFormCreateSaveButtonProcessSuccessAtom);


    const headquarter = useAtomValue(headquarterAtom);
    const serviceBudgets = useAtomValue(serviceBudgetsAtom);
    const generalInformation = useAtomValue(generalInformationAtom);

    const { mutate, isPending, isSuccess } = useCustomerCreate({
        onSuccess: () => {
            setCustomerDialog(false);
            setTimeout(() => setProcessSuccess(true), 500);
        }
    });
    const handleSetStatusModal = () => setCustomerDialog((prev) => !prev);
    const handleCreateCustomer = async () => {
        const formData = new FormData();
        const headquartersImages = headquarter.map(({ image }) => (image.file?.[0]));
        const headquartersMapped = headquarter.map(({ id, image, categories, zoneId, openingHours, ...restValues }) => ({
            ...restValues,
            categories: categories.map(Number),
            zoneId: parseInt(zoneId),
            openingHours: openingHours.map(({ id, ...restValues }) => ({ ...restValues }))
        }));
        formData.append('name', generalInformation.name);
        formData.append('tagId', String(generalInformation.tagId));
        formData.append('waitingTime', `De ${generalInformation.waitingTime[0]} a ${generalInformation.waitingTime[1]} Minutos`);
        formData.append('serviceBudgets', JSON.stringify(serviceBudgets.map(({ count, serviceTypeId }) => ({ count, serviceTypeId: parseInt(serviceTypeId as string) }))));
        formData.append('amenities', JSON.stringify(generalInformation.amenities.map(Number)));
        formData.append('paymentMethods', JSON.stringify(generalInformation.paymentMethods.map(Number)));
        formData.append('productTypes', JSON.stringify(generalInformation.productTypes.map(Number)));
        formData.append('headquarters', JSON.stringify(headquartersMapped));

        if (generalInformation.logo.file) {
            formData.append('logo', generalInformation.logo.file[0]);
        }

        headquartersImages.forEach((image) => {
            formData.append('headquartersImages', image as Blob);
        });
        mutate(formData);
    }
    const isLoading = isPending && !isSuccess;
    return (
        <AlertDialog open={openCustomerDialog}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Estas seguro de enviar los datos?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Una vez envies tus datos, nuestro equipo de marketing creara tu perfil y cualquier cambios debera ser solicitado directamente con nosotros.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={handleSetStatusModal}>Cancelar</AlertDialogCancel>
                    <Button onClick={handleCreateCustomer} variant="delifood">
                        {isLoading ? (
                            <AnimationSpinner isLoading variant='size-s' />
                        ) : (
                            false
                        )}
                        {isLoading ? 'Enviando' : 'Enviar'}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
