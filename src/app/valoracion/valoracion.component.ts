import { Component, Input, OnInit } from '@angular/core';
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';
import { ValoracionIndividualComponent } from "../valoracion-individual/valoracion-individual.component";
import { Recommendation } from '../../domain/recommendation';
import { Valoration } from '../../domain/valoration';


@Component({
  selector: 'app-valoracion',
  standalone: true,
  imports: [BotonAgregarComponent, ValoracionIndividualComponent],
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {
  @Input()valoraciones!: Array<Valoration> 
  
  ngOnInit() {
    
  }

}