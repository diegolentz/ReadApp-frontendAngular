import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AmigosComponent } from '../amigos/amigos.component';
import { NgFor, NgIf } from '@angular/common';
import { ContainerFriendsComponent } from "../shared/layouts/friends/friends.component";
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';
import { ServiceUser } from '../../service/service-user.service';
import { BtnGuardarCancelarComponent } from '../shared/btn-guardar-cancelar/btn-guardar-cancelar.component';
import { UserFriend, UpdateFriendsMessage } from '../../domain/tmpUser';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-friends',
  standalone: true,
  imports: [AmigosComponent, NgFor, NgIf, ContainerFriendsComponent, BotonAgregarComponent, BtnGuardarCancelarComponent],
  templateUrl: './profile-friends.component.html',
  styleUrl: './profile-friends.component.css'
})
export class ProfileFriendsComponent implements OnInit {

  friends!: UserFriend[];
  agregoAmigos!: boolean;
  mensaje: UpdateFriendsMessage = new UpdateFriendsMessage("3", [], false);

  constructor(private userService: ServiceUser, public route: Router, private router: ActivatedRoute) { }

  async ngOnInit() {
    await this.getFriend()
    console.log(this.friends)
  }

  @HostBinding('style.width') width: string = '100%';

  async getFriend() {
    try {
      const usuarioLogueadoID = Number(localStorage.getItem('id'))
      //this.agregoAmigos = this.tipo === 'new-friends';
      console.log(this.agregoAmigos)
      this.friends = !this.agregarAmigosNuevos()
        ? await this.userService.getUserNotFriendsByID(usuarioLogueadoID)
        : await this.userService.getUserFriendsByID(usuarioLogueadoID);
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

  ocultar(amigo: string) {
    this.mensaje.amigosAModificar.push(amigo)
    console.log(this.mensaje.amigosAModificar)
    this.friends = this.friends.filter(friend => friend.id !== Number(amigo));
  }

  async actualizarAmigos() {
    this.mensaje.agregarAmigos = !this.agregarAmigosNuevos()
    this.mensaje.id = String(localStorage.getItem('id'))
    //await this.userService.actualizarAmigos(this.amigosAModificar, usuarioLogueadoID, agregarAmigos);
    await this.userService.actualizarAmigos(this.mensaje);
  }

  volverHome() {
    this.route.navigate(['home']);
  }

  agregarAmigosNuevos(): boolean {
    const includedRoutes = ['/my-profile/friends'];
    return includedRoutes.includes(this.route.url);
  }

}
