import express from "express"
import {dbConnection} from "./Database/DatabaseConnection";
import {
    addCinemaWorkerRoute, addFilmRoute,
    addHallRouter, addProducerRoute,
    getAllCinemaWorkersRoute, getAllFilmsRouter,
    getAllPremieresByDateRoute, getAllProducersRoute,
    getHallsRouter, loginCustomerRoute, registerCustomerRoute
} from "./Routes";
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
        app.use(getAllProducersRoute)
        app.use(addProducerRoute)
        app.use(registerCustomerRoute)
        app.use(loginCustomerRoute)
    }).catch((e) => {
        console.log(e)
    })
})