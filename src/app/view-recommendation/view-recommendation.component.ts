import { Component } from '@angular/core';
import { ProfileBooksReadedComponent } from "../profile-books-readed/profile-books-readed.component";
import { ProfileBooksToReadComponent } from "../profile-books-to-read/profile-books-to-read.component";
import { HeaderComponent } from "../shared/header/header.component";
import { ResenaComponent } from "../resena/resena.component";
import { BotonAgregarComponent } from "../shared/boton-agregar/boton-agregar.component";
import { ValoracionComponent } from '../valoracion/valoracion.component';
import { NgIf ,NgFor} from '@angular/common';
import { Router } from '@angular/router';
import { ContainerBooksComponent } from "../shared/layouts/books/books.component";
import { Recommendation } from '../../domain/recommendation';
import { RECOMMENDATIONS } from '../../mock/mockRecommendations';
import { LibroComponent } from "../libro/libro.component";
import { BtnGuardarCancelarComponent } from "../shared/btn-guardar-cancelar/btn-guardar-cancelar.component";
@Component({
  selector: 'app-view-recommendation',
  standalone: true,
  imports: [NgFor, NgIf, ProfileBooksReadedComponent, ProfileBooksToReadComponent, HeaderComponent, ResenaComponent, BotonAgregarComponent, ValoracionComponent, ContainerBooksComponent, LibroComponent, BtnGuardarCancelarComponent],
  templateUrl: './view-recommendation.component.html',
  styleUrl: './view-recommendation.component.css'
})
export class ViewRecommendationComponent {
  constructor() {}

  recomendacion: Recommendation = RECOMMENDATIONS[0]

  noPuedeEditar(){
    return true
  }

}
