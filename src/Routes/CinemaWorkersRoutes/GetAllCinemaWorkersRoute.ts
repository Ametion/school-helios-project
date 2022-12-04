import express from "express";
import {CinemaWorkersService} from "../../Services/CinemaWorkersService";

const router = express.Router()

router.get("/cinemaWorkers", async (req, res) => {
    try{
        res.status(200).send(await new CinemaWorkersService().GetAllCinemaWorkers())
        return
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as getAllCinemaWorkersRoute
}