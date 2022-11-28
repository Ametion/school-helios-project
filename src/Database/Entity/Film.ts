import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Producer} from "./Producer";

@Entity("films")
export class Film extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    filmName: string;

    @Column({
        nullable: false
    })
    filmDescription: string;

    @Column({
        nullable: false
    })
    rate: number;

    @Column({
        nullable: false
    })
    date: string

    @ManyToOne(() => Producer, p => p.films)
    producer: Producer;
}