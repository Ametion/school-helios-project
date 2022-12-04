import express from "express"
import {dbConnection} from "./Database/DatabaseConnection";
import {getHallsRouter} from "./Routes/HallsRoutes/GetAllHallsRoute";
import {addHallRouter} from "./Routes/HallsRoutes/AddHallRoute";
import {getAllCinemaWorkersRoute} from "./Routes/CinemaWorkersRoutes/GetAllCinemaWorkersRoute";
import {addCinemaWorkerRoute} from "./Routes/CinemaWorkersRoutes/AddCinemaWorkerRoute";
import {getAllPremieresByDateRoute} from "./Routes/PremieresRoutes/GetAllPremieresByDateRoute";
import {getAllFilmsRouter} from "./Routes/FilmsRoutes/GetAllFilmsRoutes";
import {addFilmRoute} from "./Routes/FilmsRoutes/AddFilmRoute";
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
        app.use(getAllPremieresByDateRoute)
        app.use(getAllFilmsRouter)
        app.use(addFilmRoute)
    }).catch((e) => {
        console.log(e)
    })
})