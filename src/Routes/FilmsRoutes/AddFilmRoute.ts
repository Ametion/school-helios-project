import express from "express";
import {FilmsService} from "../../Services/FilmsService";

const router = express.Router()

router.post("/film", async (req, res) => {
    try{
        const {filmName, filmDescription, filmRate, filmDate, producerId} = req.body

        if(!filmName || !filmDescription || parseInt(filmRate) <= 0 || !filmDate || parseInt(filmDate) <= 0){
            res.status(204).send("dont enough parameters to add new film")
            return
        }

        res.status(201).send(await new FilmsService().AddFilm(filmName, filmDescription, parseInt(filmRate), new Date(filmDate), parseInt(producerId)))
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as addFilmRoute
}