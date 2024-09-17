import { Component } from '@angular/core';
import { PanelPerfilComponent } from "../panel-perfil/panel-perfil.component";
import { LibroComponent } from "../libro/libro.component";
import { PerfilInfoComponent } from "../shared/perfil-info/perfil-info.component";
import { BtnGuardarCancelarComponent } from "../shared/btn-guardar-cancelar/btn-guardar-cancelar.component";
import { ContenedorSectionComponent } from "../contenedor-section/contenedor-section.component";
import { HeaderComponent } from "../shared/header/header.component";
import { Option } from '../shared/dropdown-menu/dropdown-menu.component';


@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [PanelPerfilComponent, LibroComponent, PerfilInfoComponent, ContenedorSectionComponent, HeaderComponent, BtnGuardarCancelarComponent],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css'
})
export class MiPerfilComponent {

  opcionTitulos = ['Informacion', 'Amigos', 'Libros leidos', 'Libros a leer','Recomendaciones a valorar']
  svgs = ['information.svg',
          'amigos.svg',
          'librosLeidos.svg',
          'librosALeer.svg',
          'recomendacionesAValorar.svg']
  colorDefault = ''
  colorSvg = ['#208544','#203885','#822085','#33d2c8','ff0000']
  route_link = ['informacion','amigos','librosLeidos','librosALeer','recomendaciones']
  opcionesPerfil = this.opcionTitulos.map((titulo, i) => new Option( titulo,this.svgs[i],  this.colorDefault,this.colorSvg[i], this.route_link[i]));
/////////////////////
  opcionSeleccionada: Option = this.opcionesPerfil[0];

  onOpcionSeleccionada(opcion: Option) {
    this.opcionSeleccionada = opcion;
  }
}
