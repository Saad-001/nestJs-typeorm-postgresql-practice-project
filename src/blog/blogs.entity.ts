import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('blogs')
export class Blogs extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: "this is primary generatedColumn"
    })
    id : number

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({
        type: 'boolean',
        default: 1
    })
    isActive: boolean;

}