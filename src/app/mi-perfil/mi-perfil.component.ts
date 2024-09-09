import { Component } from '@angular/core';
import { PanelPerfilComponent } from "../panel-perfil/panel-perfil.component";

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [PanelPerfilComponent],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css'
})
export class MiPerfilComponent {

}
