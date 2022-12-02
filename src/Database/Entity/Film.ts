import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Producer} from "./Producer";
import {Premiere} from "./Premiere";

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
    date: Date

    @ManyToOne(() => Producer, p => p.films)
    producer: Producer;

    @OneToMany(() => Premiere, p => p.film)
    premieres: Premiere[]
}