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
  allRecomendations!: Recommendation[];

  constructor(private recommendationService:RecommendationService){}
  
  async ngOnInit() {
    await this.obtenerRecomendaciones();
    this.subscribirFiltroCambiado();
  }

  async obtenerRecomendaciones() {
    this.allRecomendations = await this.recommendationService.getRecommendations();
    this.recommendations = this.allRecomendations;
  }
  subscribirFiltroCambiado() {
    this.recommendationService.filtroCambiado.subscribe(
      (nuevoFiltro: string) => {
        this.recommendations = nuevoFiltro ? 
        (this.allRecomendations.filter((recommendation) => recommendation.titulo.toLowerCase().includes(nuevoFiltro.toLowerCase()) ||
        recommendation.descripcion.toLowerCase().includes(nuevoFiltro.toLowerCase()))) : 
        (this.allRecomendations);
      }
    );
  }
}
