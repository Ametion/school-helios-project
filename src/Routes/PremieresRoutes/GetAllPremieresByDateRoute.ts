import express from "express";
import {PremieresService} from "../../Services/PremieresService";

const router = express.Router()

router.get("/premieres/:date", async (req, res) => {
    try{
        const date = req.params.date

        if(!date){
            res.status(204).send("dont enough parameters to get premieres")
            return
        }

        res.status(200).send(await new PremieresService().GetAllPremieresByDate(date))
    }catch{
        res.status(400).send("something went wrong")
    }
})

export {
    router as getAllPremieresByDateRoute
}