import { Component, Input } from '@angular/core';
import { Recommendation } from '../../../domain/recommendation';
import { Router } from '@angular/router';
import { ButtonHoverPressedDirective } from '../directives/button-hover-pressed.directive';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-recomendacion',
  standalone: true,
  imports: [ButtonHoverPressedDirective,RouterLink],
  templateUrl: './recomendacion.component.html',
  styleUrl: './recomendacion.component.css'
})
export class RecomendacionComponent {
  @Input() recomendacion!: Recommendation
  constructor(private router: Router){}

  goTo(option: string) {
    this.router.navigate([option])
  }


}
