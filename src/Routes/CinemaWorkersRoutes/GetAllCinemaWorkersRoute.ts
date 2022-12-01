import express from "express";
import {CinemaWorkersService} from "../../Services/CinemaWorkersService";

const router = express.Router()

router.get("/cinemaWorkers", async (req, res) => {
    try{
        res.status(200).send(await new CinemaWorkersService().GetAllCinemaWorkers())
    }catch{
        res.status(400).send("something went wrong")
    }
})

export {
    router as getAllCinemaWorkersRoute
}