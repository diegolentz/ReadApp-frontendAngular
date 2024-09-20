import { Component } from '@angular/core';
import { ProfileBooksReadedComponent } from "../profile-books-readed/profile-books-readed.component";
import { BooksComponent } from "../shared/layouts/books/books.component";
import { ProfileBooksToReadComponent } from "../profile-books-to-read/profile-books-to-read.component";
import { HeaderComponent } from "../shared/header/header.component";
import { ResenaComponent } from "../resena/resena.component";
import { BotonAgregarComponent } from "../shared/boton-agregar/boton-agregar.component";
import { ValoracionComponent } from '../valoracion/valoracion.component';
@Component({
  selector: 'app-view-recommendation',
  standalone: true,
  imports: [ProfileBooksReadedComponent, BooksComponent, ProfileBooksToReadComponent, HeaderComponent, ResenaComponent, BotonAgregarComponent,ValoracionComponent],
  templateUrl: './view-recommendation.component.html',
  styleUrl: './view-recommendation.component.css'
})
export class ViewRecommendationComponent {
}
