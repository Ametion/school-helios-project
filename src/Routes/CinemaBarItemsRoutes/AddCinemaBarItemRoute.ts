import express from "express";
import {CinemaBarService} from "../../Services/CinemaBarService";

const router = express.Router()

router.post("/barItem", async (req, res) => {
    try{
        const {itemName, itemPrice, itemAmount} = req.body

        if(!itemName || itemAmount < 0 || itemPrice <= 0){
            res.status(204).send("dont enough parameters to add new item to cinema bar")
            return
        }

        res.status(201).send(await new CinemaBarService().AddCinemaBarItem(itemName, itemAmount, itemPrice))
        return
    }catch{
        res.status(400).send("something went wrong")
        return
    }
})

export {
    router as addCinemaBarItemRoute
}