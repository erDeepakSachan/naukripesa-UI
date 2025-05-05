import { Company } from "./company.entity"
import { Joblocation } from "./joblocation.entity"

export interface Jobdetail {
    JobDetailId: any,
    CompanyId: any,
    JobLocationId: any,
    InterviewDate: any,
    InterviewTime: string,
    InterviewLocation: any,
    Qualification: any,
    ContactNumber: any,
    Department: any,
    OtherDetail: any,
    Company?: Company | null,
    JobLocation?: Joblocation | null,
}

export const emptyJobdetail = (): Jobdetail => {
    return {
        JobDetailId: 0,
        CompanyId: 0,
        JobLocationId: 0,
        InterviewDate: '',
        InterviewTime: '',
        InterviewLocation: '',
        Qualification: '',
        ContactNumber: '',
        Department: '',
        OtherDetail: '',
        Company: null,
        JobLocation: null,
    }
}
