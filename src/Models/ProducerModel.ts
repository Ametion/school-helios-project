export class ProducerModel{
    public readonly producerId: number;
    public readonly producerFirstName: string;
    public readonly producerSecondName: string;

    constructor(producerId: number, producerFirstName: string, producerSecondName: string) {
        this.producerId = producerId;
        this.producerFirstName = producerFirstName;
        this.producerSecondName = producerSecondName;
    }
}