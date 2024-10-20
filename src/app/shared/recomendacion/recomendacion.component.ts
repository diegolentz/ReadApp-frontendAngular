import { Component, Input } from '@angular/core';
import { Recommendation, RecommendationCard } from '../../../domain/recommendation';
import { Router } from '@angular/router';
import { ButtonHoverPressedDirective } from '../directives/button-hover-pressed.directive';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-recomendacion',
  standalone: true,
  imports: [ButtonHoverPressedDirective,RouterLink, NgIf],
  templateUrl: './recomendacion.component.html',
  styleUrl: './recomendacion.component.css'
})
export class RecomendacionComponent {
  @Input() recomendacion!: RecommendationCard
  constructor(private router: Router){}

  goTo(option: string) {
    this.router.navigate([option])
  }


}
