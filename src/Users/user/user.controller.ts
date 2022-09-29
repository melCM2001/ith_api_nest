import { UserService } from './user.service';
import { User } from './../../Models.user.model';
import { Body, Controller, Get, Post, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private userService : UserService){

    }

    @Post()
    create( @Body() params : User) :void{
        this.userService.create(params)
        /*console.log('Nombre: '+ params.name, '\nCorreo: '+ params.email,'\nTelefono: '+ params.phone);*/
    }

    @Get('/all')
    getUsers(): User[] {
        return this.userService.getAll()
    }

    @Get('/:email')
    getUser(@Param('email') param): User | string{
        const user = this.userService.getByEmail(param)
        return user ? user : "El usuario no existe" //operacion ternaria -> primer parametro se evalua a (verdadero) ?(si) :(else)
        //return user ?? "El usuario no existe" operacion ternaria -> ??
    }

    //crear nueva rama -> git checkout -b ValidarUsuario
    //   -> git add . &&
}
