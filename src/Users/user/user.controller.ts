import { UserService } from './user.service';
import { User } from './../../Models/user.model';
import { Body, Controller, Get, Post, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private userService : UserService){

    }

    @Post()
    create( @Body() params : User) :void{
        this.userService.create(params)
        /*console.log('Nombre: '+ params.name, 
        '\nCorreo: '+ params.email,
        '\nTelefono: '+ params.phone);*/
    }

    @Get('/all')
    getUsers(): User[] {
        return this.userService.getAll()
    }

    @Get('/:email')
    getUser(@Param('email') param): User{
        return this.validateQuest(this.userService.getByEmail(param))
    }

    validateQuest(request: User){
        if (request != undefined) {
            return request;
        } else {
            console.error('El Usuario no existe');
            
        } 
    }
}
