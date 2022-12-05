import {dbConnection} from "./DatabaseConnection";
import {CinemaWorker, Customer, Film, Hall, Premiere, Producer} from "./Entity";

export const HallRepo = dbConnection.getRepository<Hall>(Hall)
export const CinemaWorkerRepo = dbConnection.getRepository<CinemaWorker>(CinemaWorker)
export const PremieresRepo = dbConnection.getRepository<Premiere>(Premiere)
export const FilmRepo = dbConnection.getRepository<Film>(Film)
export const ProducerRepo = dbConnection.getRepository<Producer>(Producer)
export const CustomerRepo = dbConnection.getRepository<Customer>(Customer)