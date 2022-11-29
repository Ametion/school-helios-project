import {CinemaWorkerModel} from "./CinemaWorkerModel";

export class HallModel{
    public readonly hallId: number;
    public readonly hallName: string;
    public readonly hallSeatsAmount: number;
    public readonly hallWorker: CinemaWorkerModel;

    constructor(hallId: number, hallName: string, hallSeatsAmount: number, hallWorker: CinemaWorkerModel) {
        this.hallId = hallId;
        this.hallName = hallName;
        this.hallSeatsAmount = hallSeatsAmount;
        this.hallWorker = hallWorker;
    }
}