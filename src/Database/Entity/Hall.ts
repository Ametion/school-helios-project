import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {CinemaWorker} from "./CinemaWorker";

@Entity("halls")
export class Hall extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    hallName: string;

    @Column({
        nullable: false
    })
    seatsAmount: number;

    @ManyToOne(() => CinemaWorker, w => w.halls)
    hallWorker: CinemaWorker
}