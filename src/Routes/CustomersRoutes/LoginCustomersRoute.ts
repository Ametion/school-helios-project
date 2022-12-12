import express from "express";
import {CustomersService} from "../../Services/CustomersService";

const router = express.Router()

router.post("/loginCustomer", async (req, res) => {
    try{
        const {login, password} = req.body

        if(!login || !password){
            res.status(204).send("dont enough parameters to login")
            return
        }

        res.status(200).send(await new CustomersService().LoginCustomer(login, password))
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as loginCustomerRoute
}