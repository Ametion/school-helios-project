import express from "express"
import {dbConnection} from "./Database/DatabaseConnection";
import {getHallsRouter} from "./Routes/GetAllHallsRoute";
import {addHallRouter} from "./Routes/AddHallRoute";
require("dotenv").config()

const app = express()

app.use(express.json())

app.listen(process.env.PORT, () => {
    dbConnection.initialize().then(() => {
        console.log(`listen on port ${process.env.PORT}`)

        app.use(getHallsRouter)
        app.use(addHallRouter)
    }).catch((e) => {
        console.log(e)
    })
})