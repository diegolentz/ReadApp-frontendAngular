import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { ResenaComponent } from '../resena/resena.component';
import { ProfileBooksToReadComponent } from '../profile-books-to-read/profile-books-to-read.component';
import { ValoracionComponent } from '../valoracion/valoracion.component';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-recommendation',
  standalone: true,
  imports: [NgIf,ResenaComponent,HeaderComponent,ProfileBooksToReadComponent,ValoracionComponent],
  templateUrl: './edit-recommendation.component.html',
  styleUrl: './edit-recommendation.component.css'
})
export class EditRecommendationComponent {
  constructor(private router: Router) {}
  isEditPage() {
    return this.router.url === '/edit-recommendation'; 
  }
}
