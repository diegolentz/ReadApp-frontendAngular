import { Component } from '@angular/core';
import { PanelPerfilComponent } from "../panel-perfil/panel-perfil.component";
import { LibroComponent } from "../libro/libro.component";
import { PerfilInfoComponent } from "../shared/perfil-info/perfil-info.component";
import { ContenedorSectionComponent } from "../contenedor-section/contenedor-section.component";
import { HeaderComponent } from "../shared/header/header.component";
import { Option } from '../shared/dropdown-menu/dropdown-menu.component';


@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [PanelPerfilComponent, LibroComponent, PerfilInfoComponent, ContenedorSectionComponent, HeaderComponent],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css'
})
export class MiPerfilComponent {
  opcionesPerfil = [
    new Option('information.svg','Informacion', '#208544', ''),
    new Option('amigos.svg','Amigos', '#203885', ''),
    new Option('librosLeidos.svg','Libros leidos', '#822085', ''),
    new Option('librosALeer.svg','libros a leer', '#33d2c8', ''),
    new Option('recomendacionesAValorar.svg','Recomendaciones a valorar', 'ff0000', '')
  ]
  
}
