import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User, UserJSON } from '../domain/user';
import { REST_SERVER_URL } from './configuration';
import { UserBasic, UserBasicJSON, UserInformacion, UserProfile, UserProfileJSON } from '../domain/tmpUser';
import { LoginRequest } from '../app/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceUser {

  constructor(private httpClient: HttpClient) { }

  async getUsers(): Promise<User[]> {
    const users$ = this.httpClient.get<UserJSON[]>(REST_SERVER_URL + '/users')
    const usersJSON = await lastValueFrom(users$)
    return usersJSON.map((userJSON) => User.fromJson(userJSON))
  }

  async getUserByID(id: number): Promise<User> {
    try {
      const user$ = this.httpClient.get<UserJSON>(REST_SERVER_URL + '/users/' + id.toString())
      const user = await (lastValueFrom(user$))
      return User.fromJson(user)
    } catch (err) {
      throw new Error("El usuario no existe")
    }

  }

  async setLoggedUser(id: number): Promise<void> {
    localStorage.setItem('loggedUser', id.toString())
  }

  async getLoggedUser(): Promise<number> {
    return +(localStorage.getItem('loggedUser')!)
  }


  async getUserBasicByID(id: number): Promise<UserBasic> {
    const user$ = this.httpClient.get<UserBasicJSON>(REST_SERVER_URL + '/user/basic/' + id.toString())
    const user = await (lastValueFrom(user$))
    const userBasic = UserBasic.prototype.fromJSON(user)
    return userBasic

  }

  async getUserProfileByID(id: number): Promise<UserProfile> {
    const user$ = this.httpClient.get<UserProfileJSON>(REST_SERVER_URL + '/user/profile/' + id.toString())
    const user = await (lastValueFrom(user$))
    const userProfile = UserProfile.prototype.fromJSON(user)
    return userProfile
  }

  async login(loginRequest: LoginRequest): Promise<LoginResponse> {
    const loginResponse$ = this.httpClient.post<LoginResponse>(REST_SERVER_URL + '/login', loginRequest)
    const loginResponse = await (lastValueFrom(loginResponse$))
    return loginResponse
  }

  async actualizarInfoUsuario(infoNueva:UserInformacion){
    await lastValueFrom(this.httpClient.put<UserInformacion>(
      REST_SERVER_URL + '/updateInfoUsuario',
      infoNueva
    ))
  }
  
}

type LoginResponse = {
  userID:number
}
