import {CinemaWorker} from "../Database/Entity/CinemaWorker";
import {CinemaWorkerRepo} from "../Database/DBRepos";

export class CinemaWorkersService{
    public async GetCinemaWorker(workerId: number): Promise<CinemaWorker | never>{
        try{
            return await CinemaWorkerRepo.findOneOrFail({
                where: {
                    id: workerId
                }
            })
        }catch{
            throw new Error("cant find worker with this id")
        }
    }
}