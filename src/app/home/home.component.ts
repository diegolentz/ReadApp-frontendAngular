import { Component, OnInit } from '@angular/core';
import { RecomendacionComponent } from '../shared/recomendacion/recomendacion.component';
import { ContainerRecommendationsComponent } from "../shared/layouts/recommendations/recommendations.component";
import { RecommendationService } from '../../service/recommendation.service';
import { Recommendation } from '../../domain/recommendation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecomendacionComponent, ContainerRecommendationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  recommendations!: Recommendation[];

  constructor(private recommendationService:RecommendationService){}
  
  ngOnInit(): void {
    this.recommendations = this.recommendationService.mockGetRecommendations()
  }
}
