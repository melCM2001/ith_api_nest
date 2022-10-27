import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Details } from './details.entity';

@Entity()
export class Sales{
    //PK
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    date : Date;

    @Column()
    total : number;

    //FK
    @Column()
    id_user : number;

    @OneToMany(()=>Details, (details) => details.id_sales)
    details:Details[]
}