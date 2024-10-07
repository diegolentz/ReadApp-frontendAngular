import { Component, HostBinding } from '@angular/core';
import { RecomendacionComponent } from '../shared/recomendacion/recomendacion.component';
import { Recommendation } from '../../domain/recommendation';
import { RecommendationService } from '../../service/recommendation.service';
import { BtnGuardarCancelarComponent } from '../shared/btn-guardar-cancelar/btn-guardar-cancelar.component';

@Component({
  selector: 'app-profile-recommendations',
  standalone: true,
  imports: [RecomendacionComponent, BtnGuardarCancelarComponent],
  templateUrl: './profile-recommendations.component.html',
  styleUrl: './profile-recommendations.component.css'
})
export class ProfileRecommendationsComponent {
  @HostBinding('style.width') width: string = '100%';
  recommendations?: Recommendation[];

  constructor(private recommendationService: RecommendationService) { }

  async ngOnInit() {
    this.recommendations = await this.recommendationService.getRecommendations()
  }
}
