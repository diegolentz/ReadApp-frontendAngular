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
  
  
}
