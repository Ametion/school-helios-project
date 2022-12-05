import express from "express";
import {ProducersService} from "../../Services/ProducersService";

const router =  express.Router()

router.post("/producer", async (req, res) => {
    try{
        const {firstName, secondName} = req.body

        if(!firstName || !secondName){
            res.status(204).send("dont enough parameters to add new producer")
            return
        }

        res.status(201).send(await new ProducersService().AddProducer(firstName, secondName))
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as addProducerRoute
}