import bcrypt from "bcrypt"
import {CustomerRepo} from "../Database/DBRepos";
import {Customer} from "../Database/Entity";
import {LoginModel} from "../Models/LoginModel";

export class CustomersService {
    public async RegisterCustomer(firstName: string, secondName: string, age: number, login: string, password: string): Promise<boolean>{
        try{
            if(!firstName || !secondName || age <= 0 || !login || !password){
                return false
            }

            password = await bcrypt.hash(password, 15)

            if(!await this.CheckLogin(login)){
                const customer = CustomerRepo.create({
                    login: login,
                    password: password,
                    firstName: firstName,
                    secondName: secondName,
                    age: age
                })

                await customer.save()

                return true
            }

            return true
        }catch{
            return false
        }
    }

    public async LoginCustomer(login: string, password: string): Promise<LoginModel>{
        try{
            if(!login || !password){
                return new LoginModel(0, false)
            }

            const customer = await CustomerRepo.findOneOrFail({
                where: {
                    login: login
                }
            })

            if(customer){
                if(bcrypt.compareSync(password, customer.password)){
                    return new LoginModel(customer.id, true)
                }
            }

            return new LoginModel(0, false)
        }catch{
            return new LoginModel(0, false)
        }
    }

    public async CustomerExist(customerId: number): Promise<boolean>{
        try{
            const customer = await CustomerRepo.findOneOrFail({
                where: {
                    id: customerId
                }
            })

            return true
        }catch(e: any){
            throw new Error(e)
        }
    }

    private async CheckLogin(login: string): Promise<boolean>{
        try{
            const user = await Customer.findOneOrFail({
                where:{
                    login: login
                }
            })

            if(user){
                return false
            }

            return true
        }catch{
            return false
        }
    }
}