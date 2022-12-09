import express from "express";
import {TicketsService} from "../../Services/TicketsService";

const router = express.Router()

router.post("/ticket", async (req, res) => {
    try{
        const {premiereId, customerId} = req.body

        if(premiereId <= 0 || customerId <= 0){
            res.status(204).send("dont enough parameters to buy ticket")
            return
        }

        res.status(201).send(await new TicketsService().BuyTicket(premiereId, customerId))
        return
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as buyTicketRouter
}