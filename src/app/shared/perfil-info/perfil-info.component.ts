import { Component } from '@angular/core';
import { InputBoxComponent } from "../input-box/input-box.component";

@Component({
  selector: 'app-perfil-info',
  standalone: true,
  imports: [InputBoxComponent],
  templateUrl: './perfil-info.component.html',
  styleUrl: './perfil-info.component.css'
})
export class PerfilInfoComponent {

}
