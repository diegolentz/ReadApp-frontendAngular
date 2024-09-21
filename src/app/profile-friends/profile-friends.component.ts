import { Component, HostBinding } from '@angular/core';
import { AmigosComponent } from '../amigos/amigos.component';
import { NgFor } from '@angular/common';
import { ContainerFriendsComponent } from "../shared/layouts/friends/friends.component";
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';

@Component({
  selector: 'app-profile-friends',
  standalone: true,
  imports: [AmigosComponent, NgFor, ContainerFriendsComponent,BotonAgregarComponent],
  templateUrl: './profile-friends.component.html',
  styleUrl: './profile-friends.component.css'
})
export class ProfileFriendsComponent {
  @HostBinding('style.width') width: string = '100%';

  amigos = [
    new Amigo("icono.jpg", "Inosuke Hashibira", "inosukehashibira@gmail.com"),
    new Amigo("ippo.jpeg", "Ippo Makunouchi ", "ippomakunouchi90@hotmail.com"),
    new Amigo("dwightSchrute.jpeg", "Dwight Schrute", "dwightschrute@dunder-mifflin.com"),
    new Amigo("kevinMalone.jpeg", "Kevin Malone", "kevinmalone@dunder-mifflin.com"),
    new Amigo("creed.jpeg", "Creed Bratton", "creedbratton@dunder-mifflin.com"),
    new Amigo("kellyKapoor.jpeg", "Kelly Kapoor", "kellykapoor@dunder-mifflin.com"),

  ]
}

export class Amigo {
  constructor(
    public imagen : string,
    public nombre: string,
    public mail : string){}
}
