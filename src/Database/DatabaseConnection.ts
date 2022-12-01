import {DataSource} from "typeorm";
import {Hall, Film, Customer, Premiere, CinemaWorker, CinemaBar, Warehouse, Ticket, Producer} from "./Entity";
require("dotenv").config()

export const dbConnection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: process.env.DBName?.toString(),
    entities: [CinemaWorker, Hall, Film, Producer, CinemaBar, Warehouse, Premiere, Customer, Ticket],
    synchronize: true,
})