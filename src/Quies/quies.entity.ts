import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('quies')
export class Quies extends BaseEntity {
    @PrimaryGeneratedColumn({
        
    })
    id: number

    @Column()
    question: string

    @Column()
    answer: string
}