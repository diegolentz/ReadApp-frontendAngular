import { Component, HostBinding, OnInit } from '@angular/core';
import { AmigosComponent } from '../amigos/amigos.component';
import { NgFor } from '@angular/common';
import { ContainerFriendsComponent } from "../shared/layouts/friends/friends.component";
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';
import { ServiceUser } from '../../service/service-user.service';
import { User } from '../../domain/user';
import { BtnGuardarCancelarComponent } from '../shared/btn-guardar-cancelar/btn-guardar-cancelar.component';
import { UserFriend, UserProfileFriend } from '../../domain/tmpUser';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile-friends',
  standalone: true,
  imports: [AmigosComponent, NgFor, ContainerFriendsComponent, BotonAgregarComponent, BtnGuardarCancelarComponent],
  templateUrl: './profile-friends.component.html',
  styleUrl: './profile-friends.component.css'
})
export class ProfileFriendsComponent implements OnInit {

  friends!: UserFriend[];

  constructor(private userService: ServiceUser) { }

  async ngOnInit() {
    await this.getFriend()
    console.log(this.friends)
  }

  @HostBinding('style.width') width: string = '100%';

  async getFriend() {
    try {
      const usuarioLogueadoID = Number(localStorage.getItem('id'))
      this.friends = await this.userService.getUserFriendsByID(usuarioLogueadoID)
    }
    catch (error: any) {
      if (error instanceof HttpErrorResponse) {
        //Solo me interesa HttpErrorResponde
        console.log(error.error["timestamp"])
        console.log(error.error["status"])
        console.log(error.error["error"])
        console.log(error.error["message"])
        console.log(error.error["path"])
      }
    }
  }
}
