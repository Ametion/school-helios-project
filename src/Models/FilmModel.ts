import {ProducerModel} from "./ProducerModel";

export class FilmModel{
    public readonly filmId: number;
    public readonly filmName: string;
    public readonly filmDescription: string;
    public readonly rate: number;
    public readonly date: string;
    public readonly Producer: ProducerModel;

    
}