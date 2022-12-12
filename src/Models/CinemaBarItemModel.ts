export class CinemaBarItemModel{
    public readonly itemId: number;
    public readonly itemName: string;
    public readonly itemAmount: number;
    public readonly itemPrice: number;

    constructor(itemId: number, itemName: string, itemAmount: number, itemPrice: number) {
        this.itemId = itemId
        this.itemName = itemName
        this.itemAmount = itemAmount
        this.itemPrice = itemPrice
    }
}