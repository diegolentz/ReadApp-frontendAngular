import { Component, Input } from '@angular/core';
import { Recommendation } from '../../../domain/recommendation';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recomendacion',
  standalone: true,
  imports: [NgFor],
  templateUrl: './recomendacion.component.html',
  styleUrl: './recomendacion.component.css'
})
export class RecomendacionComponent {
  @Input() recomendacion!: Recommendation
  constructor(private router: Router) { }

  goTo(option: string) {
    this.router.navigate([option])
  }
}
