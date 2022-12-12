import {FilmModel, ProducerModel} from "../Models";
import {FilmRepo} from "../Database/DBRepos";
import {ProducersService} from "./ProducersService";

export class FilmsService{

    private readonly producersService: ProducersService

    constructor() {
        this.producersService = new ProducersService()
    }

    public async GetAllFilms(): Promise<Array<FilmModel>>{
        try{
            const arr = new Array<FilmModel>()

            const films = await FilmRepo.find({
                relations: {
                    producer: true
                }
            })

            films.forEach(f => arr.push(new FilmModel(f.id, f.filmName, f.filmDescription, f.rate, f.date.toISOString(), f.image, new ProducerModel(f.producer.id, f.producer.firstName, f.producer.secondName, f.producer.image))))

            return arr
        }catch{
            return []
        }
    }

    public async AddFilm(filmName: string, filmDescription: string, filmRate: number, filmDate: Date, image: string, producerId: number): Promise<boolean>{
        try{
            if(!filmName || !filmDescription || filmRate <= 0 || producerId <= 0){
                return false
            }

            const producer = await this.producersService.GetProducer(producerId)

            const newFilm = FilmRepo.create({
                filmName: filmName,
                filmDescription: filmDescription,
                rate: filmRate,
                date: filmDate,
                image: image,
                producer: producer
            })

            await newFilm.save()

            return true
        }catch{
            return false
        }
    }

    public async GetFilmById(filmId: number): Promise<FilmModel | never>{
        try{
            const film = await FilmRepo.findOneOrFail({
                where: {
                    id: filmId
                },
                relations: {
                    producer: true
                }
            })

            return new FilmModel(film.id, film.filmName, film.filmDescription, film.rate, film.date.toISOString(), film.image,
                new ProducerModel(film.producer.id, film.producer.firstName, film.producer.secondName, film.producer.image))
        }catch{
            throw new Error("some error")
        }
    }
}