import { User } from './../../../dist/Models/user.model.d';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private readonly Users : User[] = [] 

    create( user : User ){
        this.Users.push(user)
    }

    getAll() : User[] {
        return this.Users
    }

    getByEmail( correo : string ) : User {
        return this.Users.find(value) => User.correo === correo
    }

}