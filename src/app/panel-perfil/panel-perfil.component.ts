import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-perfil',
  standalone: true,
  imports: [],
  templateUrl: './panel-perfil.component.html',
  styleUrl: './panel-perfil.component.css'
})
export class PanelPerfilComponent {
  panel = new PerfilUsuario()
}

  
class PerfilUsuario{

}
