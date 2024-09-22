import { Component, HostBinding, OnInit } from '@angular/core';
import { AmigosComponent } from '../amigos/amigos.component';
import { NgFor } from '@angular/common';
import { ContainerFriendsComponent } from "../shared/layouts/friends/friends.component";
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';
import { Friend } from '../../domain/friend';
import { FriendService } from '../../service/friend.service';

@Component({
  selector: 'app-profile-friends',
  standalone: true,
  imports: [AmigosComponent, NgFor, ContainerFriendsComponent,BotonAgregarComponent],
  templateUrl: './profile-friends.component.html',
  styleUrl: './profile-friends.component.css'
})
export class ProfileFriendsComponent implements OnInit{

  friends!: Friend[];

  constructor(private friendService:FriendService){}
  
  ngOnInit(): void {
    this.friends = this.friendService.mockGetRecommendations()
  }

  @HostBinding('style.width') width: string = '100%';

}
