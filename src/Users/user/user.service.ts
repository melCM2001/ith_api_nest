import { User } from './../../Models/user.model';
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

    getByEmail( email : string ) : User {
        return this.Users.find((user) => user.email === email)
    }

    /*updateUserById(id : number, user : User) : boolean{
        //crear variable tipo let puede asignarse un valor nuevo 
        let user_exists = this.Users.find((user) => user.id === id)  //
        if(user_exists){
            this.Users[]
            return true
        }
        return false
    }*/

}