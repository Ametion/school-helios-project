import express from "express";
import {CustomerService} from "../../Services/CustomerService";

const router = express.Router()

router.patch("/loginCustomer", async (req, res) => {
    try{
        const {login, password} = req.body

        if(!login || !password){
            res.status(204).send("dont enough parameters to login")
            return
        }

        res.status(200).send(await new CustomerService().LoginCustomer(login, password))
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as loginCustomerRoute
}