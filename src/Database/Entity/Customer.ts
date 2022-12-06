import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Ticket} from "./Ticket";

@Entity("customers")
export class Customer extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true
    })
    login: string;

    @Column({
        nullable: false
    })
    password: string;

    @Column({
        nullable: false
    })
    firstName: string;

    @Column({
        nullable: false
    })
    secondName: string;

    @Column({
        nullable: false
    })
    age: number

    @OneToMany(() => Ticket, t => t.customer)
    tickets: Ticket[]
}