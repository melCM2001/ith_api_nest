import { userModel } from './../../Models/user.model';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(){

    }
    @Post()
    create(@Body() params:userModel):void{
        console.log('El nombre es: '+ params.name, 
        '\n El mail es: '+ params.gmail,
        '\n El telefono es: '+ params.phone);
    }
}
