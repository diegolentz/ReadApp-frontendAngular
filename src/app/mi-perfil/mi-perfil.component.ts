import { Component } from '@angular/core';
import { PanelPerfilComponent } from "../panel-perfil/panel-perfil.component";
import { LibroComponent } from "../libro/libro.component";

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [PanelPerfilComponent, LibroComponent],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css'
})
export class MiPerfilComponent {

}
