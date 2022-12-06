import express from "express";
import {TicketsService} from "../../Services/TicketsService";

const router = express.Router()

router.get("/tickets/:customerId", async (req, res) => {
    try{
        const {customerId} = req.params

        if(parseInt(customerId) <= 0){
            res.status(204).send("dont enough parameters to get all tickets")
            return
        }

        res.status(200).send(await new TicketsService().GetAllCustomerTickets(parseInt(customerId)))
        return
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as getAllCustomerTickets
}