import {HallRepo} from "../Database/DBRepos";
import {HallModel} from "../Models/HallModel";
import {CinemaWorkerModel} from "../Models/CinemaWorkerModel";
import {CinemaWorker} from "../Database/Entity/CinemaWorker";
import {CinemaWorkersService} from "./CinemaWorkersService";

export class HallsService{
    private readonly cinemaWorkersService: CinemaWorkersService;

    constructor() {
        this.cinemaWorkersService = new CinemaWorkersService();
    }

    public async GetAllHalls(): Promise<Array<HallModel>>{
        try{
            const dbHalls = await HallRepo.find({
                relations: {
                    hallWorker: true
                }
            })

            const halls = new Array<HallModel>()

            dbHalls.forEach(h => {
                const hModel = new HallModel(h.id, h.hallName, h.seatsAmount, new CinemaWorkerModel(h.hallWorker.id, h.hallWorker.firstName, h.hallWorker.secondName))
                halls.push(hModel)
            })

            return halls
        }catch{
            return []
        }
    }

    public async AddHall(hallName: string, hallSeatsAmount: number, workerId: number): Promise<boolean>{
        try{
            const cinemaWorker = await this.cinemaWorkersService.GetCinemaWorker(workerId);

            const hall = HallRepo.create({
                hallName: hallName,
                seatsAmount: hallSeatsAmount,
                hallWorker: cinemaWorker
            })

            await hall.save()

            return true
        }catch{
            return false
        }
    }
}