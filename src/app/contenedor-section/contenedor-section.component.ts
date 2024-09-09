import { Component } from '@angular/core';
import { AmigosComponent } from "../amigos/amigos.component";

@Component({
  selector: 'app-contenedor-section',
  standalone: true,
  imports: [AmigosComponent],
  templateUrl: './contenedor-section.component.html',
  styleUrl: './contenedor-section.component.css'
})
export class ContenedorSectionComponent {

}
