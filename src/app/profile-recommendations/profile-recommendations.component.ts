import { Component, HostBinding } from '@angular/core';
import { RecommendationsComponent } from '../shared/layouts/recommendations/recommendations.component';
import { HomeComponent } from '../home/home.component';
import { RecomendacionComponent } from '../shared/recomendacion/recomendacion.component';

@Component({
  selector: 'app-profile-recommendations',
  standalone: true,
  imports: [RecomendacionComponent],
  templateUrl: './profile-recommendations.component.html',
  styleUrl: './profile-recommendations.component.css'
})
export class ProfileRecommendationsComponent {
  @HostBinding('style.width') width: string = '100%';
}
