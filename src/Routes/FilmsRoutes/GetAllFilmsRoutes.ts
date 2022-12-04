import express from "express";
import {FilmsService} from "../../Services/FilmsService";

const router = express.Router()

router.get("/films", async (req, res) => {
    try{
        res.status(200).send(await new FilmsService().GetAllFilms())
        return
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as getAllFilmsRouter
}