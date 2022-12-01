import express from "express";
import {HallsService} from "../../Services/HallsService";

const router = express.Router()

router.post("/hall", async (req, res) => {
    try{
        const {hallName, hallSeatsAmount, cinemaWorkerId} = req.body

        if(!hallName || !hallSeatsAmount || !cinemaWorkerId){
            res.status(204).send("dont enough parameters to add new hall")
            return
        }

        res.status(201).send(await new HallsService().AddHall(hallName, parseInt(hallSeatsAmount), parseInt(cinemaWorkerId)))
        return
    }catch{
        res.status(400).send("something went wrong")
    }
})

export {
    router as addHallRouter
}