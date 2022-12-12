import express from "express";
import {FilmsService} from "../../Services/FilmsService";

const router = express.Router()

router.get("/film/:id", async (req, res) => {
    try{
        const { id } = req.params

        if(parseInt(id) <= 0){
            res.status(204).send("dont enough parameters to get one premiere")
            return
        }

        res.status(200).send(await new FilmsService().GetFilmById(parseInt(id)))
        return
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as getFilmByIdRoute
}