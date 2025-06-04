import { Currency } from "./currency.entity"
import{User} from "./user.entity"

export interface Company {
    CompanyId: number,
    CurrencyId: number,
    Name: string,
    Address: string,
    CreatedBy: number,
    CreatedOn: any,
    ModifiedBy: number,
    ModifiedOn: any,
    Currency?: Currency | null,
    User: User | null
}

export const emptyCompany = (): Company => {
    return {
        CompanyId: 0,
        CurrencyId: 0,
        Name: '',
        Address: '',
        CreatedBy: 0,
        CreatedOn: '',
        ModifiedBy: 0,
        ModifiedOn: '',
        Currency: null,
        User: null
    }
}