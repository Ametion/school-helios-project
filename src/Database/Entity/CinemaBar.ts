import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("cinemaBar")
export class CinemaBar extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    item: string;

    @Column({
        nullable: false
    })
    itemPrice: number;

    @Column({
        nullable: false
    })
    itemAmount: number;
}