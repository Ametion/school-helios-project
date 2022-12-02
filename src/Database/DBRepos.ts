import {dbConnection} from "./DatabaseConnection";
import {CinemaWorker, Hall, Premiere} from "./Entity";

export const HallsRepo = dbConnection.getRepository<Hall>(Hall)
export const CinemaWorkerRepo = dbConnection.getRepository<CinemaWorker>(CinemaWorker)
export const PremieresRepo = dbConnection.getRepository<Premiere>(Premiere)