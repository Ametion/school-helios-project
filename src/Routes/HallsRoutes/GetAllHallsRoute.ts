import express from "express"
import {HallsService} from "../../Services/HallsService";

const router = express.Router()

router.get("/halls", async (req, res) => {
    try{
        res.status(200).send(await new HallsService().GetAllHalls())
        return
    }catch{
        res.status(400).send("bad request")
        return
    }
})

export {
    router as getHallsRouter
}