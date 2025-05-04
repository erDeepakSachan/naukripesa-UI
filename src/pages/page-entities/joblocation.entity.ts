export interface Joblocation {
JobLocationId: any,
Location: any,
CreatedBy: any,
CreatedOn: any,
ModifiedBy: any,
ModifiedOn: any,
IsArchived: any,
Jobdetails: any,
}

export const emptyJoblocation = (): Joblocation => {
    return {
JobLocationId: '',
Location: '',
CreatedBy: '',
CreatedOn: '',
ModifiedBy: '',
ModifiedOn: '',
IsArchived: false,
Jobdetails: '',
    }
}
