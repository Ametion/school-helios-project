import express from "express";
import {CinemaBarService} from "../../Services/CinemaBarService";

const router = express.Router()

router.get("/barItems", async (req, res) => {
    try{
        res.status(200).send(await new CinemaBarService().GetAllCinemaBarItems())
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as getAllCinemaBarItemRoute
}