import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibroComponent } from "./libro/libro.component";  
import { AmigosComponent } from "./amigos/amigos.component";
import { ContenedorSectionComponent } from "./contenedor-section/contenedor-section.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AmigosComponent, ContenedorSectionComponent,LibroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'readapp-2024-grupo-9';
}

