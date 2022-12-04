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
                        new FilmModel(p.film.id, p.film.filmName, p.film.filmDescription, p.film.rate, p.film.date.toISOString(), new ProducerModel(p.film.producer.id, p.film.producer.firstName, p.film.producer.secondName))))
                }
            })

            return arr
        }catch{
            return []
        }
    }
}