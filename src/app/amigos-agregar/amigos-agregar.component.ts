import { Component, HostBinding } from '@angular/core';
import { ContainerFriendsComponent } from "../shared/layouts/friends/friends.component";
import { AmigosComponent } from "../amigos/amigos.component";
import { BtnGuardarCancelarComponent } from "../shared/btn-guardar-cancelar/btn-guardar-cancelar.component";
import { UserFriend } from '../../domain/tmpUser';
import { ServiceUser } from '../../service/service-user.service';

@Component({
  selector: 'app-amigos-agregar',
  standalone: true,
  imports: [ContainerFriendsComponent, AmigosComponent, BtnGuardarCancelarComponent],
  templateUrl: './amigos-agregar.component.html',
  styleUrl: './amigos-agregar.component.css'
})
export class AmigosAgregarComponent {

  @HostBinding('style.width') width: string = '100%';

  friends: UserFriend[] = [];

  constructor(private userService: ServiceUser) { }

  async ngOnInit() {
    await this.getUsers()
    console.log(this.friends)
  }

  async getUsers() {
    this.friends = await this.userService.getUserNotFriendsByID(3);
  }

}
