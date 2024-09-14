import { Component } from '@angular/core';
import { PanelPerfilComponent } from "../panel-perfil/panel-perfil.component";
import { LibroComponent } from "../libro/libro.component";
import { PerfilInfoComponent } from "../shared/perfil-info/perfil-info.component";
import { BtnGuardarCancelarComponent } from "../shared/btn-guardar-cancelar/btn-guardar-cancelar.component";

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [PanelPerfilComponent, LibroComponent, PerfilInfoComponent, BtnGuardarCancelarComponent],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css'
})
export class MiPerfilComponent {

}
