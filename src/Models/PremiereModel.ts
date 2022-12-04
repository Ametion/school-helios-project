import {HallModel} from "./HallModel";
import {FilmModel} from "./FilmModel";

export class PremiereModel{
     public readonly premiereId: number;
     public readonly premiereDate: string;
     public readonly hall: HallModel;
     public readonly film: FilmModel;

     constructor(premiereId: number, premiereDate: string, hall: HallModel, film: FilmModel) {
         this.premiereId = premiereId
         this.premiereDate = premiereDate
         this.hall = hall
         this.film = film
     }
}