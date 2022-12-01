import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Premiere} from "./Premiere";
import {Customer} from "./Customer";

@Entity("tickets")
export class Ticket extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Customer, c => c.tickets)
    owner: Customer;

    @ManyToOne(() => Premiere, p => p.tickets)
    premiere: Premiere
}