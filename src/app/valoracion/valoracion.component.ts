import { Component, Input, OnInit } from '@angular/core';
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';
import { ValoracionIndividualComponent } from "../valoracion-individual/valoracion-individual.component";
import { Valoration } from '../../domain/valoration';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BtnGuardarCancelarComponent } from "../shared/btn-guardar-cancelar/btn-guardar-cancelar.component";
import { RecommendationService } from '../../service/recommendation.service';

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
  @Input() id!: number;
  
  agregarValoracion: boolean = false;
  nuevaValoracion: Valoration = new Valoration("", "", 0, new Date(1914, 14, 14), ""); 
  constructor(private recommendationService: RecommendationService) {}

  ngOnInit() {
    
  }

  puedeAgregarValoracion(): any {
    throw new Error('Method not implemented.');
  }

  async agregarLaValoracion(){
    console.log(this.nuevaValoracion)
    await this.recommendationService.agregarValoracion(this.nuevaValoracion,this.id)
    await this.cancelar()
  }

  agregaValoracion() {
    this.agregarValoracion = true; 
  }
  cancelar() {
    this.agregarValoracion = false; 
  }
}