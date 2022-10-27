import { DetailsService } from './../Details/details.service';
import { Details } from 'src/entities/details.entity';
import { ISales, IDetails } from './../../Models/sales.model';
import { Sales } from './../../entities/sales.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SalesService {
    constructor(
        @InjectRepository(Sales) private salesEntity: Repository<Sales>,
        private detailsService : DetailsService
    ){}

    async create( sale : ISales){
        const date = new Date();
        const details = new Details();
        let total = 0
        //se calcula el total de la venta
        sale.details.forEach( item => { 
            total = total + (item.quantity * item.unit_price) 
        } )
        //se hace la inserción
        const response = await this.salesEntity.save({
            id_user: sale.id_user,
            date: date,
            total
        })
        //creo detalle
        await this.detailsService.createDetail(response.id, sale.details)

        return true;
    }
}