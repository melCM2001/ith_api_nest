import { User } from './../../../Models/user.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User as userEntity} from '../../../entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(userEntity)
        private userEntity : Repository<userEntity>
    ){
        //constructor
    }
    private readonly Users: User[] = []

    async create(user : User){
        // this.Users.push(user)
        return await this.userEntity.insert(user)

    }

    getAll(): User[]{
        return this.Users;
    }

    getByEmail(email: string): User{
        return this.Users.find( (user) => user.email === email )
    }

    updateUserbyID( id:number, user:User ):boolean{
        let user_index = this.Users.findIndex( (user) => user.id === id)

        if(this.userExists(id)){
            const newUser : User = Object.assign(this.Users[user_index], user)
            this.Users[user_index] = newUser
            return true
        }
        return false
    }

    /*@Param id  -> id del usuario que queremos verificar si existe
    returns true -> si el usuario existe o false si no */

    userExists(id: number):boolean{
        const index = this.Users.findIndex((user) => user.id === id)
        return index !== -1
    }


}