import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("singleBlog")
export class SingleBlog extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({

    })
    description: string;

}