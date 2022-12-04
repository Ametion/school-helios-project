import express from "express";
import {CinemaWorkersService} from "../../Services/CinemaWorkersService";

const router = express.Router()

router.post("/cinemaWorker", async (req, res) => {
    try{
        const {firstName, secondName} = req.body

        if(!firstName || !secondName){
            res.status(204).send("dont enough parameters for create new cinema worker")
            return
        }

        res.status(201).send(await new CinemaWorkersService().AddCinemaWorker(firstName, secondName))
        return
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as addCinemaWorkerRoute
}