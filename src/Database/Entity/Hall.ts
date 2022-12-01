import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CinemaWorker} from "./CinemaWorker";
import {Premiere} from "./Premiere";

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

    @OneToMany(() => Premiere, p => p.hall)
    premieres: Premiere[]
}