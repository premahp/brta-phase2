
export interface IEmployee{
    id: number,
	employee_name: string,
	employee_salary: number,
	employee_age: number,
	profile_image: string
}
export interface ICustomer{
	customerId:number,
	customerName:string,
	legacyVendorId:null,
	customerStateId:number,
	createdDate:Date,
	updatedAt: Date,
	updatedBy:string
}
export interface IState{
	lookupCode: string,
    description: string
}