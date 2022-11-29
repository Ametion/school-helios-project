export class CinemaWorkerModel{
    public readonly workerId: number;
    public readonly workerFirstName: string;
    public readonly workerSecondName: string;

    constructor(workerId: number, workerFirstName: string, workerSecondName: string) {
        this.workerId = workerId;
        this.workerFirstName = workerFirstName;
        this.workerSecondName = workerSecondName;
    }
}