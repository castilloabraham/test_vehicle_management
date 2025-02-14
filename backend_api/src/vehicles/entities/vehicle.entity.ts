
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column("decimal", { precision: 10, scale: 2 })
    price: number;

    @Column("text")
    description: string;
}
