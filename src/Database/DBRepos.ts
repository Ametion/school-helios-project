import {dbConnection} from "./DatabaseConnection";
import {Hall} from "./Entity/Hall";
import {CinemaWorker} from "./Entity/CinemaWorker";

export const HallsRepo = dbConnection.getRepository<Hall>(Hall)
export const CinemaWorkerRepo = dbConnection.getRepository<CinemaWorker>(CinemaWorker)