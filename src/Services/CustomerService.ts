import bcrypt from "bcrypt"
import {CustomerRepo} from "../Database/DBRepos";
import {Customer} from "../Database/Entity";

export class CustomerService{
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

    public async LoginCustomer(login: string, password: string): Promise<boolean>{
        try{
            if(!login || !password){
                return false
            }

            const customer = await CustomerRepo.findOneOrFail({
                where: {
                    login: login
                }
            })

            if(customer){
                if(bcrypt.compareSync(password, customer.password)){
                    return true
                }
            }

            return false
        }catch{
            return false
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