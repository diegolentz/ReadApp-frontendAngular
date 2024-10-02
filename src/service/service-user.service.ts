import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User, UserJSON } from '../domain/user';
import { REST_SERVER_URL } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  constructor(private httpClient: HttpClient) { }

  async getUsers(): Promise<User[]> {
    const users$ = this.httpClient.get<UserJSON[]>(REST_SERVER_URL + '/recommendations')
    const usersJSON = await lastValueFrom(users$)
    return usersJSON.map((userJSON) => User.fromJson(userJSON))
  }

  async getUser(id:number): Promise<User>{
    try{
      const user = this.httpClient.get<UserJSON>(REST_SERVER_URL + '/users/' + id.toString())
      return await lastValueFrom(user)
    } catch(err){
      throw new Error("El usuario no existe")
    }
   
    
  }

  async setLoggedUser(id:number) : Promise<void>{
    localStorage.setItem('loggedUser',id.toString())
  }

  async getLoggedUser() : Promise<number>{
    return +(localStorage.getItem('loggedUser')!)
  }

}
