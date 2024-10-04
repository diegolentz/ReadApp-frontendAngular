import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-botonera-libro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botonera-libro.component.html',
  styleUrl: './botonera-libro.component.css'
})
export class BotoneraLibroComponent {
  constructor(private router: Router) {
  }


  ocultarBorrar(): boolean {

    // hago un map con las rutas / valor y comparo con el parametro que recibo
    const excludedRoutes = ['/search-books', '/add-Books;origen=agregarLeidos', '/add-Books;origen=agregarALeer'];
    return !excludedRoutes.includes(this.router.url);
  }

  ocultarAgregar(): boolean {
    // hago un map con las rutas / valor y comparo con el parametro que recibo
    const excludedRoutes = ['/add-Books', '/add-Books'];
    return excludedRoutes.includes(this.router.url);
  }
}
