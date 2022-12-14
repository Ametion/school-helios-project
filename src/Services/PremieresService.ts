import {PremieresRepo} from "../Database/DBRepos";
import {CinemaWorkerModel, FilmModel, HallModel, PremiereModel, ProducerModel} from "../Models";

export class PremieresService{
    public async GetAllPremieresByDate(date: string): Promise<Array<PremiereModel>>{
        try{
            const arr = new Array<PremiereModel>()

            if(!date){
                return []
            }

            const premieres = await PremieresRepo.find({
                relations:{
                    film: {
                        producer: true,
                    },
                    hall: {
                        hallWorker: true
                    }
                }
            })

            premieres.forEach(p => {
                if(p.premiereDate.toISOString().slice(0, 10) == date){
                    arr.push(new PremiereModel(p.id, p.premiereDate.toISOString(), new HallModel(p.hall.id, p.hall.hallName, p.hall.seatsAmount, new CinemaWorkerModel(p.hall.hallWorker.id, p.hall.hallWorker.firstName, p.hall.hallWorker.secondName)),
                        new FilmModel(p.film.id, p.film.filmName, p.film.filmDescription, p.film.rate, p.film.date.toISOString(), p.film.image, new ProducerModel(p.film.producer.id, p.film.producer.firstName, p.film.producer.secondName, p.film.producer.image))))
                }
            })

            return arr
        }catch{
            return []
        }
    }

    public async PremiereExist(premiereId: number): Promise<boolean | never>{
        try{
            const premiere = await PremieresRepo.findOneOrFail({
                where: {
                    id: premiereId
                }
            })

            return true
        }catch(e: any){
            throw new Error(e.toString())
        }
    }

    public async AddPremiere(premiereDate: string, filmId: number, hallId: number): Promise<boolean>{
        try{
            if(!premiereDate || filmId <= 0 || hallId <= 0){
                return false
            }

            const premiere = PremieresRepo.create({
                premiereDate: new Date(premiereDate),
                film: {
                    id: filmId
                },
                hall: {
                    id: hallId
                }
            })

            await premiere.save()

            return true
        }catch{
            return false
        }
    }

    public async GetPremiereById(premiereId: number): Promise<PremiereModel | never>{
        try{
            if(premiereId <= 0){
                throw new Error("premiere id cant be lower than 0")
            }

            const premiere = await PremieresRepo.findOneOrFail({
                where: {
                    id: premiereId
                },
                relations: {
                    film:{
                        producer: true
                    },
                    hall: {
                        hallWorker: true
                    }
                }
            })

            return new PremiereModel(premiere.id, premiere.premiereDate.toISOString(), new HallModel(premiere.hall.id, premiere.hall.hallName, premiere.hall.seatsAmount, new CinemaWorkerModel(premiere.hall.hallWorker.id, premiere.hall.hallWorker.firstName, premiere.hall.hallWorker.secondName)),
                new FilmModel(premiere.film.id, premiere.film.filmName, premiere.film.filmDescription, premiere.film.rate, premiere.film.date.toISOString(), premiere.film.image, new ProducerModel(premiere.film.producer.id, premiere.film.producer.firstName, premiere.film.producer.secondName, premiere.film.producer.image)))
        }catch{
            throw new Error("something went wrong")
        }
    }
}