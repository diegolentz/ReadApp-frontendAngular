import { Component, Input } from '@angular/core';
import { ContenedorSectionComponent } from "../contenedor-section/contenedor-section.component";
import { Option } from '../shared/dropdown-menu/dropdown-menu.component';
import { NgFor } from '@angular/common';
import { OptionComponent } from '../shared/option/option.component';
@Component({
  selector: 'app-panel-perfil',
  standalone: true,
  imports: [NgFor,OptionComponent],
  templateUrl: './panel-perfil.component.html',
  styleUrl: './panel-perfil.component.css'
})
export class PanelPerfilComponent {
  // panel = new PerfilUsuario()
  // @Input() opciones!: Array<Option>
  titulos = [
    
    new Option('information.svg','Informacion', 'white', ''),
    new Option('amigos.svg','Amigos', 'white', ''),
    new Option('librosLeidos.svg','Libros leidos', 'white', ''),
    new Option('librosALeer.svg','libros a leer', 'white', ''),
    new Option('recomendacionesAValorar.svg','Recomendaciones a valorar', 'white', '')

  ]
}

  
class PerfilUsuario{

}
