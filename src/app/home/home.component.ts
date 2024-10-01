import { Component, OnInit } from '@angular/core';
import { RecomendacionComponent } from '../shared/recomendacion/recomendacion.component';

import { RecommendationService } from '../../service/recommendation.service';
import { Recommendation } from '../../domain/recommendation';
import { NavComponent } from '../nav/nav.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecomendacionComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  recommendations!: Recommendation[];

  constructor(private recommendationService:RecommendationService){}
  
  async ngOnInit() {
    this.recommendations = await this.recommendationService.getRecommendations()
    this.subscribirFiltroCambiado();
  }

  subscribirFiltroCambiado() {
    this.recommendationService.filtroCambiado.subscribe(
      (nuevoFiltro: string) => {
        this.recommendations = nuevoFiltro ? 
        (this.recommendations.filter((recommendation) => recommendation.titulo.toLowerCase().includes(nuevoFiltro.toLowerCase()) ||
        recommendation.descripcion.toLowerCase().includes(nuevoFiltro.toLowerCase()))) : 
        (this.recommendations);
      }
    );
  }
}
