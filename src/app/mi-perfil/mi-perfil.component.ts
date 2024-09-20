import { Component } from '@angular/core';
import { PanelPerfilComponent } from "../panel-perfil/panel-perfil.component";
import { BtnGuardarCancelarComponent } from "../shared/btn-guardar-cancelar/btn-guardar-cancelar.component";
import { HeaderComponent } from "../shared/header/header.component";
import { RouterOutlet } from '@angular/router';
import { Option } from '../shared/shorcut-my-profile/shorcut-my-profile.component';
import { ContenedorSectionComponent } from '../contenedor-section/contenedor-section.component';
@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [HeaderComponent, PanelPerfilComponent, BtnGuardarCancelarComponent, RouterOutlet,ContenedorSectionComponent],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css'
})
export class MiPerfilComponent {

  opcionTitulos = ['Information', 'Friends', 'Books readed', 'Books to read','Recommendations to value']
  svgs = ['information.svg',
          'amigos.svg',
          'librosLeidos.svg',
          'librosALeer.svg',
          'recomendacionesAValorar.svg']
  colorDefault = ''
  colorSvg = ['#208544','#203885','#822085','#33d2c8','ff0000']
  path = ['information', 'friends', 'books-readed', 'books-to-read','recommendations-to-value']
  opcionesPerfil = this.opcionTitulos.map((titulo, i) => new Option( titulo,this.svgs[i],  this.colorDefault,this.colorSvg[i],this.path[i]));
}
