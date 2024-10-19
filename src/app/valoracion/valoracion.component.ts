import { Component, Input, OnInit } from '@angular/core';
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';
import { ValoracionIndividualComponent } from "../valoracion-individual/valoracion-individual.component";
import { Valoration } from '../../domain/valoration';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BtnGuardarCancelarComponent } from "../shared/btn-guardar-cancelar/btn-guardar-cancelar.component";

@Component({
  selector: 'app-valoracion',
  standalone: true,
  imports: [BotonAgregarComponent, ValoracionIndividualComponent, NgIf, FormsModule, BtnGuardarCancelarComponent],
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {
  @Input() valoraciones!: Array<Valoration>; 
  @Input() score!: number;
  @Input() puedeValorar!: boolean;
  
  agregarValoracion: boolean = false;
  nuevaValoracion: Valoration = new Valoration("", "", 0, new Date(1914, 14, 14), ""); 

  ngOnInit() {
    
  }

  puedeAgregarValoracion(): any {
    throw new Error('Method not implemented.');
  }

  agregaValoracion() {
    this.agregarValoracion = true; 
  }
  cancelar() {
    this.agregarValoracion = false; 
  }
}