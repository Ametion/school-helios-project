import {PremiereModel} from "./PremiereModel";
import {CustomerModel} from "./CustomerModel";

export class TicketModel{
    public readonly ticketId: number;
    public readonly customer: CustomerModel;
    public readonly premiere: PremiereModel;

    constructor(ticketId: number, customer: CustomerModel, premiere: PremiereModel) {
        this.ticketId = ticketId
        this.customer = customer
        this.premiere = premiere
    }
}