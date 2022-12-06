export class ProducerModel{
    public readonly producerId: number;
    public readonly producerFirstName: string;
    public readonly producerSecondName: string;
    public readonly producerImage: string;

    constructor(producerId: number, producerFirstName: string, producerSecondName: string, producerImage: string) {
        this.producerId = producerId;
        this.producerFirstName = producerFirstName;
        this.producerSecondName = producerSecondName;
        this.producerImage = producerImage
    }
}