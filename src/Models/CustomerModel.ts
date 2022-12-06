export class CustomerModel {
    public readonly customerId: number;
    public readonly customerFirstName: string;
    public readonly customerSecondName: string;
    public readonly customerAge: number;
    public readonly customerLogin: string;

    constructor(customerId: number, customerFirstName: string, customerSecondName: string, customerAge: number, customerLogin: string) {
        this.customerId = customerId
        this.customerFirstName = customerFirstName
        this.customerSecondName = customerSecondName
        this.customerAge = customerAge
        this.customerLogin = customerLogin
    }
}