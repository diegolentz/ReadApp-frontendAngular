import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-agregar',
  standalone: true,
  imports: [],
  templateUrl: './boton-agregar.component.html',
  styleUrl: './boton-agregar.component.css'
})
export class BotonAgregarComponent {
  @Input() tipoContenido: string = ''; // recibo el tipo de contenido a renderizar

  constructor(private route: Router) { }

  agregarLibros() {
    // redirijo y renderiza lo que mando por params
    this.route.navigate(['/add-Books', { origen: this.tipoContenido }]);
  }
}
