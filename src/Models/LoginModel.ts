export class LoginModel{
    public readonly customerId: number;
    public readonly loggedIn: boolean;

    constructor(customerId: number, loggedIn: boolean) {
        this.customerId = customerId;
        this.loggedIn = loggedIn
    }
}