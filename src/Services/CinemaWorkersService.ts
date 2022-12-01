import {CinemaWorker} from "../Database/Entity/CinemaWorker";
import {CinemaWorkerRepo} from "../Database/DBRepos";
import {CinemaWorkerModel} from "../Models/CinemaWorkerModel";

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

    public async GetAllCinemaWorkers(): Promise<Array<CinemaWorkerModel>>{
        try{
            const arr = new Array<CinemaWorkerModel>()

            const workers = await CinemaWorkerRepo.find()

            workers.forEach(w => {
                arr.push(new CinemaWorkerModel(w.id, w.firstName, w.secondName))
            })

            return arr
        }catch{
            return []
        }
    }

    public async AddCinemaWorker(firstName: string, secondName: string): Promise<boolean>{
        try{
            if(!firstName || !secondName){
                return false
            }

            const newWorker = CinemaWorkerRepo.create({
                firstName: firstName,
                secondName: secondName
            })

            await newWorker.save()

            return true
        }catch{
            return false
        }
    }
}