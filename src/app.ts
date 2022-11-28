import express from "express"
import {dbConnection} from "./Database/DatabaseConnection";
require("dotenv").config()

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("test ok")
})

app.listen(process.env.PORT, () => {
    dbConnection.initialize().then(() => {
        console.log(`listen on port ${process.env.PORT}`)
    }).catch((e) => {
        console.log(e)
    })
})