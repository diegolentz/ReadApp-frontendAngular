import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { NavComponent } from '../nav/nav.component';
import { ContenedorSectionComponent } from '../contenedor-section/contenedor-section.component';
import { LibroComponent } from '../libro/libro.component';

@Component({
  selector: 'app-busqueda-libros',
  standalone: true,
  imports: [HeaderComponent,LibroComponent,NavComponent,ContenedorSectionComponent],
  templateUrl: './busqueda-libros.component.html',
  styleUrl: './busqueda-libros.component.css'
})
export class BusquedaLibrosComponent {

}
