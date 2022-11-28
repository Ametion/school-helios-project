import {DataSource} from "typeorm";
import {CinemaWorker} from "./Entity/CinemaWorker";
import {Hall} from "./Entity/Hall";
import {Film} from "./Entity/Film";
import {Producer} from "./Entity/Producer";
import {CinemaBar} from "./Entity/CinemaBar";
import {Warehouse} from "./Entity/Warehouse";
require("dotenv").config()

export const dbConnection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: process.env.DBName?.toString(),
    entities: [CinemaWorker, Hall, Film, Producer, CinemaBar, Warehouse],
    synchronize: true,
})