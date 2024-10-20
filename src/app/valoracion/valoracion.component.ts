import { Component, Input, OnInit } from '@angular/core';
import { BotonAgregarComponent } from '../shared/boton-agregar/boton-agregar.component';
import { ValoracionIndividualComponent } from "../valoracion-individual/valoracion-individual.component";
import { Valoration } from '../../domain/valoration';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BtnGuardarCancelarComponent } from "../shared/btn-guardar-cancelar/btn-guardar-cancelar.component";
import { RecommendationService } from '../../service/recommendation.service';
import { ServiceUser } from '../../service/service-user.service';
import { UserBasic } from '../../domain/tmpUser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-valoracion',
  standalone: true,
  imports: [BotonAgregarComponent, ValoracionIndividualComponent, NgIf, FormsModule, BtnGuardarCancelarComponent,CommonModule],
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {
  @Input() valoraciones!: Array<Valoration>; 
  @Input() score!: number;
  @Input() puedeValorar!: boolean;
  @Input() id!: number;

  user:UserBasic = new UserBasic();
  agregarValoracion: boolean = false;
  rating = 0
  nuevaValoracion: Valoration = new Valoration(this.user.fotoPath, this.user.username , 0 , new Date(1914, 14, 14), ""); 

  constructor(private recommendationService: RecommendationService,private userService:ServiceUser ) {}

  async ngOnInit() {
    
  }

  setRating(valor:number){
    this.rating = valor
    this.nuevaValoracion.valor = this.rating
  }

  puedeAgregarValoracion(): any {
    throw new Error('Method not implemented.');
  }

  async agregarLaValoracion(){
    console.log(this.nuevaValoracion)
    await this.recommendationService.agregarValoracion(this.nuevaValoracion,this.id)
    await this.cancelar()
    await window.location.reload()
  }

  agregaValoracion() {
    this.agregarValoracion = true; 
  }
  cancelar() {
    this.agregarValoracion = false; 
  }
}