import express from "express";
import {ProducersService} from "../../Services/ProducersService";

const router = express.Router()

router.get("/producers", async (req, res) => {
    try{
        res.status(200).send(await new ProducersService().GetAllProducers())
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as getAllProducersRoute
}