import { ISales, IDetails } from './../../Models/sales.model';
import { Details } from 'src/entities/details.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class DetailsService {
    constructor(
        //crear una var privada de tipo detailsentity, tipo repositorio con tipo anidadp Details
        @InjectRepository(Details) private detailsEntity: Repository<Details>
    ){}
    //funcion asíncrona -> si esta fuera no se ejecutara hasta que esta esta terminada {no pasa a otro paso antes de terminarla]}
    async createDetail(id_sales : number,  detalles : IDetails[] ){ //(tipo : nombre)
        detalles.forEach(element => { //forEach se usa para recorrer el arreglo
            this.detailsEntity.insert({
                product : element.product,
                unit_price : element.unit_price,
                quantity : element.quantity,
                id_sales : id_sales
            })
        });
    }

    findAllDetails(){
        return this.detailsEntity.find({relations:['id_sales']})
    }
}

/* Notas clase:
    SERVICIO -> encargado de procesar informacion [insertar - obtener]
    INJECTABLE como una dependencia*/