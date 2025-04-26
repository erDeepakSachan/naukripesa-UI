export interface Jobdetail {
JobDetailId: any,
CompanyId: any,
JobLocationId: any,
InterviewDate: any,
InterviewTime: any,
InterviewLocation: any,
Qualification: any,
ContactNumber: any,
Department: any,
OtherDetail: any,
Company: any,
JobLocation: any,
}

export const emptyJobdetail = (): Jobdetail => {
    return {
JobDetailId: '',
CompanyId: '',
JobLocationId: '',
InterviewDate: '',
InterviewTime: '',
InterviewLocation: '',
Qualification: '',
ContactNumber: '',
Department: '',
OtherDetail: '',
Company: '',
JobLocation: '',
    }
}
