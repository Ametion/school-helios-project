import {ProducerModel} from "./ProducerModel";

export class FilmModel{
    public readonly filmId: number;
    public readonly filmName: string;
    public readonly filmDescription: string;
    public readonly rate: number;
    public readonly date: string;
    public readonly image: string
    public readonly producer: ProducerModel;

    constructor(filmId: number, filmName: string, filmDescription: string, rate: number, date: string, image: string, producer: ProducerModel) {
        this.filmId = filmId
        this.filmName = filmName
        this.filmDescription = filmDescription
        this.rate = rate
        this.date = date
        this.image = image
        this.producer = producer
    }
}