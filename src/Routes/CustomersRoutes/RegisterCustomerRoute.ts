import express from "express";
import {CustomerService} from "../../Services/CustomerService";

const router = express.Router()

router.post("/registerCustomer", async (req, res) => {
    try{
        const {firstName, secondName, age, login, password} = req.body

        if(!firstName || !secondName || parseInt(age) <= 0 || !login || !password){
            res.status(204).send("dont enough parameters")
            return
        }

        res.status(201).send(await new CustomerService().RegisterCustomer(firstName, secondName, parseInt(age), login, password))
        return
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as registerCustomerRoute
}