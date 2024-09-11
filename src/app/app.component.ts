import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibroComponent } from "./libro/libro.component";  
import { AmigosComponent } from "./amigos/amigos.component";
import { ContenedorSectionComponent } from "./contenedor-section/contenedor-section.component";
import { ResenaComponent } from './resena/resena.component';
import {ValoracionComponent} from './valoracion/valoracion.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ResenaComponent, AmigosComponent, ContenedorSectionComponent,ValoracionComponent,LibroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'readapp-2024-grupo-9';
}

