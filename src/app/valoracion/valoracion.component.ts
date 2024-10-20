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
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-valoracion',
  standalone: true,
  imports: [BotonAgregarComponent, ValoracionIndividualComponent, NgIf, FormsModule, BtnGuardarCancelarComponent, CommonModule],
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {
  @Input() valoraciones!: Array<Valoration>
  @Input() score!: number
  @Input() puedeValorar!: boolean
  @Input() id!: number

  user: UserBasic = new UserBasic()
  agregarValoracion: boolean = false
  rating = 0
  nuevaValoracion: Valoration = new Valoration(this.user.fotoPath, this.user.username, 0, new Date(1914, 14, 14), "") 

  constructor(private recommendationService: RecommendationService, private userService: ServiceUser, private toast: ToastrService) {}

  async ngOnInit() {}

  setRating(valor: number) {
    this.rating = valor
  }
  async agregarLaValoracion() {
    if (this.validacion()) {
      this.toast.warning("Por favor complete los campos vacios");
      return;
    }
  
    this.nuevaValoracion.valor = this.rating;
  
    await this.recommendationService.agregarValoracion(this.nuevaValoracion, this.id);
    await this.cancelar();
    await this.toast.success("Se agregó correctamente la valoración");
  
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  validacion = (): boolean => !this.nuevaValoracion.comentario.trim() || this.rating === 0

  agregaValoracion() {
    this.agregarValoracion = true
    this.puedeValorar = false
  }

  cancelar() {
    this.agregarValoracion = false
    this.nuevaValoracion.comentario = ""
    this.rating = 0
  }
}
