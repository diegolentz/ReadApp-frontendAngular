import { Component, HostBinding, OnInit } from '@angular/core';
import { AmigosComponent } from '../amigos/amigos.component';
import { NgFor } from '@angular/common';
import { ContainerFriendsComponent } from "../shared/layouts/friends/friends.component";
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';
import { ServiceUser } from '../../service/service-user.service';
import { User } from '../../domain/user';

@Component({
  selector: 'app-profile-friends',
  standalone: true,
  imports: [AmigosComponent, NgFor, ContainerFriendsComponent,BotonAgregarComponent],
  templateUrl: './profile-friends.component.html',
  styleUrl: './profile-friends.component.css'
})
export class ProfileFriendsComponent implements OnInit{

  friends!: User[];

  constructor(private userService:ServiceUser){}
  
  async ngOnInit(){
    await this.getFriend()
  }

  @HostBinding('style.width') width: string = '100%';

  async getFriend(){
    this.friends = await this.userService.getUsers();
  }
}
