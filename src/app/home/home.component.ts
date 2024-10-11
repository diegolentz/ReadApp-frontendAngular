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
export class HomeComponent implements OnInit {
  recommendations: Recommendation[] = [];
  allRecomendations!: Recommendation[];
  filtro: string = ""

  constructor(private recommendationService: RecommendationService) { }

  async ngOnInit() {
    this.recommendations = await this.recommendationService.getRecommendations();
  }

  // async obtenerRecomendaciones() {
  //   this.recommendations = await this.recommendationService.getRecommendations();
  // }

  async addFilter(newFilter: string) {
    this.filtro = newFilter
    this.recommendations = await this.recommendationService.getRecommendationsFilter(this.filtro)
    // this.recommendations = this.filtro ?
    //   (this.recommendations.filter((recommendation) => recommendation.title.replace(/\s+/g, '').toLowerCase().includes(
    //     this.filtro.replace(/\s+/g, '').toLowerCase()) ||
    //     recommendation.author.replace(/\s+/g, '').toLowerCase().includes(this.filtro.replace(/\s+/g, '').toLowerCase()))) :
    //   (this.recommendations);
  }

}
