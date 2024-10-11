import { Component, Input, OnInit } from '@angular/core';
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';
import { ValoracionIndividualComponent } from "../valoracion-individual/valoracion-individual.component";
import { Valoration } from '../../domain/valoration';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-valoracion',
  standalone: true,
  imports: [BotonAgregarComponent, ValoracionIndividualComponent,NgIf],
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {
  @Input()valoraciones!: Array<Valoration> 
  @Input()score!:number
  @Input()puedeValorar!:boolean
  
  ngOnInit() {
    
  }

}