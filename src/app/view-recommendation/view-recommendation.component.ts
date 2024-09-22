import { Component } from '@angular/core';
import { ProfileBooksReadedComponent } from "../profile-books-readed/profile-books-readed.component";
import { ProfileBooksToReadComponent } from "../profile-books-to-read/profile-books-to-read.component";
import { HeaderComponent } from "../shared/header/header.component";
import { ResenaComponent } from "../resena/resena.component";
import { BotonAgregarComponent } from "../shared/boton-agregar/boton-agregar.component";
import { ValoracionComponent } from '../valoracion/valoracion.component';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-recommendation',
  standalone: true,
  imports: [NgIf,ProfileBooksReadedComponent, ProfileBooksToReadComponent, HeaderComponent, ResenaComponent, BotonAgregarComponent,ValoracionComponent],
  templateUrl: './view-recommendation.component.html',
  styleUrl: './view-recommendation.component.css'
})
export class ViewRecommendationComponent {
  constructor(private router: Router) {}
  isEditPage() {
    return this.router.url === '/edit-recommendation'; 
  }

}
