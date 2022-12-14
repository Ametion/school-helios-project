import cors from "cors";
import express from "express"
import {dbConnection} from "./Database/DatabaseConnection";
import {
    addCinemaBarItemRoute,
    addCinemaWorkerRoute, addFilmRoute,
    addHallRouter, addPremiereRoute, addProducerRoute, buyTicketRouter, getAllCinemaBarItemRoute,
    getAllCinemaWorkersRoute, getAllCustomerTickets, getAllFilmsRouter,
    getAllPremieresByDateRoute, getAllProducersRoute, getFilmByIdRoute,
    getHallsRouter, getPremiereByIdRoute, loginCustomerRoute, registerCustomerRoute
} from "./Routes";
require("dotenv").config()

const corsConfig = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"]
}

const app = express()

app.use(express.json())
app.use(cors(corsConfig))

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
        app.use(buyTicketRouter)
        app.use(getAllCustomerTickets)
        app.use(addPremiereRoute)
        app.use(getPremiereByIdRoute)
        app.use(getAllCinemaBarItemRoute)
        app.use(addCinemaBarItemRoute)
        app.use(getFilmByIdRoute)
    }).catch((e) => {
        console.log(e)
    })
})