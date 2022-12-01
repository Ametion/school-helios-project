import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Hall} from "./Hall";
import {Film} from "./Film";
import {Ticket} from "./Ticket";

@Entity("premieres")
export class Premiere extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    premiereDate: Date;

    @ManyToOne(() => Hall, h => h.premieres)
    hall: Hall;

    @ManyToOne(() => Film, f => f.premieres)
    film: Film;

    @OneToMany(() => Ticket, t => t.premiere)
    tickets: Ticket[]
}