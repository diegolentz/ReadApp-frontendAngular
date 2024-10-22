import { Component, HostBinding, OnInit } from '@angular/core';
import { ContainerFriendsComponent } from "../shared/layouts/friends/friends.component";
import { AmigosComponent } from "../amigos/amigos.component";
import { BtnGuardarCancelarComponent } from "../shared/btn-guardar-cancelar/btn-guardar-cancelar.component";
import { UserFriend } from '../../domain/tmpUser';
import { ServiceUser } from '../../service/service-user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-amigos-agregar',
  standalone: true,
  imports: [ContainerFriendsComponent, AmigosComponent, BtnGuardarCancelarComponent],
  templateUrl: './amigos-agregar.component.html',
  styleUrl: './amigos-agregar.component.css'
})
export class AmigosAgregarComponent implements OnInit {

  @HostBinding('style.width') width: string = '100%';

  constructor(private userService: ServiceUser, public router: Router, private route: ActivatedRoute) { }

  friends: UserFriend[] = [];
  amigosAModificar: string[] = [];
  tipo!: string;
  id!: number;

  async ngOnInit(): Promise<void> {
    this.encontrarTipo()
    await this.getUsers()
  }

  ocultar(amigo: string) {
    //amigo es el id como string
    this.amigosAModificar.push(amigo)
    this.friends = this.friends.filter(friend => friend.id !== Number(amigo));
  }

  encontrarTipo() {
    this.route.params.subscribe(params => {
      this.tipo = params['tipo'];});
  }

  async getUsers() {
    try {
      const usuarioLogueadoID = Number(localStorage.getItem('id'))
      this.friends = (this.tipo == 'new-friends')
        ? await this.userService.getUserNotFriendsByID(usuarioLogueadoID)
        : await this.userService.getUserFriendsByID(usuarioLogueadoID)
    } catch (error: any) {
      console.log(error);
    }
  }

  async actualizarAmigos() {
    const usuarioLogueadoID = Number(localStorage.getItem('id'))
  }

  volverHome() {
    this.router.navigate(['home']);
  }


  ocultarAgregarAmigos(): boolean {
    // hago un map con las rutas / valor y comparo con el parametro que recibo
    const excludedRoutes = ['/my-profile/new-friends'];
    return excludedRoutes.includes(this.router.url);
  }
}
