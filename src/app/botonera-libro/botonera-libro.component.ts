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


  mostrar(key: string): boolean {
    
    // hago un map con las rutas / valor y comparo con el parametro que recibo
    const routeMap: { [key: string]: string } = {
      'borrar': '/search-books',
      'aleer': '/my-profile/books-to-read',
      'leido': '/my-profile/books-readed'
    };

    return this.router.url === routeMap[key];
  }
}
