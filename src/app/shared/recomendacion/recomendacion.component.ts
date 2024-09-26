import { Component, Input } from '@angular/core';
import { Recommendation } from '../../../domain/recommendation';
import { Router } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonHoverPressedDirective } from '../directives/button-hover-pressed.directive';
@Component({
  selector: 'app-recomendacion',
  standalone: true,
  imports: [SvgIconComponent, ButtonHoverPressedDirective],
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
