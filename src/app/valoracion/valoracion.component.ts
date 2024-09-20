import { Component } from '@angular/core';
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';

@Component({
  selector: 'app-valoracion',
  standalone: true,
  imports: [BotonAgregarComponent],
  templateUrl: './valoracion.component.html',
  styleUrl: './valoracion.component.css'
})
export class ValoracionComponent {

}
