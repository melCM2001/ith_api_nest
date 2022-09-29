import { UserService } from './user.service';
import { User } from './../../Models/user.model';
import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';

@Controller('user')
    export class UserController {
    constructor(private userService : UserService){

    }

    @Post()//crear 
    create( @Body() params : User) :void{
        this.userService.create(params)
        //console.log('Nombre: '+ params.name, '\nCorreo: '+ params.email,'\nTelefono: '+ params.phone);
    }

    @Get('/all')
    getUsers(): User[] {
        return this.userService.getAll()
    }

    @Get('/:email')//los : significa parametro (variable)
    getUser(@Param('email') param): User | string{
        const user = this.userService.getByEmail(param)
        return user ? user : "El usuario no existe" //operacion ternaria -> primer parametro se evalua a (verdadero) ?(si) :(else)
        //return user ?? "El usuario no existe" operacion ternaria -> ??
    }

    /*@Put(/update/:id)
    actualizarUsuario(@Body() user : User, @Param('id') id){
        return this.userService.updateUserById(Number(id),user)
    }*/

    //crear nueva rama -> git checkout -b nombreRama
    //mover a una rama -> git checkout nombreRama
    //subir a GitHub add y mensaje -> git add . && git commit -m "blablabla" = 
    //solo funciona en archivos modificados -> git commit -am 'se valida usuario'
    //actualizar(bajar) cambios de rama -< git pull origin main 
    //se usa para cargar contenido del repositorio local a un repositorio remoto -> git push 
    //decir sobre que rama, tantos commit, si esta limpio -> git status

}
