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
@Component({
  selector: 'app-view-recommendation',
  standalone: true,
  imports: [NgFor, NgIf, ProfileBooksReadedComponent, ProfileBooksToReadComponent, HeaderComponent, ResenaComponent, BotonAgregarComponent, ValoracionComponent, ContainerBooksComponent, LibroComponent],
  templateUrl: './view-recommendation.component.html',
  styleUrl: './view-recommendation.component.css'
})
export class ViewRecommendationComponent {
  constructor(private router: Router) {}

  recomendacion: Recommendation = RECOMMENDATIONS[0]

  // isEditPage() {
  //   return this.router.url === '/edit-recommendation'; 
  // }

}
