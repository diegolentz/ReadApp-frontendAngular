import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User, UserJSON } from '../domain/user';
import { REST_SERVER_URL } from './configuration';
import { FRIENDS } from '../mock/mockUser';
import { UserBasic, UserBasicJSON, UserProfile, UserProfileFriend, UserProfileFriendJSON, UserProfileJSON, UserInformacion, UserFriendJSON, UserFriend } from '../domain/tmpUser';
import { LoginRequest, NewAccountRequest, PasswordRecoveryRequest } from '../domain/types';

@Injectable({
  providedIn: 'root'
})
export class ServiceUser {

  nombreUsuario!:String
  aliasUsuario!:String

  constructor(private httpClient: HttpClient) { }

  async getUsers(): Promise<User[]> {
    const users$ = this.httpClient.get<UserJSON[]>(REST_SERVER_URL + '/users')
    const usersJSON = await lastValueFrom(users$)
    return usersJSON.map((userJSON) => User.fromJson(userJSON))
  }

  async setLoggedUser(id: number): Promise<void> {
    localStorage.setItem('loggedUser', id.toString())
  }

  async getLoggedUser(): Promise<number> {
    return +(localStorage.getItem('id')!)
  }


  async getUserBasicByID(id: number): Promise<UserBasic> {
    const user$ = this.httpClient.get<UserBasicJSON>(REST_SERVER_URL + '/user/basic/' + id.toString())
    const user = await (lastValueFrom(user$))
    const userBasic = UserBasic.prototype.fromJSON(user)
    this.actualizarNombreYAlias(userBasic.nombre, userBasic.alias)
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


  async actualizarInfoUsuario(infoNueva: UserInformacion) {
    await lastValueFrom(this.httpClient.put<UserInformacion>(
      REST_SERVER_URL + '/updateInfoUsuario',
      infoNueva
    ))
    this.actualizarNombreYAlias(infoNueva.nombre, infoNueva.alias)
  }


  async getUserFriendsByID(id: number): Promise<UserFriend[]> {
    const user$ = this.httpClient.get<UserFriendJSON[]>(REST_SERVER_URL + '/user/friends/' + id.toString())
    const user = await (lastValueFrom(user$))
    const userFriend: UserFriend[] = user.map((it: UserFriendJSON) => UserFriend.prototype.fromJSON(it))
    return userFriend
    // const user$ = this.httpClient.get<UserProfileFriendJSON>(REST_SERVER_URL + '/user/friends/' + id.toString())
    // const user = await (lastValueFrom(user$))
    // const userProfileFriend = UserProfileFriend.prototype.fromJSON(user)
    // return userProfileFriend
  }

  async getUserNotFriendsByID(id: number): Promise<UserFriend[]> {
    const user$ = this.httpClient.get<UserFriendJSON[]>(REST_SERVER_URL + '/user/new-friends/' + id.toString())
    const user = await (lastValueFrom(user$))
    const userFriend: UserFriend[] = user.map((it: UserFriendJSON) => UserFriend.prototype.fromJSON(it))
    return userFriend
  }

  async newAccount(newAccountRequest: NewAccountRequest): Promise<MessageResponse> {
    const newAccountResponse$ = this.httpClient.post<MessageResponse>(REST_SERVER_URL + '/createAccount', newAccountRequest)
    const newAccountResponse = await (lastValueFrom(newAccountResponse$))
    return newAccountResponse
  }

  async passwordRecovery(passwordRecoveryRequest: PasswordRecoveryRequest): Promise<MessageResponse> {
    const response$ = this.httpClient.post<MessageResponse>(REST_SERVER_URL + '/passwordRecovery', passwordRecoveryRequest)
    const response = await (lastValueFrom(response$))
    return response
  }

  async actualizarNombreYAlias(nombre:string | null, alias:string | null){
    if(nombre != null){
      this.nombreUsuario = nombre
    }
    if(alias != null){
      this.aliasUsuario = alias
    }
  }
}

export type LoginResponse = {
  userID: number
}

export type MessageResponse = {
  message: string
}
