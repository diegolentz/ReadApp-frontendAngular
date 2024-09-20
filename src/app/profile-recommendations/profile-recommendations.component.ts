import { Component, HostBinding } from '@angular/core';
import { ContainerRecommendationsComponent } from '../shared/layouts/recommendations/recommendations.component';
import { Libro, Recomendacion } from '../home/home.component';
import { RecomendacionComponent } from '../shared/recomendacion/recomendacion.component';

@Component({
  selector: 'app-profile-recommendations',
  standalone: true,
  imports: [RecomendacionComponent, ContainerRecommendationsComponent],
  templateUrl: './profile-recommendations.component.html',
  styleUrl: './profile-recommendations.component.css'
})
export class ProfileRecommendationsComponent {
  @HostBinding('style.width') width: string = '100%';
  libros = [
    new Libro("LoveCraft"),
    new Libro("Howard Phillipe"),
    new Libro("Sheldon Cooper"),
    new Libro("Howard Wollowitz")
  ]
  recomendaciones = [
    new Recomendacion("A", true, "aaa",[this.libros[0], this.libros[1]], 5, 10),
    new Recomendacion("B", false, "aaa",[this.libros[1]], 1.5, 3),
    new Recomendacion("C", true, "aaa",[this.libros[2]], 2.5, 4),
    new Recomendacion("D", false, "aaa",[this.libros[3]], 6.5, 20),
    new Recomendacion("R", true, "aaa",[this.libros[0]], 1.5, 100),
    new Recomendacion("F", false, "aaa",[this.libros[1]], 2.5, 40),
  ]
}
