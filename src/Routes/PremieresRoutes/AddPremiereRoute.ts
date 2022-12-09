import express from "express";
import {PremieresService} from "../../Services/PremieresService";

const router = express.Router()

router.post("/premiere", async (req, res) => {
    try{
        const {premiereDate, filmId, hallId} = req.body

        if(!premiereDate || filmId <= 0 || hallId <= 0){
            res.status(204).send("dont enough parameters to add premiere")
            return
        }

        res.status(201).send(await new PremieresService().AddPremiere(premiereDate, filmId, hallId))
        return
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as addPremiereRoute
}