import { User } from './../../../Models/user.model';
import { Body, Controller, Get, Param, Post,  Put } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(private userService: UserService){

    }

    @Post()
    Create(@Body() params: User):string | boolean{
        if(this.userService.userExists(Number(params.id))){
            return "El usuario ya existe"
        }
        try {
            this.userService.create(params)
            return true
        } catch (error) {
            console.log({error})
        }

    }
    @Get('/all')
    getUsers(): User[]{
        return this.userService.getAll()
    }

    @Get('/:email')//los : significa parametro (variable)
    getUser(@Param('email') param): User | string{
        const user = this.userService.getByEmail(param)
        return user ? user : "El usuario no existe" //operacion ternaria -> primer parametro se evalua a (verdadero) ?(si) :(else)
        //return user ?? "El usuario no existe" operacion ternaria -> ??
    }

    @Put('/update/:id')
    updateUser (@Body() user:User, @Param('id') id ){
        return this.userService.updateUserbyID(Number(id),user)
    } 

    //crear nueva rama -> git checkout -b nombreRama
    //mover a una rama -> git checkout nombreRama
    //subir a GitHub add y mensaje -> git add . && git commit -m "blablabla" = 
    //solo funciona en archivos modificados -> git commit -am 'se valida usuario'
    //actualizar(bajar) cambios de rama -< git pull origin main 
    //se usa para cargar contenido del repositorio local a un repositorio remoto -> git push 
    //decir sobre que rama, tantos commit, si esta limpio -> git status

}
