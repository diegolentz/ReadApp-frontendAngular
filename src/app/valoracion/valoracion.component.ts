import { Component } from '@angular/core';
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';
import { ValoracionIndividualComponent } from "../valoracion-individual/valoracion-individual.component";

@Component({
  selector: 'app-valoracion',
  standalone: true,
  imports: [BotonAgregarComponent, ValoracionIndividualComponent],
  templateUrl: './valoracion.component.html',
  styleUrl: './valoracion.component.css'
})
export class ValoracionComponent {

}
