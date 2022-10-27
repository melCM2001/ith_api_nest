import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm'; 
import { Sales } from './sales.entity';//necesaria para el desarrollo de la FK

@Entity()//tabla en la bd
export class Details{
    //PK
    @PrimaryGeneratedColumn()//Columna que se genera automaticamente (autoincrementable) 
    id : number; //los id siempre son de tipo numerico

    @Column()
    product: string;

    @Column()
    quantity: number;

    @Column()
    unit_price: number;

    //FK
    @ManyToOne(() => Sales, (sale) => sale.details)//
    @JoinColumn({name:'id_sale'})//
    id_sales: number;
}

/* NOTAS DE CLASE:
    El esquema de la bd se pasara a todo aquello que tenga en decorador @Entity()
*/