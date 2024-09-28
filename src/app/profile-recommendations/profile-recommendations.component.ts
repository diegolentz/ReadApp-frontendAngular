import { Component, HostBinding } from '@angular/core';
import { RecomendacionComponent } from '../shared/recomendacion/recomendacion.component';
import { Recommendation } from '../../domain/recommendation';
import { RecommendationService } from '../../service/recommendation.service';

@Component({
  selector: 'app-profile-recommendations',
  standalone: true,
  imports: [RecomendacionComponent],
  templateUrl: './profile-recommendations.component.html',
  styleUrl: './profile-recommendations.component.css'
})
export class ProfileRecommendationsComponent {
  @HostBinding('style.width') width: string = '100%';
  recommendations?: Recommendation[];

  constructor(private recommendationService:RecommendationService){}
  
  async ngOnInit() {
    this.recommendations = await this.recommendationService.getRecommendations()
  }
}
