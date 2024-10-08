import useHeadquarterFindMany from "@/hooks/infrastructure/headquarter/use-headquarter-find-many";


export function useCustomerCardList(){ 
    const mutation = useHeadquarterFindMany();
    const data = mutation.data.map(({ name, image, address, id, customer}) => {
        return{
            id,
            image, 
            address, 
            name: `${customer.name} - ${name}`,
            logo: customer.logo,
            tag: customer.tag
        }
    })
    return {...mutation,  data}
}