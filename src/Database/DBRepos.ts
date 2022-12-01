import {dbConnection} from "./DatabaseConnection";
import {CinemaWorker, Hall} from "./Entity";

export const HallsRepo = dbConnection.getRepository<Hall>(Hall)
export const CinemaWorkerRepo = dbConnection.getRepository<CinemaWorker>(CinemaWorker)