import express from "express"
import {dbConnection} from "./Database/DatabaseConnection";
import {getHallsRouter} from "./Routes/HallsRoutes/GetAllHallsRoute";
import {addHallRouter} from "./Routes/HallsRoutes/AddHallRoute";
import {getAllCinemaWorkersRoute} from "./Routes/CinemaWorkersRoutes/GetAllCinemaWorkersRoute";
import {addCinemaWorkerRoute} from "./Routes/CinemaWorkersRoutes/AddCinemaWorkerRoute";
require("dotenv").config()

const app = express()

app.use(express.json())

app.listen(process.env.PORT, () => {
    dbConnection.initialize().then(() => {
        console.log(`listen on port ${process.env.PORT}`)

        app.use(getHallsRouter)
        app.use(addHallRouter)
        app.use(getAllCinemaWorkersRoute)
        app.use(addCinemaWorkerRoute)
    }).catch((e) => {
        console.log(e)
    })
})